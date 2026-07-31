import { ImageResponse } from "next/og";
import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Throughout (PVT) LTD Portfolio";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    renderOgImage(
      "Our Work — Web, Mobile, AI & Automation",
      "Explore the portfolio of projects Throughout has designed and built.",
    ),
    { ...size },
  );
}
