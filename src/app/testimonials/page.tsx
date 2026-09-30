import type { Metadata } from "next";
import { Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CtaSection } from "@/components/cta-section";
import { testimonials, videoTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Founding clients: testimonials coming soon. Mirflow only publishes verified, named customer quotes.",
  openGraph: {
    title: `Testimonials | ${siteConfig.name}`,
    description: "Founding clients: testimonials coming soon.",
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
              Founding clients: testimonials coming soon
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              We&apos;re early, and we only publish verified, named customer quotes shared
              with permission. They&apos;ll appear here as founding clients go live.
            </p>
          </div>
        </div>
      </section>

      {/* Video testimonials (rendered only once verified ones exist) */}
      {videoTestimonials.length > 0 ? (
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
      ) : null}

      {/* Written testimonials (rendered only once verified ones exist) */}
      {testimonials.length > 0 ? (
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
      ) : null}

      <CtaSection
        title="Want to be one of our first clients?"
        description="Tell us about your business and the workflow you want handled. We'll recommend a first system and quote it."
        primaryLabel="Tell us what you need"
        primaryHref="/quote"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
