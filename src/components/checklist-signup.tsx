"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/** Email signup for the free family scam checklist. */
export function ChecklistSignup({
  source,
  tone = "light",
  stacked = false,
  className,
}: {
  source: string;
  tone?: "light" | "dark";
  /** Always stack the field above the button, for narrow containers. */
  stacked?: boolean;
  className?: string;
}) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const inputId = React.useId();
  const dark = tone === "dark";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);
    const email = String(new FormData(event.currentTarget).get("email") ?? "");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={cn("flex flex-col gap-3", className)}>
        <p className={cn("flex items-center gap-2 text-lg font-semibold", dark ? "text-white" : "text-foreground")}>
          <CheckCircle2 className="h-5 w-5 text-success" aria-hidden="true" />
          You&apos;re on the list.
        </p>
        <Button asChild variant="gradient" size="lg" className="w-full sm:w-auto">
          <Link href="/checklist">
            Open your checklist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3", className)}>
      <Label htmlFor={inputId} className={cn("text-base", dark ? "text-white" : "text-foreground")}>
        Your email
      </Label>
      <div className={cn("flex flex-col gap-3", !stacked && "sm:flex-row")}>
        <Input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-describedby={error ? `${inputId}-error` : `${inputId}-hint`}
          className={cn("h-12 bg-white text-base text-[#171713]", !stacked && "sm:flex-1")}
        />
        <Button type="submit" variant="gradient" size="lg" disabled={status === "submitting"} className={cn("h-12", stacked && "w-full")}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Get the free checklist"
          )}
        </Button>
      </div>
      {error ? (
        <p id={`${inputId}-error`} role="alert" className={cn("text-sm", dark ? "text-[#ffb4a6]" : "text-destructive")}>
          {error}
        </p>
      ) : (
        <p id={`${inputId}-hint`} className={cn("text-sm", dark ? "text-white/70" : "text-muted-foreground")}>
          Free. Occasional scam alerts, no spam. Unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
