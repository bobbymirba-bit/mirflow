import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { CtaSection } from "@/components/cta-section";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Founding clients: case studies coming soon. Mirflow only publishes verified, named customer results.",
  openGraph: {
    title: `Case Studies | ${siteConfig.name}`,
    description: "Founding clients: case studies coming soon.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Case studies</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Founding clients: case studies coming soon
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              We only publish verified, named customer results shared with permission.
              They&apos;ll appear here as founding clients go live.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/quote">
                  Tell us what you need
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

      {caseStudies.length > 0 ? (
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
      ) : null}

      <CtaSection
        title="Want a workflow built around your business?"
        description="Share your call volume, tools, and bottleneck. We'll recommend a first system and quote it."
        primaryLabel="Tell us what you need"
        primaryHref="/quote"
        secondaryLabel="See standard plans"
        secondaryHref="/pricing"
      />
    </>
  );
}
