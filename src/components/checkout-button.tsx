"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

/**
 * Starts Stripe Checkout for one package. Sends only the package id — the
 * server resolves the Price IDs and verifies the amounts, so there is nothing
 * here a visitor could tamper with to change what they are charged.
 */
export function CheckoutButton({ packageId, label }: { packageId: string; label: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.url) {
        setError(data.error ?? "We couldn't start checkout. Please try again.");
        setLoading(false);
        return;
      }
      // Leaving the page, so `loading` intentionally stays true.
      window.location.href = data.url;
    } catch {
      setError("We couldn't reach the payment page. Check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:cursor-progress disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="motion-safe:animate-spin" aria-hidden="true" /> Opening secure checkout…
          </>
        ) : (
          <>
            {label} <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>
      <p aria-live="polite" className="sr-only">
        {loading ? "Opening secure checkout" : ""}
      </p>
      {error ? (
        <p role="alert" className="mt-3 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs text-muted-foreground">Payments are processed securely by Stripe.</p>
    </div>
  );
}
