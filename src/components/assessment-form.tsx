"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { workflows } from "@/data/workflows";
import { siteConfig } from "@/lib/site-config";
const fieldClass = "mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function AssessmentForm({ initialWorkflow = "", deliveryReady }: { initialWorkflow?: string; deliveryReady: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setState("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...fields, type: "workflow-assessment" }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your request.");
      setState("success");
    } catch (error) {
      setError(error instanceof Error ? error.message : "We could not send your request. Please email us directly.");
      setState("error");
    }
  }
  if (!deliveryReady) return <div className="border border-border bg-card p-8"><h2 className="font-display text-3xl">Tell us about your workflow.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Email your name, company, and the process you want to improve. Include the tools you use and where the work gets stuck.</p><Button asChild className="mt-6"><a href={`mailto:${siteConfig.email}?subject=AI%20Workflow%20Assessment`}>Email Mirflow</a></Button><p className="mt-4 text-sm">{siteConfig.email}</p><p className="mt-5 text-xs text-muted-foreground">Please leave out confidential records and account details.</p></div>;
  if (state === "success") return <div role="status" className="border border-border bg-card p-8"><h2 className="font-display text-3xl">Your request is on its way.</h2><p className="mt-4 leading-relaxed text-muted-foreground">We’ll review your workflow and follow up by email to arrange an introductory conversation. No payment or booking has been made.</p></div>;
  return <form onSubmit={submit} className="space-y-5 border border-border bg-card p-6 sm:p-8">
    <h2 className="font-display text-3xl">Tell us where work gets stuck.</h2>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Your name<input name="name" autoComplete="name" required maxLength={150} className={fieldClass} /></label><label className="text-sm font-medium">Work email<input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} /></label></div>
    <label className="block text-sm font-medium">Company<input name="company" autoComplete="organization" required maxLength={200} className={fieldClass} /></label>
    <label className="block text-sm font-medium">Workflow<select name="workflow" required defaultValue={initialWorkflow} className={fieldClass}><option value="" disabled>Select a starting point</option>{workflows.map(w => <option key={w.id} value={w.id}>{w.title}</option>)}<option value="other">Another workflow / help me choose</option></select></label>
    <label className="block text-sm font-medium">What is slow, repetitive, or difficult?<textarea name="message" required minLength={10} maxLength={4000} rows={4} className={fieldClass} placeholder="What happens today, and what would a better result look like?" /></label>
    <label className="block text-sm font-medium">Current tools <span className="font-normal text-muted-foreground">(optional)</span><input name="tools" maxLength={500} className={fieldClass} placeholder="For example: QuickBooks, Excel, Microsoft 365" /></label>
    <label className="block text-sm font-medium">Timing<select name="timeline" className={fieldClass} defaultValue="exploring"><option value="exploring">Exploring options</option><option value="this-month">This month</option><option value="this-quarter">This quarter</option></select></label>
    <div hidden aria-hidden="true"><label>Leave blank<input name="websiteTrap" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="text-xs leading-relaxed text-muted-foreground">We use these details to respond to your request. Please do not include confidential records. <Link href="/privacy" className="underline">Privacy policy</Link>.</p>
    {state === "error" && <p role="alert" className="text-sm text-destructive">{error} <a className="underline" href={`mailto:${siteConfig.email}`}>Email us instead</a>.</p>}
    <Button type="submit" disabled={state === "sending"} className="w-full">{state === "sending" ? "Sending…" : "Request an introductory conversation"}</Button>
  </form>;
}
