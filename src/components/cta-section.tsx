import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function CtaSection({
  title = "Book your free missed-lead audit.",
  description = "We show you what missed calls and a quiet Google profile are costing you. If the numbers make sense, we set up your system. If they do not, you keep the audit.",
  primaryLabel = "Book your free missed-lead audit",
  primaryHref = siteConfig.calendlyUrl,
  secondaryLabel = "See the pricing",
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
          <div className="min-w-0 max-w-4xl">
            <p className="border-b border-white/30 pb-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:text-[10px] sm:tracking-[0.22em]">The Mirflow support agent</p>
            <h2 className="mt-8 text-balance font-display text-[42px] font-normal leading-[.95] tracking-[-0.045em] text-[#f3efe7] sm:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-3 lg:items-stretch">
              <Button asChild variant="gradient" size="lg" className="w-full px-3 text-[11px] sm:px-6 sm:text-sm">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/40 px-3 text-[11px] text-white hover:bg-white hover:text-black sm:px-6 sm:text-sm">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
