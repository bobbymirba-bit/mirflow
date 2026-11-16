import { ImageResponse } from "next/og";

export const alt = "Mirflow: Your all-in-one digital team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", background: "#05060a", color: "#eef1f8" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "#22d3ee", display: "flex" }} />
          Mirflow
        </div>
        <div style={{ marginTop: 40, fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>
          We run your digital side. You run your business.
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#8d95a9", display: "flex" }}>
          Websites, marketing, and AI systems managed by one team.
        </div>
      </div>
    ),
    { ...size }
  );
}
