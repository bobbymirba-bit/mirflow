import Link from "next/link";
import { ArrowUpRight, CalendarDays, PhoneCall } from "lucide-react";

const examples = [
  {
    title: "A call comes in after closing",
    body: "The receptionist answers a routine question, gets permission to send a text, and shares the business’s booking link.",
    icon: CalendarDays,
  },
  {
    title: "A caller asks for a custom quote",
    body: "The receptionist captures what they need and when to call back, then sends that context to the right person on your team.",
    icon: PhoneCall,
  },
];

export function FrontDeskDemos() {
  return (
    <section id="demos" aria-labelledby="demo-heading" className="scroll-mt-16 border-b border-[#6c4957] bg-[#2f202e] text-[#fff4e9]">
      <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#fbb592]">AI in practice</p>
          <h2 id="demo-heading" className="mt-3 max-w-lg text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A front desk that can answer when you&rsquo;re busy
          </h2>
          <p className="mt-4 max-w-md text-[#ead3cc]">
            We configure the AI receptionist around your hours, services, and booking rules, with a clear path to a person when the call needs one.
          </p>
          <Link href="/#walkthrough" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#fbb592] underline underline-offset-4">
            Ask to hear the receptionist <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4">
          {examples.map(({ title, body, icon: Icon }) => (
            <article key={title} className="flex gap-4 rounded-xl border border-[#a27b81]/45 bg-[#251a27]/60 p-5">
              <Icon size={21} className="mt-0.5 shrink-0 text-[#fbb592]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#ead3cc]">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
