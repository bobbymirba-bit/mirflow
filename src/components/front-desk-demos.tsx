import { CalendarDays, PhoneCall } from "lucide-react";

import { BookACall } from "@/components/book-a-call";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/visuals/spotlight-card";

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
    <section id="demos" aria-labelledby="demo-heading" className="relative scroll-mt-28 overflow-hidden border-b border-white/5 py-14 sm:py-20 md:scroll-mt-16">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,.22),transparent)] blur-3xl animate-float motion-reduce:animate-none" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,.18),transparent)] blur-3xl animate-float motion-reduce:animate-none" />
      <div className="container-page relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge variant="brand">AI in practice</Badge>
          <h2 id="demo-heading" className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Hear the Mirflow receptionist in action
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Listen to two excerpts from a real call. Mirflow&rsquo;s receptionist answers in its Grok voice, then makes sure the team
            knows why the caller reached out and when to follow up.
          </p>
          <BookACall
            label="Talk through your call flow"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
            showIcon={false}
          />
        </div>
        <div className="card-glass overflow-hidden rounded-3xl p-1.5">
          <div className="overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#070910]">
            <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-2.5">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Recorded demo</p>
            </div>
            <video
              aria-label="Two recorded excerpts of the Mirflow AI receptionist"
              className="aspect-video w-full bg-[#0b0d14]"
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
            <details className="border-t border-white/5 p-4 text-sm">
              <summary className="cursor-pointer font-medium text-primary">Read transcript</summary>
              <p className="mt-3 text-muted-foreground">&ldquo;Thanks for calling Mirflow. This is the Mirflow assistant. How can I help?&rdquo;</p>
              <p className="mt-2 text-muted-foreground"><span className="font-semibold text-foreground">Later in the call.</span> &ldquo;Great. I&rsquo;ll note that it&rsquo;s about a demo follow-up. Do you have a window in mind that works best?&rdquo;</p>
            </details>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
          {examples.map(({ title, body, icon: Icon }) => (
            <SpotlightCard key={title} className="p-5">
              <article className="flex gap-4">
                <Icon size={21} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
