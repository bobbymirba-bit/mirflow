import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI support agent for local service businesses",
  description:
    "Med spas, dentists, HVAC, and plumbing companies lose leads to slow replies and missed calls. Mirflow builds a free demo AI agent from your own website FAQ that answers instantly and hands off to a human when unsure.",
  alternates: { canonical: "/local-services" },
};

const industries = [
  {
    name: "Med spas",
    pain: "Booking questions come in after hours, and by the time staff replies the lead has already called a competitor.",
  },
  {
    name: "Dentists",
    pain: "The front desk is juggling patients in the chair and can't get to every insurance or new-patient question right away.",
  },
  {
    name: "HVAC",
    pain: "Emergency calls and routine quote requests both land in the same inbox, and the urgent ones wait too long.",
  },
  {
    name: "Plumbing",
    pain: "Most inquiries are the same handful of questions — pricing, availability, service area — answered one text at a time.",
  },
];

const proofPoints = [
  { stat: "9x", body: "higher conversion replying within 5 minutes vs. the typical 30-minute reply window" },
  { stat: "3–6 hrs", body: "average small-business reply time to a new inbound lead" },
  { stat: "12–18%", body: "typical lead-to-customer rate without any follow-up automation" },
  { stat: "15–25%", body: "of local-service revenue lost to no-shows that a timely reminder or answer could prevent" },
];

export default function LocalServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-16 border-b border-border">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">For local service businesses</p>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Answer every customer question, even when your front desk can&apos;t.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
              Mirflow builds an AI agent from your own website or FAQ that answers booking, pricing, and service
              questions instantly, cites where the answer came from, and hands off to a person when it isn&apos;t
              sure. Same product powering our software customers — built for med spas, dentists, HVAC, and plumbing
              instead.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#demo" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                Get a free demo agent
              </Link>
              <Link href="/#example" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground/80 hover:border-primary hover:text-primary">
                See a live example
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-semibold">What it handles for you</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>&ldquo;Do you take my insurance?&rdquo; / &ldquo;What&apos;s your price range?&rdquo;</li>
              <li>&ldquo;Are you open Saturday?&rdquo; / &ldquo;Do you service my area?&rdquo;</li>
              <li>&ldquo;Can I book a consult this week?&rdquo;</li>
              <li>Anything outside your FAQ gets handed to a real person — nothing is guessed.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Where this fits */}
      <section className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Where this fits</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The pattern is the same across local service businesses: a handful of repeat questions, a small team,
            and leads that go cold the longer they wait.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div key={i.name} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold">{i.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Why speed matters</h2>
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

      {/* Pricing (same product, same pricing as the main offer) */}
      <section className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-3 text-sm text-muted-foreground">Same pricing as our software customers — nothing different for local businesses.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Free demo agent</h3>
              <p className="mt-2 text-3xl font-semibold">Free</p>
              <p className="mt-3 text-sm text-muted-foreground">A demo agent built on your website FAQ, on a private link. No obligation.</p>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-card p-6">
              <h3 className="font-semibold">Launch</h3>
              <p className="mt-2 text-3xl font-semibold">$1,500 <span className="text-base font-normal text-muted-foreground">one-time</span></p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Load your full FAQ and service pages</li>
                <li>Add a hand-off to a human</li>
                <li>Install it on your site</li>
              </ul>
              <p className="mt-4 rounded-lg bg-primary/10 p-3 text-sm">
                <strong>Founding offer:</strong> Launch for <strong>$750</strong> for the first 3 clients, in exchange for being a reference.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Care</h3>
              <p className="mt-2 text-3xl font-semibold">$299<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Content refreshes</li>
                <li>Monthly report of unanswered questions</li>
                <li>Fixes</li>
              </ul>
            </div>
          </div>
          <Link href="/#demo" className="mt-8 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">
            Get a free demo agent built on your FAQ
          </Link>
        </div>
      </section>

      {/* CTA / contact */}
      <section className="scroll-mt-16">
        <div className="container-page py-14 sm:py-20 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Not sure if this fits your business?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Send us your website or FAQ page and we&apos;ll tell you plainly whether a demo agent makes sense.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Email <a className="text-primary" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
            <a className="text-primary" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
