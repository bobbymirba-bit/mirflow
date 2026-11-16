import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection({
  title = "Find the first workflow worth building.",
  description = "Tell us where work is slow, repetitive, or risky. We'll help you decide what to build, what to buy, and what to leave alone.",
  primaryLabel = "Start your workflow assessment",
  primaryHref = "/ai-assessment",
  secondaryLabel = "Read workflow examples",
  secondaryHref = "/#workflows",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07090f] p-8 sm:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
            <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,.3),transparent)] blur-2xl animate-float" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,.3),transparent)] blur-2xl animate-float [animation-delay:-5s]" />
            <div aria-hidden className="hairline-gradient absolute inset-x-10 top-0" />

            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
              <div className="min-w-0 max-w-3xl">
                <Badge variant="brand">Your AI operating model</Badge>
                <h2 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                  {title}
                </h2>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>
              <div className="flex min-w-0 flex-col gap-3">
                <Button asChild variant="gradient" size="lg" className="w-full">
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
