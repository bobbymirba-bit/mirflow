import type { ReactNode } from "react";

/** Left-aligned interior page hero used across top-level pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-heading" className="border-b border-border">
      <div className="container-page py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="border-b border-foreground/30 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:inline-block">
            {eyebrow}
          </p>
          <h1
            id="page-heading"
            className="mt-6 text-balance font-display text-[40px] font-normal leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl"
          >
            {title}
          </h1>
          {description ? (
            <div className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
