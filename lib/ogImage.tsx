export const ogImageSize = { width: 1200, height: 630 };

export function renderOgImage(headline: string, subline: string) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #0c1a2e 0%, #0b3a66 45%, #0284c7 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <div
          style={{ width: 14, height: 44, borderRadius: 4, background: "#38bdf8" }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            color: "#e0f2fe",
            letterSpacing: -1,
          }}
        >
          THROUGHOUT
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 54,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.15,
          maxWidth: 980,
        }}
      >
        {headline}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#bae6fd",
          marginTop: 28,
          maxWidth: 900,
        }}
      >
        {subline}
      </div>
    </div>
  );
}
