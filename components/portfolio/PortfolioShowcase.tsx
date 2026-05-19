"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import PortfolioCarouselSection from "@/components/portfolio/PortfolioCarouselSection";

type PortfolioShowcaseProps = {
  showBanner?: boolean;
};

export default function PortfolioShowcase({
  showBanner = true,
}: PortfolioShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = portfolioProjects;

  const totalProjects = filteredProjects.length;
  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const navigate = useCallback(
    (dir: "up" | "down") => {
      if (isAnimating || totalProjects <= 1) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          dir === "down"
            ? (prev + 1) % totalProjects
            : (prev - 1 + totalProjects) % totalProjects,
        );
        setTimeout(() => setIsAnimating(false), 400);
      }, 100);
    },
    [isAnimating, totalProjects],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") navigate("down");
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") navigate("up");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // Mouse wheel navigation removed to allow normal scrolling
  // Users can still navigate with keyboard arrows, touch swipe, and dot buttons

  // Touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? "down" : "up");
      }
    };
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);

  const handleSelectProject = useCallback(
    (index: number) => {
      if (index === currentIndex || isAnimating) return;

      setDirection(index > currentIndex ? "down" : "up");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 400);
      }, 100);
    },
    [currentIndex, isAnimating],
  );

  if (!currentProject) return null;

  return (
    <div ref={containerRef} className="relative overflow-hidden select-none">
      {showBanner && (
        <div className="relative flex min-h-[78vh] items-stretch isolate">
          <div className="absolute inset-0 h-full w-full">
            <AntigravityParticles />
          </div>
          <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
            <InnerBanner
              badgeText="Our Portfolio"
              title={
                <>
                  Work Built for Real <br className="hidden md:block" />
                  Business Outcomes
                </>
              }
              description="Explore the digital products, automation systems, and commerce experiences we have shaped from concept to launch."
              cta={
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                  >
                    Start Your Project
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg"
                  >
                    View Case Studies
                  </Link>
                </div>
              }
              isBackgroundColored={false}
            />
          </div>
        </div>
      )}

      <PortfolioCarouselSection
        projects={filteredProjects}
        currentIndex={currentIndex}
        isAnimating={isAnimating}
        direction={direction}
        currentProject={currentProject}
        onSelectProject={handleSelectProject}
        navigate={navigate}
      />
    </div>
  );
}
