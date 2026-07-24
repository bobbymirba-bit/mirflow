import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function CaseStudyCard({ study, className }: { study: CaseStudy; className?: string }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-sm font-semibold text-foreground">
            {study.logoInitial}
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{study.client}</p>
            <Badge variant="outline" className="mt-0.5">{study.industry}</Badge>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {study.summary}
      </p>
      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
        {study.metrics.slice(0, 3).map((metric) => (
          <div key={metric.label}>
            <p className="font-mono text-base font-semibold text-primary">{metric.value}</p>
            <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
