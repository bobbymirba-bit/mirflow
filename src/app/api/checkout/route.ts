import { NextResponse } from "next/server";

const priceByPlan: Record<string, { monthly?: string; setup?: string }> = {
  founding: {
    monthly: process.env.STRIPE_FOUNDING_MONTHLY_PRICE_ID,
    setup: process.env.STRIPE_FOUNDING_SETUP_PRICE_ID,
  },
  growth: {
    monthly: process.env.STRIPE_GROWTH_MONTHLY_PRICE_ID,
    setup: process.env.STRIPE_GROWTH_SETUP_PRICE_ID,
  },
};

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const { plan } = await request.json();
  const prices = priceByPlan[String(plan)];
  if (!secret || !prices?.monthly || !prices.setup) {
    return NextResponse.json(
      { error: "Online checkout is being activated. Please request a quote in the meantime." },
      { status: 503 }
    );
  }

  const origin = new URL(request.url).origin;
  const body = new URLSearchParams({
    mode: "subscription",
    "line_items[0][price]": prices.monthly,
    "line_items[0][quantity]": "1",
    "line_items[1][price]": prices.setup,
    "line_items[1][quantity]": "1",
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing`,
    "subscription_data[metadata][plan]": String(plan),
    "metadata[plan]": String(plan),
    allow_promotion_codes: "true",
  });
  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const result = await stripeResponse.json();
  if (!stripeResponse.ok) {
    console.error("Stripe checkout error", result?.error?.message);
    return NextResponse.json({ error: "Unable to start checkout. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ url: result.url });
}
