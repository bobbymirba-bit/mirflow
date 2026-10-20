import { NextResponse } from "next/server";

/**
 * Stripe checkout is retired for the help-page demo offer and the checkout UI
 * was removed. This route is inert: it returns 404 unless CHECKOUT_ENABLED is
 * "true", and even then it creates no payment session.
 */
export async function POST() {
  if (process.env.CHECKOUT_ENABLED !== "true") {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  return NextResponse.json(
    { error: "Online checkout is not available. Please email bobby@mirflow.online." },
    { status: 503 }
  );
}
