import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, Gauge, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsBar } from "@/components/stats-bar";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Mirflow",
  description:
    "Mirflow builds practical AI automation for Southern California home-service and appointment-based businesses.",
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: "Mirflow builds practical AI automation for Southern California home-service and appointment-based businesses.",
  },
};

const values = [
  {
    icon: Target,
    title: "Outcomes over demos",
    description:
      "We measure success in recovered revenue and hours saved, not in how impressive a demo looks. Every deployment ships with metrics attached.",
  },
  {
    icon: ShieldCheck,
    title: "Own the system, end to end",
    description:
      "We don't hand you a dashboard and walk away. Mirflow designs, deploys, monitors, and improves every system we build for as long as you're a customer.",
  },
  {
    icon: Gauge,
    title: "Fast without being reckless",
    description:
      "Most deployments go live in weeks, not quarters — but nothing ships without escalation paths, guardrails, and a human fallback built in.",
  },
  {
    icon: Users,
    title: "Built around your workflow",
    description:
      "We start with how your business actually runs today, not a generic template. Integrations and logic are shaped around your existing tools and team.",
  },
];

const stats = [
  { value: "SoCal", label: "Where we serve" },
  { value: "Home services", label: "First focus" },
  { value: "Appointments", label: "First focus" },
  { value: "24/7", label: "System coverage" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">About Mirflow</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Practical AI automation for Southern California businesses
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Mirflow exists because most businesses lose revenue to things that never
              needed a human in the first place — a missed call, a slow follow-up, a
              manual report. We build the systems that close those gaps and keep running
              long after launch day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/book-a-call">
                  Book your automation audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/industries">See who we help</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <StatsBar stats={stats} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <SectionHeading align="left" eyebrow="Our story" title="Why Mirflow exists" className="mx-0 max-w-xl" />
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Mirflow started with a simple observation: the businesses losing the most
                revenue to inefficiency weren&apos;t lacking effort — they were lacking systems.
                Front desks were understaffed for call volume. Sales teams were qualifying
                leads by hand. Back offices were re-keying the same data across five tools.
              </p>
              <p>
                Generic software wasn&apos;t solving this. Off-the-shelf AI tools required teams
                to configure, train, and maintain them — on top of everything else they were
                already doing. So we built Mirflow to do the opposite: design the system
                around how the business actually works, deploy it, and keep improving it
                as a standing part of the relationship, not a one-time software purchase.
              </p>
              <p>
                Today, Mirflow deploys automation across more than 40 services and 18
                industries — from AI receptionists for local service businesses to
                multi-agent systems for complex back-office operations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="How we work" title="Principles that shape every deployment" className="mb-10" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Want to find your highest-impact workflow?"
        description="Book a 30-minute call. We'll map your highest-leverage automation opportunity and show you exactly what it would look like — no obligation."
      />
    </>
  );
}
  
