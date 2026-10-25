import { DemoForm } from "@/components/demo-form";
import { ExampleAgent } from "@/components/example-agent";
import { faq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    title: "Send help-center URL + work email",
    body: "Share the link to your public help center or website FAQ, plus a work email.",
  },
  {
    title: "We build a demo from your public pages",
    body: "We read only your public pages, respecting robots.txt, and build an agent that answers from them.",
  },
  {
    title: "Try it on a private link — citations and hand-offs",
    body: "Ask it the questions your customers ask. See the sources it cites and where it hands off to a human.",
  },
];

const proofChips = [
  "[N]+ demo agents built",
  "Public pages only · no customer data for demo",
  "Sources cited on every answer",
  "Human hand-off when unsure",
];

const safety = [
  ["Answers only from your pages", "The agent uses your help center, docs, or FAQ. Nothing else."],
  ["Sources cited", "Every answer shows the page it came from, so customers and your team can check it."],
  ["Human hand-off when unsure", "If your pages don't cover it, the agent says so and passes the customer to a person."],
  ["Public pages only, robots.txt respected", "For the demo we read only what you already publish, and we follow your robots.txt."],
  ["No customer data for the demo", "No logins, tickets, or customer records are needed to build the demo agent."],
  ["You control what goes live", "Nothing is installed on your site until you approve it, and you choose the pages it uses."],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="demo" className="scroll-mt-16 border-b border-border">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              For small software &amp; e-commerce teams with a public help center
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Stop guessing what your chatbot will say.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
              Mirflow builds support agents that answer from your public help center or FAQ, cite the source, and hand
              off to a human when they aren&apos;t sure. No customer data needed for the demo.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Try the{" "}
              <a href="#example" className="font-medium text-primary underline-offset-2 hover:underline">
                live example
              </a>{" "}
              below, built from our own FAQ.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-semibold">Get a free demo agent built only on your help pages.</h2>
            <DemoForm />
          </div>
        </div>
      </section>

      {/* Proof chips */}
      <section aria-label="Product proof points" className="border-b border-border">
        <div className="container-page py-6">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
            {proofChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground sm:text-sm"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Example agent */}
      <section id="example" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Try a live example</h2>
            <p className="mt-4 text-muted-foreground">
              This is an example agent running on Mirflow&apos;s own FAQ. It matches your question against the FAQ entries and
              replies with the matching entry, showing which one it used. Ask something the FAQ doesn&apos;t cover and it will say it
              doesn&apos;t know and offer a hand-off to a human.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Your demo agent works on the same principle, built on your help center instead of ours.
            </p>
          </div>
          <ExampleAgent />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Pricing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Free demo agent</h3>
              <p className="mt-2 text-3xl font-semibold">Free</p>
              <p className="mt-3 text-sm text-muted-foreground">
                A demo agent built only on your public help pages, on a private link. No obligation.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Founding offer · 3 slots left</p>
              <h3 className="mt-2 font-semibold">Founding Launch</h3>
              <p className="mt-2 text-3xl font-semibold">
                $750{" "}
                <span className="text-base font-normal text-muted-foreground line-through">$1,500</span>{" "}
                <span className="text-base font-normal text-muted-foreground">one-time</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                For a reference: first 3 clients get Launch at $750 (was $1,500).
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Load your full help center and docs</li>
                <li>Add a hand-off to a human</li>
                <li>Install it on your site after you approve</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Care</h3>
              <p className="mt-2 text-3xl font-semibold">
                $299<span className="text-base font-normal text-muted-foreground">/mo</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Optional. Month to month.</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Content refreshes</li>
                <li>Monthly report of unanswered questions</li>
                <li>Fixes</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-muted-foreground">
            Free demo uses public pages only and respects robots.txt. No obligation. Launch is installed only after you
            approve. Care is optional at $299/mo.
          </p>
          <a href="#demo" className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">
            Get my free demo agent
          </a>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Built to stay on your script</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {safety.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (also the example agent's source entries) */}
      <section id="faq" className="scroll-mt-16 border-b border-border bg-secondary/40">
        <div className="container-page max-w-3xl py-14 sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">FAQ</h2>
          <p className="mt-3 text-sm text-muted-foreground">These are also the entries the example agent answers from.</p>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {faq.map((f) => (
              <details key={f.id} id={`faq-${f.id}`} className="group scroll-mt-20 p-5">
                <summary className="cursor-pointer list-none font-medium marker:hidden">
                  <span className="mr-2 inline-block text-primary transition group-open:rotate-45">+</span>
                  {f.question}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Still have a question? Email{" "}
            <a className="text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a className="text-primary" href={`tel:${siteConfig.phoneTel}`}>
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
