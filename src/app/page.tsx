import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";

const work = [
  { number: "01", title: "Decide what is worth building", body: "We map the work, bottlenecks, data, and risks. Then we choose the first use case that can actually change the business." },
  { number: "02", title: "Give the team a way to use it", body: "Workshops, approved workflows, reusable skills, and a named owner. The goal is capability inside the company, not dependency on a vendor." },
  { number: "03", title: "Build the system and keep improving it", body: "We implement the highest-value workflow with review paths, clear ownership, and a measurement plan. Then we help the team improve it as the tools change." },
];

const areas = ["Finance and close operations", "Tax and client document operations", "Sales and revenue workflows", "Internal knowledge and reporting", "AI governance and vendor review", "Team adoption and training"];

const principles = ["If the model is not sure, it should say so.", "Anything that moves money or reaches a client has a human checkpoint.", "We measure the workflow before we improve it.", "The client should be more capable after the engagement, not less."];

export default function Home() {
  return <>
    <section className="relative overflow-hidden border-b border-border bg-[#171713] text-[#f3efe7]">
      <div className="absolute inset-0 opacity-25"><Image src="/mirflow-editorial-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#171713] via-[#171713]/90 to-[#171713]/45" />
      <div className="container-page relative py-24 sm:py-36">
        <Badge variant="brand">AI strategy · training · systems</Badge>
        <h1 className="mt-7 max-w-5xl text-balance font-display text-5xl font-normal leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[92px]">Turn AI from scattered experiments into an operating advantage.</h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">Mirflow helps finance-heavy and operations-driven companies decide what to build, train their teams to use AI well, and install the systems that create measurable leverage.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg"><Link href="/quote">Book an AI readiness review <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-black"><Link href="/services">See how it works</Link></Button>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/45">For CFOs, controllers, COOs, and operators</p>
      </div>
    </section>

    <section className="border-b border-border bg-[#f3efe7]"><div className="container-page grid gap-10 py-16 sm:grid-cols-[.8fr_1.2fr] sm:items-start sm:py-24"><SectionHeading align="left" eyebrow="The shift" title="The tools are getting easier. Choosing well is not." className="mx-0 max-w-md" /><div className="space-y-5 text-base leading-relaxed text-[#171713]/70 sm:text-lg"><p>AI will make more implementation work accessible to the people who need it. That is good news. It also means the value moves upstream.</p><p>Mirflow helps leadership teams decide what deserves to exist, make it safe to use, and get the organization moving together.</p></div></div></section>

    <section className="container-page py-16 sm:py-28"><SectionHeading eyebrow="The operating model" title="A practical path from question to capability" description="Implementation is part of the work. It is not the whole product." /><RevealGroup className="mt-10 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-3">{work.map((item) => <RevealItem key={item.number} className="min-h-[300px] bg-[#f3efe7] p-6 sm:p-8"><p className="text-xs font-semibold text-primary">{item.number}</p><h2 className="mt-16 font-display text-3xl font-normal leading-none">{item.title}</h2><p className="mt-5 text-sm leading-relaxed text-foreground/65">{item.body}</p></RevealItem>)}</RevealGroup></section>

    <section className="border-y border-border bg-secondary/20"><div className="container-page grid gap-12 py-16 sm:grid-cols-[.8fr_1.2fr] sm:py-24"><SectionHeading align="left" eyebrow="Where we start" title="The work behind the work" className="mx-0 max-w-md" /><div className="grid gap-3 sm:grid-cols-2">{areas.map((area) => <div key={area} className="flex gap-3 border-t border-border py-4 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{area}</div>)}</div></div></section>

    <section className="container-page py-16 sm:py-28"><div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-start"><Reveal><SectionHeading align="left" eyebrow="Safe by design" title="Useful systems should know when to stop." description="We design for uncertainty, human review, clear ownership, and an exit path. No black-box confidence theater." className="mx-0 max-w-xl" /></Reveal><Reveal delay={0.1}><div className="rounded-2xl border border-border bg-card p-6 sm:p-8"><ShieldCheck className="h-6 w-6 text-primary" /><ul className="mt-6 space-y-4">{principles.map((principle) => <li key={principle} className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{principle}</li>)}</ul></div></Reveal></div></section>

    <CtaSection title="Find the first workflow worth building." description="Start with a 30-minute AI Readiness & Risk Review. We will look at where AI is already touching the business, what should come next, and what should stay human." primaryLabel="Book the review" primaryHref="/quote" secondaryLabel="Read workflow examples" secondaryHref="/case-studies" />
  </>;
}
