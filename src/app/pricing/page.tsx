import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";

import { BookACall } from "@/components/book-a-call";
import { BookingSection } from "@/components/booking-section";
import { CheckoutButton } from "@/components/checkout-button";
import { exclusions, formatUsd, servicePackages } from "@/data/pricing";
import { isTestMode, purchasablePackageIds } from "@/lib/checkout-config";

const title = "Pricing";
const description =
  "Mirflow's all-in-one package for websites, social media, LinkedIn outreach, paid ads, email and SMS, SEO, AI workflows, and AI voice reception. One setup fee, one monthly retainer, and what it excludes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
  twitter: { title, description },
};

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110";

/**
 * No Offer structured data yet. Offer markup asserts a buyable price, and
 * nothing here is buyable until a package is added to APPROVED_PACKAGES with
 * matching Stripe Prices. Add it then, not before.
 */
export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const { checkout } = await searchParams;
  const purchasable = purchasablePackageIds();
  const testMode = isTestMode();

  return (
    <>
      <section className="border-b border-border blue-hero">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            One setup fee. One monthly retainer. Scope agreed up front.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A one-time setup fee for the build, then a flat monthly retainer for the ongoing management. We confirm the
            channels, the deliverables, and the price in writing before any work or payment starts.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/pricing#book" className={primaryButton}>
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
            <strong className="font-semibold">Checkout cancelled.</strong> Nothing was charged.{" "}
            <Link href="/pricing#book" className="text-primary underline underline-offset-4">
              Book a call
            </Link>{" "}
            and we&rsquo;ll talk it through.
          </p>
        </div>
      ) : null}

      {testMode ? (
        <div role="status" className="border-b border-border bg-warning/15">
          <p className="container-page py-4 text-sm">
            <strong className="font-semibold">Stripe test mode.</strong> This deployment uses Stripe test keys. No real
            card can be charged here.
          </p>
        </div>
      ) : null}

      <section id="packages" aria-labelledby="packages-heading" className="scroll-mt-28 border-b border-border md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 id="packages-heading" className="max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What it costs
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We run the whole digital side as one package rather than selling the pieces separately. If you only need
            part of it, we scope and price that on a call.
          </p>

          <div className="mt-9 grid max-w-3xl gap-5">
            {servicePackages.map((pkg) => {
              const canBuy = purchasable.has(pkg.id);
              return (
                <article
                  key={pkg.id}
                  className="flex flex-col rounded-2xl border border-primary bg-card p-5 shadow-sm shadow-blue-950/5 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{pkg.name}</h3>
                    {pkg.listPrice ? (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        List price
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>

                  {pkg.listPrice ? (
                    <dl className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-2">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Setup</dt>
                        <dd className="mt-1 font-display text-3xl font-semibold">{formatUsd(pkg.listPrice.setupCents)}</dd>
                        <dd className="mt-1 text-xs text-muted-foreground">One time, covers the build</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Monthly</dt>
                        <dd className="mt-1 font-display text-3xl font-semibold">
                          {formatUsd(pkg.listPrice.monthlyCents)}
                          <span className="text-base font-normal text-muted-foreground">/mo</span>
                        </dd>
                        <dd className="mt-1 text-xs text-muted-foreground">Ongoing management, month to month</dd>
                      </div>
                    </dl>
                  ) : (
                    <div className="mt-6 border-y border-border py-5">
                      <p className="font-display text-2xl font-semibold">Book a call for pricing</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        We quote this scope on a call and confirm the figure in writing. No amount is published here
                        until it is settled.
                      </p>
                    </div>
                  )}

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
                        <BookACall className={`w-full justify-center ${primaryButton}`} />
                        <p className="mt-3 text-xs text-muted-foreground">
                          We don&rsquo;t take card payments online yet. We agree the scope on the call and invoice you
                          directly.
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex max-w-3xl gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
            <Info size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">This is the list price, not a quote.</strong> What you
              pay depends on the scope we agree — the channels you want managed, what already exists, and how much of
              the build is new. You get that in writing before anything starts.
            </p>
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
              ["When you start", "The one-time setup fee and your first month are invoiced together, once the scope is agreed in writing."],
              ["Every month after", "Only the monthly retainer renews, on the same day each month, until you cancel."],
              ["Cancelling", "Tell us and we stop the retainer at the end of the current month. The setup fee is not refundable except where a package says otherwise."],
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
