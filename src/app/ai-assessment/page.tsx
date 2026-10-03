import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { capabilities } from "@/data/capabilities";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Book an AI Assessment",
  description:
    "Book an AI Assessment with Mirflow. Review your workflows, data, and AI risk, and leave with a prioritized view of where AI can help first and what it needs to be done safely.",
  path: "/ai-assessment",
});

const steps = [
  {
    title: "Working session",
    description:
      "A conversation with your leadership or process owners about goals, workflows, systems, and current AI use.",
  },
  {
    title: "Opportunity and risk review",
    description:
      "We identify the most promising use cases, plus the data, access, and governance gaps that would hold them back.",
  },
  {
    title: "Recommendations",
    description:
      "A short written summary of where to start, what it would involve, and the controls it needs.",
  },
  {
    title: "Scoped next step",
    description:
      "If there's a fit, a written proposal with deliverables, timeline, and fees. There's no obligation to proceed.",
  },
];

const coverage = [
  "Highest-value automation and copilot opportunities",
  "Data sensitivity and current AI usage, including informal tools",
  "Access, governance, and vendor risk gaps",
  "Tax workflow opportunities, where relevant",
  "Product and AI feature strategy, where relevant",
  "Recommended first project and success measures",
];

const prep = [
  "The two or three workflows that consume the most team time",
  "Core systems in use (ERP, accounting, CRM, tax, document storage)",
  "AI tools already in use, sanctioned or not",
  "Any security, privacy, or regulatory requirements you work under",
];

export default function AiAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Assessment"
        title="Find where AI can help first, and what it takes to do it safely."
        description={
          <p>
            The AI Assessment is how most Mirflow engagements begin. It gives leadership a
            practical, prioritized view of opportunities across strategy, automation,
            security, tax operations, and product, grounded in your systems and data.
          </p>
        }
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <a href="#schedule">
              Choose a time
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact?interest=ai-assessment">Send us details instead</Link>
          </Button>
        </div>
      </PageHero>

      <section aria-labelledby="steps-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <h2
            id="steps-heading"
            className="max-w-2xl text-balance font-display text-[32px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
          >
            How the assessment works
          </h2>
          <ProcessSteps steps={steps} className="mt-12" />
        </div>
      </section>

      <section aria-labelledby="coverage-heading" className="border-b border-border">
        <div className="container-page grid gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              id="coverage-heading"
              className="font-display text-3xl font-normal tracking-[-0.03em] sm:text-4xl"
            >
              What we cover
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {coverage.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-normal tracking-[-0.03em] sm:text-4xl">
              Helpful to have ready
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {prep.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Please don&apos;t share confidential or personal data before we&apos;ve agreed
              on how it will be handled. We&apos;re glad to sign an NDA before detailed
              discussions.
            </p>
          </div>
        </div>
      </section>

      <section id="schedule" aria-labelledby="schedule-heading" className="scroll-mt-24 border-b border-border bg-secondary/50">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <h2
              id="schedule-heading"
              className="font-display text-3xl font-normal tracking-[-0.03em] sm:text-4xl"
            >
              Schedule your AI Assessment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Pick a time that works for you. If the calendar doesn&apos;t load, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-foreground underline underline-offset-4">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-medium text-foreground underline underline-offset-4">
                {siteConfig.phone}
              </a>
              .
            </p>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Interested in a specific area?
            </p>
            <ul className="mt-3 space-y-2">
              {capabilities.map((capability) => (
                <li key={capability.slug}>
                  <Link
                    href={`/${capability.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {capability.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-h-[720px] overflow-hidden border border-border bg-card">
            <iframe
              src={`${siteConfig.calendlyUrl}?hide_gdpr_banner=1&hide_event_type_details=1`}
              title="Schedule an AI Assessment with Mirflow"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
