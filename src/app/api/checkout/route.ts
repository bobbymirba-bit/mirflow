import { NextResponse } from "next/server";

import { findPackage, stripeSecret, verifyPackagePrices } from "@/lib/checkout-config";

/**
 * Creates a Stripe Checkout Session for one of the packages on /pricing.
 *
 * The browser sends a package id and nothing else. Amounts, Price IDs, and
 * currency all come from the server: the id is looked up in the allowlist, the
 * configured Stripe Prices are re-checked against the published figures, and
 * only then is a session created. A client cannot influence what is charged.
 *
 * Billing shape: the one-time setup Price and the recurring monthly Price go on
 * the same subscription session, so the setup fee and the first month are both
 * charged on the first invoice, at checkout. The monthly price then renews on
 * its own each month until the subscription is cancelled.
 */

/** Public origin for Stripe's return URLs, taken from the proxy headers. */
function originFor(request: Request): string {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (host) {
    const proto = request.headers.get("x-forwarded-proto") ?? "https";
    return `${proto}://${host}`;
  }
  return new URL(request.url).origin;
}

export async function POST(request: Request) {
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

  const secret = stripeSecret();
  if (!secret) {
    return NextResponse.json(
      { error: "Online payment isn't switched on yet. Book a call and we'll invoice you directly." },
      { status: 503 }
    );
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
