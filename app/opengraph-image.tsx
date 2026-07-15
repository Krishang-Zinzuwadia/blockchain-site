import { ImageResponse } from "next/og";

export const alt = "Rubyx — The Trust Layer for 3D Printing";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

function RubyxMark({ size = 72 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path d="M32 5 56 20 48 49 32 60 16 49 8 20Z" fill="#3D3B4F" />
      <path d="M32 5 56 20 42 28H22L8 20Z" fill="#FFCFFC" />
      <path d="m8 20 14 8 10 32-16-11Z" fill="#28E99F" />
      <path d="m56 20-14 8-10 32 16-11Z" fill="#739CFF" />
      <path d="m22 28 10-23 10 23-10 32Z" fill="#EAFF78" />
      <path
        d="m25 34 14 14m0-14L25 48"
        stroke="#3D3B4F"
        strokeWidth="5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#3d3b4f",
        backgroundColor: "#e9e9e9",
        backgroundImage:
          "radial-gradient(circle at center, rgba(61,59,79,0.16) 1.25px, transparent 1.25px)",
        backgroundSize: "24px 24px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "22px",
          display: "flex",
          border: "1px solid rgba(61,59,79,0.22)",
        }}
      />

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 66px 54px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <RubyxMark />
            <div
              style={{
                display: "flex",
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-1.5px",
              }}
            >
              RUBYX
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "11px 17px",
              border: "1px solid #3d3b4f",
              background: "#eaff78",
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: "1px",
            }}
          >
            VERIFIABLE MANUFACTURING
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "78%" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "18px",
                fontFamily: "monospace",
                fontSize: 18,
                letterSpacing: "2px",
                color: "#008e67",
              }}
            >
              [ THE TRUST LAYER ]
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 78,
                lineHeight: 0.98,
                fontWeight: 800,
                letterSpacing: "-4px",
              }}
            >
              <span>Every print.</span>
              <span>Proven.</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 145,
              height: 145,
              background: "#ffcffc",
              border: "1px solid #3d3b4f",
              transform: "rotate(6deg)",
            }}
          >
            <RubyxMark size={104} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(61,59,79,0.42)",
            paddingTop: "22px",
          }}
        >
          <div style={{ display: "flex", fontSize: 20, color: "#56536a" }}>
            Secure design IP. Authorize every job. Verify every outcome.
          </div>
          <div
            style={{
              display: "flex",
              gap: "18px",
              fontFamily: "monospace",
              fontSize: 15,
              letterSpacing: "1px",
            }}
          >
            <span>ENCRYPT</span>
            <span style={{ color: "#739cff" }}>●</span>
            <span>AUTHORIZE</span>
            <span style={{ color: "#28e99f" }}>●</span>
            <span>VERIFY</span>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
