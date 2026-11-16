import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { pricingTiers } from "@/data/pricing";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "AI Receptionist for Local Service Businesses",
  description:
    "Mirflow answers every call, texts back the ones you miss, and follows up on quotes automatically — for med spas, dentists, HVAC, and plumbing businesses.",
  alternates: { canonical: "/local-services" },
};

const localIndustrySlugs = ["med-spas", "dentists", "hvac", "plumbing"];
const localIndustries = industries.filter((i) => localIndustrySlugs.includes(i.slug));

const proofPoints = [
  { stat: "9x", label: "more likely to convert when you reply within 5 minutes instead of 30" },
  { stat: "3–6 hrs", label: "the average business actually takes to reply to a new inquiry" },
  { stat: "12–18%", label: "lead-to-customer rate without any follow-up automation" },
  { stat: "15–25%", label: "of weekly revenue lost to no-shows with no reminder system" },
];

export default function LocalServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page flex flex-col items-center gap-3 py-4 text-center sm:flex-row sm:justify-center sm:gap-6">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">Which one is you?</p>
          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              Software & finance teams
            </Link>
            <span className="rounded-full border border-primary bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
              Local service business
            </span>
          </div>
        </div>
      </section>
      <section className="overflow-hidden border-b border-border bg-[#070910]/60 text-foreground">
        <div className="container-page grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              AI receptionist for local businesses
            </p>
            <h1 className="mt-7 max-w-2xl font-display text-5xl leading-[1.02] tracking-[-.045em] sm:text-7xl">
              Stop losing jobs
              <br />
              to voicemail.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Mirflow answers your phone after hours, texts back every missed call during the day,
              and follows up on quotes automatically — so the business runs and you move forward.
            </p>
            <Button asChild size="lg" variant="gradient" className="mt-9">
              <Link href="/book-a-call">
                Book the 7-day pilot <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-5 text-sm text-white/60">For med spas, dentists, HVAC, and plumbing.</p>
          </div>
          <div className="border border-white/20 bg-white/[.04] p-6 sm:p-8">
            <div className="flex justify-between gap-4 border-b border-white/20 pb-5 text-[10px] uppercase tracking-[.18em]">
              <span>What it actually costs you</span>
            </div>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              {proofPoints.map((p) => (
                <div key={p.label}>
                  <p className="font-display text-4xl text-primary">{p.stat}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Built for your business</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
          Where this fits.
        </h2>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {localIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="flex flex-col bg-card p-6 transition-colors hover:bg-secondary/50"
            >
              <h3 className="font-display text-2xl">{industry.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.summary}</p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                See how <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="container-page py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Pricing</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
            Start small. Scale when it&apos;s working.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.id}
                className={`flex h-full flex-col border p-7 sm:p-9 ${
                  tier.featured
                    ? "border-primary bg-[#070910]/60 text-foreground"
                    : "border-border bg-card"
                }`}
              >
                {tier.badge && (
                  <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary">
                    {tier.badge}
                  </p>
                )}
                <h3 className={`mt-3 font-display text-2xl ${tier.featured ? "" : ""}`}>{tier.name}</h3>
                <p className="mt-6 font-display text-4xl">
                  {tier.price}
                  <span className="text-lg font-normal">{tier.priceSuffix}</span>
                </p>
                {tier.setupFee && (
                  <p className={`mt-1 text-sm ${tier.featured ? "text-white/55" : "text-muted-foreground"}`}>
                    {tier.setupFee}
                  </p>
                )}
                <p
                  className={`mt-6 text-sm leading-relaxed ${
                    tier.featured ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {tier.description}
                </p>
                <ul
                  className={`mt-7 space-y-3 border-t pt-6 text-sm ${
                    tier.featured ? "border-white/20" : "border-border"
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-primary" : "text-primary"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={tier.featured ? "gradient" : "outline"} className="mt-9 w-full">
                  <Link href={tier.ctaHref}>
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Which calls are you missing right now?"
        description="Seven days of missed-call text-back on your real line. See what it's worth before you commit to anything."
        primaryLabel="Book the 7-day pilot"
        primaryHref="/book-a-call"
        secondaryLabel="See how it fits your industry"
        secondaryHref="/local-services#industries"
      />
    </>
  );
}
