import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { DigitalOverview } from "@/components/digital-overview";
import { proofPoints } from "@/data/proof-points";
import { frontDeskOffer, siteConfig } from "@/lib/site-config";

const primaryButton = "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110";

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-title" className="border-b border-border blue-hero">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Managed AI front desk for service businesses</p>
            <h1 id="hero-title" className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
              Luxury hospitality never keeps a guest waiting. Your business shouldn&rsquo;t either.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mirflow answers calls, texts back missed callers, and follows up with new leads, day or night.
              We build your front desk around your services, hours, and pricing, and manage it for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Link href="/#walkthrough" className={primaryButton}>
                See it built for your business <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/ai-receptionist#demos" className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-primary">
                Hear a real call <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <DigitalOverview />
        </div>
      </section>

      <section id="benchmarks" aria-labelledby="benchmarks-heading" className="border-b border-border bg-card">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why the first reply matters</p>
          <h2 id="benchmarks-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">What happens before the appointment</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {proofPoints.map((point) => (
              <article key={point.stat} className="flex flex-col rounded-2xl border border-border bg-background p-5 sm:p-6">
                <p className="font-display text-4xl font-semibold text-primary">{point.stat}</p>
                <h3 className="mt-3 font-semibold">{point.title}</h3>
                <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                <a href={point.href} className="mt-4 text-sm font-medium text-primary underline underline-offset-4">{point.source}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-28 border-b border-border bg-secondary/40 md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <div className="grid gap-7 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-9 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Start here</p>
              <h2 id="pricing-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{frontDeskOffer.name}</h2>
              <p className="mt-3 text-xl font-semibold">{frontDeskOffer.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">Month to month.</p>
              <Link href="/#walkthrough" className={`mt-6 ${primaryButton}`}>See it built for your business <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>Built for med spas, dental offices, HVAC companies, plumbers, and other businesses where a fast reply can save a sale.</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Answer calls and text back when a caller can&rsquo;t get through.</li>
                <li>Use your approved service details, hours, and pricing to answer routine questions.</li>
                <li>Follow up with leads and route booking requests or callbacks to your team.</li>
              </ul>
              <p><strong className="text-foreground">14-day setup guarantee.</strong> {frontDeskOffer.refund}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" aria-label="Explore Mirflow" className="scroll-mt-28 border-b border-border bg-card md:scroll-mt-16">
        <div className="container-page grid gap-4 py-12 sm:grid-cols-2">
          <Link href="/services" className="scroll-mt-28 rounded-2xl border border-border bg-background p-6 shadow-sm shadow-blue-950/5 transition-colors hover:border-primary hover:bg-secondary/60 md:scroll-mt-16">
            <span className="flex items-center justify-between gap-3 font-display text-2xl font-semibold">What we can add as you grow <ArrowRight size={19} className="shrink-0 text-primary" aria-hidden="true" /></span>
            <span className="mt-2 block text-sm text-muted-foreground">Add website, marketing, or workflow support once lead response is in place.</span>
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
            In hospitality, a fast response matters because people are deciding whether they can count on you.
            I bring that same discipline to how your business answers, follows up, and hands off to your team.
          </p>
        </div>
      </section>

      <section id="walkthrough" aria-labelledby="contact-heading" className="scroll-mt-28 bg-secondary/40 md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 id="contact-heading" className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">See how your front desk would handle a real inquiry</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Bring a question customers ask or a call your team often misses. We&rsquo;ll walk through how Mirflow would answer and what happens next.
          </p>
          <a href={siteConfig.contactEmail} className={`mt-6 ${primaryButton}`}>
            Email Bobby <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
