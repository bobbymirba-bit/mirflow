import { createHmac, timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

// Reject events whose timestamp is older than this, to blunt replay attacks.
const TOLERANCE_SECONDS = 300;

/**
 * Verifies Stripe's `stripe-signature` header against the raw request body.
 * Done manually so this route stays dependency-free, matching the checkout route.
 */
function isValidSignature(payload: string, header: string, secret: string) {
  const parts = new Map(
    header.split(",").map((part) => {
      const [key, value] = part.split("=");
      return [key, value] as const;
    })
  );

  const timestamp = parts.get("t");
  const signature = parts.get("v1");
  if (!timestamp || !signature) return false;

  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`)
    .digest("hex");

  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);
  if (expectedBuffer.length !== signatureBuffer.length) return false;

  return timingSafeEqual(expectedBuffer, signatureBuffer);
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

  const event = JSON.parse(payload);

  // Wire up fulfillment here (provision the account, notify the team, sync the
  // CRM). For now events are logged so they're visible in deployment logs.
  switch (event.type) {
    case "checkout.session.completed":
      console.log("Checkout completed", {
        sessionId: event.data.object.id,
        plan: event.data.object.metadata?.plan,
        email: event.data.object.customer_details?.email,
      });
      break;
    case "invoice.payment_failed":
      console.log("Payment failed", { customer: event.data.object.customer });
      break;
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      console.log("Subscription changed", {
        type: event.type,
        subscriptionId: event.data.object.id,
        status: event.data.object.status,
      });
      break;
    default:
      console.log("Unhandled Stripe event", event.type);
  }

  return NextResponse.json({ received: true });
}
