import Link from "next/link";

import { FrontDeskDemos } from "@/components/front-desk-demos";
import { FrontDeskPreview } from "@/components/front-desk-preview";
import { proofPoints } from "@/data/proof-points";
import { siteConfig } from "@/lib/site-config";

const coverage = [
  {
    title: "Answer and follow up",
    body: "Cover overflow and after-hours calls, answer common questions about your clinic, and set up text follow-up for missed calls.",
  },
  {
    title: "Give callers a clear next step",
    body: "Send your existing consult booking link or route a callback to the right person. Your team handles treatment advice and questions that need clinical judgment.",
  },
  {
    title: "See what happened",
    body: "Get a weekly summary of inquiries, bookings we can verify, and callbacks your team still needs to make. We review the workflow and adjust it with you.",
  },
];

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-title" className="border-b border-border bg-[radial-gradient(ellipse_at_85%_10%,#edd9d0,transparent_60%)]">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Managed front desk for Southern California med spas</p>
            <h1 id="hero-title" className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Your med spa can answer while you&rsquo;re with a patient.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
              Mirflow sets up and runs your after-hours and overflow front desk. We answer common questions, follow up by text,
              and give new patients a clear path to book a consultation. When someone needs your team, you&rsquo;ll know why they called.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Link href="/#walkthrough" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                Request a front desk walkthrough
              </Link>
              <Link href="/#demos" className="text-sm font-semibold underline underline-offset-4 hover:text-primary">
                Watch sample calls
              </Link>
            </div>
          </div>

          <FrontDeskPreview />
        </div>
      </section>

      <FrontDeskDemos />

      <section id="benchmarks" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What happens before the appointment matters</h2>
          <p className="mt-3 text-sm text-muted-foreground">Findings from industry research</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.stat} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-4xl font-semibold text-primary">{point.stat}</p>
                <h3 className="mt-3 font-semibold">{point.title}</h3>
                <p className="mt-2 grow text-sm text-muted-foreground">{point.body}</p>
                <a href={point.href} className="mt-4 text-sm font-medium text-primary underline underline-offset-4">
                  {point.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{siteConfig.offerName}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Start with the calls your team can&rsquo;t pick up</h2>
          <p className="mt-4 text-xl font-semibold">
            ${siteConfig.pricing.setupFee.toLocaleString("en-US")} setup + ${siteConfig.pricing.monthlyRetainer.toLocaleString("en-US")}/month
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Start with one location, the phone number your patients already use, and one path to book a consult.
            We agree on included call and text volume before you sign.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {coverage.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 max-w-3xl rounded-xl border border-border bg-secondary/40 p-5">
            <h3 className="font-semibold">A 14-day live check</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Before launch, we agree on what the front desk needs to handle and how we&rsquo;ll review it if call volume is low.
              If it still fails the agreed checks on real inquiries after 14 live days, we refund the setup fee.
            </p>
          </div>
        </div>
      </section>

      <section id="founder" className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">A front desk built with hospitality in mind</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I&rsquo;m Bobby Mir, founder of Mirflow. I spent 11 years in luxury hospitality and earned my MBA at USC Marshall.
            I bring that experience to the moments before someone walks through your door. They should get a clear answer,
            know what happens next, and feel expected when they arrive.
          </p>
        </div>
      </section>

      <section id="walkthrough" className="scroll-mt-16 bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Bring one call your team gets every week</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">We&rsquo;ll walk through how Mirflow would handle it, from the first answer to booking or a staff callback.</p>
          <a href={siteConfig.walkthroughEmail} className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Email Bobby to request a walkthrough
          </a>
        </div>
      </section>
    </>
  );
}
