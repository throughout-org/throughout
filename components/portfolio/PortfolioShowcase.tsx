"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";
import type { PortfolioProject } from "@/data/portfolio";

export default function PortfolioShowcase() {
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

  const padIndex = (n: number) => String(n).padStart(2, "0");

  if (!currentProject) return null;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden select-none"
    >
      {/* Light gradient background */}
      {/* <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-blue-50 via-white to-sky-50" /> */}

      {/* Animated background blobs */}
      {/* <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-indigo-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div> */}

      {/* Subtle grid pattern overlay */}
      {/* <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      /> */}

      <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative mx-auto text-center max-w-7xl">
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-linear-to-r from-blue-600 to-blue-400">
              Our Portfolio
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            <span className="block text-gray-900">Our Work</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 sm:text-2xl">
            Explore the innovative solutions we&apos;ve built for our clients.
            From concept to launch, each project showcases our commitment to
            delivering exceptional results and driving real business impact.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-start min-h-[72vh] px-4 pt-20 pb-0 mx-auto max-w-350 sm:px-6 md:px-10 lg:px-16 sm:pt-12 lg:pt-12">
        {/* Side dot navigation */}
        <div className="absolute z-30 flex-col hidden gap-3 -translate-y-1/2 right-6 top-1/2 lg:flex">
          {filteredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== currentIndex) {
                  setDirection(i > currentIndex ? "down" : "up");
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(i);
                    setTimeout(() => setIsAnimating(false), 400);
                  }, 100);
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-blue-600 scale-125 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Category Filter Tabs */}
        {/* <div className="relative z-20 flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.match}
                onClick={() => handleFilterChange(tab.match)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === tab.match
                    ? "bg-linear-to-r from-blue-600 to-sky-500 text-white border-transparent shadow-lg shadow-blue-500/20"
                    : "bg-white/80 text-gray-600 border-gray-200 hover:text-gray-900 hover:border-blue-300 hover:shadow-md backdrop-blur-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div> */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-500 ${
            isAnimating
              ? direction === "down"
                ? "opacity-0 translate-y-8"
                : "opacity-0 -translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Left: Project Info */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Counter + Category */}
            <div className="flex items-center gap-4">
              <span className="text-sm tracking-[0.15em] text-gray-400 font-mono">
                {padIndex(currentIndex + 1)} / {padIndex(totalProjects)}
              </span>
              <span className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                <span className="inline-block w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-sky-400" />
                {currentProject.category[0]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900">
              {currentProject.title}
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              {currentProject.shortDescription}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-blue-100 text-blue-700 bg-blue-50/80 hover:bg-blue-100 hover:border-blue-200 transition-colors duration-200 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href={`/portfolio/${currentProject.id}`}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Case Study
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-linear-to-r from-indigo-500 via-blue-500 to-sky-400 group-hover:opacity-100" />
              </Link>
              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-900 font-semibold text-sm transition-all duration-300 hover:shadow-lg bg-white/60 backdrop-blur-sm"
                >
                  Live Demo
                  <svg
                    className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right: Project Preview (Browser Mockup) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-140">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-linear-to-br from-blue-400/20 via-sky-300/10 to-indigo-400/20 rounded-3xl blur-2xl -z-10" />

              {/* Browser chrome */}
              <div className="overflow-hidden border shadow-2xl rounded-2xl border-white/60 bg-white/40 backdrop-blur-xl shadow-blue-900/10">
                {/* Browser top bar */}
                <div className="flex items-center gap-3 px-5 py-3 border-b bg-white/70 border-gray-200/60">
                  {/* Traffic lights */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 rounded-lg px-4 py-1.5 text-[11px] text-gray-400 font-mono truncate">
                      app.
                      {currentProject.clientName
                        .toLowerCase()
                        .replace(/\s+/g, "")
                        .replace(/[^a-z0-9]/g, "")}
                      .io/dashboard
                    </div>
                  </div>
                </div>

                {/* Browser content – Project preview */}
                <div className="relative overflow-hidden aspect-16/10 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
                  <ProjectMockup project={currentProject} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Pagination + Navigation */}
      <div className="absolute left-0 right-0 z-20 px-4 mx-auto bottom-6 max-w-350 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Current / Total */}
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-5xl font-black text-transparent sm:text-6xl tabular-nums bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text">
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
              className="flex items-center justify-center w-12 h-12 text-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-full group hover:text-blue-600 hover:border-blue-400 hover:shadow-lg disabled:opacity-30 bg-white/60 backdrop-blur-sm"
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
              className="flex items-center justify-center w-12 h-12 text-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-full group hover:text-blue-600 hover:border-blue-400 hover:shadow-lg disabled:opacity-30 bg-white/60 backdrop-blur-sm"
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
    </div>
  );
}

/* ----- Project Mockup Component ----- */
function ProjectMockup({ project }: { project: PortfolioProject }) {
  // Generate a unique dashboard mockup based on project data
  const barHeights = project.results.map(
    (_, i) => 30 + ((i * 37 + project.id.charCodeAt(0) * 13) % 70),
  );

  const accentColor = getCategoryColor(project.category[0]);

  return (
    <div className="flex flex-col h-full gap-4 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-wide text-white/90">
          {project.clientName}
        </span>
        <div className="flex gap-2">
          <div className={`w-8 h-1 rounded-full ${accentColor.bar}`} />
          <div
            className={`w-6 h-1 rounded-full ${accentColor.bar} opacity-50`}
          />
          <div
            className={`w-4 h-1 rounded-full ${accentColor.bar} opacity-30`}
          />
        </div>
      </div>

      {/* Tagline */}
      <div>
        <p className="text-base font-bold leading-tight text-white/80">
          {project.description.split(" ").slice(0, 4).join(" ")}
        </p>
        <p className={`${accentColor.text} font-bold text-base leading-tight`}>
          {project.description.split(" ").slice(4, 8).join(" ")}
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 mt-1">
        {project.results.slice(0, 3).map((result, i) => {
          const parts = result.match(/^([\d$%+,KM.]+)\s*(.*)/);
          const value = parts ? parts[1] : result.split(" ")[0];
          const label = parts ? parts[2] : result.split(" ").slice(1).join(" ");
          return (
            <div
              key={i}
              className={`rounded-xl px-3 py-3 ${accentColor.card} border ${accentColor.border}`}
            >
              <p className="text-lg font-bold text-white tabular-nums">
                {value}
              </p>
              <p className="text-gray-500 text-[10px] mt-0.5 truncate">
                {label || result}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bar chart */}
      <div className="flex items-end flex-1 gap-2 pt-2">
        {[...barHeights, ...barHeights].slice(0, 8).map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md transition-all duration-500 ${
              i < 4 ? accentColor.bar : `${accentColor.bar} opacity-40`
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function getCategoryColor(category: string) {
  const map: Record<
    string,
    { bar: string; text: string; card: string; border: string }
  > = {
    "Web Development": {
      bar: "bg-blue-500",
      text: "text-blue-400",
      card: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    "E-Commerce": {
      bar: "bg-indigo-500",
      text: "text-indigo-400",
      card: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    "AI/ML": {
      bar: "bg-cyan-500",
      text: "text-cyan-400",
      card: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    Automation: {
      bar: "bg-emerald-500",
      text: "text-emerald-400",
      card: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    "Mobile Development": {
      bar: "bg-orange-500",
      text: "text-orange-400",
      card: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
    "Data Analytics": {
      bar: "bg-sky-500",
      text: "text-sky-400",
      card: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    SaaS: {
      bar: "bg-violet-500",
      text: "text-violet-400",
      card: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
  };
  return (
    map[category] || {
      bar: "bg-blue-500",
      text: "text-blue-400",
      card: "bg-blue-500/10",
      border: "border-blue-500/20",
    }
  );
}
