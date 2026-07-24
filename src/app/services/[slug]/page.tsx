import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowVisualizer } from "@/components/workflow-visualizer";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaSection } from "@/components/cta-section";
import { getServiceBySlug, getRelatedServices, services } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(slug, 3);
  const relatedIndustries = service.industries
    .map((industrySlug) => getIndustryBySlug(industrySlug))
    .filter((industry): industry is NonNullable<typeof industry> => Boolean(industry));

  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All services
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <Reveal>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <Badge variant="outline" className="mt-5">
                {service.category}
              </Badge>
              <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.tagline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gradient" size="lg">
                  <Link href="/book-a-call">
                    Book a call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">See case studies</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-glass rounded-2xl border border-border p-8 text-center">
                <p className="font-mono text-5xl font-semibold text-primary">
                  {service.roiStat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{service.roiStat.label}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Business value */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading align="left" eyebrow="Why it matters" title="The business case" className="mx-0 max-w-xl" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.businessValue}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Where this shows up
              </p>
              <ul className="mt-4 space-y-3">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="How it works" title="From setup to running system" className="mb-10" />
          <WorkflowVisualizer steps={service.workflow} />
        </div>
      </section>

      {/* Industries served */}
      {relatedIndustries.length > 0 ? (
        <section className="border-b border-border">
          <div className="container-page py-16 sm:py-20">
            <SectionHeading align="left" eyebrow="Built for" title="Industries this serves well" className="mx-0 max-w-xl" />
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40"
                >
                  <Icon name={industry.icon} className="h-4 w-4 text-primary" />
                  {industry.name}
                  <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related services */}
      {relatedServices.length > 0 ? (
        <section className="border-b border-border bg-secondary/20">
          <div className="container-page py-16 sm:py-20">
            <SectionHeading align="left" eyebrow="Related" title="Other services in this category" className="mx-0 max-w-xl" />
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <RevealItem key={related.slug}>
                  <ServiceCard service={related} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <CtaSection
        title={`Ready to put ${service.name} to work?`}
        description="Book a 30-minute call. We'll map exactly how this fits your business and what it takes to go live."
      />
    </>
  );
}
