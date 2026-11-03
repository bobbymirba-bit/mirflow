import Link from "next/link";

import { AuditForm } from "@/components/audit-form";
import { comparisonRows } from "@/data/comparison";
import { processSteps } from "@/data/process";
import { proofPoints } from "@/data/proof-points";
import { servicePillars } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

const trustBadges = ["24/7 Voice Coverage", "Multi-Platform Reach", "0 Wasted Hours"];

const pocketFeed = [
  { label: "New lead", body: "Sarah M. — med spa consult request", tag: "Lead" },
  { label: "Missed call recovered", body: "AI answered, qualified, and booked 2:14 PM", tag: "Voice AI" },
  { label: "This week", body: "$340 ad spend → 12 qualified leads", tag: "Ads" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">For business owners who want their time back</p>
              <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Your entire digital presence, handled. Total business growth in your pocket.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
                We handle your entire digital ecosystem — web design & remodels, omnichannel social media,
                email marketing, SEO, AI workflows, and 24/7 AI voice agents — so you can focus 100% on
                running your business while having real-time operational clarity right in your pocket.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/#audit" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                  Get Free Digital Audit
                </Link>
                <Link href="/#services" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground/80 hover:border-primary hover:text-primary">
                  See what&apos;s included
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {trustBadges.map((b) => (
                  <span key={b} className="inline-flex items-center gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h2 id="audit" className="mb-4 text-lg font-semibold">Get Your Free Digital Audit</h2>
              <AuditForm source="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Services bento grid */}
      <section id="services" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What&apos;s included</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Three pillars, run as one system.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {servicePillars.map((pillar) => (
              <div key={pillar.id} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {pillar.letter}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.summary}</p>
                <ul className="mt-5 space-y-4">
                  {pillar.items.map((item) => (
                    <li key={item.title} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pocket Command */}
      <section id="pocket-command" className="scroll-mt-16 border-b border-border">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Pocket Command</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Total command without the clutter. Track leads, voice calls, and revenue directly from your phone.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every lead that comes in, every call your AI voice agent answers, every dollar your ads spend —
              it lands in one feed on your phone. No dashboards to learn, no logging into six different tools.
            </p>
          </div>
          <div className="mx-auto w-full max-w-xs rounded-[2rem] border border-border bg-card p-3 shadow-sm">
            <div className="rounded-[1.5rem] border border-border bg-background p-4">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mirflow Live Feed</p>
              <div className="mt-4 space-y-3">
                {pocketFeed.map((item) => (
                  <div key={item.body} className="rounded-xl border border-border bg-card p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{item.tag}</span>
                      <span className="text-[10px] text-muted-foreground">{item.label}</span>
                    </div>
                    <p className="mt-1.5 text-sm">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us comparison */}
      <section className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Why business owners choose Mirflow</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold"> </th>
                  <th className="p-4 font-semibold text-muted-foreground">Hiring In-House</th>
                  <th className="p-4 font-semibold text-muted-foreground">Freelancers / Agencies</th>
                  <th className="p-4 font-semibold text-primary">Mirflow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-medium">{row.dimension}</td>
                    <td className="p-4 text-muted-foreground">{row.inHouse}</td>
                    <td className="p-4 text-muted-foreground">{row.freelancers}</td>
                    <td className="p-4 font-medium">{row.mirflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {processSteps.map((s) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {s.step}
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case studies / proof points */}
      <section id="case-studies" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What the math looks like</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Industry-level numbers for businesses without a system like this in place yet. Client-specific
            case studies are added here as they&apos;re completed.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((p) => (
              <div key={p.body} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-semibold text-primary">{p.stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Audit CTA */}
      <section className="scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Pricing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Setup</h3>
              <p className="mt-2 text-3xl font-semibold">${siteConfig.pricing.setupFee.toLocaleString()} <span className="text-base font-normal text-muted-foreground">one-time</span></p>
              <p className="mt-3 text-sm text-muted-foreground">The audit, the rebuild, and wiring up your AI voice agent and CRM.</p>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-card p-6">
              <h3 className="font-semibold">Monthly retainer</h3>
              <p className="mt-2 text-3xl font-semibold">${siteConfig.pricing.monthlyRetainer.toLocaleString()} <span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <p className="mt-3 text-sm text-muted-foreground">Hosting, all-platform social management, email & SMS automation, SEO, your AI voice agent, and CRM automation — one flat fee.</p>
            </div>
          </div>
          <Link href="/#audit" className="mt-8 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
