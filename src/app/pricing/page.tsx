import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";

import { BookingSection } from "@/components/booking-section";
import { CheckoutButton } from "@/components/checkout-button";
import { exclusions, formatUsd, servicePackages } from "@/data/pricing";
import { isTestMode, purchasablePackageIds } from "@/lib/checkout-config";

const title = "Pricing";
const description =
  "Mirflow packages for websites, social media, LinkedIn outreach, paid ads, email and SMS, SEO, AI workflows, and AI voice reception. One setup fee, one monthly retainer, and what each package excludes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
  twitter: { title, description },
};

/**
 * Draft amounts are deliberately kept out of structured data: Offer schema on
 * an unapproved price could surface it in search results before Bobby has
 * signed off on it. Add Offer markup once the amounts are approved.
 */
export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const { checkout } = await searchParams;
  const purchasable = purchasablePackageIds();
  const testMode = isTestMode();
  const hasDrafts = servicePackages.some((pkg) => pkg.status === "draft");

  return (
    <>
      <section className="border-b border-border blue-hero">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            One setup fee. One monthly retainer. Scope agreed up front.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every package works the same way: a one-time setup fee for the build, then a flat monthly retainer for the
            ongoing management. We confirm the channels, the deliverables, and the price in writing before any work or
            payment starts.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/pricing#book"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Book a call <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className="text-sm font-semibold text-primary underline underline-offset-4">
              See what each service covers
            </Link>
          </div>
        </div>
      </section>

      {checkout === "cancelled" ? (
        <div role="status" className="border-b border-border bg-secondary/60">
          <p className="container-page py-4 text-sm">
            <strong className="font-semibold">Checkout cancelled.</strong> Nothing was charged. Pick a package again
            below, or <Link href="/pricing#book" className="text-primary underline underline-offset-4">book a call</Link>{" "}
            if you&rsquo;d rather talk it through first.
          </p>
        </div>
      ) : null}

      {testMode ? (
        <div role="status" className="border-b border-border bg-warning/15">
          <p className="container-page py-4 text-sm">
            <strong className="font-semibold">Stripe test mode.</strong> Checkout on this deployment uses test keys. No
            real card is charged.
          </p>
        </div>
      ) : null}

      {hasDrafts ? (
        <div className="border-b border-border bg-secondary/40">
          <div className="container-page flex gap-3 py-5">
            <Info size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Some amounts below are a draft for review.</strong>{" "}
              Packages marked <em>Draft</em> are a proposal and are not confirmed pricing. They cannot be purchased
              online — their buttons book a call instead — until the amounts are approved and the matching Stripe
              prices are configured.
            </p>
          </div>
        </div>
      ) : null}

      <section id="packages" aria-labelledby="packages-heading" className="scroll-mt-28 border-b border-border md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 id="packages-heading" className="max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Packages
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Start with the package closest to what you need. We adjust the scope before you commit, and you can move up
            or down later.
          </p>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {servicePackages.map((pkg) => {
              const canBuy = purchasable.has(pkg.id);
              return (
                <article
                  key={pkg.id}
                  className={`flex flex-col rounded-2xl border bg-card p-5 shadow-sm shadow-blue-950/5 sm:p-7 ${
                    pkg.featured ? "border-primary" : "border-border"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{pkg.name}</h3>
                    {pkg.status === "draft" ? (
                      <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                        Draft — pending approval
                      </span>
                    ) : (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        Confirmed price
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>

                  <dl className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Setup</dt>
                      <dd className="mt-1 font-display text-3xl font-semibold">{formatUsd(pkg.setupCents)}</dd>
                      <dd className="mt-1 text-xs text-muted-foreground">One time, charged at checkout</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Monthly</dt>
                      <dd className="mt-1 font-display text-3xl font-semibold">
                        {formatUsd(pkg.monthlyCents)}
                        <span className="text-base font-normal text-muted-foreground">/mo</span>
                      </dd>
                      <dd className="mt-1 text-xs text-muted-foreground">Starts at checkout, renews monthly</dd>
                    </div>
                  </dl>

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">What&rsquo;s included</h4>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                        <span className="leading-relaxed text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.note ? <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{pkg.note}</p> : null}

                  <div className="mt-auto">
                    {canBuy ? (
                      <CheckoutButton packageId={pkg.id} label={`Start ${pkg.name}`} />
                    ) : (
                      <div className="mt-6">
                        <Link
                          href="/pricing#book"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
                        >
                          Book a call <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                        <p className="mt-3 text-xs text-muted-foreground">
                          {pkg.status === "draft"
                            ? "This amount is a draft, so it can't be paid online yet."
                            : "Online payment isn't switched on for this package yet. We'll invoice you directly."}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="billing-heading" className="border-b border-border bg-card">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">How billing works</p>
          <h2 id="billing-heading" className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What you pay, and when
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["At checkout", "The one-time setup fee and your first month are charged together on the first invoice."],
              ["Every month after", "Only the monthly retainer renews, on the same day each month, until you cancel."],
              ["Cancelling", "Tell us and we cancel the subscription in Stripe. The setup fee is not refundable except where a package says otherwise."],
            ].map(([heading, detail]) => (
              <div key={heading} className="rounded-2xl border border-border bg-background p-5 shadow-sm shadow-blue-950/5 sm:p-6">
                <h3 className="font-semibold">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="exclusions-heading" className="border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Not included</p>
          <h2 id="exclusions-heading" className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What the fees don&rsquo;t cover
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            These are real costs on most engagements. They&rsquo;re billed by the vendor rather than marked up by us, and
            we agree on the budget before anything starts.
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {exclusions.map(([name, detail]) => (
              <div key={name} className="border-t border-border pt-5">
                <dt className="font-semibold">{name}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
