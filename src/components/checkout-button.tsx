"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CheckoutButton({ plan }: { plan: string }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  async function checkout() {
    setLoading(true);
    setError("");
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });
    const data = await response.json();
    if (!response.ok || !data.url) {
      setError(data.error ?? "Checkout is not available yet.");
      setLoading(false);
      return;
    }
    window.location.href = data.url;
  }

  return (
    <div>
      <Button onClick={checkout} variant="gradient" size="lg" className="w-full" disabled={loading}>
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Opening secure checkout…</> : "Continue to secure checkout"}
      </Button>
      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
