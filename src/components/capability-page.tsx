import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProcessSteps } from "@/components/process-steps";
import { capabilities, type Capability } from "@/data/capabilities";
import { siteConfig } from "@/lib/site-config";

export function CapabilityPage({ capability }: { capability: Capability }) {
  const path = `/${capability.slug}`;
  const related = capabilities.filter((item) => item.slug !== capability.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: capability.name,
      serviceType: capability.label,
      description: capability.metaDescription,
      url: `${siteConfig.url}${path}`,
      provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: capability.name,
        itemListElement: capability.offerings.map((offering) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: offering.title, description: offering.description },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: capability.label, item: `${siteConfig.url}${path}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: capability.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section aria-labelledby="capability-heading" className="border-b border-border">
        <div className="container-page pb-16 pt-10 sm:pb-24 sm:pt-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#capabilities" className="hover:text-foreground">
                  Capabilities
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {capability.label}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                <Icon name={capability.icon} className="h-4 w-4" aria-hidden="true" />
                {capability.name}
              </p>
              <h1
                id="capability-heading"
                className="mt-5 text-balance font-display text-[40px] font-normal leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl"
              >
                {capability.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {capability.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gradient" size="lg">
                  <Link href={siteConfig.assessmentHref}>
                    Book an AI Assessment
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/contact?interest=${capability.slug}`}>
                    Discuss {capability.label}
                  </Link>
                </Button>
              </div>
            </div>

            <aside
              aria-label="Who this is for"
              className="self-start border border-border bg-card p-6 sm:p-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Built for
              </p>
              <ul className="mt-5 space-y-4">
                {capability.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section aria-labelledby="offerings-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What we do
            </p>
            <h2
              id="offerings-heading"
              className="mt-4 text-balance font-display text-[32px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            >
              {capability.label} services
            </h2>
          </div>
          <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capability.offerings.map((offering, index) => (
              <li key={offering.title} className="bg-background p-6 sm:p-8">
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-normal leading-tight tracking-[-0.02em] text-foreground">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {offering.description}
                </p>
              </li>
            ))}
          </ul>

          {capability.examples ? (
            <div className="mt-14 grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-foreground">
                {capability.examples.heading}
              </h3>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {capability.examples.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-border py-4 text-sm leading-relaxed text-foreground"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {/* Scope note for regulated domains */}
      {capability.guardrail ? (
        <section aria-labelledby="guardrail-heading" className="border-b border-border bg-secondary/60">
          <div className="container-page grid gap-6 py-12 sm:py-16 lg:grid-cols-[0.6fr_1.4fr]">
            <h2
              id="guardrail-heading"
              className="flex items-start gap-3 font-display text-2xl font-normal tracking-[-0.02em] text-foreground"
            >
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {capability.guardrail.title}
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80">
              {capability.guardrail.body}
            </p>
          </div>
        </section>
      ) : null}

      {/* Process */}
      <section aria-labelledby="process-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How we work
            </p>
            <h2
              id="process-heading"
              className="mt-4 text-balance font-display text-[32px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            >
              A clear path from first conversation to working system
            </h2>
          </div>
          <ProcessSteps steps={capability.process} className="mt-12" />
        </div>
      </section>

      {/* Deliverables + FAQ */}
      <section aria-labelledby="deliverables-heading" className="border-b border-border">
        <div className="container-page grid gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Typical deliverables
            </p>
            <h2
              id="deliverables-heading"
              className="mt-4 font-display text-3xl font-normal tracking-[-0.03em] sm:text-4xl"
            >
              What you walk away with
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {capability.deliverables.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Deliverables are tailored to each engagement and confirmed in writing before work begins.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Questions
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.03em] sm:text-4xl">
              Frequently asked
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={capability.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Related capabilities */}
      <section aria-labelledby="related-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <h2
            id="related-heading"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Related capabilities
          </h2>
          <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug} className="bg-background">
                <Link
                  href={`/${item.slug}`}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-card"
                >
                  <span className="flex items-center justify-between">
                    <Icon name={item.icon} className="h-5 w-5 text-primary" aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-6 font-display text-xl text-foreground">{item.label}</span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        eyebrow={capability.label}
        title={capability.cta.title}
        description={capability.cta.description}
        secondaryLabel={`Ask about ${capability.label}`}
        secondaryHref={`/contact?interest=${capability.slug}`}
      />
    </>
  );
}
