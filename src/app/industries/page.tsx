import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Mirflow builds front-desk systems for med spas and cosmetic dental practices in Southern California, where every missed call is a booking someone else got.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: `Industries | ${siteConfig.name}`,
    description:
      "Built for two kinds of practices: med spas and cosmetic dentistry in Southern California.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Industries</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Built for two kinds of practices. Done properly.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Med spas and cosmetic dental practices lose more to a ringing phone than almost any
              other local business. Here is how the system fits each one.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href={siteConfig.calendlyUrl}>
                  Book your free missed-lead audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">See the pricing</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              01 / Med spas
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">Med spas</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Med spa patients research quietly and decide fast. They check your Google rating, scan
            your reviews, look at your photos, and call. If the call rings out, the next med spa
            on the list gets the booking. Mirflow makes sure your profile wins the comparison and
            your phone is answered in seconds, every time, including evenings and weekends when
            treatment decisions actually get made. The reactivation campaigns then work the list
            of past patients who loved their results and simply never got asked back.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/50">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              02 / Cosmetic dentistry
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">Cosmetic dentistry</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A single implant or veneer case is worth more than most businesses make from a
            customer all year. That makes every missed call to a cosmetic dental practice one of
            the most expensive rings in local business. Mirflow pairs local search visibility and
            a strong review profile with an AI front desk that answers, qualifies, and books
            consults around the clock, and brings lapsed patients back with recall and
            reactivation campaigns.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-16 sm:py-24">
          <div className="border border-border bg-card p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              Also serving
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              We also set up the front-desk system for other premium local businesses in Southern
              California where a missed call means a lost job. If that is you, book the audit and
              we will tell you honestly whether the system fits.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Book your free missed-lead audit."
        description="We show you what missed calls and a quiet Google profile are costing you. If the numbers make sense, we set up your system. If they do not, you keep the audit."
        primaryLabel="Book your free missed-lead audit"
        primaryHref={siteConfig.calendlyUrl}
        secondaryLabel="See the pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
