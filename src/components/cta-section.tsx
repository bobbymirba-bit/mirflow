import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CtaSection({
  eyebrow = "Start here",
  title = "One free checklist can stop the most common AI scams.",
  description = "Get the family scam checklist: a printable, plain-English plan for voice-clone calls, deepfakes, and fake AI apps.",
  primaryLabel = "Get the free checklist",
  primaryHref = siteConfig.checklistHref,
  secondaryLabel = "Book a 1:1 session",
  secondaryHref = siteConfig.bookingHref,
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
    <section aria-labelledby="cta-heading" className="border-y border-border bg-foreground text-background">
      <div className="container-page grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
        <div className="min-w-0 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">{eyebrow}</p>
          <h2
            id="cta-heading"
            className="mt-5 text-balance font-display text-[36px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">{description}</p>
        </div>
        <div className="flex min-w-0 flex-col gap-3">
          <Button asChild variant="gradient" size="lg" className="w-full">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-white/40 text-white hover:bg-white hover:text-black"
          >
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
