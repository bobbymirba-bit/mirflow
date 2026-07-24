import type { Metadata } from "next";
import { CalendarClock, MessageSquareText, Rocket, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a 30-minute call with Cadence. We'll map your highest-leverage automation opportunity and show you exactly what it would look like — no obligation.",
  openGraph: {
    title: `Book a Call | ${siteConfig.name}`,
    description: "Book a 30-minute call with Cadence — no obligation.",
  },
};

const steps = [
  {
    icon: MessageSquareText,
    title: "Discovery call (30 min)",
    description:
      "We walk through your current workflow, call/lead volume, and where things break down today.",
  },
  {
    icon: Rocket,
    title: "Custom automation plan",
    description:
      "You get a scoped recommendation with expected impact and a flat monthly price — no generic proposal.",
  },
  {
    icon: CalendarClock,
    title: "Kickoff in days, not months",
    description:
      "If it's a fit, we start building against your existing tools and systems right away.",
  },
];

const prepQuestions = [
  "Roughly how many calls, forms, or messages you get per week",
  "Which tools you currently use (CRM, phone system, scheduling)",
  "Where the biggest bottleneck is today",
  "How soon you'd want this live",
];

export default function BookACallPage() {
  return (
    <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden">
      <div className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Badge variant="brand">Book a call</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s map your automation opportunity
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              30 minutes, no slide deck. We&apos;ll look at your actual workflow and tell
              you honestly whether Cadence is a fit — and what it would cost and deliver
              if it is.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-foreground">
                Worth having ready before the call
              </p>
              <ul className="mt-4 space-y-2">
                {prepQuestions.map((question) => (
                  <li
                    key={question}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              No obligation. No long-term contract required to start.
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[720px]">
            <div className="h-full overflow-hidden rounded-3xl border border-border bg-card">
              <iframe
                src={`${siteConfig.calendlyUrl}?hide_gdpr_banner=1&hide_event_type_details=1`}
                title="Schedule a call with Cadence"
                className="h-[720px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
