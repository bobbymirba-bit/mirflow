import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bobby Mir founded Mirflow in Southern California to help med spas and cosmetic dental practices answer every lead in under 60 seconds.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: "Meet Bobby Mir, the founder behind Mirflow.",
  },
};

const principles = [
  {
    title: "You stay in control",
    body: "Every greeting, answer, and price the AI can quote is approved by you before launch. Anything outside that list goes to a human.",
  },
  {
    title: "Honest numbers",
    body: "We publish only verified, named results shared with permission. Until then, this site shows you the system, not borrowed proof.",
  },
  {
    title: "Founder-led",
    body: "The person you talk to is the person who builds your system and sends your monthly report. No account team, no hand-off.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">About Mirflow</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              The person behind Mirflow
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Mirflow is a small, founder-led company in Southern California. There is no account
              team and no hand-off: the person you talk to is the person who builds and runs your
              system.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            {/* FOUNDER PHOTO SLOT: replace this panel with a real photo of Bobby Mir. Do not use a stock or AI-generated person photo. */}
            <div
              className="flex aspect-[4/3] flex-col items-center justify-center border border-dashed border-border bg-card"
              role="img"
              aria-label="Photo of Bobby Mir, founder of Mirflow, coming soon"
            >
              <span className="font-display text-6xl text-muted-foreground">BM</span>
              <span className="mt-3 text-xs uppercase tracking-[.18em] text-muted-foreground">
                Bobby Mir, founder
              </span>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Bobby Mir, founder, Mirflow.</span>{" "}
                I am based in Beverly Hills and Newport Beach, and I built Mirflow because I kept
                watching great local practices lose patients to a ringing phone. They were paying
                to generate leads, then losing them to voicemail.
              </p>
              <p>
                Mirflow fixes that one problem properly: a front-desk system that finds you on
                Google, earns trust with reviews, answers every call and text in seconds, and
                brings past patients back. I set up every system myself, I come to your practice
                in person, and the monthly report you get comes from me, not a dashboard you have
                to decode.
              </p>
              <p>
                We serve med spas and aesthetic practices first, and cosmetic dental practices
                across Southern California. When something needs attention, you call me.
              </p>
              <Button asChild variant="gradient" className="mt-2">
                <Link href={siteConfig.calendlyUrl}>
                  Book your free missed-lead audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {principle.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="See what missed calls are costing you."
        description="The free missed-lead audit pulls your Google profile, your reviews, and your phone answering into one set of numbers. Yours to keep either way."
        primaryLabel="Book your free missed-lead audit"
        primaryHref={siteConfig.calendlyUrl}
        secondaryLabel="See the pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
