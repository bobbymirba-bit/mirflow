"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { callTextConsent } from "@/lib/lead-copy";
import { rememberUtms, type UtmParams } from "@/lib/utm";

type Status = "idle" | "sending" | "done" | "error";

const fieldClass =
  "w-full min-h-12 rounded-lg border border-input bg-white px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

function trackEvent(name: string, properties: Record<string, string>) {
  void import("@vercel/analytics")
    .then(({ track }) => {
      track(name, properties);
    })
    .catch(() => {
      // Custom events are dropped when the script or plan does not accept them.
    });
}

function currentUtms(): UtmParams {
  const search = new URLSearchParams(window.location.search);
  return rememberUtms(search);
}

function BookingLink({ href, source, className }: { href: string; source: string; className: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("booking_click", { source })}
      className={className}
    >
      Book a 15-minute call
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function LeadForm({ source, bookingUrl }: { source: string; bookingUrl: string | null }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const id = (name: string) => `${source}-${name}`;

  useEffect(() => {
    if (status === "done") statusRef.current?.focus();
    if (status === "error") errorRef.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const utms = currentUtms();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          businessName: data.businessName,
          phone: data.phone,
          email: data.email,
          smsConsent: data.smsConsent === "on",
          source,
          websiteTrap: data.websiteTrap,
          ...utms,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "We could not send your request.");
      }
      setStatus("done");
      trackEvent("lead_submitted", { source, utm_source: utms.utm_source ?? "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We could not send your request. Email bobby@mirflow.online.");
    }
  }

  const bookingClass =
    "inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-center text-sm font-semibold text-primary hover:border-primary";

  if (status === "done") {
    return (
      <div className="space-y-4">
        <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border border-success/40 bg-success/10 p-5 text-left outline-none">
          <p className="font-semibold text-foreground">Thanks. Your request is in.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Bobby will follow up at the phone number you gave. Nothing is built or charged without your OK.
          </p>
        </div>
        {bookingUrl ? <BookingLink href={bookingUrl} source={source} className={`${bookingClass} w-full`} /> : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-3 text-left" aria-busy={status === "sending"}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor={id("name")} className="mb-1 block text-sm font-medium">Name</label>
          <input id={id("name")} name="name" required autoComplete="name" autoCapitalize="words" placeholder="Your name" className={fieldClass} />
        </div>
        <div className="min-w-0">
          <label htmlFor={id("business")} className="mb-1 block text-sm font-medium">Business name</label>
          <input id={id("business")} name="businessName" required autoComplete="organization" autoCapitalize="words" placeholder="Your business" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor={id("phone")} className="mb-1 block text-sm font-medium">Phone</label>
        <input id={id("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="(555) 555-5555" className={fieldClass} />
      </div>
      <div>
        <label htmlFor={id("email")} className="mb-1 block text-sm font-medium">
          Email <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input id={id("email")} name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" autoCorrect="off" placeholder="you@yourbusiness.com" className={fieldClass} />
      </div>
      <div className="flex items-start gap-3 rounded-lg py-1">
        <input id={id("consent")} name="smsConsent" type="checkbox" required className="mt-0.5 size-6 shrink-0 accent-primary" />
        <label htmlFor={id("consent")} className="text-sm leading-relaxed">{callTextConsent}</label>
      </div>
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="websiteTrap" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request your free audit"}
        </button>
        {bookingUrl ? <BookingLink href={bookingUrl} source={source} className={bookingClass} /> : null}
      </div>
      {status === "error" ? (
        <p ref={errorRef} tabIndex={-1} role="alert" className="text-sm text-destructive outline-none">
          {error}
        </p>
      ) : null}
    </form>
  );
}
