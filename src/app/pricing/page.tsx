import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Start with a 30-minute introductory conversation, followed by a fixed-scope AI Workflow Assessment and separately scoped implementation.",
  alternates: { canonical: "/pricing" },
};

const stages = [
  { number: "01", name: "Introductory conversation", price: "$0", suffix: "30 minutes", description: "Bring one recurring finance or operations bottleneck. We confirm whether it is a sensible assessment candidate and explain what information we would need.", features: ["One workflow discussed", "Initial fit and risk check", "No payment or commitment", "Assessment scope proposed afterward"], cta: "Request a conversation", href: "/ai-assessment" },
  { number: "02", name: "AI Workflow Assessment", price: "Fixed fee", suffix: "agreed before work begins", description: "We map the current process, establish a measurable baseline, define human checkpoints, and recommend whether to build, buy, or leave the workflow alone.", features: ["Current-state workflow map", "Business case and success measures", "Data, security, and approval boundaries", "Scoped first-project recommendation"], cta: "Start with the assessment", href: "/ai-assessment", featured: true },
  { number: "03", name: "Implementation & support", price: "Custom scope", suffix: "separate proposal", description: "If the assessment supports moving forward, we can build a focused pilot, connect approved systems, train the team, and provide ongoing support where useful.", features: ["Focused pilot or implementation", "Testing and exception handling", "Team training and documentation", "Optional ongoing improvement"], cta: "Discuss a workflow", href: "/ai-assessment" },
];

const questions = [
  ["Why isn’t there one assessment price?", "A single-team reporting workflow and a multi-system finance process require different access, interviews, and analysis. After the introductory conversation, we define the deliverables and give you one fixed fee before work begins."],
  ["Do we need to commit to implementation?", "No. The assessment stands on its own. You receive a build, buy, or skip recommendation and can decide what to do next."],
  ["Are software and AI usage included?", "Any third-party software, model usage, hosting, or integration costs are identified in the implementation proposal. Nothing is purchased on your behalf without agreement."],
  ["Can you work within a budget?", "Yes. Share the investment range and constraints during the introductory conversation. We will tell you whether a useful assessment or first project fits that range."],
];

export default function PricingPage() {
  return <>
    <section className="border-b border-border bg-[#171713] text-[#f3efe7]"><div className="container-page py-20 sm:py-28"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d8a58f]">Pricing</p><div className="mt-6 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-[-.045em] sm:text-7xl">Start with clarity.<br />Price the work you need.</h1><p className="max-w-xl text-lg leading-relaxed text-white/70">Every engagement starts with a free 30-minute conversation. We then define a focused assessment and give you a fixed fee before any paid work begins.</p></div></div></section>
    <section className="container-page py-16 sm:py-24"><div className="grid gap-px border border-border bg-border lg:grid-cols-3">{stages.map(stage => <article key={stage.number} className={`flex flex-col p-7 sm:p-9 ${stage.featured ? "bg-[#171713] text-[#f3efe7]" : "bg-card"}`}><p className={`text-xs uppercase tracking-[.18em] ${stage.featured ? "text-[#d8a58f]" : "text-primary"}`}>{stage.number} / {stage.name}</p><p className="mt-8 font-display text-4xl">{stage.price}</p><p className={`mt-2 text-sm ${stage.featured ? "text-white/55" : "text-muted-foreground"}`}>{stage.suffix}</p><p className={`mt-7 min-h-24 text-sm leading-relaxed ${stage.featured ? "text-white/70" : "text-muted-foreground"}`}>{stage.description}</p><ul className={`mt-7 space-y-3 border-t pt-6 text-sm ${stage.featured ? "border-white/20" : "border-border"}`}>{stage.features.map(feature => <li key={feature} className="flex gap-3"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${stage.featured ? "text-[#d8a58f]" : "text-primary"}`} />{feature}</li>)}</ul><Button asChild variant={stage.featured ? "gradient" : "outline"} className="mt-9 w-full"><Link href={stage.href}>{stage.cta}<ArrowRight className="h-4 w-4" /></Link></Button></article>)}</div><p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">Assessment fees depend on the workflow, systems involved, stakeholder access, and required analysis. Implementation is quoted separately so you can use the assessment without being locked into a build. Tax, legal, payment, and compliance decisions remain with your qualified professionals.</p></section>
    <section className="border-y border-border bg-secondary/50"><div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Common questions</p><h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">Know what you are buying.</h2></div><dl className="space-y-8">{questions.map(([question, answer]) => <div key={question} className="border-t border-border pt-5"><dt className="text-lg font-semibold">{question}</dt><dd className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{answer}</dd></div>)}</dl></div></section>
    <CtaSection title="Bring us one workflow." description="We’ll confirm fit, define the assessment, and give you a fixed fee before any paid work begins." primaryLabel="Request an introductory conversation" primaryHref="/ai-assessment" secondaryLabel="Explore workflow examples" secondaryHref="/#workflows" />
  </>;
}
