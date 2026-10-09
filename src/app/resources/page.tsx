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
    "Free tools and field notes for deciding where AI can improve the work, how to govern it, and how to help a team adopt it.",
  openGraph: {
    title: `Resources | ${siteConfig.name}`,
    description: "Free tools and field notes for making better AI decisions.",
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
              Tools and notes for making better AI decisions
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Understand where AI can help, what needs a human checkpoint, and how to
              build capability that stays inside the company — no email required.
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
            description="Adjust the sliders to match your business and see the revenue Mirflow typically recovers."
            className="mb-10"
          />
          <RoiCalculator />
        </div>
      </section>

      <section id="readiness-quiz" className="scroll-mt-24 border-b border-border bg-secondary/20">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="AI Readiness Quiz"
            title="Is your team ready to use AI well?"
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
        description="Bring us the workflow that is slow, repetitive, or risky. We will help you choose a sensible first move."
      />
    </>
  );
}
