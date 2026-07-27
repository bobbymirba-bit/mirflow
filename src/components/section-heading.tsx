import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-left sm:text-center" : "text-left ml-0 mr-auto",
        className
      )}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:mb-5 sm:text-[11px] sm:tracking-[0.2em]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-[350px] text-balance font-display text-[34px] font-normal leading-[1.02] tracking-[-0.035em] text-foreground sm:max-w-none sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[350px] text-pretty text-[15px] leading-relaxed text-muted-foreground sm:max-w-none sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
