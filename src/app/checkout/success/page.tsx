import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { BookACall } from "@/components/book-a-call";
import { formatUsd, servicePackages } from "@/data/pricing";
import { stripeSecret } from "@/lib/checkout-config";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Payment received",
  description: "Your Mirflow payment confirmation.",
  robots: { index: false, follow: false },
  // Its own canonical, so this page does not inherit the site root's.
  alternates: { canonical: "/checkout/success" },
};

type SessionView =
  | { state: "paid"; email: string | null; total: number | null; packageName: string | null }
  | { state: "pending" }
  | { state: "unknown" };

/**
 * Reads the session back from Stripe rather than trusting the redirect. Landing
 * on this URL proves nothing — the session id is in the query string and the
 * payment can still be pending — so we only say "confirmed" when Stripe says so.
 */
async function loadSession(sessionId: string | undefined): Promise<SessionView> {
  const secret = stripeSecret();
  if (!sessionId || !secret) return { state: "unknown" };

  try {
    const response = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      { headers: { Authorization: `Bearer ${secret}` }, cache: "no-store", signal: AbortSignal.timeout(10_000) }
    );
    if (!response.ok) return { state: "unknown" };
    const session = await response.json();
    if (session.payment_status !== "paid") return { state: "pending" };
    const packageId = session.metadata?.package;
    return {
      state: "paid",
      email: session.customer_details?.email ?? null,
      total: typeof session.amount_total === "number" ? session.amount_total : null,
      packageName: servicePackages.find((pkg) => pkg.id === packageId)?.name ?? null,
    };
  } catch {
    return { state: "unknown" };
  }
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const session = await loadSession(sessionId);

  // Landing on this URL proves nothing on its own, so each state gets its own
  // honest wording. Only Stripe confirming `paid` earns a success message —
  // and "paid" means money received, not onboarding done, so it does not say
  // the customer is booked in. Nothing books itself; see the webhook route.
  const heading =
    session.state === "paid"
      ? "Payment received"
      : session.state === "pending"
        ? "Your payment is still processing"
        : "We couldn't confirm this order";

  return (
    <section className="container-page py-16 sm:py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-sm shadow-blue-950/5 sm:p-9">
        {session.state === "paid" ? (
          <CheckCircle2 size={40} className="text-success" aria-hidden="true" />
        ) : (
          <AlertTriangle size={40} className="text-warning" aria-hidden="true" />
        )}

        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h1>

        {session.state === "paid" ? (
          <>
            <p className="mt-4 text-muted-foreground">
              {session.packageName
                ? `Your ${session.packageName} subscription is active.`
                : "Your subscription is active."}{" "}
              Stripe has emailed your receipt{session.email ? ` to ${session.email}` : ""}. Nothing is scheduled yet —
              Bobby will reach out, and you can book the kickoff call yourself below.
            </p>
            {session.total !== null ? (
              <p className="mt-2 text-sm text-muted-foreground">
                Charged today: {formatUsd(session.total)} — the one-time setup fee plus your first month. The monthly
                retainer renews each month from here.
              </p>
            ) : null}
          </>
        ) : session.state === "pending" ? (
          <p className="mt-4 text-muted-foreground">
            Stripe hasn&rsquo;t confirmed this payment yet. Some payment methods take a few minutes. You&rsquo;ll get a
            receipt by email once it clears, and nothing else is needed from you right now.
          </p>
        ) : (
          <p className="mt-4 text-muted-foreground">
            We couldn&rsquo;t look this order up — the link may be incomplete, or you may have opened this page
            directly. If you just paid, your Stripe receipt is the confirmation that matters. Get in touch below and
            we&rsquo;ll check it for you.
          </p>
        )}

        {session.state === "unknown" ? null : (
          <>
            <h2 className="mt-8 font-semibold">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>Book your kickoff call, or wait for Bobby to email you within one business day.</li>
              <li>We confirm the scope in writing.</li>
              <li>We collect access to the accounts and channels in your package.</li>
              <li>Setup work starts once the scope is agreed.</li>
            </ol>
            <BookACall
              label="Book your kickoff call"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            />
          </>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          Anything urgent, or nothing arrives?{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary underline underline-offset-4">
            {siteConfig.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-primary underline underline-offset-4">
            {siteConfig.phone}
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Back to the homepage
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-primary underline underline-offset-4">
            Review what&rsquo;s included
          </Link>
        </div>
      </div>
    </section>
  );
}
