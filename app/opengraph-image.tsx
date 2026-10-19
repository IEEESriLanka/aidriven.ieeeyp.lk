import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { heroStats } from "@/lib/data";

export const alt = "AI Driven Sri Lanka - An initiative of IEEE Young Professionals Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview card shown when the site is shared (email, WhatsApp, LinkedIn)
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "assets/AIDSL_FullLOGO_DARKNoBG.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(ellipse at 85% 30%, #3a1a10 0%, #161211 55%, #0d0b0a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={340} height={80} />
          <div
            style={{
              display: "flex",
              border: "2px solid rgba(255,79,0,0.6)",
              background: "rgba(255,79,0,0.12)",
              color: "#ffb48a",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 22,
            }}
          >
            An initiative of IEEE Young Professionals Sri Lanka
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
          <span>ONE TEAM.</span>
          <span style={{ color: "#FF4F00" }}>IGNITING MINDS.</span>
          <span>LIMITLESS POSSIBILITIES.</span>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", borderLeft: "4px solid #FF4F00", paddingLeft: 18 }}
            >
              <span style={{ fontSize: 44, fontWeight: 800, color: "#FF4F00" }}>
                {stat.value.toLocaleString("en-US")}
                {stat.suffix}
              </span>
              <span style={{ fontSize: 20, letterSpacing: 2, color: "rgba(255,255,255,0.65)", textTransform: "uppercase" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
