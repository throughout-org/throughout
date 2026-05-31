"use client";

import React from "react";
import { motion } from "framer-motion";
import BannerBadge from "@/components/ui/BannerBadge";
import AntigravityParticles from "@/components/ui/AntigravityParticles";

interface InnerBannerProps {
  badgeText: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: React.ReactNode | null;
  isBackgroundColored?: boolean;
  /** When true renders full-screen with particles — matches the homepage hero */
  fullScreen?: boolean;
}

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO, delay: i * 0.12 },
  }),
};

const Content = ({
  badgeText,
  title,
  description,
  cta,
}: Pick<InnerBannerProps, "badgeText" | "title" | "description" | "cta">) => (
  <div className="relative z-10 mx-auto max-w-7xl text-center px-4 sm:px-6 lg:px-8">
    <motion.div
      className="mb-6 text-center"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={0}
    >
      <BannerBadge text={badgeText} />
    </motion.div>

    <motion.h1
      className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={1}
    >
      <span className="block leading-tight text-slate-950">{title}</span>
    </motion.h1>

    <motion.div
      className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg lg:text-xl"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={2}
    >
      {description}
    </motion.div>

    {cta && (
      <motion.div
        className="mt-8"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
      >
        {cta}
      </motion.div>
    )}
  </div>
);

export default function InnerBanner(props: InnerBannerProps) {
  const {
    badgeText = "Welcome to Throughout (PVT) LTD",
    title = "Smart Software Solutions for Your Business",
    description = "Transform your business with Throughout (PVT) LTD's expert software development services.",
    cta = null,
    isBackgroundColored = true,
    fullScreen = false,
  } = props;

  /* ── Full-screen hero mode (matches homepage) ── */
  if (fullScreen) {
    return (
      <div className="relative flex min-h-screen items-stretch isolate">
        <div className="absolute inset-0 w-full h-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <section className="w-full py-16 sm:py-20">
            <Content
              badgeText={badgeText}
              title={title}
              description={description}
              cta={cta}
            />
          </section>
        </div>
      </div>
    );
  }

  /* ── Inline mode (original, backward-compatible) ── */
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {isBackgroundColored && (
        <div className="absolute inset-0 z-0">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      )}
      <Content
        badgeText={badgeText}
        title={title}
        description={description}
        cta={cta}
      />
    </section>
  );
}
