"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function AuditForm({ source = "hero" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
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
        <p className="font-semibold text-foreground">Thanks — your audit request is in.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Bobby will reply from {"bobby@mirflow.online"} with next steps. Nothing is built, launched, or
          charged without your OK.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <form onSubmit={onSubmit} className="space-y-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
          <input id="name" name="name" required placeholder="Your name" className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="businessName" className="mb-1 block text-sm font-medium">Business name</label>
          <input id="businessName" name="businessName" required placeholder="Your business" className={field} autoComplete="organization" />
        </div>
      </div>
      <div>
        <label htmlFor="websiteUrl" className="mb-1 block text-sm font-medium">
          Website URL <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input id="websiteUrl" name="websiteUrl" placeholder="yourbusiness.com" className={field} inputMode="url" autoComplete="url" />
      </div>
      <div>
        <label htmlFor="contact" className="mb-1 block text-sm font-medium">Email or phone</label>
        <input id="contact" name="contact" required placeholder="you@yourbusiness.com or (555) 555-5555" className={field} />
      </div>
      <input type="text" name="websiteTrap" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get My Free Digital Audit"}
      </button>
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {error} You can also email bobby@mirflow.online.
        </p>
      ) : null}
    </form>
  );
}
