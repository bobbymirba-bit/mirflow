import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, MapPin, Quote, Phone, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

const description =
  "Missed calls cost med spas and cosmetic dental practices real bookings. Mirflow answers every call in under 60 seconds, texts back missed calls, and books appointments for practices across Southern California.";

export const metadata: Metadata = {
  title: { absolute: "AI Receptionist for Med Spas | Mirflow" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Receptionist for Med Spas | Mirflow",
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
  "Call comes in",
  "AI answers in your clinic’s voice",
  "Qualifies the caller and books into your calendar",
  "Anything unusual routes to your staff",
];

const systemParts = [
  {
    number: "01",
    title: "Found first.",
    icon: MapPin,
    body: "Your Google Business Profile rebuilt and managed, with local SEO that puts you in front of nearby patients searching for exactly what you do.",
  },
  {
    number: "02",
    title: "Trusted on sight.",
    icon: Quote,
    body: "A review engine that asks every happy patient at the right moment, responds to every review, and keeps your rating climbing.",
  },
  {
    number: "03",
    title: "Answered in seconds.",
    icon: Phone,
    body: "An AI front desk that answers every call and text, day or night, books appointments into your calendar, and texts you the details. No caller ever reaches a dead voicemail box again.",
  },
  {
    number: "04",
    title: "Brought back.",
    icon: RotateCcw,
    body: "SMS and email reactivation campaigns that work your past patient list every month, the patients you already paid to acquire once.",
  },
];

const flowRows = [
  {
    label: "A call comes in",
    steps: [
      "Call comes in",
      "AI answers in your clinic’s voice",
      "Qualifies the caller and books into your calendar",
      "Anything unusual routes to your staff",
      "You see every conversation in a daily summary",
    ],
  },
  {
    label: "A call is missed",
    steps: [
      "Call missed",
      "Text goes out in under 60 seconds",
      "AI handles the back-and-forth",
      "Appointment booked, or handed to staff",
    ],
  },
];

const statCards = [
  {
    value: "3-6 hours",
    label: "The average time a business takes to reply to an inbound lead",
  },
  {
    value: "9x better",
    label: "Conversion when a lead gets a response in 5 minutes instead of 30 minutes",
  },
  {
    value: "15-25%",
    label: "Of weekly revenue commonly lost to no-shows",
  },
];

const startSteps = [
  {
    number: "01",
    title: "Free missed-lead audit",
    body: "We look at your Google profile, your reviews, and how your phones are actually being answered. You get the findings either way.",
  },
  {
    number: "02",
    title: "Setup, $995 one time",
    body: "Configuration, voice and script setup, calendar and phone integration, and testing with your staff. You approve the greeting and every answer before anything goes live.",
  },
  {
    number: "03",
    title: "Live within a few days",
    body: "The front desk is typically live within a few days of you approving the script, on your existing number. Nothing changes for your patients.",
  },
  {
    number: "04",
    title: "Managed, $499 a month",
    body: "Answering, missed-call text-back, follow-up sequences, a daily summary, and ongoing adjustments. We report monthly and keep tuning the system. You run your practice.",
  },
];

const foundingBenefits = [
  "Setup handled personally by the founder, in person where possible",
  "A written report after the first month: calls answered, bookings made, patients recovered",
  "Direct access to the founder while the system is tuned to your practice",
];

const faqs = [
  {
    question: "Does the AI sound like a robot?",
    answer:
      "Hear it yourself. The live call demo linked at the top of this page is the actual voice your patients will hear.",
  },
  {
    question: "Do we keep our phone number?",
    answer: "Yes. Simple call forwarding. Nothing changes for your patients.",
  },
  {
    question: "Who approves what the AI says?",
    answer:
      "You do. The greeting, the answers, the prices it can quote, and the questions it can handle are all approved by you before launch. Anything outside that list gets taken as a message and texted to your team immediately.",
  },
  {
    question: "How fast can we start?",
    answer: "The front desk is typically live within a few days of you approving the script.",
  },
  {
    question: "What happens if we stop?",
    answer:
      "The system is turned off cleanly and your number, profile, and patient list stay yours. We will walk you through exactly how everything works before you sign anything.",
  },
  {
    question: "How are patient calls and messages handled?",
    answer:
      "On the audit call we walk you through exactly which tools are used, how calls are disclosed, and how data is handled, so you can check it against your own requirements before anything goes live.",
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
              AI front desk for med spas and cosmetic dentistry
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-.045em] sm:text-7xl">
              Every lead answered in under 60 seconds.{" "}
              <span className="text-[#d8a58f]">Every searcher finds you first.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Mirflow is a Local Growth &amp; Front-Desk System for med spas and cosmetic dental
              practices in Beverly Hills, Newport Beach, and across Southern California. We
              rebuild your Google presence, turn your reviews into a growth engine, answer every
              call and text with an AI front desk, and bring your past patients back. One system,
              managed for you, by a founder who is local.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gradient">
                <Link href={siteConfig.calendlyUrl}>
                  Book your free missed-lead audit <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-black"
              >
                <Link href="https://www.instagram.com/reel/Dea-VnyDHe9/">Hear a live call demo</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/60">
              No contract to start. Begin with the free audit and judge us on what it finds.
            </p>
          </div>
          <div className="border border-white/20 bg-white/[.04] p-6 sm:p-8">
            <div className="flex justify-between gap-4 border-b border-white/20 pb-5 text-[10px] uppercase tracking-[.18em]">
              <span>Inside the front desk</span>
              <span className="text-[#d8a58f]">How a call is handled</span>
            </div>
            <h2 className="mt-7 font-display text-3xl">From ringing phone to booked appointment.</h2>
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
              You see every conversation in a daily summary. Nothing is hidden from you.
            </p>
          </div>
        </div>
      </section>

      {/* Assurance strip */}
      <section className="border-b border-border">
        <div className="container-page grid gap-5 py-7 text-sm sm:grid-cols-3">
          {[
            "Answered in under 60 seconds, day or night",
            "You approve the greeting and every answer before launch",
            "Typically live within a few days of script approval",
          ].map((text) => (
            <p key={text} className="flex items-center gap-3">
              <Check className="h-4 w-4 shrink-0 text-primary" />
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section id="problem" className="container-page scroll-mt-24 py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">The problem</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
          Missed calls cost real money.
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              When a new patient calls and gets voicemail, most of them do not leave a message.
              They call the next practice on Google. Do this quick math with your own numbers:
            </p>
            <ul className="mt-8 space-y-5">
              {[
                "Calls your front desk misses in a typical week",
                "Your average value of one new patient booking",
                "Even if only one in five of those callers would have booked, that is what walks to a competitor every week",
              ].map((label) => (
                <li key={label} className="border-b border-border pb-3 text-sm leading-relaxed">
                  {label}: <span className="text-muted-foreground">______</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
              We cannot tell you your numbers. Your phone bill and your booking calendar can. The
              free missed-lead audit pulls them together for you, free, whether you work with us
              or not.
            </p>
          </div>
          <div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {statCards.map((card) => (
                <div key={card.value} className="flex flex-col bg-card p-6">
                  <p className="font-display text-3xl">{card.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.label}</p>
                  <p className="mt-auto pt-5 text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
                    Industry benchmark
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Figures above are industry benchmarks, not Mirflow client results.
            </p>
            <p className="mt-4 leading-relaxed">
              You already pay $35-80 to generate a Botox lead. Losing it to a voicemail is the
              most expensive thing in your marketing budget.
            </p>
          </div>
        </div>
      </section>

      {/* The system */}
      <section id="system" className="border-y border-border bg-secondary/50">
        <div className="container-page scroll-mt-24 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">The system</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <h2 className="max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Four parts. One system. All managed.
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              This is what Mirflow actually is: one system that finds you, earns trust, answers
              in seconds, and brings patients back.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            {systemParts.map((part) => (
              <article key={part.number} className="flex flex-col bg-card p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary">{part.number} / THE SYSTEM</span>
                  <part.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-8 font-display text-3xl">{part.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{part.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-border bg-card p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">
              How the front desk handles a call
            </p>
            {flowRows.map((row) => (
              <div key={row.label} className="mt-8">
                <h3 className="font-display text-xl">{row.label}</h3>
                <ol className="mt-4 flex flex-wrap items-center gap-2">
                  {row.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="border border-border bg-secondary/60 px-3 py-2 text-sm">
                        {step}
                      </span>
                      {i < row.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You stay in control */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              You stay in control
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              The AI works inside a script you approved.
            </h2>
            <ShieldCheck className="mt-8 h-8 w-8 text-primary" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              The AI never diagnoses, never gives medical advice, and never prices a procedure it
              has not been given. Anything outside its script goes to a human.
            </p>
            <p>
              You approve the greeting, the answers, the prices it can quote, and the questions it
              can handle before launch. You read every transcript. You can turn it off from your
              phone.
            </p>
          </div>
        </div>
      </section>

      {/* How it starts */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-page py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
            How it starts
          </p>
          <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
            From audit to live in four steps.
          </h2>
          <div className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {startSteps.map((step) => (
              <div key={step.number} className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-wider text-primary">{step.number}</p>
                <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Pricing</p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              One plan. In the open.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              This is the whole price structure, published here. No tiers and no hidden fees.
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
                <p className="mt-3 font-display text-5xl">$995</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">
                  Then monthly
                </p>
                <p className="mt-3 font-display text-5xl">
                  $499<span className="text-2xl text-muted-foreground">/mo</span>
                </p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
              {[
                "The full system configured for your practice",
                "Answering, text-back, follow-up, and a daily summary",
                "No contract. Cancel any time.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="gradient" size="lg" className="mt-9 w-full">
              <Link href={siteConfig.calendlyUrl}>
                Book your free missed-lead audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr]">
          <div>
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
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              Meet the founder
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              Bobby Mir, founder, Mirflow.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I am based in Beverly Hills and Newport Beach, and I built Mirflow because I kept
              watching great local practices lose patients to a ringing phone. I set up every
              system myself, I come to your practice in person, and the monthly report you get
              comes from me, not a dashboard you have to decode. When something needs attention,
              you call me.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Client program */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              Founding Client program
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
              Our first case studies are being written now.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Mirflow is new, and we would rather show you than tell you. We are opening a small
              number of Founding Client spots for med spas and cosmetic dental practices in
              Southern California.
            </p>
            <Link
              href="/case-studies"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-primary"
            >
              How the Founding Client program works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold">Founding Clients get:</p>
            <ul className="mt-4 space-y-3">
              {foundingBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              In return, we ask one thing: permission to publish your results, with your name,
              once the system has real numbers to show. No invented testimonials, no borrowed
              logos. Our first results pages will be built from Founding Client reports, and they
              will be real.
            </p>
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
