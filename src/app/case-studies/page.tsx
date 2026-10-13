import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Founding Clients",
  description:
    "Mirflow is taking on its first founding clients now. We publish only verified, named customer results shared with permission.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `Founding Clients | ${siteConfig.name}`,
    description:
      "Our first case studies are being written now, by our first clients. Verified, named results only.",
  },
};

const steps = [
  {
    number: "01",
    title: "Start with the free missed-lead audit",
    body: "We look at your Google profile, your reviews, and how your phones are actually being answered. You get the findings either way.",
  },
  {
    number: "02",
    title: "Setup is $995, live within a few days",
    body: "Setup is $995 one time, and the front desk is live within a few days of you approving the script, on your existing number.",
  },
  {
    number: "03",
    title: "A written report after the first month",
    body: "Calls answered, bookings made, patients recovered. Plain numbers, from your real line and your real calendar.",
  },
  {
    number: "04",
    title: "Your results become a case study, with permission",
    body: "If the numbers earn it, your results, with your permission and your practice name, become one of the first case studies on this page.",
  },
];

const receives = [
  "Founder-led setup, in person where possible",
  "A written report after the first month: calls answered, bookings made, patients recovered",
  "Weekly check-ins while the system is tuned",
  "First access to new features as the system grows",
];

export default function FoundingClientsPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Founding Clients</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Our first case studies are being written now. By our first clients.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Most agencies launch with a wall of logos. We are launching with something better: a
              small Founding Client program and a commitment to publish only real, named,
              verified results.
            </p>
            <p className="mt-5 text-pretty text-lg font-medium leading-relaxed text-foreground">
              We only publish verified, named customer results shared with permission.
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
        <div className="container-page py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
            How it works
          </p>
          <div className="mt-10 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-wider text-primary">{step.number}</p>
                <h2 className="mt-5 font-display text-2xl">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              What Founding Clients receive
            </h2>
            <ul className="mt-7 space-y-3 text-sm">
              {receives.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              What we ask in return
            </h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Permission to publish your results with your practice name once there are real
              numbers to publish. That is the whole deal.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ask about a Founding Client spot."
        description="Start with the free missed-lead audit and ask about a Founding Client spot. If the numbers make sense, we set up your system."
        primaryLabel="Book your free missed-lead audit"
        primaryHref={siteConfig.calendlyUrl}
        secondaryLabel="See the pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
