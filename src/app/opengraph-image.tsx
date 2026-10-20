import { ImageResponse } from "next/og";

export const alt = "Mirflow: AI support agents that answer only from your own help pages";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", background: "#f3efe7", color: "#171713" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "#a84f3d", display: "flex" }} />
          Mirflow
        </div>
        <div style={{ marginTop: 40, fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>
          AI support agents that answer only from your own help pages
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#686258", display: "flex" }}>
          Sources cited. Human hand-off when unsure. Free demo built on your help center.
        </div>
      </div>
    ),
    { ...size }
  );
}
