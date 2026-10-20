import { DemoForm } from "@/components/demo-form";
import { ExampleAgent } from "@/components/example-agent";
import { faq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

const steps = [
  { title: "Send your URL", body: "Share the link to your public help center or website FAQ, plus a work email." },
  { title: "We build a demo on your public pages", body: "We read only your public pages, respecting robots.txt, and build an agent that answers from them." },
  { title: "You try it on a private link", body: "Ask it the questions your customers ask. See the sources it cites and where it hands off." },
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
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">AI support agents</p>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              An AI support agent that answers only from your own help pages.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
              Mirflow builds support agents for small software and e-commerce companies. Answers come from your public help
              center, cite the source, and go to a human when the agent isn&apos;t sure. Local businesses can use their website FAQ.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Try the <a href="#example" className="font-medium text-primary underline-offset-2 hover:underline">live example</a> below, built from our own FAQ.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-lg font-semibold">Get a free demo agent built on your help center</h2>
            <DemoForm />
          </div>
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
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{i + 1}</span>
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
              <p className="mt-3 text-sm text-muted-foreground">A demo agent built on your help center, on a private link. No obligation.</p>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-card p-6">
              <h3 className="font-semibold">Launch</h3>
              <p className="mt-2 text-3xl font-semibold">$1,500 <span className="text-base font-normal text-muted-foreground">one-time</span></p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Load your full help center and docs</li>
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
          <a href="#demo" className="mt-8 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">
            Get a free demo agent built on your help center
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
            Still have a question? Email <a className="text-primary" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
            <a className="text-primary" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
