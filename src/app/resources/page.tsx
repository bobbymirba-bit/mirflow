import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, ClipboardCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BlogCard } from "@/components/cards/blog-card";
import { RoiCalculator } from "@/components/calculators/roi-calculator";
import { ReadinessQuiz } from "@/components/calculators/readiness-quiz";
import { CtaSection } from "@/components/cta-section";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools and guides for evaluating AI automation: an ROI calculator, an AI readiness quiz, and articles on automation strategy, voice AI, and operations.",
  openGraph: {
    title: `Resources | ${siteConfig.name}`,
    description: "Free tools and guides for evaluating AI automation.",
  },
};

const recentPosts = blogPosts.slice(0, 3);

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Resources</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Tools and guides for evaluating automation
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Estimate your ROI, check your automation readiness, and read how other
              operators think about AI in their business — no email required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#roi-calculator"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                <Calculator className="h-4 w-4 text-primary" />
                ROI calculator
              </Link>
              <Link
                href="#readiness-quiz"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                <ClipboardCheck className="h-4 w-4 text-primary" />
                Readiness quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="roi-calculator" className="scroll-mt-24 border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="ROI Calculator"
            title="What is a missed inquiry costing you?"
            description="Adjust the sliders to match your business and see the revenue Cadence typically recovers."
            className="mb-10"
          />
          <RoiCalculator />
        </div>
      </section>

      <section id="readiness-quiz" className="scroll-mt-24 border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="AI Readiness Quiz"
            title="Is your business ready for automation?"
            description="Answer five quick questions to get a directional readiness score and recommendation."
            className="mb-10"
          />
          <div className="mx-auto max-w-3xl">
            <ReadinessQuiz />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            align="left"
            eyebrow="From the blog"
            title="Recent articles"
            className="mx-0 max-w-xl"
          />
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <RevealItem key={post.slug}>
                <BlogCard post={post} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Ready to see this applied to your business?"
        description="Book a 30-minute call. We'll map your highest-leverage automation opportunity — no obligation."
      />
    </>
  );
}
