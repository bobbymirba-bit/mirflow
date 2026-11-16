import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { BlogPost } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function BlogCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <Badge variant="outline">{post.category}</Badge>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
