import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessagesSquare, Route, SlidersHorizontal } from "lucide-react";

import { ExampleAgent } from "@/components/example-agent";
import { faq } from "@/data/faq";

const title = "AI Customer Support & Lead Routing";
const description = "Mirflow builds and manages AI support as part of your all-in-one digital service. Answer routine questions, route leads, and give your team the context to follow up.";

const outcomes = [
  { title: "Give people a useful answer", detail: "Use your approved service details, hours, policies, and other business information to answer the questions people ask before they buy.", icon: MessagesSquare },
  { title: "Get inquiries to the right person", detail: "Give people a booking link, route a callback, or pass the conversation to your team with enough context to take over.", icon: Route },
  { title: "Keep it working as you grow", detail: "We set up the workflow, review where customers get stuck, and update answers and handoffs as your business changes.", icon: SlidersHorizontal },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/support-agent" },
  openGraph: { title, description, url: "/support-agent" },
  twitter: { title, description },
};

export default function SupportAgent() {
  return (
    <>
      <section className="blue-hero border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Part of your all-in-one digital service</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            We handle the path from first question to follow-up
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Mirflow builds and manages AI support around how your business actually works. We connect website chat,
            phone reception, and lead routing so customers get an answer and your team knows what to do next.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Link href="/#walkthrough" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              Talk to Bobby <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className="text-sm font-semibold text-primary underline underline-offset-4">Explore additional services</Link>
          </div>
        </div>
      </section>
      <section aria-label="What Mirflow handles" className="border-b border-border bg-background">
        <div className="container-page grid gap-4 py-10 lg:grid-cols-3">
          {outcomes.map(({ title, detail, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-blue-950/5">
              <Icon size={23} className="text-primary" aria-hidden="true" />
              <h2 className="mt-3 font-display text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="example" className="scroll-mt-28 md:scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Try the live example</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              See how a visitor gets an answer or reaches a person. This small example uses Mirflow’s own FAQ.
            </p>
          </div>
          <ExampleAgent />
        </div>
      </section>
      <section id="faq" className="scroll-mt-28 md:scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
          <div className="mt-6 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
            {faq.map((entry) => (
              <details key={entry.id} id={`faq-${entry.id}`} className="scroll-mt-28 p-5 md:scroll-mt-20">
                <summary className="cursor-pointer font-medium">{entry.question}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{entry.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
