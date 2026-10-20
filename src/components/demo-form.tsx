"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function DemoForm({ prefillQuestion, compact = false }: { prefillQuestion?: string; compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: compact ? "agent-handoff" : "hero" }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-xl border border-success/40 bg-success/10 p-5 text-left">
        <p className="font-semibold text-foreground">Thanks, your request is in.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Bobby will reply from bobby@mirflow.online with next steps for your free demo agent. Nothing is
          built or published without your OK.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <form onSubmit={onSubmit} className="space-y-3 text-left" noValidate={false}>
      <div>
        <label htmlFor={`url-${compact}`} className="mb-1 block text-sm font-medium">
          Help-center URL
        </label>
        <input id={`url-${compact}`} name="helpCenterUrl" required placeholder="help.yourcompany.com" className={field} inputMode="url" autoComplete="url" />
      </div>
      <div className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
        <div>
          <label htmlFor={`email-${compact}`} className="mb-1 block text-sm font-medium">
            Work email
          </label>
          <input id={`email-${compact}`} name="email" type="email" required placeholder="you@company.com" className={field} autoComplete="email" />
        </div>
        <div>
          <label htmlFor={`company-${compact}`} className="mb-1 block text-sm font-medium">
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input id={`company-${compact}`} name="company" placeholder="Company name" className={field} autoComplete="organization" />
        </div>
      </div>
      {prefillQuestion ? <input type="hidden" name="question" value={prefillQuestion} /> : null}
      <input type="text" name="websiteTrap" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get a free demo agent built on your help center"}
      </button>
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {error} You can also email bobby@mirflow.online.
        </p>
      ) : null}
      <p className="text-xs text-muted-foreground">
        We only read public pages and respect robots.txt. No payment or customer data needed.
      </p>
    </form>
  );
}
