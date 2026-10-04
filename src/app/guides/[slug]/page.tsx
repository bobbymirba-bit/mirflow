import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { CtaSection } from "@/components/cta-section";
import { getGuide, guides } from "@/data/guides";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({ title: guide.title, description: guide.summary, path: `/guides/${guide.slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const others = guides.filter((item) => item.slug !== guide.slug);
  const updated = new Date(`${guide.updated}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.summary,
          dateModified: guide.updated,
          author: { "@type": "Organization", name: siteConfig.legalName },
          publisher: { "@type": "Organization", name: siteConfig.legalName },
          mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}`,
        }}
      />
      <article className="border-b border-border">
        <div className="container-page py-12 sm:py-16">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-base text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All guides
          </Link>
          <header className="mt-8 max-w-3xl">
            <h1 className="text-balance font-display text-[40px] font-normal leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{guide.summary}</p>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {guide.readingMinutes} minute read
              </span>
              <span>Updated {updated}</span>
            </p>
          </header>

          <div className="mt-12 max-w-3xl space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-3xl font-normal tracking-[-0.02em] text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-relaxed text-foreground/85">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <p className="mt-14 max-w-3xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            This guide is general education, not legal or financial advice. If you think you&apos;ve
            been scammed, call your bank first, then report it at{" "}
            <a href="https://reportfraud.ftc.gov" className="underline underline-offset-4" rel="noopener noreferrer" target="_blank">
              ReportFraud.ftc.gov
            </a>
            .
          </p>
        </div>
      </article>

      <section aria-labelledby="more-guides" className="border-b border-border">
        <div className="container-page py-14">
          <h2 id="more-guides" className="font-display text-3xl font-normal text-foreground">
            More guides
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/guides/${item.slug}`}
                  className="group flex items-center justify-between gap-4 py-5 text-lg text-foreground hover:text-primary"
                >
                  {item.title}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
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
