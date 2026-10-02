import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pillars = ["Strategy", "Automation", "Security", "Tax", "Product"];

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e1621",
          color: "#f7f6f2",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#f7f6f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 15c2-4 4-9 8-9s6 5 8 9"
                stroke="#0e1621"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: 34, letterSpacing: "-0.02em", fontFamily: "serif" }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8fb3d1",
              display: "flex",
            }}
          >
            AI transformation for finance and operations
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 72,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontFamily: "serif",
              maxWidth: 980,
              display: "flex",
            }}
          >
            AI that does the work, and protects what it touches.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 0,
            borderTop: "1px solid rgba(247,246,242,0.25)",
            paddingTop: 28,
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar}
              style={{
                display: "flex",
                fontSize: 24,
                color: "rgba(247,246,242,0.75)",
                marginRight: 48,
              }}
            >
              {pillar}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
