import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HindUSA — Hindu Pride, American Heart";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#FF9933",
          color: "#800000",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#800000",
            fontSize: 56,
            marginBottom: 24,
            color: "#FFD700",
          }}
        >
          ॐ
        </div>
        <div style={{ fontSize: 72, fontWeight: 900, marginBottom: 12 }}>
          HindUSA
        </div>
        <div style={{ fontSize: 28, color: "#FFFFFF", marginBottom: 8 }}>
          Hindu Pride, American Heart
        </div>
        <div style={{ fontSize: 22, color: "#800000", opacity: 0.8 }}>
          hindusa.com
        </div>
      </div>
    ),
    { ...size }
  );
}
