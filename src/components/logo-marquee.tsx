import { customerLogos } from "@/data/logos";

export function LogoMarquee() {
  const looped = [...customerLogos, ...customerLogos];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-16 py-2">
        {looped.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-muted-foreground/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
