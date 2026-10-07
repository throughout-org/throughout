import { ImageResponse } from "next/og";
import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const runtime = "edge";
export const alt = "Throughout logo";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(renderOgImage(), { ...size });
}
