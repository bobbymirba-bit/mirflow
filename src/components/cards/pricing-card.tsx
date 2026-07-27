import Link from "next/link";
import { Check } from "lucide-react";

import type { PricingTier } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PricingCard({ tier, className }: { tier: PricingTier; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8",
        tier.featured
          ? "border-primary/50 bg-card shadow-2xl shadow-primary/10 lg:scale-[1.03]"
          : "border-border bg-card",
        className
      )}
    >
      {tier.featured ? (
        <Badge variant="brand" className="absolute -top-3 left-8">
          Most popular
        </Badge>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-foreground">{tier.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-semibold text-foreground">{tier.price}</span>
        <span className="text-sm text-muted-foreground">{tier.priceSuffix}</span>
      </div>
      {tier.setupFee ? (
        <p className="mt-2 text-sm font-medium text-muted-foreground">{tier.setupFee}</p>
      ) : null}
      <Button
        asChild
        variant={tier.featured ? "gradient" : "secondary"}
        className="mt-6 w-full"
      >
        <Link href={tier.ctaHref}>{tier.cta}</Link>
      </Button>
      <ul className="mt-8 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
