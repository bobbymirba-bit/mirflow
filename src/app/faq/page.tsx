import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { faqs, faqCategories } from "@/data/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Mirflow's AI assessments, engagements, data protection, AI security, and AI for tax operations.",
  path: "/faq",
});

const publicFaqs = faqs.filter((faq) => faqCategories.includes(faq.category));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: publicFaqs.map((faq) => ({
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
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="How engagements work, how we protect your data, and where our work stops and professional review begins."
      />

      <section>
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl space-y-14">
            {faqCategories.map((category) => {
              const categoryFaqs = faqs.filter((faq) => faq.category === category);
              if (categoryFaqs.length === 0) return null;
              return (
                <Reveal key={category}>
                  <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-foreground">
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
        title="Have a question we didn't cover?"
        description="Book an AI Assessment and we'll talk it through in the context of your workflows, systems, and data."
      />
    </>
  );
}
