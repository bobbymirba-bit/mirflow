import { ArrowDown, Globe2, Megaphone, Workflow } from "lucide-react";

const stages = [
  { title: "Show up", detail: "Website and social content", icon: Globe2 },
  { title: "Reach the right people", detail: "LinkedIn outreach, paid ads, and AI creative", icon: Megaphone },
  { title: "Follow through", detail: "AI receptionist, lead routing, and follow-up", icon: Workflow },
];

export function DigitalOverview() {
  return (
    <aside
      aria-label="How Mirflow’s services work together"
      className="card-glass overflow-hidden rounded-[2rem] p-5 sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
        <span className="text-primary">Mirflow / Digital team</span>
        <span className="text-muted-foreground">How it connects</span>
      </div>
      <ol className="mt-5">
        {stages.map(({ title, detail, icon: Icon }, index) => (
          <li key={title}>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:gap-4 sm:p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/20 text-primary">
                <Icon size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg sm:text-xl">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            </div>
            {index < stages.length - 1 && <ArrowDown size={16} className="my-1.5 ml-6 text-primary" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </aside>
  );
}
