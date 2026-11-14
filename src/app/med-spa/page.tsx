import type { Metadata } from "next";
import { PhoneCall } from "lucide-react";

import { LeadSection } from "@/components/lead-section";
import { foundingOffer, listPrice, siteConfig } from "@/lib/site-config";

const title = "AI receptionist for med spas";
const description = "An AI receptionist and missed-call text-back for med spas. Founding rate for the first three med spas: $497 setup + $500/month. All-in-one list price: $2,997 setup + $1,497/month.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/med-spa" },
  openGraph: { title, description, url: "/med-spa" },
  twitter: { title, description },
};

const leaks = [
  ["After hours", "The front desk is closed, and people still call about a consult."],
  ["During treatments", "Your team is with a client and cannot step away to answer."],
  ["Weekends", "Callers reach the practice when it is closed or lightly staffed."],
];

const duties = [
  "Answers 24/7, and says up front that the caller is speaking with an AI and that the call may be recorded.",
  "Books consults from the hours and services you approve.",
  "Texts back callers the receptionist missed.",
  "Sends the owner a summary of the call.",
  "Passes medical questions to your staff instead of answering them.",
];

const stack = [
  ["Website and local SEO", "A site people can find, with a clear way to request a consult."],
  ["Social media", "Posts planned and published on the channels in your plan."],
  ["LinkedIn outreach", "Profile content and conversations with the people you want to reach."],
  ["Paid ads and ad creative", "Campaigns and more creative variations, guided by your brand."],
  ["Email and SMS follow-up", "Messages to people who already inquired, on the schedule you approve."],
  ["AI workflows", "Routing for forms, inboxes, and the other repeat tasks you want connected."],
];

export default function MedSpaPage() {
  return (
    <>
      <section className="border-b border-border blue-hero">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Med spa receptionist</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">Never miss another after-hours call</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Mirflow sets up an AI receptionist that answers, books consults, and texts back missed callers. You hear it before anything goes on your line.
          </p>
          <a href={`tel:${siteConfig.voiceAgentTel}`} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
            <PhoneCall size={17} aria-hidden="true" /> Call the demo {siteConfig.voiceAgentPhone}
          </a>
        </div>
      </section>

      <section aria-labelledby="leaks-heading" className="border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 id="leaks-heading" className="max-w-2xl font-display text-3xl font-semibold tracking-tight">Three places calls slip</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {leaks.map(([title, detail]) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-blue-950/5 sm:p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="duties-heading" className="border-b border-border bg-background">
        <div className="container-page py-14 sm:py-20">
          <h2 id="duties-heading" className="max-w-2xl font-display text-3xl font-semibold tracking-tight">What the receptionist does</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {duties.map((duty) => (
              <li key={duty} className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed shadow-sm shadow-blue-950/5">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="offer" aria-labelledby="offer-heading" className="scroll-mt-28 border-b border-border bg-secondary/40 md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{foundingOffer.who}</p>
          <h2 id="offer-heading" className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">{foundingOffer.label}</h2>
          <p className="mt-3 text-muted-foreground">AI receptionist and missed-call text-back. List price for the all-in-one package: {listPrice.label}.</p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground">{foundingOffer.term}</p>
        </div>
      </section>

      <section aria-labelledby="stack-heading" className="border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 id="stack-heading" className="max-w-2xl font-display text-3xl font-semibold tracking-tight">What else once the receptionist is live</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The founding rate covers the receptionist and missed-call text-back. The rest of the all-in-one package is the list price, {listPrice.label}.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map(([name, detail]) => (
              <li key={name} className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-blue-950/5">
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeadSection
        id="request"
        headingId="med-spa-request"
        source="med-spa"
        heading="Tell us about your med spa"
        lede="Leave your name, business, and phone. Bobby follows up about the receptionist. Nothing is built or charged without your OK."
        showPrice={false}
      />
    </>
  );
}
