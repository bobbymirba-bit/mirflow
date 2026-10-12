import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { workflows, assessmentDeliverables } from "@/data/workflows";

export const metadata: Metadata = {
  title: "AI Workflow Consulting for Finance & Operations",
  description: "Find the first workflow worth automating. Mirflow helps finance and operations teams assess, build, and measure practical AI systems with human review.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <>
    <section className="overflow-hidden border-b border-border bg-[#171713] text-[#f3efe7]">
      <div className="container-page grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d8a58f]">AI for finance & operations</p>
          <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-.045em] sm:text-7xl">Less repetitive work.<br /><span className="text-[#d8a58f]">More room to think.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">Turn one slow, manual workflow into a useful AI system. We help you choose the right starting point, build around your existing tools, and keep your team in control.</p>
          <Button asChild size="lg" variant="gradient" className="mt-9"><Link href="/ai-assessment">Start your workflow assessment <ArrowRight className="h-4 w-4" /></Link></Button>
          <p className="mt-5 text-sm text-white/60">For CFOs, controllers, COOs, and firm owners.</p>
        </div>
        <div className="border border-white/20 bg-white/[.04] p-6 sm:p-8">
          <div className="flex justify-between gap-4 border-b border-white/20 pb-5 text-[10px] uppercase tracking-[.18em]"><span>Inside a better workflow</span><span className="text-[#d8a58f]">Illustrative example</span></div>
          <h2 className="mt-7 font-display text-3xl">From inbox to approval.</h2>
          <div className="mt-8 space-y-3">{["Invoice arrives", "AI prepares & checks the details", "Your team reviews exceptions", "Approved record enters your system"].map((step, i) => <div key={step} className={`flex items-center gap-4 border p-4 ${i === 2 ? "border-[#d8a58f]/60 bg-[#d8a58f]/10" : "border-white/15"}`}><span className="text-xs text-[#d8a58f]">0{i + 1}</span><span className="text-sm">{step}</span>{i === 2 && <ShieldCheck className="ml-auto h-5 w-5 shrink-0 text-[#d8a58f]" />}</div>)}</div>
          <p className="mt-6 text-sm leading-relaxed text-white/60">Measure the handling time. Keep an approval trail. Improve from a real baseline.</p>
        </div>
      </div>
    </section>
    <section className="border-b border-border"><div className="container-page grid gap-5 py-7 text-sm sm:grid-cols-3">{["Built around the tools you already use", "Human approval where it matters", "Progress measured in your workflow"].map(text => <p key={text} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-primary" />{text}</p>)}</div></section>
    <section id="workflows" className="container-page scroll-mt-24 py-20 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Where we start</p>
      <div className="mt-5 grid gap-6 lg:grid-cols-2"><h2 className="max-w-xl font-display text-4xl tracking-tight sm:text-5xl">Find the friction.<br />Start there.</h2><p className="max-w-lg text-lg leading-relaxed text-muted-foreground">A good first project has repeatable work, a clear owner, and a result you can measure. These are example starting points, tailored to your systems during assessment.</p></div>
      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">{workflows.map(w => <article key={w.id} className="flex flex-col bg-card p-7 sm:p-9"><span className="text-xs text-primary">{w.number} / WORKFLOW</span><h3 className="mt-8 font-display text-3xl">{w.title}</h3><p className="mt-5 font-medium leading-relaxed">{w.pain}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{w.solution}</p><p className="mt-6 border-t border-border pt-5 text-sm">{w.control}</p><p className="mt-4 text-xs text-muted-foreground">Measure: {w.metric}</p><Link href={`/ai-assessment?workflow=${w.id}`} className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-primary">Assess this workflow <ArrowRight className="h-4 w-4" /></Link></article>)}</div>
    </section>
    <section className="border-y border-border bg-secondary/50"><div className="container-page grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">The AI Workflow Assessment</p><h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">A clear first move.<br />Before you commit.</h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Start with a 30-minute introductory conversation. We confirm fit, then agree the scope and fee for a focused assessment before any paid work begins.</p><Link href="/ai-assessment" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary">See what you get <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-8 sm:grid-cols-2">{assessmentDeliverables.map(([title, body], i) => <div key={title} className="border-t border-border pt-5"><span className="text-xs text-primary">0{i + 1}</span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}</div></div></section>
    <section className="container-page py-20 sm:py-28"><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">From assessment to everyday use</p><h2 className="mt-5 font-display text-4xl sm:text-5xl">Build it. Use it. Keep improving it.</h2><div className="mt-12 grid gap-9 md:grid-cols-3">{[["01 / Assess", "Choose one workflow", "Map the current process, establish a baseline, and decide whether automation is worth doing."], ["02 / Implement", "Put a focused pilot to work", "Connect approved systems, test exceptions, and define human review before rollout."], ["03 / Support", "Make the improvement last", "Train the team, document ownership, and agree any ongoing monitoring and support."]].map(([step, title, body]) => <div key={step} className="border-t border-border pt-6"><p className="text-xs uppercase tracking-wider text-primary">{step}</p><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></div>)}</div></section>
    <CtaSection title="Which workflow is slowing your team down?" description="Bring one recurring bottleneck. We’ll help you work out whether AI belongs there and what a sensible first project looks like." primaryLabel="Start your assessment" primaryHref="/ai-assessment" secondaryLabel="Explore workflow examples" secondaryHref="/#workflows" />
  </>;
}
