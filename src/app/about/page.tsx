import Link from "next/link";
import { ArrowRight, Eye, Scale, ShieldCheck, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { capabilities } from "@/data/capabilities";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "About Mirflow",
  description:
    "Mirflow is an AI transformation company helping finance-heavy and operations-driven businesses deploy AI that automates work, protects sensitive data, and improves tax and business operations.",
  path: "/about",
});

const principles = [
  {
    icon: Target,
    title: "Outcomes over demos",
    description:
      "We start with the business result an initiative should improve and how it will be measured, not with the technology.",
  },
  {
    icon: ShieldCheck,
    title: "Safety by design",
    description:
      "Access control, data protection, logging, and human review are part of the design from day one, not added after launch.",
  },
  {
    icon: Eye,
    title: "Transparent and accountable",
    description:
      "We document what our systems do, what data they use, and who approves what, so your team can explain every AI-assisted outcome.",
  },
  {
    icon: Scale,
    title: "Honest about limits",
    description:
      "We're clear about what AI should and shouldn't do. Tax, legal, and compliance judgments stay with qualified professionals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mirflow"
        title="An AI transformation partner for businesses that can’t afford to get it wrong."
        description={<p>{siteConfig.description}</p>}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href={siteConfig.assessmentHref}>
              Book an AI Assessment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#capabilities">Explore our AI capabilities</Link>
          </Button>
        </div>
      </PageHero>

      {/* Story */}
      <section aria-labelledby="story-heading" className="border-b border-border">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Why we exist
            </p>
            <h2
              id="story-heading"
              className="mt-4 text-balance font-display text-[32px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            >
              The gap between AI potential and safe, everyday use
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>
              Most businesses aren&apos;t short of AI ideas. What they lack is a reliable way
              to turn those ideas into systems that do real work, connect to the tools they
              already run, and handle sensitive financial, tax, and customer data responsibly.
            </p>
            <p>
              The result is familiar: scattered pilots, informal tools used without policy,
              and leadership teams unsure what to fund next. The risk is highest in finance,
              tax, and operations, where errors are costly and data is confidential.
            </p>
            <p>
              Mirflow brings strategy, engineering, security, tax operations, and product
              leadership together in one team. We help you decide where AI belongs, build it
              with the right controls, and keep accountable people in charge of the
              decisions that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-heading" className="border-b border-border bg-secondary/50">
        <div className="container-page py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            How we work
          </p>
          <h2
            id="principles-heading"
            className="mt-4 max-w-2xl text-balance font-display text-[32px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
          >
            Principles behind every engagement
          </h2>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle.title} className="bg-background p-6 sm:p-8">
                <principle.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-normal tracking-[-0.02em] text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities summary */}
      <section aria-labelledby="capabilities-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <h2
            id="capabilities-heading"
            className="max-w-2xl text-balance font-display text-[32px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
          >
            What we do
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {capabilities.map((capability) => (
              <li key={capability.slug}>
                <Link
                  href={`/${capability.slug}`}
                  className="group grid gap-3 py-6 sm:grid-cols-[40px_220px_1fr_24px] sm:items-center sm:gap-6"
                >
                  <Icon name={capability.icon} className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="font-display text-xl text-foreground group-hover:text-primary">
                    {capability.label}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {capability.summary}
                  </span>
                  <ArrowRight
                    className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary sm:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Let’s find where AI can make a measurable difference."
        description="Start with an AI Assessment: a focused look at your workflows, data, and risks, with practical recommendations on where to begin."
      />
    </>
  );
}
