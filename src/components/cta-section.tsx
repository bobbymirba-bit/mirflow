import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function CtaSection({
  eyebrow = "Next step",
  title = "See where AI can safely take work off your team’s plate.",
  description = "Book an AI Assessment. We’ll review your workflows, data, and risk profile and come back with a prioritized view of where AI can help first, and what it needs to be done safely.",
  primaryLabel = "Book an AI Assessment",
  primaryHref = siteConfig.assessmentHref,
  secondaryLabel = "Explore our AI capabilities",
  secondaryHref = "/#capabilities",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-y border-border bg-foreground text-background"
    >
      <Reveal>
        <div className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div className="min-w-0 max-w-4xl">
            <p className="border-b border-white/25 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-signal">
              {eyebrow}
            </p>
            <h2
              id="cta-heading"
              className="mt-8 text-balance font-display text-[38px] font-normal leading-[1] tracking-[-0.035em] sm:text-6xl"
            >
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-3 lg:items-stretch">
            <Button
              asChild
              size="lg"
              className="w-full bg-background px-4 text-xs text-foreground hover:bg-white hover:opacity-100 sm:px-6 sm:text-sm"
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white/40 px-4 text-xs text-white hover:bg-white/10 sm:px-6 sm:text-sm"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
