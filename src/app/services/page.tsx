import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Megaphone, Workflow } from "lucide-react";

import { BookACall } from "@/components/book-a-call";

const title = "Digital marketing and AI services";
const description = "Explore Mirflow’s website design, social media management, LinkedIn outreach, paid ads, AI ad creative, and lead follow-up services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

const services = [
  {
    id: "presence",
    title: "Build your presence",
    icon: Globe2,
    description: "Give people a clear reason to trust you and an easy way to get in touch.",
    items: [
      ["Websites & redesigns", "Design, build, and maintain your website, with local SEO and Google Maps optimization to help customers find you."],
      ["Social media management", "Plan, create, and publish posts across Instagram, TikTok, LinkedIn, Facebook, and the other channels in your plan."],
    ],
  },
  {
    id: "growth",
    title: "Bring in new business",
    icon: Megaphone,
    description: "Reach the people you want to work with and learn what gets them to respond.",
    items: [
      ["LinkedIn management & outreach", "Manage your profile or company presence, publish content, and start conversations with the right prospects."],
      ["Paid ads & AI ad creative", "Run campaigns and use AI to produce and test more creative variations, with your brand and goals guiding the work."],
    ],
  },
  {
    id: "response",
    title: "Handle the response",
    icon: Workflow,
    description: "Make sure the work you put into getting noticed leads to a useful conversation.",
    items: [
      ["AI voice receptionist", "Answer calls when your team is busy, handle routine questions, and route booking requests and callbacks."],
      ["AI workflows & follow-up", "Connect your forms, inboxes, and CRM. Run email and SMS follow-up, route inquiries, and automate recurring business tasks."],
    ],
  },
];

const steps = [
  ["Find the bottleneck", "We look at how people find you, where leads go after they reach out, and which tasks keep pulling you away from the business."],
  ["Build what matters first", "We agree on the scope and start where the work can help most, whether that’s a website, an outreach campaign, or a better way to handle calls."],
  ["We run and improve it", "We handle the day-to-day work, show you what happened, and use what we learn from inquiries, conversations, and bookings to make the next round better."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border blue-hero">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Mirflow services</p>
            <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">One team to run your website, marketing, and AI</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">We take the day-to-day work off your plate, from keeping your site current to running campaigns and making sure inquiries get a response.</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <BookACall className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110" />
              <Link href="/pricing" className="text-sm font-semibold text-primary underline underline-offset-4">
                See what it costs
              </Link>
            </div>
          </div>
          <nav aria-label="Jump to a service" className="rounded-2xl border border-border bg-card/90 p-4 shadow-lg shadow-blue-950/5 sm:p-5">
            <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-widest text-primary">Explore by goal</p>
            {services.map(({ id, title, icon: Icon }) => (
              <Link key={id} href={`/services#${id}`} className="group flex items-center gap-3 rounded-xl p-2 text-sm font-semibold transition-colors hover:bg-secondary">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Icon size={17} aria-hidden="true" /></span>
                <span className="flex-1">{title}</span>
                <ArrowRight size={15} className="text-primary transition-transform motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section id="services" aria-labelledby="services-heading" className="scroll-mt-28 md:scroll-mt-16 border-b border-border bg-background">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">What we manage</p>
          <h2 id="services-heading" className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From getting found to getting back to people
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We connect the work from the first impression to the next conversation. Campaigns have somewhere to send people, and your team knows what to do when a lead comes in.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {services.map(({ id, title, icon: Icon, description, items }, index) => (
              <article id={id} key={id} className="scroll-mt-28 rounded-2xl border border-border bg-card bg-linear-to-b from-secondary/55 to-transparent to-45% p-5 shadow-sm shadow-blue-950/5 sm:p-6 md:scroll-mt-20">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary"><Icon size={21} aria-hidden="true" /></span>
                  <span aria-hidden="true" className="text-xs font-semibold tracking-widest text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <dl className="mt-5 space-y-4">
                  {items.map(([name, detail]) => (
                    <div key={name} className="border-t border-border pt-4">
                      <dt className="text-sm font-semibold">
                        {name === "AI voice receptionist" ? <Link href="/ai-receptionist" className="text-primary underline underline-offset-4">{name}</Link> : name}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
                    </div>
                  ))}
                </dl>
                {id === "response" && <Link href="/support-agent" className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4">Explore AI support and lead routing</Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" aria-labelledby="process-heading" className="scroll-mt-28 md:scroll-mt-16 border-b border-border">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">How we work</p>
          <h2 id="process-heading" className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Start where you need help. Grow from there.
          </h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map(([title, detail], index) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-blue-950/5 sm:p-6">
                <span className="font-display text-3xl text-primary" aria-hidden="true">0{index + 1}</span>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            One setup fee covers the agreed build. One monthly retainer covers ongoing management. We confirm the channels, deliverables, and pricing before work starts.
          </p>
        </div>
      </section>

    </>
  );
}
