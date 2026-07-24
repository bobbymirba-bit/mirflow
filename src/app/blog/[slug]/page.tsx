import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { BlogCard } from "@/components/cards/blog-card";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <Badge variant="outline">{post.category}</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-sm font-semibold text-foreground">
                {post.author.initials}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {post.author.role} · {formattedDate} · {post.readTime}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-2xl space-y-10">
            {post.content.map((block, index) => (
              <Reveal key={index}>
                {block.heading ? (
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {block.heading}
                  </h2>
                ) : null}
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="border-b border-border bg-secondary/20">
          <div className="container-page py-16 sm:py-20">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-foreground">
                More on {post.category}
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <RevealItem key={relatedPost.slug}>
                  <BlogCard post={relatedPost} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <CtaSection
        title="Ready to put this into practice?"
        description="Book a 30-minute call. We'll map your highest-leverage automation opportunity — no obligation."
      />
    </>
  );
}
