import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, MessageSquareText, PhoneCall, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const moments = [
  { time: "0:00", label: "New inquiry", detail: "Inbound call received", icon: PhoneCall },
  { time: "0:02", label: "Mirflow answers", detail: "Natural voice, your business rules", icon: Sparkles },
  { time: "0:48", label: "Lead qualified", detail: "Service, urgency, location and budget", icon: MessageSquareText },
  { time: "1:14", label: "Appointment booked", detail: "Calendar updated and confirmation sent", icon: CalendarCheck },
];

const systems = [
  ["AI receptionist", "Answers every call and common question"],
  ["Lead qualification", "Filters inquiries using your exact criteria"],
  ["Automated booking", "Schedules directly into your calendar"],
  ["Follow-up engine", "Texts, nurtures and recovers cold leads"],
];

export function MobileHome() {
  return (
    <div className="overflow-hidden bg-[#06070a] text-white sm:hidden">
      <section className="relative px-5 pb-10 pt-14">
        <div className="pointer-events-none absolute -right-24 top-2 h-72 w-72 rounded-full bg-[#705cff]/20 blur-[90px]" />
        <div className="pointer-events-none absolute -left-20 top-72 h-56 w-56 rounded-full bg-[#3bc7aa]/10 blur-[80px]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/65">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69e6bd] shadow-[0_0_12px_#69e6bd]" />
            AI systems for service businesses
          </div>

          <h1 className="mt-7 font-sans text-[45px] font-semibold leading-[0.98] tracking-[-0.055em]">
            Your best employee
            <span className="block bg-gradient-to-r from-[#b7a9ff] via-white to-[#72d9c1] bg-clip-text text-transparent">
              never clocks out.
            </span>
          </h1>

          <p className="mt-5 max-w-[340px] text-[16px] leading-7 text-white/58">
            Mirflow answers, qualifies, books and follows up with every lead—24 hours a day.
          </p>

          <Button asChild size="lg" className="mt-7 h-14 w-full rounded-xl bg-white text-sm font-semibold normal-case tracking-normal text-black hover:bg-white/90">
            <Link href="/quote">
              Build my AI system
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Link href="/pricing" className="mt-4 block text-center text-xs font-medium text-white/45">
            Or start with a $199 plan
          </Link>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="rounded-[22px] border border-white/10 bg-[#0d0f15] p-4 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div>
              <p className="text-[11px] font-medium text-white/40">LIVE WORKFLOW</p>
              <p className="mt-1 text-sm font-medium">Inbound lead capture</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#69e6bd]/10 px-2.5 py-1 text-[10px] font-medium text-[#69e6bd]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69e6bd]" />
              ACTIVE
            </div>
          </div>

          <div className="mt-2">
            {moments.map((moment, index) => {
              const MomentIcon = moment.icon;
              return (
                <div key={moment.label} className="relative grid grid-cols-[38px_1fr_auto] items-center gap-3 py-4">
                  {index < moments.length - 1 ? <span className="absolute left-[18px] top-11 h-7 w-px bg-white/10" /> : null}
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#b7a9ff]">
                    <MomentIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{moment.label}</p>
                    <p className="mt-0.5 text-[11px] leading-4 text-white/38">{moment.detail}</p>
                  </div>
                  <span className="font-mono text-[10px] text-white/28">{moment.time}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#69e6bd]/15 bg-[#69e6bd]/[0.06] px-3.5 py-3">
            <div>
              <p className="text-xs text-white/42">Outcome</p>
              <p className="mt-0.5 text-sm font-medium">Qualified appointment</p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#69e6bd] text-black">
              <Check className="h-4 w-4" />
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 px-5 py-14">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#9f8cff]">One system. Four jobs.</p>
        <h2 className="mt-4 max-w-[330px] text-[34px] font-semibold leading-[1.02] tracking-[-0.045em]">
          The front office that runs itself.
        </h2>
        <div className="mt-8 divide-y divide-white/8 border-y border-white/8">
          {systems.map(([title, detail], index) => (
            <Link href="/services" key={title} className="grid grid-cols-[28px_1fr_auto] items-start gap-3 py-5">
              <span className="font-mono text-[10px] text-white/25">0{index + 1}</span>
              <span>
                <span className="block text-[15px] font-medium">{title}</span>
                <span className="mt-1 block text-xs leading-5 text-white/42">{detail}</span>
              </span>
              <ArrowRight className="mt-1 h-4 w-4 text-white/24" />
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#17152a] to-[#0c0d12] p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">Start small</p>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-4xl font-semibold tracking-[-0.05em]">$199</p>
              <p className="mt-1 text-xs text-white/40">per month · cancel anytime</p>
            </div>
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-[#69e6bd]">24-HOUR TARGET</span>
          </div>
          <ul className="mt-7 space-y-3 border-t border-white/8 pt-6">
            {["One focused automation", "Setup and testing included", "Monitoring and monthly tuning"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/65">
                <Check className="h-4 w-4 text-[#69e6bd]" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-7 h-13 w-full rounded-xl bg-[#8e7bff] text-sm font-semibold normal-case tracking-normal text-white hover:bg-[#9c8cff]">
            <Link href="/pricing">View plans</Link>
          </Button>
        </div>
      </section>

      <section className="px-5 pb-16 pt-8 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">Built around your business</p>
        <h2 className="mx-auto mt-4 max-w-[340px] text-[37px] font-semibold leading-[1.02] tracking-[-0.05em]">
          Stop letting good leads disappear.
        </h2>
        <p className="mx-auto mt-4 max-w-[310px] text-sm leading-6 text-white/45">
          Tell us where work gets stuck. We’ll design the system and send a clear custom quote.
        </p>
        <Button asChild size="lg" className="mt-7 h-14 w-full rounded-xl bg-white text-sm font-semibold normal-case tracking-normal text-black hover:bg-white/90">
          <Link href="/quote">
            Get my custom plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
