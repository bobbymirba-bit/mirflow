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
      className="overflow-hidden rounded-[2rem] border border-[#6c4957] bg-[radial-gradient(ellipse_at_20%_5%,#72464d_0%,#3e293a_45%,#241824_90%)] p-5 text-[#fff4e9] shadow-[0_24px_55px_-34px_#351f30] sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#a27b81]/45 pb-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
        <span className="text-[#fbb592]">Mirflow / Digital team</span>
        <span className="text-[#ead3cc]">How it connects</span>
      </div>
      <ol className="mt-5">
        {stages.map(({ title, detail, icon: Icon }, index) => (
          <li key={title}>
            <div className="flex items-center gap-3 rounded-xl border border-[#a27b81]/45 bg-[#251a27]/60 p-3 sm:gap-4 sm:p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#a27b81]/45 bg-[#50323e] text-[#fbb592]">
                <Icon size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg sm:text-xl">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#ead3cc]">{detail}</p>
              </div>
            </div>
            {index < stages.length - 1 && <ArrowDown size={16} className="my-1.5 ml-6 text-[#fbb592]" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </aside>
  );
}
