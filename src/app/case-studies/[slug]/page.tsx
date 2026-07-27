import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Info, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowVisualizer } from "@/components/workflow-visualizer";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaSection } from "@/components/cta-section";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.client} Case Study`,
    description: study.summary,
    openGraph: {
      title: `${study.client} Case Study | ${siteConfig.name}`,
      description: study.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const servicesUsed = study.servicesUsed
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All case studies
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-display text-lg font-semibold text-foreground">
                {study.logoInitial}
              </span>
              <div>
                <p className="text-base font-semibold text-foreground">{study.client}</p>
                <Badge variant="outline" className="mt-1">
                  {study.industry}
                </Badge>
              </div>
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {study.summary}
            </h1>
            <p className="mt-5 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {study.timeframe}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/book-a-call">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/industries/${study.industrySlug}`}>
                  See {study.industry} solutions
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-mono text-3xl font-semibold text-primary sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-4">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              This is an illustrative example built from typical outcomes Mirflow produces
              for {study.industry.toLowerCase()} businesses — used to show how the workflow
              is structured and the kind of impact it produces.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading align="left" eyebrow="The problem" title="Where it started" className="mx-0 max-w-xl" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {study.problem}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading align="left" eyebrow="The solution" title="What Mirflow deployed" className="mx-0 max-w-xl" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {study.solution}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="How it works" title="The end-to-end workflow" className="mb-10" />
          <WorkflowVisualizer steps={study.workflow} />
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              &quot;{study.quote.text}&quot;
            </p>
            <p className="mt-6 text-sm font-medium text-foreground">{study.quote.author}</p>
            <p className="text-sm text-muted-foreground">{study.quote.role}</p>
          </Reveal>
        </div>
      </section>

      {/* Services used */}
      {servicesUsed.length > 0 ? (
        <section className="border-b border-border bg-secondary/20">
          <div className="container-page py-16 sm:py-20">
            <SectionHeading align="left" eyebrow="Under the hood" title="Services used in this deployment" className="mx-0 max-w-xl" />
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesUsed.map((service) => (
                <RevealItem key={service.slug}>
                  <ServiceCard service={service} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <CtaSection
        title={`Want results like ${study.client}'s for your business?`}
        description="Book a 30-minute call. We'll map the highest-leverage automation opportunity for your specific business — no obligation."
      />
    </>
  );
}
