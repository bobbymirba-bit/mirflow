import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { DigitalOverview } from "@/components/digital-overview";
import { siteConfig } from "@/lib/site-config";

const primaryButton = "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110";

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-title" className="border-b border-border blue-hero">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Your all-in-one digital team</p>
            <h1 id="hero-title" className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
              We run your digital side. You run your business.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We build and manage your website, publish your social content, run LinkedIn outreach and ads, and put AI to work
              answering calls and following up with leads. You get one team to run it, track what&rsquo;s working, and keep it moving.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Link href="/#walkthrough" className={primaryButton}>
                Talk to Bobby <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-primary">
                Explore services <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <DigitalOverview />
        </div>
      </section>

      <section id="services" aria-label="Explore Mirflow" className="scroll-mt-28 border-b border-border bg-card md:scroll-mt-16">
        <div className="container-page grid gap-4 py-12 sm:grid-cols-2">
          <Link id="pricing" href="/services" className="scroll-mt-28 rounded-2xl border border-border bg-background p-6 shadow-sm shadow-blue-950/5 transition-colors hover:border-primary hover:bg-secondary/60 md:scroll-mt-16">
            <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">Explore our services <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" /></span>
            <span className="mt-2 block text-sm text-muted-foreground">See what we build, run, and improve for you.</span>
          </Link>
          <Link id="demos" href="/ai-receptionist" className="scroll-mt-28 rounded-2xl border border-border bg-background p-6 shadow-sm shadow-blue-950/5 transition-colors hover:border-primary hover:bg-secondary/60 md:scroll-mt-16">
            <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">Hear the AI receptionist <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" /></span>
            <span className="mt-2 block text-sm text-muted-foreground">Listen to the real Grok voice and see how it handles calls.</span>
          </Link>
        </div>
      </section>

      <section id="founder" aria-labelledby="founder-heading" className="scroll-mt-28 border-b border-border bg-card md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Founder-led in Southern California</p>
          <h2 id="founder-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight">Good service is an operating habit</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I&rsquo;m Bobby Mir, founder of Mirflow. I spent 11 years in luxury hospitality and earned my MBA at USC Marshall.
            That experience shapes how I work. I care about what customers see, how quickly someone gets back to them,
            and whether your team has a process it can rely on when things get busy.
          </p>
        </div>
      </section>

      <section id="walkthrough" aria-labelledby="contact-heading" className="scroll-mt-28 bg-secondary/40 md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 id="contact-heading" className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">What would you take off your plate first?</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tell me what you want to grow and what&rsquo;s taking up too much of your team&rsquo;s time. We&rsquo;ll talk through where Mirflow can help.
          </p>
          <a href={siteConfig.contactEmail} className={`mt-6 ${primaryButton}`}>
            Email Bobby <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
