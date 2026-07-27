import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection({
  title = "Ready to stop losing revenue to manual work?",
  description = "Tell us what happens today, where it breaks, and what the finished workflow should do. We'll return a clear scope and price.",
  primaryLabel = "Get a custom quote",
  primaryHref = "/quote",
  secondaryLabel = "See pricing",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-y border-border bg-[#171713] text-[#f3efe7]">
      <Reveal>
        <div className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="border-b border-white/30 pb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Your next operating system</p>
            <h2 className="mt-8 text-balance font-display text-5xl font-normal leading-[.95] tracking-[-0.045em] text-[#f3efe7] sm:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-stretch">
              <Button asChild variant="gradient" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-black">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
