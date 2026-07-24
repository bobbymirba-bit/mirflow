import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/cta-section";
import { solutions } from "@/data/solutions";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Packaged automation systems built around business outcomes — AI Front Desk, Revenue Engine, Support Autopilot, Back-Office Automation, Knowledge & RAG Systems, and Multi-Agent Operations.",
  openGraph: {
    title: `Solutions | ${siteConfig.name}`,
    description: "Packaged automation systems built around business outcomes.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Solutions</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Complete systems, not point tools
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Solutions bundle the individual services that solve a specific business
              outcome — front desk coverage, pipeline growth, support volume, back-office
              admin, knowledge infrastructure, or complex multi-step operations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/book-a-call">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Browse individual services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <RevealItem key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
                    index === 0 ? "sm:col-span-2" : undefined
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon name={solution.icon} className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    {solution.name}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">{solution.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {solution.outcomes.slice(0, 3).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Not sure which solution fits?"
        description="Book a 30-minute call. We'll map your specific bottlenecks to the right solution — no obligation."
      />
    </>
  );
}
