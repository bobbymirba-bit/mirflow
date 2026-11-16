import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { faqs, faqCategories } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about how Mirflow AI works, implementation timelines, pricing, technical integrations, and data security.",
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description: "Answers to common questions about how Mirflow AI works.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">FAQ</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Everything you need to know before booking a call — how Mirflow works,
              what it costs, and how we handle your data.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-14">
            {faqCategories.map((category) => {
              const categoryFaqs = faqs.filter((faq) => faq.category === category);
              if (categoryFaqs.length === 0) return null;
              return (
                <Reveal key={category}>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {category}
                  </h2>
                  <div className="mt-4">
                    <FaqAccordion faqs={categoryFaqs} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        title="Still have questions?"
        description="Book a 30-minute call and we'll walk through anything that's still unclear — no obligation."
      />
    </>
  );
}
