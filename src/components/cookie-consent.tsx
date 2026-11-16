"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const COOKIE_CONSENT_KEY = "mirflow-cookie-consent";
export const COOKIE_CONSENT_EVENT = "mirflow-cookie-consent-change";

export type ConsentValue = "accepted" | "declined";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue | null;
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable client-side
    if (!getStoredConsent()) setVisible(true);
  }, []);

  function setConsent(value: ConsentValue) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 border border-border bg-background/95 shadow-2xl backdrop-blur sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-md"
    >
      <div className="flex flex-col gap-3 p-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          We use optional analytics cookies to improve the site.{" "}
          <Link href="/privacy" className="text-foreground underline underline-offset-4">
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setConsent("declined")}>
            Decline
          </Button>
          <Button variant="gradient" size="sm" onClick={() => setConsent("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
