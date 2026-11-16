import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { BookACall } from "@/components/book-a-call";
import { FrontDeskDemos } from "@/components/front-desk-demos";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { DigitalOverview } from "@/components/digital-overview";
import { AutomationPipeline } from "@/components/visuals/automation-pipeline";
import { HeroCanvas } from "@/components/visuals/hero-canvas";
import { IntegrationsMarquee } from "@/components/visuals/integrations-marquee";
import { SpotlightCard } from "@/components/visuals/spotlight-card";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-white/5">
        <HeroCanvas className="absolute inset-0 h-full w-full opacity-80" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background via-background/85 to-transparent lg:w-[58%]" />
        <div aria-hidden className="pointer-events-none absolute -top-56 left-1/2 h-[40rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.28),transparent)] blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="container-page relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Badge variant="brand">Your all-in-one digital team</Badge>
            <h1 id="hero-title" className="mt-5 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-6xl">
              We run your digital side. <span className="text-gradient">You run your business.</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mirflow is your all-in-one digital partner. We handle your website, social media, LinkedIn outreach, ads,
              email and SMS marketing, SEO, AI workflows, and 24/7 voice agents, so you can focus on running your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <BookACall className="btn-primary px-5 py-3" />
              <Link href="/#walkthrough" className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-primary">
                Or get a free digital audit <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-primary">
                Explore services <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <Reveal delay={0.12} className="relative min-w-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_180deg,rgba(34,211,238,.28),rgba(99,102,241,.28),rgba(168,85,247,.28),rgba(34,211,238,.28))] opacity-70 blur-2xl animate-spin-slow motion-reduce:animate-none"
            />
            <DigitalOverview />
          </Reveal>
        </div>
      </section>

      <section id="pricing" aria-label="How the engagement works" className="scroll-mt-28 border-b border-white/5 bg-black/30 md:scroll-mt-16">
        <div className="container-page grid gap-6 py-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-primary">One setup fee</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We agree on the scope, build your website and systems, and connect the channels you want us to manage.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-primary">One monthly retainer</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We manage the ongoing work, keep your content and campaigns moving, and report on how the whole system is performing.</p>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 sm:col-span-2">
            See packages, what&rsquo;s included, and what&rsquo;s not <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="connect-heading" className="container-page py-16 sm:py-24">
        <Reveal>
          <h2 id="connect-heading" className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            How it connects
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-8">
          <AutomationPipeline />
        </Reveal>
      </section>

      <IntegrationsMarquee />

      <section id="services" aria-label="Explore Mirflow" className="scroll-mt-28 border-b border-white/5 md:scroll-mt-16">
        <div className="container-page grid gap-4 py-12 sm:grid-cols-2">
          <SpotlightCard className="h-full">
            <Link href="/services" className="flex h-full flex-col p-6">
              <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">Explore our services <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" /></span>
              <span className="mt-2 block text-sm text-muted-foreground">See what we build, run, and improve for you.</span>
            </Link>
          </SpotlightCard>
          <SpotlightCard className="h-full">
            <Link href="/ai-receptionist" className="flex h-full flex-col p-6">
              <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">Hear the AI receptionist <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" /></span>
              <span className="mt-2 block text-sm text-muted-foreground">Listen to the real Grok voice and see how it handles calls.</span>
            </Link>
          </SpotlightCard>
        </div>
      </section>

      <FrontDeskDemos />

      <section id="founder" aria-labelledby="founder-heading" className="scroll-mt-28 border-b border-white/5 md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <Badge variant="brand">Founder-led in Southern California</Badge>
          <h2 id="founder-heading" className="mt-4 font-display text-3xl font-semibold tracking-tight">Good service is an operating habit</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I&rsquo;m Bobby Mir, founder of Mirflow. I spent 11 years in luxury hospitality and earned my MBA at USC Marshall.
            That experience shapes how I work. I care about what customers see, how quickly someone gets back to them,
            and whether your team has a process it can rely on when things get busy.
          </p>
        </div>
      </section>

      <section id="walkthrough" aria-labelledby="contact-heading" className="scroll-mt-28 py-16 sm:py-24 md:scroll-mt-16">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07090f] p-8 sm:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
            <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,.3),transparent)] blur-2xl animate-float motion-reduce:animate-none" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,.3),transparent)] blur-2xl animate-float motion-reduce:animate-none" />
            <div aria-hidden className="hairline-gradient absolute inset-x-10 top-0" />
            <div className="relative">
              <h2 id="contact-heading" className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Start with a free digital audit</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Tell us about your business and the digital work you want off your plate. We&rsquo;ll review what you have, identify the gaps, and talk through a plan.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <BookACall className="btn-primary px-5 py-3" />
                <a href={siteConfig.contactEmail} className="text-sm font-semibold text-primary underline underline-offset-4">
                  Or email Bobby for a free audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
