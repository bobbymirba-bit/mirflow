import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaSection } from "@/components/cta-section";
import { serviceCategories, services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Explore Cadence's full catalog of 40+ AI automation services — conversational AI, sales automation, customer experience, documents, workflows, and advanced AI systems.",
  openGraph: {
    title: `AI Automation Services | ${siteConfig.name}`,
    description:
      "Explore Cadence's full catalog of 40+ AI automation services across every function of your business.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Services</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {services.length}+ ways to put AI to work in your business
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Every service below is deployed, monitored, and improved by Cadence — not
              a self-serve tool you have to configure yourself. Browse by category to
              find where automation will move the needle fastest.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/book-a-call">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/industries">Browse by industry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category jump links */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container-page flex flex-wrap items-center justify-center gap-2 py-6">
          {serviceCategories.map((category) => (
            <Link
              key={category}
              href={`#${slugifyCategory(category)}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {serviceCategories.map((category, index) => {
        const categoryServices = services.filter((s) => s.category === category);
        return (
          <section
            key={category}
            id={slugifyCategory(category)}
            className={index % 2 === 1 ? "bg-secondary/20" : undefined}
          >
            <div className="container-page py-16 sm:py-20">
              <SectionHeading
                align="left"
                eyebrow={`${categoryServices.length} services`}
                title={category}
                className="mx-0 max-w-2xl"
              />
              <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <RevealItem key={service.slug}>
                    <ServiceCard service={service} className="h-full" />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </section>
        );
      })}

      <CtaSection />
    </>
  );
}

function slugifyCategory(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
