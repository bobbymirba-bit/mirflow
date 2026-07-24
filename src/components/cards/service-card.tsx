import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/data/services";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.tagline}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {service.category}
        </span>
        <span className="font-mono text-xs font-semibold text-primary">
          {service.roiStat.value}
        </span>
      </div>
    </Link>
  );
}
