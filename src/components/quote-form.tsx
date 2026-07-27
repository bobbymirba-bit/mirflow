"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function QuoteForm({ initialInterest = "" }: { initialInterest?: string }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = React.useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type: "quote" }),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error ?? "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
        <h2 className="mt-4 font-display text-2xl font-semibold">Your request is in</h2>
        <p className="mt-3 text-muted-foreground">
          We&apos;ll review the workflow and reply with next steps within one business day.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      {initialInterest ? (
        <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
          Quote context: <span className="font-semibold">{initialInterest}</span>
          <input type="hidden" name="interest" value={initialInterest} />
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Jane Smith" required />
        <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
        <Field label="Company" name="company" placeholder="Company name" required />
        <Field label="Website" name="website" type="url" placeholder="https://" />
        <Select label="Business type" name="businessType" options={["Home services", "Med spa / wellness", "Dental / healthcare", "Real estate", "Professional services", "Other"]} />
        <Select label="Monthly lead volume" name="leadVolume" options={["Under 100", "100–250", "251–750", "751–2,000", "2,000+"]} />
        <Select label="Estimated budget" name="budget" options={["Under $500/mo", "$500–$1,000/mo", "$1,000–$2,500/mo", "$2,500+/mo", "Not sure yet"]} />
        <Select label="Desired launch" name="timeline" options={["As soon as possible", "Within 30 days", "1–3 months", "Just researching"]} />
      </div>
      <div className="mt-5 grid gap-5">
        <Field label="Tools you use" name="tools" placeholder="HubSpot, GoHighLevel, Calendly, Google Sheets…" />
        <div className="grid gap-2">
          <Label htmlFor="message">What do you want automated?</Label>
          <Textarea id="message" name="message" rows={6} required placeholder="Describe what happens today, where leads or work get stuck, and what you want the finished workflow to do." />
        </div>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" name="contactConsent" required className="mt-1" />
        I agree that Mirflow may contact me about this quote request.
      </label>
      {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
      <Button type="submit" variant="gradient" size="lg" className="mt-6 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? <><Loader2 className="h-4 w-4 animate-spin" />Submitting…</> : "Request my custom quote"}
      </Button>
    </form>
  );
}

function Field({ label, name, ...props }: React.ComponentProps<typeof Input> & { label: string; name: string }) {
  return <div className="grid gap-2"><Label htmlFor={name}>{label}</Label><Input id={name} name={name} {...props} /></div>;
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return <div className="grid gap-2"><Label htmlFor={name}>{label}</Label><select id={name} name={name} required className={selectClass}><option value="">Select one</option>{options.map((option) => <option key={option}>{option}</option>)}</select></div>;
}
