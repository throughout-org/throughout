import { ImageResponse } from "next/og";
import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Throughout (PVT) LTD — Digital Marketing, Engineering & Design";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    renderOgImage(
      "Digital Marketing, Engineering & Design",
      "A full-stack digital growth studio — Sri Lanka & worldwide.",
    ),
    { ...size },
  );
}
