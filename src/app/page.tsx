import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileSearch,
  Gauge,
  Layers,
  Play,
  Receipt,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { HeroCanvas } from "@/components/visuals/hero-canvas";
import { OpsConsole } from "@/components/visuals/ops-console";
import { AutomationPipeline } from "@/components/visuals/automation-pipeline";
import { DemoVideos } from "@/components/visuals/demo-videos";
import { IntegrationsMarquee } from "@/components/visuals/integrations-marquee";
import { SpotlightCard } from "@/components/visuals/spotlight-card";
import { workflows, assessmentDeliverables } from "@/data/workflows";

export const metadata: Metadata = {
  title: "AI Workflow Consulting for Finance & Operations",
  description:
    "Find the first workflow worth automating. Mirflow helps finance and operations teams assess, build, and measure practical AI systems with human review.",
  alternates: { canonical: "/" },
};

const workflowIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  finance: Receipt,
  documents: FileSearch,
  reporting: BarChart3,
};

const signals: [string, string][] = [
  ["24/7", "Always-on coverage"],
  ["< 60 s", "Missed-call text-back"],
  ["0", "Payments approved without a human"],
  ["1", "Workflow at a time, measured"],
];

const processSteps: [string, string, string, React.ComponentType<{ className?: string }>][] = [
  ["01 / Assess", "Choose one workflow", "Map the current process, establish a baseline, and decide whether automation is worth doing.", Gauge],
  ["02 / Implement", "Put a focused pilot to work", "Connect approved systems, test exceptions, and define human review before rollout.", Workflow],
  ["03 / Support", "Make the improvement last", "Train the team, document ownership, and agree any ongoing monitoring and support.", Layers],
];

export default function Home() {
  return (
    <>
      <section className="border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="container-page flex flex-col items-center gap-3 py-3 text-center sm:flex-row sm:justify-center sm:gap-5">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Which one is you?</p>
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            <span className="rounded-full bg-[linear-gradient(90deg,#22d3ee,#6366f1)] px-4 py-1.5 text-xs font-semibold text-white">
              Software & finance teams
            </span>
            <Link
              href="/local-services"
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Local service business
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5">
        <HeroCanvas className="absolute inset-0 h-full w-full opacity-80" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-56 left-1/2 h-[40rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,.28),transparent)] blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

        <div className="container-page relative grid grid-cols-1 gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-32">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur sm:text-[11px] sm:tracking-[0.18em]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                AI operating systems · finance & operations
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 max-w-3xl font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Automate the work.
                <br />
                <span className="text-gradient">Keep the control.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Mirflow turns one slow, manual workflow into a measurable AI system, built around the tools you already
                run, with your team approving what matters.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" variant="gradient">
                  <Link href="/ai-assessment">
                    Start your workflow assessment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#demos">
                    <Play className="h-4 w-4 fill-current" />
                    Watch it work
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mt-6 font-mono text-xs text-muted-foreground">
                For CFOs, controllers, COOs and firm owners · 30-minute intro call · no commitment
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative min-w-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_180deg,rgba(34,211,238,.28),rgba(99,102,241,.28),rgba(168,85,247,.28),rgba(34,211,238,.28))] opacity-70 blur-2xl animate-spin-slow"
            />
            <OpsConsole />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/5 bg-black/30">
        <RevealGroup className="container-page grid grid-cols-2 divide-white/5 md:grid-cols-4 md:divide-x">
          {signals.map(([value, label]) => (
            <RevealItem key={label} className="py-7 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="font-display text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <Badge variant="brand">
              <Workflow className="h-3 w-3" />
              How a Mirflow workflow runs
            </Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Intake to system of record.
              <br />
              <span className="text-muted-foreground">Humans on the exceptions.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Every system we install follows the same shape. AI does the reading, matching, and drafting. Your team
              reviews what falls outside the rules. Everything lands in the tools you already trust, with a trail.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-12">
          <AutomationPipeline />
        </Reveal>
        <RevealGroup className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
          {["Built around the tools you already use", "Human approval where it matters", "Progress measured in your workflow"].map((text) => (
            <RevealItem key={text}>
              <p className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                {text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section id="workflows" className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-[#070910]/60 py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="container-page relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <Badge variant="brand">
                <Sparkles className="h-3 w-3" />
                Where we start
              </Badge>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Find the friction.
                <br />
                <span className="text-gradient">Start there.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                A good first project has repeatable work, a clear owner, and a result you can measure. These are example
                starting points, tailored to your systems during assessment.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-3">
            {workflows.map((w) => {
              const Icon = workflowIcons[w.id] ?? Workflow;
              return (
                <RevealItem key={w.id} className="h-full">
                  <SpotlightCard className="h-full p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.08),transparent)] text-primary transition-colors group-hover:border-primary/40">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {w.number} / workflow
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight">{w.title}</h3>
                    <p className="mt-4 font-medium leading-relaxed">{w.pain}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.solution}</p>
                    <div className="mt-6 flex items-start gap-2 rounded-xl border border-success/20 bg-success/[0.06] p-3 text-sm">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {w.control}
                    </div>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Measure · {w.metric}
                    </p>
                    <Link
                      href={`/ai-assessment?workflow=${w.id}`}
                      className="group/link mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary"
                    >
                      Assess this workflow
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </SpotlightCard>
                </RevealItem>
              );
            })}
            <RevealItem className="lg:col-span-3">
              <SpotlightCard
                className="p-7 sm:p-8"
                contentClassName="gap-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="max-w-2xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">04 / your workflow</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    Something else slowing your team down?
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Bring one recurring bottleneck. We’ll map it, baseline it, and tell you honestly whether AI belongs
                    there.
                  </p>
                </div>
                <Button asChild variant="gradient" size="lg" className="shrink-0">
                  <Link href="/ai-assessment">
                    Start the assessment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </SpotlightCard>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <DemoVideos />

      <IntegrationsMarquee />

      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <Badge variant="brand">The AI Workflow Assessment</Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A clear first move.
              <br />
              <span className="text-muted-foreground">Before you commit.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Start with a 30-minute introductory conversation. We confirm fit, then agree the scope and fee for a
              focused assessment before any paid work begins.
            </p>
            <Link href="/ai-assessment" className="group/link mt-7 inline-flex items-center gap-2 font-semibold text-primary">
              See what you get
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {assessmentDeliverables.map(([title, body], i) => (
              <RevealItem key={title} className="h-full">
                <SpotlightCard className="h-full p-6">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 bg-[#070910]/60 py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Badge variant="brand">From assessment to everyday use</Badge>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Build it. Use it. <span className="text-gradient">Keep improving it.</span>
            </h2>
          </Reveal>
          <RevealGroup className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div
              aria-hidden
              className="pointer-events-none absolute left-5 right-5 top-5 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,.6),rgba(139,92,246,.6),transparent)] md:block"
            />
            {processSteps.map(([step, title, body, Icon]) => (
              <RevealItem key={step} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_26px_-4px_rgba(34,211,238,.75)]">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{step}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Which workflow is slowing your team down?"
        description="Bring one recurring bottleneck. We’ll help you work out whether AI belongs there and what a sensible first project looks like."
        primaryLabel="Start your assessment"
        primaryHref="/ai-assessment"
        secondaryLabel="Explore workflow examples"
        secondaryHref="/#workflows"
      />
    </>
  );
}
