export const ogImageSize = { width: 1200, height: 630 };

export function renderOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders a static social image. */}
      <img src="https://www.throughout.io/images/logo.png" alt="" width="720" height="189" />
    </div>
  );
}
