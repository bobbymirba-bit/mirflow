import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { IndustryCard } from "@/components/cards/industry-card";
import { CtaSection } from "@/components/cta-section";
import { industries } from "@/data/industries";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "See how Mirflow's AI automation is built for 18+ industries — from HVAC and law firms to ecommerce and healthcare — with real benchmarks for each vertical.",
  openGraph: {
    title: `Industries | ${siteConfig.name}`,
    description:
      "See how Mirflow's AI automation is built for 18+ industries with real benchmarks for each vertical.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Industries</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Automation built for how your industry actually works
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Every vertical has a different bottleneck — missed calls, slow intake,
              manual scheduling. Mirflow starts with the pattern that&apos;s specific to
              your business, not a generic template.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/book-a-call">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Browse by service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IndustryCard industry={industry} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
