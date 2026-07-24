import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsBar } from "@/components/stats-bar";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaSection } from "@/components/cta-section";
import { getIndustryBySlug, industries } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: `AI Automation for ${industry.name}`,
    description: industry.summary,
    openGraph: {
      title: `AI Automation for ${industry.name} | ${siteConfig.name}`,
      description: industry.summary,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const recommendedServices = industry.recommendedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All industries
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name={industry.icon} className="h-6 w-6" />
            </span>
            <Badge variant="outline" className="mt-5">
              Industry
            </Badge>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              AI automation for {industry.name}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {industry.summary}
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

          <div className="mt-14 border-t border-border pt-10">
            <StatsBar stats={industry.stats} />
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="left"
            eyebrow="The problem today"
            title={`What's costing ${industry.name.toLowerCase()} revenue`}
            className="mx-0 max-w-2xl"
          />
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {industry.painPoints.map((point) => (
              <RevealItem key={point}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">{point}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Recommended services */}
      {recommendedServices.length > 0 ? (
        <section className="border-b border-border bg-secondary/20">
          <div className="container-page py-16 sm:py-20">
            <SectionHeading
              align="left"
              eyebrow="Recommended"
              title="Where to start"
              description={`These are the services Cadence most often deploys first for ${industry.name.toLowerCase()} businesses.`}
              className="mx-0 max-w-2xl"
            />
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedServices.map((service) => (
                <RevealItem key={service.slug}>
                  <ServiceCard service={service} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <CtaSection
        title={`Ready to fix this for your ${industry.name.toLowerCase()} business?`}
        description="Book a 30-minute call. We'll map your highest-leverage automation opportunity and show you exactly what it would look like — no obligation."
      />
    </>
  );
}
