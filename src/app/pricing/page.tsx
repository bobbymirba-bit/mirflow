import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/cards/pricing-card";
import { ComparisonTable } from "@/components/comparison-table";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { pricingTiers, comparisonRows } from "@/data/pricing";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flat monthly pricing based on workflows and volume, not per-seat fees. Compare Cadence AI plans and see how automation stacks up against hiring or point solutions.",
  openGraph: {
    title: `Pricing | ${siteConfig.name}`,
    description: "Flat monthly pricing based on workflows and volume, not per-seat fees.",
  },
};

const pricingFaqs = faqs.filter((faq) => faq.category === "Pricing");

export default function PricingPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Pricing</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Flat pricing. No per-seat fees.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Pricing scales with the number of workflows and conversation volume — not
              headcount. Every plan includes deployment, integration, and ongoing
              optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <RevealGroup className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <RevealItem key={tier.id}>
                <PricingCard tier={tier} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All plans include a one-time implementation fee, scoped during onboarding based
            on complexity.{" "}
            <Link href="/faq" className="font-medium text-foreground underline underline-offset-4">
              See pricing FAQs
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Cadence"
            title="How this compares to your alternatives"
            description="Hiring in-house and stitching together point solutions both come with hidden costs and ceilings that automation doesn't have."
            className="mb-10"
          />
          <ComparisonTable rows={comparisonRows} />
        </div>
      </section>

      {pricingFaqs.length > 0 ? (
        <section className="border-b border-border">
          <div className="container-page py-16 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <SectionHeading eyebrow="Pricing FAQs" title="Common questions about cost" className="mb-10" />
              <FaqAccordion faqs={pricingFaqs} />
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Have a different question?{" "}
                <Link href="/faq" className="font-medium text-foreground underline underline-offset-4">
                  See the full FAQ
                </Link>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection
        title="Not sure which plan fits?"
        description="Book a 30-minute call. We'll scope your automation needs and recommend the right plan — no obligation."
        secondaryLabel="See case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
