"use client";

import * as React from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInterests } from "@/data/contact";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ initialInterest }: { initialInterest?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      type: "contact",
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      role: String(formData.get("role") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        <p className="font-display text-2xl text-foreground">Message sent</p>
        <p className="text-sm text-muted-foreground">
          Thank you. We&apos;ll reply within one business day.
        </p>
        <Button variant="outline" className="mt-2" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-describedby={error ? "contact-error" : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" autoComplete="organization" placeholder="Company name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="role">Role (optional)</Label>
          <Input id="role" name="role" autoComplete="organization-title" placeholder="e.g. CFO, Head of Tax" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="interest">What can we help with?</Label>
        <select
          id="interest"
          name="interest"
          defaultValue={initialInterest ?? ""}
          className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select an area (optional)</option>
          {contactInterests.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="What are you hoping to improve, and what systems are involved?"
          rows={5}
        />
      </div>

      {error ? (
        <p id="contact-error" role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Button type="submit" variant="gradient" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
