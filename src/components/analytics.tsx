"use client";

import * as React from "react";
import Script from "next/script";

import { COOKIE_CONSENT_EVENT, getStoredConsent } from "@/components/cookie-consent";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * Loads Google Analytics only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set AND
 * the visitor has accepted the cookie consent banner. Listens for consent
 * changes so analytics starts immediately after acceptance, with no reload.
 */
export function Analytics() {
  const [consented, setConsented] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable client-side
    setConsented(getStoredConsent() === "accepted");

    function handleChange(event: Event) {
      const detail = (event as CustomEvent<string>).detail;
      setConsented(detail === "accepted");
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange);
  }, []);

  if (!GA_MEASUREMENT_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
