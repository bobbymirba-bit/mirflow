import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a12 0%, #14121f 50%, #0a0a12 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.3), transparent 55%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background:
                  "linear-gradient(100deg, #6366f1, #8b5cf6, #3b82f6)",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-0.02em",
              }}
            >
              {siteConfig.name}
            </span>
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#f5f5f7",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: 820,
              display: "flex",
            }}
          >
            AI systems that qualify leads, answer customers, and run your
            back office around the clock.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
