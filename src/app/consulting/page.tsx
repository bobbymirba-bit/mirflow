import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "AI workflow implementation for finance and accounting firms: document intake, invoice processing, and reporting handoffs, built around human approval at every step that matters.",
  alternates: { canonical: "/consulting" },
  openGraph: {
    title: `Consulting | ${siteConfig.name}`,
    description: "AI workflow implementation for finance and accounting firms.",
  },
};

export default function ConsultingPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <Badge variant="brand">Consulting</Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            AI workflow implementation for finance and accounting firms.
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Alongside our local business work, Mirflow implements AI workflows inside finance
              and accounting practices: document intake, invoice processing, and reporting
              handoffs, built around human approval at every step that matters.
            </p>
            <p>
              This work is assessment-led. We start by mapping one recurring workflow and its
              current baseline, then scope a focused implementation. Pricing is on application,
              based on the workflow we agree to build.
            </p>
          </div>

          <Button asChild variant="gradient" size="lg" className="mt-9">
            <Link href={siteConfig.calendlyUrl}>
              Request a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <p className="mt-14 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            If you run a local service business, you are in the wrong room. Start with the{" "}
            <Link href="/" className="font-medium text-primary hover:text-primary/80">
              free missed-lead audit on the homepage
            </Link>{" "}
            instead.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
