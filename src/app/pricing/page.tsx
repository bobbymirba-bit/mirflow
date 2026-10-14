import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One plan for the Mirflow AI support agent: $2,000 one-time setup, then $500 per month. No free trial. Setup refunded if the agent is not answering your real questions within 14 days of launch.",
  alternates: { canonical: "/pricing" },
};

const setupFeatures = [
  "Knowledge base built from your help center, docs, and FAQ pages, nothing else",
  "Agent configured to answer in your words, from those pages only",
  "Install on your site or help center, your choice",
  "A test set built from the questions your customers actually repeat, checked with you before launch",
  "A baseline count of your repeat contacts, so the first report has something honest to compare against",
  "The 14-day refund term in writing",
];

const monthlyFeatures = [
  "Running and hosting the agent, all model and usage costs included",
  "The one-page monthly report: contacts handled, outcomes, questions missed, the one missing policy, and dollars versus the fee",
  "Knowledge base refreshed whenever you publish or change pages",
  "Missed-question log reviewed with you, and the top gaps closed",
  "The fee continues only while the report shows the agent returning more in labor than it costs",
];

const included = [
  "An AI support agent trained only on your published pages",
  "Answers that cite the page they came from",
  "A human route for anything the agent cannot answer",
  "A log of every question the agent missed",
  "A one-page monthly report with the labor math against your fee",
  "Knowledge base updates as your pages change",
];

const notIncluded = [
  "Answers to questions your pages do not cover (the agent says so and hands off to a human)",
  "Writing your help pages for you (the monthly report flags the one page to add)",
  "Paid ads or website design",
  "A free trial period",
];

const questions = [
  {
    question: "What if it does not know an answer?",
    answer:
      "It says so, offers the human route, and logs the question. The monthly report shows every miss.",
  },
  {
    question: "Does it make things up?",
    answer: "No. It answers only from your published pages and cites the page it used.",
  },
  {
    question: "What do you need from us?",
    answer: "A link to your help center or docs. That is the whole input.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "No. Instead, the setup fee is refunded if the agent is not answering your real questions within 14 days of launch, and the monthly fee continues only while the monthly report proves value.",
  },
  {
    question: "Can we stop?",
    answer: "Yes. The fee continues only while the report proves value.",
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
              This is the complete price for the Mirflow support agent, an AI agent trained only
              on your published help pages that answers the questions your customers ask twice.
              No tiers, no per-seat fees, no free trial.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
          <article className="flex flex-col bg-card p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[.18em] text-primary">01 / One-time setup</p>
            <p className="mt-8 font-display text-5xl">$2,000</p>
            <p className="mt-2 text-sm text-muted-foreground">One time, before launch</p>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              We build your agent from your published help pages only, and test it against the
              questions your customers actually repeat before it goes live.
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
              <Link href="/contact">
                Get your demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>

          <article className="flex flex-col bg-[#171713] p-7 text-[#f3efe7] sm:p-9">
            <p className="text-xs uppercase tracking-[.18em] text-[#d8a58f]">02 / Monthly</p>
            <p className="mt-8 font-display text-5xl">
              $500<span className="text-2xl text-white/55">/mo</span>
            </p>
            <p className="mt-2 text-sm text-white/55">
              Per month, only while the report proves value
            </p>
            <p className="mt-7 text-sm leading-relaxed text-white/70">
              We run the agent every day, keep its knowledge current, and prove its value every
              month in a one-page report.
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
              <Link href="/contact">
                Get your demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        </div>
        <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          No free trial. If the agent is not answering your real questions within 14 days of
          launch, the $2,000 setup fee is refunded. The monthly fee continues only while the
          monthly report shows the agent returning more in labor than it costs. No contract
          beyond that.
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

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              Also from Mirflow
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              The front desk system, for local practices.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our second product: Google profile and reviews, an AI front desk for calls and
              texts, and patient reactivation, built for local practices whose bigger leak is the
              phone.
            </p>
            <p>
              Ask us about it after your support agent is live, or first, if your phones are the
              bigger leak. Pricing for the front desk system: ask us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-primary"
            >
              Ask us about the front desk system <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 border-t border-border py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr]">
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
        title="Get your demo."
        description="Send your help center link. We build the agent on your pages and send back a working demo answering your most repeated questions."
        primaryLabel="Get your demo"
        primaryHref="/contact"
        secondaryLabel="See who it is for"
        secondaryHref="/#who-it-is-for"
      />
    </>
  );
}
