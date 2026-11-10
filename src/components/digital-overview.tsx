import { ArrowDown, PhoneCall, MessageSquare, Workflow } from "lucide-react";

const stages = [
  { title: "Answer the call", detail: "Cover after-hours and overflow inquiries", icon: PhoneCall },
  { title: "Text back and follow up", detail: "Give missed callers and new leads a clear next step", icon: MessageSquare },
  { title: "Get it to the right person", detail: "Route booking requests or callbacks to your team", icon: Workflow },
];

export function DigitalOverview() {
  return (
    <aside
      aria-label="How the Mirflow front desk handles a lead"
      className="overflow-hidden rounded-[2rem] border border-[#33558e] bg-[radial-gradient(ellipse_at_20%_5%,#2452a2_0%,#183766_45%,#0b1d39_90%)] p-5 text-[#f4f8ff] shadow-[0_24px_55px_-34px_#13356f] sm:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#7399d5]/45 pb-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
        <span className="text-[#99c7ff]">Mirflow / AI Front Desk</span>
        <span className="text-[#d4e4ff]">How it connects</span>
      </div>
      <ol className="mt-5">
        {stages.map(({ title, detail, icon: Icon }, index) => (
          <li key={title}>
            <div className="flex items-center gap-3 rounded-xl border border-[#7399d5]/45 bg-[#102748]/60 p-3 sm:gap-4 sm:p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#7399d5]/45 bg-[#204782] text-[#99c7ff]">
                <Icon size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg sm:text-xl">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#d4e4ff]">{detail}</p>
              </div>
            </div>
            {index < stages.length - 1 && <ArrowDown size={16} className="my-1.5 ml-6 text-[#99c7ff]" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </aside>
  );
}
