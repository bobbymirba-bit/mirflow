import { createHmac, timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

import { formatUsd, servicePackages } from "@/data/pricing";

/**
 * Stripe webhook endpoint.
 *
 * Verification is done by hand (HMAC-SHA256 over `${timestamp}.${payload}`) so
 * the route stays dependency-free, matching the checkout route.
 *
 * NOT READY FOR LIVE PAYMENTS. Two gaps are real, and neither is fixed here
 * because fixing them properly needs infrastructure decisions, not code:
 *
 * 1. IDEMPOTENCY IS NOT DURABLE. Deduplication is an in-memory Map, which on
 *    Vercel Functions means per-instance and lost on every cold start. Stripe
 *    retries that land on a cold or different instance WILL be processed again.
 *    In-memory dedup is therefore insufficient for anything that must not
 *    happen twice. What is needed before fulfillment does real work: a shared
 *    store with an atomic "insert if absent" on the Stripe event id and a TTL
 *    of a few days. Any of these would do, none of them a paid add-on beyond
 *    what the project already has:
 *      - a Postgres/SQLite table with `event_id` as the primary key, inserted
 *        before handling (a unique-violation means "already handled"), via a
 *        free-tier Marketplace database such as Neon or Supabase;
 *      - Vercel Edge Config / a Redis-compatible store from the Marketplace
 *        with SET NX;
 *      - Stripe itself as the store: re-read the object and skip when the work
 *        already shows as done (e.g. a metadata flag set during fulfillment).
 *    Until one exists, treat this endpoint as notification-only.
 *
 * 2. FULFILLMENT IS A NOTIFICATION, NOT ONBOARDING. A paid event emails the
 *    team so a human can start. Explicitly MISSING, and all still manual:
 *      - onboarding/welcome email to the customer (Stripe's receipt is all
 *        they get today);
 *      - a reliable notification to Bobby (today: one Resend email, and only
 *        when RESEND_API_KEY + CONTACT_TO_EMAIL are set);
 *      - a CRM record of the customer, package, and subscription;
 *      - a kickoff booking link sent to the customer;
 *      - account/channel provisioning and access collection;
 *      - any written-scope step beyond a manual note in the team email.
 *    A logged event is not a completed onboarding.
 */

const TOLERANCE_SECONDS = 300;

/** Best-effort, per-instance replay guard. See gap 1 above. */
const MAX_SEEN = 500;
const seenEvents = new Map<string, number>();

function alreadyHandled(eventId: string): boolean {
  const now = Date.now();
  for (const [id, at] of seenEvents) {
    if (now - at > TOLERANCE_SECONDS * 1000 * 4) seenEvents.delete(id);
  }
  if (seenEvents.has(eventId)) return true;
  seenEvents.set(eventId, now);
  while (seenEvents.size > MAX_SEEN) {
    const oldest = seenEvents.keys().next().value;
    if (oldest === undefined) break;
    seenEvents.delete(oldest);
  }
  return false;
}

/**
 * Verifies Stripe's `stripe-signature` header against the raw request body.
 * The header can carry several `v1=` signatures at once — Stripe sends one per
 * active secret during a secret rotation — so every one is checked.
 */
function isValidSignature(payload: string, header: string, secret: string): boolean {
  let timestamp: string | null = null;
  const signatures: string[] = [];

  for (const part of header.split(",")) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (key === "t") timestamp = value;
    else if (key === "v1") signatures.push(value);
  }

  if (!timestamp || signatures.length === 0) return false;

  // Reject both stale events and timestamps from the future.
  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (!Number.isFinite(age) || Math.abs(age) > TOLERANCE_SECONDS) return false;

  const expected = Buffer.from(
    createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex")
  );

  return signatures.some((signature) => {
    const candidate = Buffer.from(signature);
    return candidate.length === expected.length && timingSafeEqual(candidate, expected);
  });
}

type CheckoutSession = {
  id?: string;
  amount_total?: number | null;
  payment_status?: string;
  customer_details?: { email?: string; name?: string } | null;
  metadata?: { package?: string } | null;
  subscription?: string | null;
};

/** True when email notification is configured and therefore expected to work. */
function notificationsConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}

type Delivery = "sent" | "log-only" | `resend-${string}`;

/** Emails the team so a human can start onboarding. No-ops when unconfigured. */
async function notify(subject: string, lines: string[]): Promise<Delivery> {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) return "log-only";
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL ?? "Mirflow <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL],
        subject,
        text: lines.join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? "sent" : `resend-${response.status}`;
  } catch {
    return "resend-error";
  }
}

/**
 * Throws when notification was expected to work and didn't. Throwing means the
 * route answers 500, so Stripe retries instead of the order being silently
 * lost — the whole fulfillment path today is that one email.
 *
 * When notification is not configured at all, the event is logged and accepted:
 * that is the deliberate log-only mode, and retrying would not help.
 */
function requireDelivery(delivery: Delivery, context: string): void {
  if (notificationsConfigured() && delivery !== "sent") {
    throw new Error(`${context}: notification failed (${delivery})`);
  }
}

async function handleCheckoutCompleted(session: CheckoutSession) {
  // `checkout.session.completed` can fire while payment is still pending for
  // delayed payment methods, so treat only a paid session as money received.
  if (session.payment_status !== "paid") {
    console.log("[stripe-webhook] checkout completed, payment pending", { sessionId: session.id });
    return;
  }

  const packageId = session.metadata?.package;
  const name = servicePackages.find((pkg) => pkg.id === packageId)?.name ?? packageId ?? "unknown package";
  const delivery = await notify(`New Mirflow order: ${name}`, [
    `Package: ${name}`,
    `Customer: ${session.customer_details?.name ?? "-"} <${session.customer_details?.email ?? "-"}>`,
    `Charged today: ${typeof session.amount_total === "number" ? formatUsd(session.amount_total) : "-"}`,
    `Checkout session: ${session.id ?? "-"}`,
    `Subscription: ${session.subscription ?? "-"}`,
    "",
    "Onboarding is manual. Nothing else has happened automatically:",
    "- confirm the scope in writing",
    "- send the customer a kickoff booking link",
    "- collect account access",
    "- record the customer and subscription wherever you track them",
  ]);

  console.log("[stripe-webhook] order paid", {
    sessionId: session.id,
    package: packageId,
    email: session.customer_details?.email,
    delivery,
  });

  requireDelivery(delivery, `order ${session.id ?? "-"}`);
}

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const header = request.headers.get("stripe-signature");

  if (!secret || !header) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 503 });
  }

  // Must read the raw body — parsing first would break signature verification.
  const payload = await request.text();

  if (!isValidSignature(payload, header, secret)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  let event: { id?: string; type?: string; data?: { object?: unknown } };
  try {
    event = JSON.parse(payload);
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // Ack duplicates with 200 so Stripe stops retrying an event we already took.
  // Only as good as the in-memory map — see gap 1 at the top of this file.
  if (event.id && alreadyHandled(event.id)) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
        await handleCheckoutCompleted((event.data?.object ?? {}) as CheckoutSession);
        break;
      case "checkout.session.async_payment_failed":
      case "invoice.payment_failed": {
        const object = (event.data?.object ?? {}) as { id?: string; customer?: string };
        const delivery = await notify("Mirflow payment failed", [
          `Event: ${event.type}`,
          `Object: ${object.id ?? "-"}`,
          `Customer: ${object.customer ?? "-"}`,
        ]);
        console.log("[stripe-webhook] payment failed", { type: event.type, id: object.id, delivery });
        requireDelivery(delivery, `payment failure ${object.id ?? "-"}`);
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const object = (event.data?.object ?? {}) as { id?: string; status?: string };
        console.log("[stripe-webhook] subscription changed", {
          type: event.type,
          subscriptionId: object.id,
          status: object.status,
        });
        break;
      }
      default:
        console.log("[stripe-webhook] unhandled event", event.type);
    }
  } catch (error) {
    // Forget the event so Stripe's retry gets a real second attempt, and answer
    // non-2xx so Stripe actually retries rather than considering it delivered.
    if (event.id) seenEvents.delete(event.id);
    console.error("[stripe-webhook] handler failed", { type: event.type, error });
    return NextResponse.json({ error: "Handler failed." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
