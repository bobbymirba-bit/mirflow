import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { BookACall } from "@/components/book-a-call";
import { AutomationPipeline } from "@/components/visuals/automation-pipeline";
import { HeroCanvas } from "@/components/visuals/hero-canvas";
import { IntegrationsMarquee } from "@/components/visuals/integrations-marquee";
import { OpsConsole } from "@/components/visuals/ops-console";
import { siteConfig } from "@/lib/site-config";

const primaryButton =
  "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden border-b border-white/[0.07]"
      >
        {/* particle network background */}
        <HeroCanvas className="absolute inset-0 h-full w-full opacity-40" />

        {/* grid + glow overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_30%_40%,black_30%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,.13),transparent_70%)]"
        />

        <div className="container-page relative grid min-w-0 gap-10 py-20 sm:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="min-w-0">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Your all-in-one digital team
            </p>
            <h1
              id="hero-title"
              className="mt-4 max-w-2xl text-balance font-display text-[2.75rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl"
            >
              We run your digital side.{" "}
              <span className="text-gradient">You run your business.</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mirflow is your all-in-one digital partner. We handle your website, social
              media, LinkedIn outreach, ads, email and SMS marketing, SEO, AI workflows,
              and 24/7 voice agents, so you can focus on running your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <BookACall className={primaryButton} />
              <Link
                href="/#walkthrough"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Or get a free digital audit <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Explore services <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <OpsConsole className="min-w-0" />
        </div>
      </section>

      {/* ── Pricing strip ── */}
      <section
        id="pricing"
        aria-label="How the engagement works"
        className="scroll-mt-28 border-b border-white/[0.07] bg-secondary/40 md:scroll-mt-16"
      >
        <div className="container-page grid gap-6 py-10 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-primary">One setup fee</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We agree on the scope, build your website and systems, and connect the channels you want us to manage.
            </p>
          </div>
          <div>
            <p className="font-semibold text-primary">One monthly retainer</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We manage the ongoing work, keep your content and campaigns moving, and report on how the whole system is performing.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 sm:col-span-2"
          >
            See packages, what&rsquo;s included, and what&rsquo;s not <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── Automation pipeline showcase ── */}
      <section
        aria-labelledby="pipeline-heading"
        className="border-b border-white/[0.07] bg-background py-16 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How the work flows
            </p>
            <h2
              id="pipeline-heading"
              className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              AI does the routine work. Your team handles what matters.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mirflow connects your inboxes, forms, and systems of record. Documents get
              extracted and checked automatically. Exceptions go to the right person with
              context already attached.
            </p>
          </div>
          <AutomationPipeline className="mt-10" />
        </div>
      </section>

      {/* ── Integrations marquee ── */}
      <IntegrationsMarquee />

      {/* ── Services link cards ── */}
      <section
        id="services"
        aria-label="Explore Mirflow"
        className="scroll-mt-28 border-b border-white/[0.07] bg-background md:scroll-mt-16"
      >
        <div className="container-page grid gap-4 py-12 sm:grid-cols-2">
          <Link
            href="/services"
            className="spotlight relative overflow-hidden rounded-2xl border border-white/[0.08] bg-secondary/60 p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">
              Explore our services <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" />
            </span>
            <span className="mt-2 block text-sm text-muted-foreground">
              See what we build, run, and improve for you.
            </span>
          </Link>
          <Link
            id="demos"
            href="/ai-receptionist"
            className="spotlight relative overflow-hidden rounded-2xl border border-white/[0.08] bg-secondary/60 p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">
              Hear the AI receptionist <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" />
            </span>
            <span className="mt-2 block text-sm text-muted-foreground">
              Listen to the real Grok voice and see how it handles calls.
            </span>
          </Link>
        </div>
      </section>

      {/* ── Founder ── */}
      <section
        id="founder"
        aria-labelledby="founder-heading"
        className="scroll-mt-28 border-b border-white/[0.07] bg-secondary/30 md:scroll-mt-16"
      >
        <div className="container-page py-14 sm:py-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Founder-led in Southern California
          </p>
          <h2
            id="founder-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight"
          >
            Good service is an operating habit
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I&rsquo;m Bobby Mir, founder of Mirflow. I spent 11 years in luxury hospitality
            and earned my MBA at USC Marshall. That experience shapes how I work. I care
            about what customers see, how quickly someone gets back to them, and whether
            your team has a process it can rely on when things get busy.
          </p>
        </div>
      </section>

      {/* ── CTA / walkthrough ── */}
      <section
        id="walkthrough"
        aria-labelledby="contact-heading"
        className="scroll-mt-28 bg-background md:scroll-mt-16"
      >
        <div className="container-page relative overflow-hidden py-20 sm:py-28">
          {/* background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,.14),transparent_60%)]"
          />
          <div className="relative">
            <h2
              id="contact-heading"
              className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Start with a free digital audit
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about your business and the digital work you want off your plate.
              We&rsquo;ll review what you have, identify the gaps, and talk through a plan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <BookACall className={primaryButton} />
              <a
                href={siteConfig.contactEmail}
                className="text-sm font-semibold text-primary underline underline-offset-4"
              >
                Or email Bobby for a free audit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
