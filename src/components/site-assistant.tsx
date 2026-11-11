"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";

import { buildIndex } from "@/lib/faq-search";

const topics = [
  {
    id: "services",
    question: "What does Mirflow do?",
    keywords: ["services", "digital agency", "website social marketing automation", "what do you offer"],
    answer: "Mirflow is your all-in-one digital partner. We manage your website, social media, LinkedIn outreach, ads, email and SMS marketing, SEO, and AI workflows so you can focus on running your business.",
    href: "/services",
    label: "Explore services",
  },
  {
    id: "website",
    question: "Can you redesign my website?",
    keywords: ["website", "web design", "redesign", "build a site", "rebuild", "maintain", "search"],
    answer: "Yes. Mirflow designs, rebuilds, and maintains websites, with search-friendly pages and clear ways for visitors to get in touch.",
    href: "/services#presence",
    label: "See website services",
  },
  {
    id: "marketing",
    question: "Do you manage social media, LinkedIn, and paid ads?",
    keywords: ["post", "social media", "linkedin", "outreach", "ads", "advertising", "campaigns", "creative"],
    answer: "Yes. We plan and publish social posts, manage LinkedIn content and outreach, and run paid campaigns. We use AI to help create and test ad variations.",
    href: "/services#growth",
    label: "See marketing services",
  },
  {
    id: "receptionist",
    question: "Can I hear the AI receptionist?",
    keywords: ["voice", "phone", "receptionist", "demo", "grok", "answer calls", "listen", "callback", "booking"],
    answer: "Yes. Hear two short excerpts of Mirflow’s actual Grok-powered receptionist answering a call and asking when to follow up.",
    href: "/ai-receptionist#demos",
    label: "Play the recorded demo",
  },
  {
    id: "price",
    question: "How does pricing work?",
    keywords: ["price", "pricing", "cost", "how much", "retainer", "rates", "setup fee", "budget"],
    answer: "One setup fee covers the agreed build, and one monthly retainer covers ongoing management. We confirm the channels, deliverables, and price with you before work starts.",
    href: "/services#pricing",
    label: "See how we work",
  },
  {
    id: "contact",
    question: "How can I talk to Bobby?",
    keywords: ["bobby", "contact", "human", "email", "speak to someone", "reach out", "get started"],
    answer: "Use the contact section to email Bobby. Share what you want to grow or what’s taking up too much of your team’s time.",
    href: "/#walkthrough",
    label: "Talk to Bobby",
  },
];

const quickQuestions = [
  { label: "What do you offer?", topic: topics[0] },
  { label: "How much does it cost?", topic: topics[4] },
  { label: "Hear the receptionist", topic: topics[3] },
];

const search = buildIndex(topics);
const fallback = {
  answer: "I couldn’t find an answer to that on the site. Bobby can help with questions about your specific business or project.",
  href: "/#walkthrough",
  label: "Talk to Bobby",
};

type Reply = { answer: string; href: string; label: string };
type Turn = { question: string; reply: Reply };

export function SiteAssistant() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) input.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [turns, open]);

  if (pathname === "/support-agent") return null;

  function close() {
    setOpen(false);
    launcher.current?.focus({ preventScroll: true });
  }

  function ask(text: string, topic?: Reply) {
    const query = text.trim();
    if (!query) return;
    const matchId = topic ? undefined : search(query, 1.6)?.entry.id;
    const match = topic ?? topics.find((entry) => entry.id === matchId);
    setTurns((previous) => [...previous, { question: query, reply: match ?? fallback }]);
    setQuestion("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question);
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") close();
  }

  return (
    <div className="fixed right-3 bottom-3 z-50 flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 sm:right-5 sm:bottom-5">
      {open && (
        <section id="mirflow-chat" aria-labelledby="mirflow-chat-title" onKeyDown={onKeyDown} className="flex max-h-[min(34rem,calc(100dvh-5.5rem))] w-[min(23rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <div className="flex items-start justify-between gap-3 border-b border-border bg-secondary/50 px-4 py-3">
            <div>
              <h2 id="mirflow-chat-title" className="font-semibold">Ask Mirflow</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Quick answers from the Mirflow site</p>
            </div>
            <button type="button" aria-label="Close chat" onClick={close} className="rounded-md p-2 hover:bg-background">
              <X size={17} aria-hidden="true" />
            </button>
          </div>
          <div ref={log} role="log" aria-label="Chat messages" className="min-h-24 flex-1 space-y-3 overflow-y-auto overscroll-contain p-4 text-sm">
            <p className="rounded-xl bg-secondary/55 px-3 py-2">Ask about our services, pricing, or the AI receptionist.</p>
            {turns.length === 0 && (
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map(({ label, topic }) => (
                  <button key={topic.id} type="button" onClick={() => { ask(label, topic); input.current?.focus(); }} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium hover:border-primary">
                    {label}
                  </button>
                ))}
              </div>
            )}
            {turns.map(({ question: asked, reply }, index) => (
              <div key={index} className="space-y-2">
                <p className="ml-7 rounded-xl bg-primary px-3 py-2 break-words text-primary-foreground"><span className="sr-only">You. </span>{asked}</p>
                <div className="mr-5 rounded-xl bg-secondary/55 px-3 py-2">
                  <p><span className="sr-only">Mirflow. </span>{reply.answer}</p>
                  <Link href={reply.href} onClick={() => setOpen(false)} className="mt-1 inline-block font-semibold text-primary underline underline-offset-4">{reply.label}</Link>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={submit} className="flex gap-2 border-t border-border p-3">
            <label htmlFor="mirflow-chat-question" className="sr-only">Your question</label>
            <input ref={input} id="mirflow-chat-question" autoComplete="off" maxLength={240} placeholder="Ask a question" value={question} onChange={(event) => setQuestion(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-base outline-primary" />
            <button type="submit" aria-label="Send question" disabled={!question.trim()} className="rounded-lg bg-primary px-3 text-primary-foreground disabled:opacity-45">
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
      <button ref={launcher} type="button" aria-expanded={open} aria-controls={open ? "mirflow-chat" : undefined} onClick={() => open ? close() : setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg hover:brightness-110">
        <MessageCircle size={17} aria-hidden="true" /> Ask Mirflow
      </button>
    </div>
  );
}
