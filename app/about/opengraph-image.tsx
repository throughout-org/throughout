import { ImageResponse } from "next/og";
import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "About Throughout (PVT) LTD";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    renderOgImage(
      "Your Trusted Software Development Partner",
      "Mission, vision, and the team behind Throughout (PVT) LTD.",
    ),
    { ...size },
  );
}
