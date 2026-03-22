"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { PortfolioProject } from "@/data/portfolio";

interface PortfolioCarouselSectionProps {
  projects: PortfolioProject[];
  currentIndex: number;
  isAnimating: boolean;
  direction: "up" | "down";
  currentProject: PortfolioProject;
  onSelectProject: (index: number) => void;
  navigate: (dir: "up" | "down") => void;
}

export default function PortfolioCarouselSection({
  projects,
  currentIndex,
  isAnimating,
  direction,
  currentProject,
  onSelectProject,
  navigate,
}: PortfolioCarouselSectionProps) {
  const padIndex = (n: number) => String(n).padStart(2, "0");
  const totalProjects = projects.length;
  const browserUrl =
    currentProject.link ??
    `https://app.${currentProject.clientName
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9]/g, "")}.io/dashboard`;

  return (
    <>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-start min-h-[60vh] px-4 pt-12 pb-8 mx-auto max-w-350 sm:min-h-[58vh] sm:px-6 sm:pt-16 md:px-10 lg:px-16 lg:pt-12">
        {/* Side dot navigation */}
        <div className="absolute z-30 flex-col hidden gap-3 -translate-y-1/2 right-6 top-1/2 lg:flex">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => onSelectProject(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-blue-600 scale-125 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <div
          className={`grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 transition-all duration-500 ${
            isAnimating
              ? direction === "down"
                ? "opacity-0 translate-y-8"
                : "opacity-0 -translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Left: Project Info */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            {/* Title */}
            <h1 className="text-2xl font-bold leading-[1.12] tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {currentProject.title}
            </h1>

            {/* Description */}
            <p className="max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base lg:text-lg">
              {currentProject.shortDescription}
            </p>
          </div>

          {/* Right: Project Preview (Browser Mockup) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[95vw] sm:max-w-140">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-linear-to-br from-blue-400/20 via-sky-300/10 to-indigo-400/20 rounded-3xl blur-2xl -z-10" />

              {/* Browser chrome */}
              <div className="overflow-hidden border shadow-2xl rounded-xl border-white/60 bg-white/40 backdrop-blur-xl shadow-blue-900/10 sm:rounded-2xl">
                {/* Browser top bar */}
                <div className="flex items-center gap-2 px-3 py-2 border-b bg-white/70 border-gray-200/60 sm:gap-3 sm:px-5 sm:py-3">
                  {/* Traffic lights */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 mx-2 sm:mx-4">
                    <div className="rounded-lg bg-gray-100 px-3 py-1.5 font-mono text-[10px] text-gray-400 truncate sm:px-4 sm:text-[11px]">
                      {browserUrl}
                    </div>
                  </div>
                </div>

                {/* Browser content - Project preview */}
                <div className="relative overflow-hidden aspect-[4/3] bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 sm:aspect-16/10">
                  <AutoScrollScreenshot
                    src={currentProject.image}
                    alt={currentProject.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Pagination + Navigation */}
      <div className="relative z-20 px-4 pb-4 mx-auto mt-6 max-w-350 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Current / Total */}
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-4xl font-black text-transparent tabular-nums bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text sm:text-5xl lg:text-6xl">
              {padIndex(currentIndex + 1)}
            </span>
            <span className="ml-2 font-mono text-lg text-gray-400">
              / {padIndex(totalProjects)}
            </span>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("up")}
              disabled={isAnimating}
              className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-full group hover:text-blue-600 hover:border-blue-400 hover:shadow-lg disabled:opacity-30 bg-white/60 backdrop-blur-sm sm:h-12 sm:w-12"
              aria-label="Previous project"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("down")}
              disabled={isAnimating}
              className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-full group hover:text-blue-600 hover:border-blue-400 hover:shadow-lg disabled:opacity-30 bg-white/60 backdrop-blur-sm sm:h-12 sm:w-12"
              aria-label="Next project"
            >
              <svg
                className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AutoScrollScreenshot({ src, alt }: { src: string; alt: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const frameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const naturalSizeRef = useRef<{ width: number; height: number } | null>(null);

  const stopAnimation = useCallback(() => {
    if (frameIdRef.current !== null) {
      window.cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = null;
    }
    startTimeRef.current = null;
  }, []);

  const startAnimation = useCallback(
    (distance: number) => {
      const track = trackRef.current;
      if (!track || distance <= 0) return;

      stopAnimation();

      // Slow, continuous up-down loop to simulate natural page scrolling.
      const pixelsPerSecond = 28;
      const oneWayDuration = Math.max(
        (distance / pixelsPerSecond) * 1000,
        8000,
      );
      const fullCycle = oneWayDuration * 2;

      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) startTimeRef.current = timestamp;
        const elapsed = (timestamp - startTimeRef.current) % fullCycle;
        const progress =
          elapsed <= oneWayDuration
            ? elapsed / oneWayDuration
            : 1 - (elapsed - oneWayDuration) / oneWayDuration;

        track.style.transform = `translateY(${-distance * progress}px)`;
        frameIdRef.current = window.requestAnimationFrame(animate);
      };

      frameIdRef.current = window.requestAnimationFrame(animate);
    },
    [stopAnimation],
  );

  const recalculateScrollDistance = useCallback(() => {
    if (!viewportRef.current || !trackRef.current || !naturalSizeRef.current)
      return;

    const viewport = viewportRef.current;
    const { width, height } = naturalSizeRef.current;

    if (!width || !height || viewport.clientWidth === 0) {
      stopAnimation();
      trackRef.current.style.transform = "translateY(0px)";
      return;
    }

    const scaledImageHeight = height * (viewport.clientWidth / width);
    const distance = Math.max(scaledImageHeight - viewport.clientHeight, 0);
    if (distance <= 0) {
      stopAnimation();
      trackRef.current.style.transform = "translateY(0px)";
      return;
    }

    startAnimation(distance);
  }, [startAnimation, stopAnimation]);

  useEffect(() => {
    window.addEventListener("resize", recalculateScrollDistance);

    return () => {
      window.removeEventListener("resize", recalculateScrollDistance);
      stopAnimation();
    };
  }, [recalculateScrollDistance, stopAnimation]);

  useEffect(() => {
    // Reset animation when source changes until image dimensions are known.
    naturalSizeRef.current = null;
    stopAnimation();
    if (trackRef.current) {
      trackRef.current.style.transform = "translateY(0px)";
    }
  }, [src, stopAnimation]);

  return (
    <div
      ref={viewportRef}
      className="relative h-full overflow-hidden bg-slate-950"
    >
      <div ref={trackRef}>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          unoptimized
          className="block w-full h-auto pointer-events-none select-none"
          draggable={false}
          onLoad={(e) => {
            const imageEl = e.currentTarget as HTMLImageElement;
            naturalSizeRef.current = {
              width: imageEl.naturalWidth,
              height: imageEl.naturalHeight,
            };
            recalculateScrollDistance();
          }}
        />
      </div>

      {/* Subtle overlays for cleaner framing at top and bottom */}
      <div className="absolute inset-x-0 top-0 h-14 bg-linear-to-b from-slate-950/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-slate-950/65 to-transparent" />

      <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
        Auto Scroll
      </div>
    </div>
  );
}
