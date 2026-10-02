import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calculator,
  Check,
  Code2,
  Eye,
  FileCheck2,
  KeyRound,
  Landmark,
  Lock,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProcessSteps } from "@/components/process-steps";
import { WorkflowPreview } from "@/components/workflow-preview";
import { capabilities } from "@/data/capabilities";
import { faqs } from "@/data/faq";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  ...pageMetadata({
    title: "AI Strategy, Automation, Security & Tax Operations",
    description: siteConfig.description,
    path: "/",
  }),
  // Use the root title as-is on the homepage.
  title: { absolute: `${siteConfig.name} — ${siteConfig.tagline}` },
};

const outcomes = [
  {
    title: "Lower operating costs",
    description:
      "Automate repetitive intake, extraction, and reconciliation so skilled people spend their time on higher-value work.",
  },
  {
    title: "Faster workflows",
    description:
      "Shorten cycle times for approvals, close, reporting, and customer requests by removing manual hand-offs.",
  },
  {
    title: "Reduced risk",
    description:
      "Bring informal AI use under clear policy, with access controls, logging, and review built into each workflow.",
  },
  {
    title: "Better tax operations",
    description:
      "Help tax teams process documents, classify data, and prepare for review with more consistency and less rework.",
  },
  {
    title: "Stronger products",
    description:
      "Ship AI features customers trust, backed by validated demand and experienced product leadership.",
  },
];

const process = [
  {
    title: "Assess",
    description:
      "Review workflows, data, systems, and current AI use to find where value and risk are concentrated.",
  },
  {
    title: "Prioritize",
    description:
      "Rank opportunities by value, feasibility, and data sensitivity, and agree on what to do first.",
  },
  {
    title: "Design with controls",
    description:
      "Define access, review points, logging, and escalation before anything is built.",
  },
  {
    title: "Build and integrate",
    description:
      "Deliver working systems connected to your existing tools, and pilot them alongside current processes.",
  },
  {
    title: "Operate and improve",
    description:
      "Monitor accuracy, usage, and risk, then expand to the next workflow once the results hold up.",
  },
];

const principles = [
  {
    icon: UserCheck,
    title: "Human review where it matters",
    description:
      "Financial, tax, legal, and customer-impacting decisions route to accountable people, with thresholds you set.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege access",
    description:
      "Users, agents, and integrations get only the access they need, tied to your identity provider.",
  },
  {
    icon: Lock,
    title: "Sensitive data stays scoped",
    description:
      "Data flows, retention, and approved vendors are defined and agreed before a system touches production data.",
  },
  {
    icon: Eye,
    title: "Auditable by design",
    description:
      "Inputs, outputs, and approvals are logged, so you can explain how an AI-assisted result was produced.",
  },
  {
    icon: Scale,
    title: "Vendor-neutral advice",
    description:
      "We recommend what fits your environment and risk profile, including tools you already license.",
  },
  {
    icon: FileCheck2,
    title: "Careful, honest claims",
    description:
      "We help you reduce risk and prepare for review. We don't promise outcomes that only auditors, regulators, or advisors can determine.",
  },
];

const audiences = [
  {
    icon: Calculator,
    title: "Finance and accounting teams",
    description: "High volumes of invoices, statements, reconciliations, and reporting.",
  },
  {
    icon: Landmark,
    title: "Tax departments and firms",
    description: "Document-heavy, deadline-driven work across entities and jurisdictions.",
  },
  {
    icon: Building2,
    title: "Operations-driven businesses",
    description: "Multi-system processes where manual hand-offs slow everything down.",
  },
  {
    icon: ShieldCheck,
    title: "Data-sensitive organizations",
    description: "Financial services, insurance, professional services, and other teams handling confidential data.",
  },
  {
    icon: Code2,
    title: "Software and product companies",
    description: "Teams adding AI to their product and needing senior product leadership.",
  },
];

const homeFaqs = faqs.filter((faq) => faq.featured);

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mirflow AI capabilities",
  itemListElement: capabilities.map((capability, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: capability.name,
    url: `${siteConfig.url}/${capability.slug}`,
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <div className="container-page relative grid gap-14 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-28">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 border-b border-foreground/30 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              AI transformation for finance and operations
            </p>
            <h1
              id="hero-heading"
              className="mt-7 text-balance font-display text-[44px] font-normal leading-[0.98] tracking-[-0.04em] text-foreground sm:text-7xl lg:text-[80px]"
            >
              AI that does the work, and protects what it touches.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href={siteConfig.assessmentHref}>
                  Book an AI Assessment
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#capabilities">Explore our AI capabilities</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {["Human review built in", "Least-privilege access", "Vendor-neutral"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <WorkflowPreview />
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-24 border-b border-border">
        <div className="container-page py-16 sm:py-28">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Capabilities
              </p>
              <h2
                id="capabilities-heading"
                className="mt-4 text-balance font-display text-[34px] font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl"
              >
                Five ways we help you put AI to work safely
              </h2>
            </div>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              Start with one capability or combine them. Strategy, automation, security,
              tax operations, and product leadership share the same principle: useful AI,
              deployed with clear controls.
            </p>
          </div>

          <ul className="mt-12 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
            {capabilities.map((capability, index) => (
              <li
                key={capability.slug}
                className={index < 3 ? "bg-background lg:col-span-2" : "bg-background lg:col-span-3"}
              >
                <Link
                  href={`/${capability.slug}`}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-card sm:p-8"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-border bg-card text-primary">
                      <Icon name={capability.icon} className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-10 font-display text-[26px] font-normal leading-tight tracking-[-0.02em] text-foreground">
                    {capability.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {capability.summary}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {capability.offerings.slice(0, 3).map((offering) => (
                      <li key={offering.title} className="flex gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {offering.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    Explore {capability.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section aria-labelledby="outcomes-heading" className="border-b border-border bg-foreground text-background">
        <div className="container-page grid gap-12 py-16 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-signal">
              Business outcomes
            </p>
            <h2
              id="outcomes-heading"
              className="mt-4 text-balance font-display text-[34px] font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl"
            >
              Measured in operations, not demos
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Every engagement starts with the business result it is meant to improve,
              and how you&apos;ll measure it.
            </p>
          </div>
          <ol className="divide-y divide-white/15 border-y border-white/15">
            {outcomes.map((outcome, index) => (
              <li key={outcome.title} className="grid gap-2 py-7 sm:grid-cols-[64px_1fr] sm:gap-6">
                <span className="font-mono text-xs text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-normal tracking-[-0.02em] sm:text-3xl">
                    {outcome.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                    {outcome.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="process-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How we work
            </p>
            <h2
              id="process-heading"
              className="mt-4 text-balance font-display text-[34px] font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl"
            >
              A disciplined path from assessment to production
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Controls are designed in from the start, not bolted on after launch.
            </p>
          </div>
          <ProcessSteps steps={process} className="mt-12 sm:mt-16" />
        </div>
      </section>

      {/* Trust, security, governance */}
      <section aria-labelledby="trust-heading" className="border-b border-border bg-secondary/50">
        <div className="container-page py-16 sm:py-28">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Trust, security, and governance
              </p>
              <h2
                id="trust-heading"
                className="mt-4 text-balance font-display text-[34px] font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl"
              >
                Built for teams that handle sensitive data
              </h2>
            </div>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              Finance, tax, and customer data deserve more than a chatbot and a privacy
              policy. These principles shape every system we design.
            </p>
          </div>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <li key={principle.title} className="bg-background p-6 sm:p-8">
                <principle.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-normal tracking-[-0.01em] text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Mirflow supports, and does not replace, your legal, tax, audit, and compliance
            advisors. Our work is designed to reduce risk and help you prepare for review.
            It is not a guarantee of security, compliance, or tax outcomes.{" "}
            <Link href="/ai-security" className="font-medium text-foreground underline underline-offset-4">
              Read about AI Security
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Ideal customers */}
      <section aria-labelledby="audience-heading" className="border-b border-border">
        <div className="container-page grid gap-12 py-16 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Who we work with
            </p>
            <h2
              id="audience-heading"
              className="mt-4 text-balance font-display text-[34px] font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl"
            >
              For businesses where accuracy and trust are non-negotiable
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              We work best with leadership teams who want AI to make a measurable
              difference to operations and are serious about doing it responsibly.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {audiences.map((audience) => (
              <li key={audience.title} className="flex gap-5 py-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-card text-primary">
                  <audience.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-normal text-foreground">{audience.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="border-b border-border">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-display text-[34px] font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl"
            >
              Common questions
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              See the{" "}
              <Link href="/faq" className="font-medium text-foreground underline underline-offset-4">
                full FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-medium text-foreground underline underline-offset-4">
                ask us directly
              </Link>
              .
            </p>
          </div>
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
