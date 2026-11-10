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
    <section id="demos" aria-labelledby="demo-heading" className="scroll-mt-28 border-b border-[#6c4957] bg-[#2f202e] text-[#fff4e9] md:scroll-mt-16">
      <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#fbb592]">AI in practice</p>
          <h2 id="demo-heading" className="mt-3 max-w-lg text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Hear the Mirflow receptionist in action
          </h2>
          <p className="mt-4 max-w-md text-[#ead3cc]">
            Listen to two excerpts from a real call. Mirflow&rsquo;s receptionist answers in its Grok voice, then makes sure the team
            knows why the caller reached out and when to follow up.
          </p>
          <Link href="/#walkthrough" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#fbb592] underline underline-offset-4">
            Talk through your call flow <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#a27b81]/45 bg-[#251a27]/60">
          <video
            aria-label="Two recorded excerpts of the Mirflow AI receptionist"
            className="aspect-video w-full bg-[#251a27]"
            controls
            playsInline
            preload="none"
            poster="/demos/recorded-receptionist.webp"
            width={960}
            height={540}
          >
            <source src="/demos/recorded-receptionist.mp4" type="video/mp4" />
            <track kind="captions" src="/demos/recorded-receptionist.vtt" srcLang="en" label="English" default />
            <a href="/demos/recorded-receptionist.mp4">Open the recorded demo</a>
          </video>
          <details className="border-t border-[#a27b81]/45 p-4 text-sm">
            <summary className="cursor-pointer font-medium text-[#fbb592]">Read transcript</summary>
            <p className="mt-3 text-[#ead3cc]">&ldquo;Thanks for calling Mirflow. This is the Mirflow assistant. How can I help?&rdquo;</p>
            <p className="mt-2 text-[#ead3cc]"><span className="font-semibold">Later in the call.</span> &ldquo;Great. I&rsquo;ll note that it&rsquo;s about a demo follow-up. Do you have a window in mind that works best?&rdquo;</p>
          </details>
        </div>
        <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
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
