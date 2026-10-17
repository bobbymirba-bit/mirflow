import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, BookOpen, ShoppingBag, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

const description =
  "Mirflow builds an AI support agent trained only on your own help pages. It answers in your words, around the clock, and hands anything it cannot answer to a human.";

export const metadata: Metadata = {
  title: { absolute: "AI Support Agent Built From Your Help Pages | Mirflow" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Support Agent Built From Your Help Pages | Mirflow",
    description,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneSchema,
  description,
  areaServed: "Southern California",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

const heroFlowSteps = [
  "A customer asks a question",
  "The agent answers from your help pages, in your words",
  "Anything it cannot answer goes to a human",
  "Every miss is logged for your monthly report",
];

const howSteps = [
  {
    number: "01",
    title: "Send us your help center",
    body: "We build the agent from your published pages only. It never invents a price or a policy.",
  },
  {
    number: "02",
    title: "Try your demo",
    body: "We stand the agent up on your own questions before you pay anything beyond the setup.",
  },
  {
    number: "03",
    title: "Get the monthly report",
    body: "Contacts handled, questions missed, the one page to add, and the labor math against your fee.",
  },
];

const whoCards = [
  {
    icon: BookOpen,
    title: "Software companies with docs",
    body: "Your documentation already holds the answers. The agent surfaces the right one the moment a user asks, and cites the page it came from.",
  },
  {
    icon: ShoppingBag,
    title: "Stores with product questions",
    body: "Sizing, shipping, returns, compatibility. The questions your team answers every day, answered at 2pm and 2am alike.",
  },
  {
    icon: Inbox,
    title: "Services with a support inbox",
    body: "The same intake and policy questions, answered before they pile up as tickets your team has to clear.",
  },
];

const faqs = [
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
    question: "Can we stop?",
    answer: "Yes. The fee continues only while the report proves value.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* Hero */}
      <section className="overflow-hidden border-b border-border bg-[#171713] text-[#f3efe7]">
        <div className="container-page grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d8a58f]">
              AI customer support agent
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-.045em] sm:text-7xl">
              Your customers ask the same questions twice.{" "}
              <span className="text-[#d8a58f]">This answers them.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Mirflow builds an AI support agent trained only on your own help pages. It answers
              in your words, around the clock, and hands anything it cannot answer to a human.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  See your own demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-black"
              >
                <Link href="#how-it-works">How it works</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/60">
              No free trial. The demo is built on your own pages, so you judge it on your real
              questions, not on a sales pitch.
            </p>
          </div>
          <div className="border border-white/20 bg-white/[.04] p-6 sm:p-8">
            <div className="flex justify-between gap-4 border-b border-white/20 pb-5 text-[10px] uppercase tracking-[.18em]">
              <span>Inside the agent</span>
              <span className="text-[#d8a58f]">How a question is handled</span>
            </div>
            <h2 className="mt-7 font-display text-3xl">From question to answer, in your words.</h2>
            <div className="mt-8 space-y-3">
              {heroFlowSteps.map((step, i) => (
                <div
                  key={step}
                  className={`flex items-center gap-4 border p-4 ${
                    i === heroFlowSteps.length - 1
                      ? "border-[#d8a58f]/60 bg-[#d8a58f]/10"
                      : "border-white/15"
                  }`}
                >
                  <span className="text-xs text-[#d8a58f]">0{i + 1}</span>
                  <span className="text-sm">{step}</span>
                  {i === heroFlowSteps.length - 1 && (
                    <ShieldCheck className="ml-auto h-5 w-5 shrink-0 text-[#d8a58f]" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              If a page does not say it, the agent does not say it. It never invents a price or a
              policy.
            </p>
          </div>
        </div>
      </section>

      {/* Assurance strip */}
      <section className="border-b border-border">
        <div className="container-page grid gap-5 py-7 text-sm sm:grid-cols-3">
          {[
            "Answers only from your published pages, and cites the page it used",
            "Anything it cannot answer goes to a human, every time",
            "The monthly report proves the value, or the fee stops",
          ].map((text) => (
            <p key={text} className="flex items-center gap-3">
              <Check className="h-4 w-4 shrink-0 text-primary" />
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container-page scroll-mt-24 py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
          How it works
        </p>
        <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
          Live in three steps.
        </h2>
        <div className="mt-12 grid gap-9 sm:grid-cols-3">
          {howSteps.map((step) => (
            <div key={step.number} className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-wider text-primary">{step.number}</p>
              <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The offer */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              The offer
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              One offer. Priced from the labor it replaces.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              $2,000 to stand it up. $500 a month after, and the monthly fee continues only while
              the report shows the agent returning more in labor than it costs. If it is not
              answering your real questions within 14 days of launch, the setup fee is refunded.
              No contract beyond that.
            </p>
            <Link
              href="/pricing"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-primary"
            >
              See full pricing details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">
                  One-time setup
                </p>
                <p className="mt-3 font-display text-5xl">$2,000</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">
                  Then monthly
                </p>
                <p className="mt-3 font-display text-5xl">
                  $500<span className="text-2xl text-muted-foreground">/mo</span>
                </p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
              {[
                "Built only from your published help pages, nothing else",
                "Setup refunded if it is not answering real questions within 14 days of launch",
                "Monthly fee continues only while the report proves value",
                "No free trial, and no contract beyond that",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="gradient" size="lg" className="mt-9 w-full">
              <Link href="/contact">
                See your own demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="container-page py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Proof</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
          Proof, not promises.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Sony&apos;s network ran an agent like this on over 30,000 customer inquiries in its
            first month and resolved about 80 percent of them. The agent was trained on the
            company&apos;s own support content, the same discipline we build with: your pages,
            your words, nothing invented.
          </p>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            <div className="flex flex-col bg-card p-6">
              <p className="font-display text-3xl">30,000+</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Customer inquiries handled in the first month
              </p>
            </div>
            <div className="flex flex-col bg-card p-6">
              <p className="font-display text-3xl">About 80%</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Of those inquiries resolved without a human
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Source:{" "}
          <a
            href="https://docsbot.ai/article/sonys-nuro-hikari-revolutionizing-customer-support-with-docsbots-ai-powered-chatbot"
            className="font-semibold text-primary"
            target="_blank"
            rel="noreferrer"
          >
            DocsBot case study, Sony Network Communications (NURO Hikari)
          </a>
          . That is a published result from a company that runs agents like this, not a Mirflow
          client result. Our own results start with our first clients, and the monthly report is
          how we will prove them.
        </p>
      </section>

      {/* Who it is for */}
      <section id="who-it-is-for" className="border-y border-border bg-secondary/50">
        <div className="container-page scroll-mt-24 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
            Who it is for
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <h2 className="max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Any business that gets the same questions twice.
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              If your team answers it every week, the agent can answer it every time.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {whoCards.map((card) => (
              <article key={card.title} className="flex flex-col bg-card p-7 sm:p-9">
                <card.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-6 font-display text-2xl">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Also from Mirflow: product two */}
      <section className="container-page py-20 sm:py-28">
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

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">FAQ</p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              Asked by owners like you.
            </h2>
          </div>
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-border pt-5">
                <dt className="text-lg font-semibold">{faq.question}</dt>
                <dd className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection
        title="Get your demo."
        description="Send your help center link. We build the agent on your pages and send back a working demo answering your most repeated questions."
        primaryLabel="Get your demo"
        primaryHref="/contact"
        secondaryLabel="See the pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
