import { ImageResponse } from "next/og";
import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Throughout: we build, design and grow digital products";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    renderOgImage(
      "We build, design and grow digital products.",
      "Offshore software development and dedicated teams, from Colombo, Sri Lanka.",
    ),
    { ...size },
  );
}
