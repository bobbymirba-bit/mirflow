import type { Metadata } from "next";
import { Info, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CtaSection } from "@/components/cta-section";
import { testimonials, videoTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what businesses say about deploying Mirflow AI automation — from recovered revenue to hours saved every week.",
  openGraph: {
    title: `Testimonials | ${siteConfig.name}`,
    description: "See what businesses say about deploying Mirflow AI automation.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Testimonials</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              The customer experience we are building
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              We are early, so we will not pretend example quotes are verified endorsements.
              This page shows the experience and outcomes we intend to earn with founding clients.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20">
        <div className="container-page py-4">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              Example testimonial content shown for layout and design purposes. We&apos;ll
              replace these with verified, named customer quotes as they&apos;re collected.
            </p>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {videoTestimonials.map((video) => (
              <RevealItem key={video.id}>
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative flex aspect-video items-center justify-center bg-secondary/60">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-medium text-foreground">{video.thumbnailLabel}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {video.name} — {video.role}, {video.company}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Written testimonials */}
      <section>
        <div className="container-page py-16 sm:py-20">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <RevealItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Ready to write your own results?"
        description="Founding clients receive launch pricing in exchange for candid feedback and permission to publish verified results."
        primaryLabel="Apply as a founding client"
        primaryHref="/quote"
        secondaryLabel="See founding pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
