import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { BlogCard } from "@/components/cards/blog-card";
import { CtaSection } from "@/components/cta-section";
import { blogPosts, blogCategories } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI automation strategy, voice AI, operations, and what actually works when deploying automation in a real business.",
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: "Articles on AI automation strategy, voice AI, and operations.",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Blog</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Notes on automation, from the field
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Practical thinking on AI automation strategy, voice AI, and operations —
              written for operators, not for search engines.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-16 sm:py-20">
          <div className="space-y-14">
            {blogCategories.map((category) => {
              const categoryPosts = blogPosts.filter((post) => post.category === category);
              if (categoryPosts.length === 0) return null;
              return (
                <div key={category}>
                  <Reveal>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {category}
                    </h2>
                  </Reveal>
                  <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryPosts.map((post) => (
                      <RevealItem key={post.slug}>
                        <BlogCard post={post} className="h-full" />
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to put this into practice?"
        description="Book a 30-minute call. We'll map your highest-leverage automation opportunity — no obligation."
      />
    </>
  );
}
