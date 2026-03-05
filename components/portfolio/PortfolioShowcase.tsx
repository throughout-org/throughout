"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects, portfolioCategories } from "@/data/portfolio";
import type { PortfolioProject } from "@/data/portfolio";

// Map data categories to display-friendly filter labels
const filterTabs = [
  { label: "All Work", match: "All" },
  { label: "Web Dev", match: "Web Development" },
  { label: "AI & Automation", match: "AI/ML" },
  { label: "Mobile Apps", match: "Mobile Development" },
  { label: "E-Commerce", match: "E-Commerce" },
  { label: "Data & Analytics", match: "Data Analytics" },
  { label: "Automation", match: "Automation" },
  { label: "SaaS", match: "SaaS" },
];

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) =>
          p.category.some(
            (c) =>
              c.toLowerCase().includes(activeFilter.toLowerCase()) ||
              activeFilter.toLowerCase().includes(c.toLowerCase())
          )
        );

  const totalProjects = filteredProjects.length;
  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const handleFilterChange = (match: string) => {
    setActiveFilter(match);
    setCurrentIndex(0);
  };

  const navigate = useCallback(
    (dir: "up" | "down") => {
      if (isAnimating || totalProjects <= 1) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          dir === "down"
            ? (prev + 1) % totalProjects
            : (prev - 1 + totalProjects) % totalProjects
        );
        setTimeout(() => setIsAnimating(false), 400);
      }, 100);
    },
    [isAnimating, totalProjects]
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

  // Mouse wheel navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 0) navigate("down");
        else navigate("up");
      }, 80);
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [navigate]);

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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 pointer-events-none" />

      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Side dot navigation */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-30">
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

     

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col justify-center min-h-screen pt-20 sm:pt-24 lg:pt-24 pb-24">
        {/* Section Header */}
        <div className="text-center mb-4 mt-4 pb-5 ">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-semibold rounded-full shadow-md tracking-wide uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 ">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="relative z-20 flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {filterTabs.map((tab) => (
              <button
                key={tab.match}
                onClick={() => handleFilterChange(tab.match)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === tab.match
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white border-transparent shadow-lg shadow-blue-500/20"
                    : "bg-white/80 text-gray-600 border-gray-200 hover:text-gray-900 hover:border-blue-300 hover:shadow-md backdrop-blur-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div><div
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
              <span className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 inline-block" />
                {currentProject.category[0]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900">
              {currentProject.title}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
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
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Case Study
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <div className="relative w-full max-w-[560px]">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-sky-300/10 to-indigo-400/20 rounded-3xl blur-2xl -z-10" />

              {/* Browser chrome */}
              <div className="rounded-2xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl shadow-blue-900/10">
                {/* Browser top bar */}
                <div className="flex items-center gap-3 px-5 py-3 bg-white/70 border-b border-gray-200/60">
                  {/* Traffic lights */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 rounded-lg px-4 py-1.5 text-[11px] text-gray-400 font-mono truncate">
                      app.{currentProject.clientName
                        .toLowerCase()
                        .replace(/\s+/g, "")
                        .replace(/[^a-z0-9]/g, "")}
                      .io/dashboard
                    </div>
                  </div>
                </div>

                {/* Browser content – Project preview */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                  <ProjectMockup project={currentProject} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Pagination + Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-4 sm:px-6 md:px-10 lg:px-16 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Current / Total */}
          <div className="flex items-baseline gap-1">
            <span className="text-5xl sm:text-6xl font-black tabular-nums font-mono bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              {padIndex(currentIndex + 1)}
            </span>
            <span className="text-lg text-gray-400 font-mono ml-2">
              / {padIndex(totalProjects)}
            </span>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("up")}
              disabled={isAnimating}
              className="group w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-400 hover:shadow-lg transition-all duration-200 disabled:opacity-30 bg-white/60 backdrop-blur-sm"
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
              className="group w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-400 hover:shadow-lg transition-all duration-200 disabled:opacity-30 bg-white/60 backdrop-blur-sm"
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
    (_, i) => 30 + ((i * 37 + project.id.charCodeAt(0) * 13) % 70)
  );

  const accentColor = getCategoryColor(project.category[0]);

  return (
    <div className="p-6 h-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-white/90 font-bold text-sm tracking-wide">
          {project.clientName}
        </span>
        <div className="flex gap-2">
          <div className={`w-8 h-1 rounded-full ${accentColor.bar}`} />
          <div className={`w-6 h-1 rounded-full ${accentColor.bar} opacity-50`} />
          <div className={`w-4 h-1 rounded-full ${accentColor.bar} opacity-30`} />
        </div>
      </div>

      {/* Tagline */}
      <div>
        <p className="text-white/80 font-bold text-base leading-tight">
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
              <p className="text-white font-bold text-lg tabular-nums">
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
      <div className="flex-1 flex items-end gap-2 pt-2">
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
