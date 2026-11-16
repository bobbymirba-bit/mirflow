"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function AuditForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const field = (name: string) => {
      const value = formData.get(name);
      return typeof value === "string" ? value : "";
    };
    const payload = {
      name: field("name"),
      businessName: field("businessName"),
      email: field("email"),
      phone: field("phone"),
      website: field("website"),
      bottleneck: field("bottleneck"),
      websiteTrap: field("websiteTrap"),
    };

    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Email bobby@mirflow.online.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Email bobby@mirflow.online.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <p className="mt-4 font-display text-lg font-semibold text-foreground">Request received</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Bobby will reply from bobby@mirflow.online. Nothing is built or charged from this request.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="audit-name">Name</Label>
          <Input id="audit-name" name="name" required autoComplete="name" maxLength={150} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="audit-business">Business name</Label>
          <Input
            id="audit-business"
            name="businessName"
            required
            autoComplete="organization"
            maxLength={150}
            placeholder="Your business"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="audit-email">Email</Label>
          <Input
            id="audit-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder="you@yourbusiness.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="audit-phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="audit-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="audit-website">
          Website <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="audit-website"
          name="website"
          inputMode="url"
          autoComplete="url"
          maxLength={500}
          placeholder="yourbusiness.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="audit-bottleneck">What&apos;s your biggest bottleneck</Label>
        <Textarea
          id="audit-bottleneck"
          name="bottleneck"
          required
          maxLength={1000}
          rows={4}
          placeholder="Where leads or follow-up are getting missed"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="audit-website-trap">Leave this field blank</label>
        <input id="audit-website-trap" name="websiteTrap" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="gradient" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Get your free digital audit"
          )}
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/book-a-call">Book a call</Link>
        </Button>
      </div>
    </form>
  );
}
