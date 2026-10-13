import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One plan for the Mirflow front-desk system: $995 one-time setup, then $499 per month. No contract. Built for med spas and cosmetic dental practices in Southern California.",
  alternates: { canonical: "/pricing" },
};

const setupFeatures = [
  "Configuration of the front desk for your services, hours, and booking rules",
  "Voice and script setup in your clinic’s voice",
  "Calendar and phone integration",
  "Testing with your staff before launch",
  "Greeting and answers approved by you before anything goes live",
];

const monthlyFeatures = [
  "Answering calls and texts, day or night",
  "Missed-call text-back in under 60 seconds",
  "Follow-up sequences for leads who went quiet",
  "A daily summary of every conversation, with full transcripts",
  "Ongoing adjustments as your services and offers change",
];

const included = [
  "AI front desk answering every call and text",
  "Booking straight into your existing calendar",
  "Missed-call text-back in under 60 seconds",
  "Google Business Profile management and local SEO",
  "Review requests and responses, managed",
  "Reactivation campaigns to your past patient list",
  "Daily summary and full transcripts of every conversation",
];

const notIncluded = [
  "Paid ads management",
  "Website design or build",
  "Medical advice of any kind",
  "Billing or insurance work",
];

const questions = [
  {
    question: "What happens if the AI does not know the answer?",
    answer:
      "It routes to your staff, every time. Anything outside the approved script is taken as a message and sent to your team right away.",
  },
  {
    question: "Will patients know it is AI?",
    answer: "Yes, if they ask. We do not pretend otherwise.",
  },
  {
    question: "Do we keep our phone number?",
    answer: "Yes. Simple call forwarding. Nothing changes for your patients.",
  },
  {
    question: "Who approves what the AI says?",
    answer:
      "You do. The greeting, the answers, the prices it can quote, and the questions it can handle are all approved by you before launch.",
  },
  {
    question: "What if it does not work for us?",
    answer:
      "Cancel any time. There is no contract. The system is turned off cleanly, and your number, your Google profile, and your patient list stay yours.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-[#171713] text-[#f3efe7]">
        <div className="container-page py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d8a58f]">Pricing</p>
          <div className="mt-6 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-[-.045em] sm:text-7xl">
              One plan. One price. In the open.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              This is the complete price list for the Mirflow front-desk system. No tiers and no
              hidden fees. It starts with a free missed-lead audit, so you see your own numbers
              before you pay anything.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
          <article className="flex flex-col bg-card p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[.18em] text-primary">01 / One-time setup</p>
            <p className="mt-8 font-display text-5xl">$995</p>
            <p className="mt-2 text-sm text-muted-foreground">One time, before launch</p>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              We configure the whole system around your practice and test it with your staff
              before a single patient call reaches it.
            </p>
            <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm">
              {setupFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-9 w-full">
              <Link href={siteConfig.calendlyUrl}>
                Start with the free audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>

          <article className="flex flex-col bg-[#171713] p-7 text-[#f3efe7] sm:p-9">
            <p className="text-xs uppercase tracking-[.18em] text-[#d8a58f]">02 / Monthly</p>
            <p className="mt-8 font-display text-5xl">
              $499<span className="text-2xl text-white/55">/mo</span>
            </p>
            <p className="mt-2 text-sm text-white/55">Per month, no contract</p>
            <p className="mt-7 text-sm leading-relaxed text-white/70">
              We run the system every day and keep improving it. You run your practice.
            </p>
            <ul className="mt-7 space-y-3 border-t border-white/20 pt-6 text-sm">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d8a58f]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant="gradient" className="mt-9 w-full">
              <Link href={siteConfig.calendlyUrl}>
                Book your free missed-lead audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        </div>
        <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          No contract. Cancel any time, and the system is turned off cleanly. Your number, your
          Google profile, and your patient list stay yours. Multi-location practices are quoted
          separately.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              What is included
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              What is not included
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {notIncluded.map((item) => (
                <li key={item} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
            Common questions
          </p>
          <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
            Know what you are buying.
          </h2>
        </div>
        <dl className="space-y-8">
          {questions.map((item) => (
            <div key={item.question} className="border-t border-border pt-5">
              <dt className="text-lg font-semibold">{item.question}</dt>
              <dd className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaSection
        title="Start with the free audit."
        description="We show you what missed calls and a quiet Google profile are costing you. If the numbers make sense, we set up your system. If they do not, you keep the audit."
        primaryLabel="Book your free missed-lead audit"
        primaryHref={siteConfig.calendlyUrl}
        secondaryLabel="See who it is built for"
        secondaryHref="/industries"
      />
    </>
  );
}
