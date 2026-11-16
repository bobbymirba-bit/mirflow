import { Badge } from "@/components/ui/badge";
import { managedChannels } from "@/components/visuals/flow-content";
import { cn } from "@/lib/utils";

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x overflow-hidden motion-reduce:overflow-visible motion-reduce:[mask-image:none]">
      <div
        className={cn(
          "flex w-max gap-3 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-6",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className={cn("flex gap-3", copy === 1 ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center")}
            aria-hidden={copy === 1}
          >
            {items.map((name) => (
              <span
                key={`${name}-${copy}`}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground/85"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#22d3ee,#a855f7)] shadow-[0_0_8px_rgba(34,211,238,.8)]" />
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsMarquee() {
  const first = managedChannels.slice(0, 5);
  const second = managedChannels.slice(5);
  return (
    <section aria-label="What we manage" className="overflow-hidden border-y border-white/5 bg-[#070910]/60 py-16 sm:py-20">
      <div className="container-page text-center">
        <Badge variant="brand" className="mx-auto">
          What we manage
        </Badge>
      </div>
      <div className="mt-8 space-y-3">
        <Row items={first} />
        <Row items={second} reverse />
      </div>
    </section>
  );
}
