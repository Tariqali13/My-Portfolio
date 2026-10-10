import { ImageResponse } from "next/og";

export const alt = "Tariq Ali, senior full-stack software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview in the site's ticket style: ink ticket, amber stub.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f6f7f9" }}>
        <div style={{ display: "flex", width: 1040, height: 460, borderRadius: 28, background: "#121a2b", color: "#f3f5f9", transform: "rotate(-1.5deg)" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "56px 60px" }}>
            <div style={{ display: "flex", alignSelf: "flex-start", padding: "4px 14px", border: "2px solid #f2b233", borderRadius: 8, color: "#f2b233", fontSize: 24, fontWeight: 700 }}>
              Admit one
            </div>
            <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: "-3px", marginTop: 26 }}>Tariq Ali</div>
            <div style={{ fontSize: 34, color: "#a9b3c4", marginTop: 6 }}>Senior full-stack software engineer</div>
            <div style={{ fontSize: 26, color: "#a9b3c4", marginTop: "auto" }}>
              Ticketing, payments, SaaS and AI products. 8+ years.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 210, padding: "56px 30px", background: "#f2b233", color: "#3b2a05", borderRadius: "0 28px 28px 0", borderLeft: "4px dashed #121a2b" }}>
            <div style={{ fontSize: 34, fontWeight: 800 }}>Live projects</div>
            <div style={{ fontSize: 24, fontWeight: 600 }}>tariqali.dev</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
