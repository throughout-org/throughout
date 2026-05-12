"use client";

import dynamic from "next/dynamic";

const AntigravityParticles = dynamic(
  () => import("@/components/ui/AntigravityParticles"),
  { ssr: false, loading: () => null }
);

export default function ParticlesClient() {
  return <AntigravityParticles />;
}
