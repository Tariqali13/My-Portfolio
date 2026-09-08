import { ImageResponse } from "next/og";

export const alt = "Tariq Ali - Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#07111f",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#5eead4", marginBottom: 24 }}>
          Full-Stack Software Engineer
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-3px" }}>
          Tariq Ali
        </div>
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.35,
            color: "#cbd5e1",
            maxWidth: 950,
            marginTop: 24,
          }}
        >
          React · Next.js · TypeScript · Node.js · AWS
        </div>
        <div style={{ fontSize: 22, color: "#94a3b8", marginTop: 48 }}>
          8+ years building SaaS and scalable web products
        </div>
      </div>
    ),
    size
  );
}
