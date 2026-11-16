"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AudioLines, Bot, MessageSquareText, PhoneForwarded, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const demos = [
  {
    id: "after-hours",
    label: "After hours",
    title: "From first call to booking link",
    description:
      "A new client calls after closing. The assistant explains the consultation policy and asks permission before texting the booking link.",
    outcome: "Booking link sent",
    outcomeIcon: MessageSquareText,
    transcript: [
      ["assistant", "Thanks for calling. How can I help?"],
      ["caller", "Hi, I'm new. Do I need a consultation first?"],
      ["assistant", "For a first visit, we start with a consultation. Can I text you the booking link?"],
      ["caller", "Yes, please."],
      ["assistant", "I've sent it. You can pick a time that works for you."],
    ],
  },
  {
    id: "staff-handoff",
    label: "Staff handoff",
    title: "When a question needs your team",
    description:
      "A caller asks whether a treatment is right for them. The assistant captures the callback preference and routes the question to staff instead of guessing.",
    outcome: "Staff callback requested",
    outcomeIcon: PhoneForwarded,
    transcript: [
      ["caller", "Can someone tell me whether I'm a good candidate for this treatment?"],
      ["assistant", "Your provider can help you with that. Would you like me to ask our team to call you back?"],
      ["caller", "Yes. Tomorrow morning would be great."],
      ["assistant", "I'll pass that along so our team knows what you'd like to discuss."],
    ],
  },
] as const;

export function DemoVideos() {
  const [activeId, setActiveId] = React.useState<(typeof demos)[number]["id"]>("after-hours");
  const demo = demos.find((d) => d.id === activeId) ?? demos[0];
  const OutcomeIcon = demo.outcomeIcon;

  return (
    <section id="demos" aria-labelledby="demo-heading" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,.22),transparent)] blur-3xl animate-float" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,.18),transparent)] blur-3xl animate-float [animation-delay:-6s]" />

      <div className="container-page relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <Badge variant="brand">
              <AudioLines className="h-3 w-3" />
              See and hear it work
            </Badge>
            <h2 id="demo-heading" className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Two calls, handled
              <br />
              <span className="text-gradient">end to end.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Simulated med spa calls with synthetic voices, running the same AI receptionist we install for local service
              businesses. Press play, or read along with the transcript.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur">
            {demos.map((d, i) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveId(d.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  d.id === activeId ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {d.id === activeId ? (
                  <motion.span
                    layoutId="demo-tab"
                    className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#22d3ee,#6366f1)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="font-mono text-[10px] opacity-70">0{i + 1}</span>
                  {d.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <Reveal delay={0.2}>
            <div className="card-glass relative overflow-hidden rounded-3xl p-1.5">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#070910]">
                <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    demos/{demo.id}.mp4
                  </p>
                  <Badge className="hidden sm:inline-flex">Synthetic voices</Badge>
                </div>
                <motion.video
                  key={demo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  aria-labelledby={`${demo.id}-title`}
                  className="aspect-video w-full bg-[#0b0d14]"
                  controls
                  playsInline
                  preload="metadata"
                  poster={`/demos/${demo.id}.webp`}
                  width={960}
                  height={540}
                >
                  <source src={`/demos/${demo.id}.mp4`} type="video/mp4" />
                  <track kind="captions" src={`/demos/${demo.id}.vtt`} srcLang="en" label="English" default />
                  <a href={`/demos/${demo.id}.mp4`}>Open the demo video</a>
                </motion.video>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="card-glass flex h-full flex-col rounded-3xl p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Transcript</p>
              <h3 id={`${demo.id}-title`} className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {demo.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{demo.description}</p>

              <ol className="mt-6 space-y-3">
                {demo.transcript.map(([speaker, line], i) => {
                  const isBot = speaker === "assistant";
                  return (
                    <motion.li
                      key={line}
                      initial={{ opacity: 0, x: isBot ? -8 : 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                      className={cn("flex gap-3", isBot ? "" : "flex-row-reverse text-right")}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border",
                          isBot ? "border-primary/40 bg-primary/10 text-primary" : "border-white/10 bg-white/[0.05] text-muted-foreground"
                        )}
                      >
                        {isBot ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                      </span>
                      <p
                        className={cn(
                          "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                          isBot ? "rounded-tl-sm bg-primary/[0.08] text-foreground" : "rounded-tr-sm bg-white/[0.05] text-foreground/85"
                        )}
                      >
                        {line}
                      </p>
                    </motion.li>
                  );
                })}
              </ol>

              <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-5 text-sm font-medium text-success">
                <OutcomeIcon className="h-4 w-4" />
                {demo.outcome}
              </div>
            </motion.div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Demo voices generated with{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/en/en_US/libritts_r/medium/MODEL_CARD"
            rel="noreferrer"
            target="_blank"
          >
            Piper and LibriTTS-R
          </a>
          . The voice dataset is licensed under{" "}
          <a className="underline underline-offset-2 hover:text-foreground" href="https://creativecommons.org/licenses/by/4.0/" rel="noreferrer" target="_blank">
            CC BY 4.0
          </a>
          .
        </p>
      </div>
    </section>
  );
}
