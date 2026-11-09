import type { Metadata } from "next";

import { ExampleAgent } from "@/components/example-agent";
import { faq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

const title = "Help-center support agent";
const description = "A managed AI support agent for software and e-commerce teams. It answers from your published help center, cites its sources, and hands off to your team.";

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
      <section className="border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">For software and e-commerce teams</p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            An AI support agent that answers from your own help pages.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Your agent cites the page it used and hands questions it can&rsquo;t answer to your team.
          </p>
          <p className="mt-5 font-semibold">$2,000 setup + $500/month</p>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            If the agent is still failing to answer real questions after 14 live days, we refund the setup fee under the agreed terms.
          </p>
          <a href={`mailto:${siteConfig.email}?subject=Help-center%20support%20agent`} className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Email us about your help center
          </a>
        </div>
      </section>
      <section id="example" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Try the live example</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              This example searches our own FAQ. Ask a question to see the source, then try one outside the FAQ to see the handoff.
            </p>
          </div>
          <ExampleAgent />
        </div>
      </section>
      <section id="faq" className="scroll-mt-16">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
          <div className="mt-6 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
            {faq.map((entry) => (
              <details key={entry.id} id={`faq-${entry.id}`} className="scroll-mt-20 p-5">
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
