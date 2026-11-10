import { ImageResponse } from "next/og";

export const alt = "Mirflow: AI support and lead routing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", background: "#f4f8ff", color: "#102344" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "#1e50c5", display: "flex" }} />
          Mirflow
        </div>
        <div style={{ marginTop: 40, fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>
          AI support and lead routing
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#4b5f7e", display: "flex" }}>
          Website chat, phone reception, and follow-up managed by Mirflow.
        </div>
      </div>
    ),
    { ...size }
  );
}
