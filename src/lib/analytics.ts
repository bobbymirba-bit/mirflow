export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagFn = (...args: unknown[]) => void;

/**
 * Fires a custom event to Google Analytics (if configured and the visitor has
 * consented to analytics cookies). Safe to call unconditionally — it's a
 * no-op when analytics isn't configured or hasn't loaded.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: GtagFn }).gtag;
  gtag?.("event", name, params);
}
