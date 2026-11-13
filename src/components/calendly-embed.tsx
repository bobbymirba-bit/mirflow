"use client";

import Script from "next/script";

const WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly's inline widget. It renders into the container below once the
 * third-party script runs, so the container stays empty (and harmless) when
 * the script is blocked — the direct "Pick a time" link above is the fallback.
 */
export function CalendlyEmbed({ url }: { url: string }) {
  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <div
        className="calendly-inline-widget mt-8 overflow-hidden rounded-2xl border border-border bg-card"
        data-url={url}
        style={{ minWidth: "280px", height: "700px" }}
        role="region"
        aria-label="Calendly scheduling"
      />
      <Script src={WIDGET_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
