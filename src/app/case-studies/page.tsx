import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { CtaSection } from "@/components/cta-section";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Modeled Workflows",
  description:
    "Explore transparent, modeled AI workflow scenarios across HVAC, dental, legal, real estate, ecommerce, and manufacturing.",
  openGraph: {
    title: `Case Studies | ${siteConfig.name}`,
    description:
      "See how businesses across every industry use Mirflow AI to recover revenue and eliminate manual work.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Modeled workflows</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              See the system before the sales conversation
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              These planning scenarios show the trigger, logic, integrations, handoff, and
              modeled business impact. They are demonstrations—not invented customer proof.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/quote">
                  Model my workflow
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Browse services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-4">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              These are illustrative examples built from typical outcomes across the
              industries Mirflow serves, used to show how our workflows are structured and
              the kind of impact they produce. We&apos;ll replace these with verified,
              named customer results as case studies are published.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Want a model built from your real numbers?"
        description="Submit your volume, conversion rate, tools, and bottleneck. We'll return a tailored workflow and quote."
        primaryLabel="Model my workflow"
        primaryHref="/quote"
        secondaryLabel="See standard plans"
        secondaryHref="/pricing"
      />
    </>
  );
}
