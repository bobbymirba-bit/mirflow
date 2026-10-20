"use client";

import { useMemo, useRef, useState, useEffect } from "react";

import { faq, type FaqEntry } from "@/data/faq";
import { buildIndex } from "@/lib/faq-search";
import { DemoForm } from "@/components/demo-form";

type Msg =
  | { role: "user"; text: string }
  | { role: "agent"; entry: FaqEntry }
  | { role: "agent-unknown"; question: string };

const suggestions = ["How much does Launch cost?", "Where do answers come from?", "Do you need our customer data?", "What's the weather tomorrow?"];

export function ExampleAgent() {
  const search = useMemo(() => buildIndex(faq), []);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [handoffFor, setHandoffFor] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, handoffFor]);

  function ask(q: string) {
    const question = q.trim();
    if (!question) return;
    const hit = search(question);
    setMessages((m) => [
      ...m,
      { role: "user", text: question },
      hit ? { role: "agent", entry: hit.entry } : { role: "agent-unknown", question },
    ]);
    setInput("");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-white/60 px-4 py-3">
        <div>
          <p className="text-sm font-semibold">Mirflow example agent</p>
          <p className="text-xs text-muted-foreground">Example running on Mirflow&apos;s own FAQ ({faq.length} entries). No AI model; answers are retrieved, never invented.</p>
        </div>
        <span className="shrink-0 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">Live</span>
      </div>

      <div ref={logRef} className="h-80 space-y-3 overflow-y-auto px-4 py-4 sm:h-96" aria-live="polite" data-testid="agent-log">
        <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-muted px-3.5 py-2.5 text-sm">
          Hi! Ask me anything about Mirflow&apos;s offer. I only answer from Mirflow&apos;s FAQ and I&apos;ll show you the entry I used.
        </div>
        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground">
              {m.text}
            </div>
          ) : m.role === "agent" ? (
            <div key={i} className="max-w-[90%] rounded-xl rounded-tl-sm bg-muted px-3.5 py-2.5 text-sm" data-testid="agent-answer">
              <p>{m.entry.answer}</p>
              <p className="mt-2 border-t border-border pt-2 text-xs text-muted-foreground">
                Source: <a href={`#faq-${m.entry.id}`} className="font-medium text-primary underline-offset-2 hover:underline">FAQ &rarr; &ldquo;{m.entry.question}&rdquo;</a>
              </p>
            </div>
          ) : (
            <div key={i} className="max-w-[90%] rounded-xl rounded-tl-sm border border-warning/40 bg-warning/10 px-3.5 py-2.5 text-sm" data-testid="agent-unknown">
              <p>I don&apos;t know. Mirflow&apos;s FAQ doesn&apos;t cover that, so I won&apos;t guess.</p>
              <button type="button" onClick={() => setHandoffFor(m.question)} className="mt-2 text-sm font-semibold text-primary underline-offset-2 hover:underline">
                Hand off to a human &rarr;
              </button>
            </div>
          )
        )}
        {handoffFor ? (
          <div className="rounded-xl border border-border bg-white p-4">
            <p className="mb-3 text-sm">Leave your details and a person will follow up. Your question is included.</p>
            <DemoForm compact prefillQuestion={handoffFor} />
          </div>
        ) : null}
      </div>

      <div className="border-t border-border px-4 py-3">
        <div className="mb-2 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button key={s} type="button" onClick={() => ask(s)} className="rounded-full border border-border bg-white px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-foreground">
              {s}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex gap-2"
        >
          <label htmlFor="agent-input" className="sr-only">Ask the example agent</label>
          <input
            id="agent-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            className="min-w-0 flex-1 rounded-lg border border-input bg-white px-3.5 py-2.5 text-base focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
          <button type="submit" className="rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background">Ask</button>
        </form>
      </div>
    </div>
  );
}
