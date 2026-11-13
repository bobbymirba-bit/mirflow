import { NextResponse } from "next/server";

import {
  findPackage,
  isApprovedForPurchase,
  isLiveKeyConfigured,
  stripeSecret,
  verifyPackagePrices,
} from "@/lib/checkout-config";
import { siteConfig } from "@/lib/site-config";

/**
 * Creates a Stripe Checkout Session for one of the packages on /pricing.
 *
 * The browser sends a package id and nothing else. Amounts, Price IDs, and
 * currency all come from the server: the id must be in the APPROVED_PACKAGES
 * code constant, the configured Stripe Prices are re-checked against the
 * published figures, and only then is a session created. A client cannot
 * influence what is charged, and no environment variable can make an
 * unapproved package purchasable.
 *
 * APPROVED_PACKAGES is empty today, so every request here is refused with 503.
 *
 * Billing shape (once a package is approved): the one-time setup Price and the
 * recurring monthly Price go on the same subscription session, so the setup fee
 * and the first month are both charged on the first invoice, at checkout. The
 * monthly price then renews on its own each month until cancelled.
 */

const UNAVAILABLE = "Online payment isn't switched on. Book a call and we'll confirm the scope and invoice you directly.";

/**
 * Hosts Stripe may be told to return to. The forwarded Host header is attacker
 * controlled in principle, so it is only honoured when it matches the
 * canonical site or a host Vercel itself injected into the environment;
 * anything else falls back to the canonical site URL. That keeps a spoofed
 * Host from putting `session_id` on a third-party origin.
 */
function allowedOrigins(): string[] {
  const vercelHosts = [
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_URL,
  ].filter((host): host is string => Boolean(host));

  return [siteConfig.url.replace(/\/$/, ""), ...vercelHosts.map((host) => `https://${host}`)];
}

function originFor(request: Request): string {
  const allowed = allowedOrigins();
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (host) {
    const proto = request.headers.get("x-forwarded-proto") ?? "https";
    const candidate = `${proto}://${host}`;
    if (allowed.includes(candidate)) return candidate;
  }
  return allowed[0];
}

/**
 * Best-effort abuse throttle: 5 attempts per IP per 10 minutes. Each attempt
 * can create a Stripe session and performs two Price fetches, so the endpoint
 * should not be free to hammer.
 *
 * This counter is in-memory, so it is per server instance and resets on a cold
 * start. It blunts a single hot loop, not a distributed flood — a real limit
 * needs shared storage (see the webhook route's note on durable state) or the
 * Vercel firewall's rate limiting.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function rateLimited(request: Request): boolean {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((at) => now - at < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);

  if (attempts.size > 5_000) {
    for (const [key, times] of attempts) {
      if (times.every((at) => now - at >= WINDOW_MS)) attempts.delete(key);
    }
  }

  return recent.length > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  if (rateLimited(request)) {
    return NextResponse.json(
      { error: "Too many attempts. Give it a few minutes, or book a call and we'll sort it out." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const packageId = (payload as { packageId?: unknown } | null)?.packageId;
  const servicePackage = findPackage(packageId);
  if (!servicePackage) {
    return NextResponse.json({ error: "Unknown package." }, { status: 404 });
  }

  // Gate 1: the code allowlist. Checked here as well as in verifyPackagePrices
  // so an unapproved package is refused before any Stripe request is made.
  if (!isApprovedForPurchase(servicePackage)) {
    console.error("[checkout] refused: package is not approved for purchase", { packageId: servicePackage.id });
    return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
  }

  // A live key outside production almost always means a preview deployment was
  // pointed at live Stripe keys by mistake. Refuse rather than take real money
  // from a preview URL. Previews must use sk_test_ keys.
  if (isLiveKeyConfigured() && process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    console.error("[checkout] refused: live Stripe key on a non-production deployment", {
      vercelEnv: process.env.VERCEL_ENV,
    });
    return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
  }

  const secret = stripeSecret();
  if (!secret) {
    return NextResponse.json({ error: UNAVAILABLE }, { status: 503 });
  }

  const verified = await verifyPackagePrices(servicePackage);
  if (!verified.ok) {
    // The reason names Stripe Price configuration, so it stays in the logs.
    console.error("[checkout] refused", { packageId: servicePackage.id, reason: verified.reason });
    return NextResponse.json(
      { error: "This package isn't available for online payment yet. Book a call and we'll sort it out." },
      { status: 503 }
    );
  }

  const origin = originFor(request);
  const body = new URLSearchParams({
    mode: "subscription",
    "line_items[0][price]": verified.priceIds.monthly,
    "line_items[0][quantity]": "1",
    "line_items[1][price]": verified.priceIds.setup,
    "line_items[1][quantity]": "1",
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing?checkout=cancelled#packages`,
    billing_address_collection: "auto",
    // Promotion codes let the charged amount differ from the published price.
    // Left on because a discount off the list price is applied as a Stripe
    // coupon rather than as a second published figure — confirm with Bobby
    // before the first approved package goes live.
    allow_promotion_codes: "true",
    "metadata[package]": servicePackage.id,
    "subscription_data[metadata][package]": servicePackage.id,
  });

  let result: { url?: string; error?: { message?: string } };
  try {
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      signal: AbortSignal.timeout(15_000),
    });
    result = await response.json();
    if (!response.ok || !result.url) {
      console.error("[checkout] stripe error", result?.error?.message);
      return NextResponse.json({ error: "We couldn't start checkout. Please try again." }, { status: 502 });
    }
  } catch (error) {
    console.error("[checkout] stripe request failed", error);
    return NextResponse.json({ error: "We couldn't reach our payment provider. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ url: result.url });
}
