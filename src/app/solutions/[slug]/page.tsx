import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/cards/service-card";
import { IndustryCard } from "@/components/cards/industry-card";
import { CtaSection } from "@/components/cta-section";
import { BuyerDecisionPanel } from "@/components/buyer-decision-panel";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { getServiceBySlug } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.description,
    openGraph: {
      title: `${solution.name} | ${siteConfig.name}`,
      description: solution.description,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const includedServices = solution.includedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const idealForIndustries = solution.idealFor
    .map((industrySlug) => getIndustryBySlug(industrySlug))
    .filter((industry): industry is NonNullable<typeof industry> => Boolean(industry));

  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All solutions
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name={solution.icon} className="h-6 w-6" />
            </span>
            <Badge variant="outline" className="mt-5">
              Solution
            </Badge>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {solution.name}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {solution.tagline}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {solution.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href={`/quote?solution=${solution.slug}`}>
                  Get a custom quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">See packages and pricing</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading align="left" eyebrow="Outcomes" title="What this solution delivers" className="mx-0 max-w-xl" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {solution.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Included services */}
      {includedServices.length > 0 ? (
        <section className="border-b border-border bg-secondary/20">
          <div className="container-page py-16 sm:py-20">
            <SectionHeading
              align="left"
              eyebrow="What's included"
              title="Services bundled in this solution"
              className="mx-0 max-w-xl"
            />
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {includedServices.map((service) => (
                <RevealItem key={service.slug}>
                  <ServiceCard service={service} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      {/* Ideal for */}
      {idealForIndustries.length > 0 ? (
        <section className="border-b border-border">
          <div className="container-page py-16 sm:py-20">
            <SectionHeading
              align="left"
              eyebrow="Ideal for"
              title="Industries this solution fits best"
              className="mx-0 max-w-xl"
            />
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {idealForIndustries.map((industry) => (
                <RevealItem key={industry.slug}>
                  <IndustryCard industry={industry} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <BuyerDecisionPanel context={solution.name.toLowerCase()} />
      <CtaSection
        title={`Ready to deploy ${solution.name}?`}
        description="Tell us what the finished system needs to do. We'll respond with the workflow, implementation requirements, timeline, and price."
        primaryLabel="Request a detailed quote"
        primaryHref={`/quote?solution=${solution.slug}`}
        secondaryLabel="Purchase a standard plan"
        secondaryHref="/pricing"
      />
    </>
  );
}
