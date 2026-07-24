import { Reveal } from "@/components/motion/reveal";

export function StatsBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08} className="text-center sm:text-left">
          <p className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
