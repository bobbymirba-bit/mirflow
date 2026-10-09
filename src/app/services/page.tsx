import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "AI Strategy, Training & Systems",
  description: "Mirflow helps companies choose, adopt, govern, and implement the AI systems that matter.",
};

const offers = [
  { title: "AI Clarity Sprint", description: "A short, paid review of your workflows, tools, data, risks, and first useful AI opportunity.", features: ["Workflow and tool inventory", "Prioritized opportunity map", "Risk and governance questions", "90-day recommendation"], cta: "Book a review" },
  { title: "AI Operating System", description: "Strategy, team workshop, implementation, and internal ownership for a high-value workflow.", features: ["Leadership and team workshop", "Two or three prioritized systems", "Human review and escalation paths", "Measurement plan and baseline"], cta: "Discuss the build" },
  { title: "Embedded AI Partner", description: "Ongoing strategic direction, training, vendor review, and selective implementation.", features: ["Monthly AI roadmap review", "Team upskilling and office hours", "Vendor and risk review", "Senior ownership without a full-time hire"], cta: "Talk to Mirflow" },
];

const questions = ["Where is the work slow, repetitive, or risky?", "What data would an AI system touch?", "What should the team learn to do themselves?", "What must always have a human checkpoint?", "How will we know the workflow improved?"];

export default function ServicesPage() {
  return <>
    <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border"><div className="container-page py-20 sm:py-28"><div className="mx-auto max-w-3xl text-center"><Badge variant="brand">How Mirflow works</Badge><h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Build less. Decide better. Teach the team.</h1><p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">Implementation is part of the work. The durable value is choosing the right thing, making it safe, and leaving the organization more capable.</p><div className="mt-8"><Button asChild variant="gradient" size="lg"><Link href="/quote">Book an AI readiness review <ArrowRight className="h-4 w-4" /></Link></Button></div></div></div></section>

    <section className="container-page py-16 sm:py-24"><SectionHeading eyebrow="The offers" title="Start with the level of ownership you need" /><RevealGroup className="mt-10 grid gap-6 lg:grid-cols-3">{offers.map((offer, index) => <RevealItem key={offer.title}><div className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${index === 0 ? "border-primary bg-primary/5" : "border-border bg-card"}`}><p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">0{index + 1}</p><h2 className="mt-8 font-display text-3xl font-normal">{offer.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{offer.description}</p><ul className="mt-8 space-y-3 border-t border-border pt-6">{offer.features.map((feature) => <li key={feature} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul><Button asChild variant={index === 0 ? "gradient" : "outline"} className="mt-auto pt-6"><Link href="/quote">{offer.cta}<ArrowRight className="h-4 w-4" /></Link></Button></div></RevealItem>)}</RevealGroup></section>

    <section className="border-y border-border bg-secondary/20"><div className="container-page grid gap-12 py-16 sm:grid-cols-[.8fr_1.2fr] sm:py-24"><SectionHeading align="left" eyebrow="The first conversation" title="Good AI work starts with better questions." className="mx-0 max-w-md" /><div className="grid gap-3">{questions.map((question, index) => <div key={question} className="flex gap-4 border-t border-border py-4 text-sm"><span className="font-mono text-xs text-primary">0{index + 1}</span><span>{question}</span></div>)}</div></div></section>

    <CtaSection title="Not sure where to begin?" description="That is the point of the AI Readiness & Risk Review. We will help you decide what to build, what to buy, and what to leave alone." primaryLabel="Book the review" primaryHref="/quote" secondaryLabel="Read workflow examples" secondaryHref="/case-studies" />
  </>;
}
