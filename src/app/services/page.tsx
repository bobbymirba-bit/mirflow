import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Megaphone, Workflow } from "lucide-react";

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
    title: "Build your presence",
    icon: Globe2,
    description: "Give people a clear reason to trust you and an easy way to get in touch.",
    items: [
      ["Websites & redesigns", "Design, build, and maintain a site with search-friendly pages and a clear next step for visitors."],
      ["Social media management", "Plan, create, and publish posts consistently across the channels that matter to your business."],
    ],
  },
  {
    title: "Bring in new business",
    icon: Megaphone,
    description: "Reach the people you want to work with and learn what gets them to respond.",
    items: [
      ["LinkedIn management & outreach", "Manage your profile or company presence, publish content, and start conversations with the right prospects."],
      ["Paid ads & AI ad creative", "Run campaigns and use AI to produce and test more creative variations, with your brand and goals guiding the work."],
    ],
  },
  {
    title: "Handle the response",
    icon: Workflow,
    description: "Make sure the work you put into getting noticed leads to a useful conversation.",
    items: [
      ["AI voice receptionist", "Answer calls when your team is busy, handle routine questions, and route booking requests and callbacks."],
      ["AI workflows & follow-up", "Connect your forms, inboxes, and CRM. Route inquiries, follow up by email or text, and automate recurring tasks."],
    ],
  },
];

const steps = [
  ["Find the bottleneck", "We look at how people find you, where leads go after they reach out, and which tasks keep pulling you away from the business."],
  ["Build what matters first", "We agree on the scope and start where the work can help most, whether that’s a website, an outreach campaign, or a better way to handle calls."],
  ["Manage it together", "We run the channels and systems in scope, report what happened, and adjust based on the inquiries, conversations, and bookings we can track."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-[radial-gradient(ellipse_at_85%_10%,#edd9d0,transparent_65%)]">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Mirflow services</p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">One team for your website, marketing, and AI</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Start with the work taking up the most time, then add channels and automation as your business needs them.</p>
          <Link href="/#walkthrough" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Talk to Bobby <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section id="services" aria-labelledby="services-heading" className="scroll-mt-28 md:scroll-mt-16 border-b border-border bg-card">
        <div className="container-page py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">What we manage</p>
          <h2 id="services-heading" className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From getting found to getting back to people
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Your website, marketing, and follow-up shape the same customer experience. We manage them together so you have one team to call.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {services.map(({ title, icon: Icon, description, items }, index) => (
              <article key={title} className="rounded-2xl border border-border bg-background p-5 sm:p-6">
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
              <li key={title} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <span className="font-display text-3xl text-primary" aria-hidden="true">0{index + 1}</span>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            You get a scoped setup fee and a monthly plan for the work you want us to manage. We agree on the scope before work starts.
          </p>
        </div>
      </section>

    </>
  );
}
