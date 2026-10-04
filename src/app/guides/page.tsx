import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { guides } from "@/data/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Free AI safety guides",
  description:
    "Free, plain-English guides on spotting voice-clone scam calls, checking deepfakes, setting up a family safe word, and using AI chat apps privately.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free guides"
        title="Plain-English guides to staying safe with AI"
        description={<p>Short, practical, and free. Read them yourself or share them with family.</p>}
      />
      <section aria-label="All guides" className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <ul className="grid gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-8"
                >
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    {guide.readingMinutes} minute read
                  </span>
                  <span className="mt-3 font-display text-[28px] leading-tight text-foreground group-hover:text-primary">
                    {guide.title}
                  </span>
                  <span className="mt-3 text-base leading-relaxed text-muted-foreground">{guide.summary}</span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-semibold text-primary">
                    Read the guide
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
