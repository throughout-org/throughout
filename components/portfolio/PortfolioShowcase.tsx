"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";
import InnerBanner from "@/components/ui/InnerBanner";
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
        <InnerBanner
          badgeText="Our Portfolio"
          title="Our Work"
          description="Explore the innovative solutions we've built for our clients. From concept to launch, each project showcases our commitment to delivering exceptional results and driving real business impact."
          cta={
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-linear-to-r from-[#3698fd] via-[#3698fd] to-[#377bff] hover:shadow-xl hover:scale-[1.02]"
              >
                Start Your Project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          }
        />
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
