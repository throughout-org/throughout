"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { openCalendlyPopup } from "@/components/CalendlyPopup";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  // Close services dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleServicesEnter = useCallback(() => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  }, []);

  // ===== TOP BAR LINKS =====
  const topBarLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/portfolio" },
    { name: "Company", href: "/about" },
    { name: "Free Site Auditor", href: "/free-seo-aduitor" },
    // { name: "Why Us", href: "/why-us" },
    { name: "Blog", href: "/insights" },
    // { name: "Researchers", href: "/insights" },
    { name: "Internships", href: "/internships" },
    { name: "Contact Us", href: "/contact" },
  ];

  // ===== MAIN NAV LINKS =====
  const mainNavLinks = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Comflo", href: "https://comflo.app/" },
    { name: "MVP Studio", href: "/mvp-studio" },
    { name: "Workflow Studio", href: "/n8n-agency" },
  ];

  // Short descriptions for the dropdown cards
  const serviceDescriptions: Record<string, string> = {
    "software-development":
      "High-performance engineering for modern digital business.",
    "custom-ecommerce-development":
      "Limitless commerce built on headless architecture.",
    "shopify-ecommerce": "Scalable storefronts tailored for high growth.",
    "cloud-server-solutions":
      "Resilient infrastructure for total peace of mind.",
    "wordpress-development": "Enterprise-level power on a familiar platform.",
    "ai-integrations-automation":
      "Intelligent logic that automates your workflow.",
    "ui-ux-design": "Designs that convert visitors into loyal users.",
    seo: "Data-driven strategies to dominate search rankings.",
  };

  const handleCalendlyClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e,
  ) => {
    openCalendlyPopup(e as unknown as React.MouseEvent<HTMLElement>);
  };

  return (
    <>
      {/* ============================================================ */}
      {/* LAYER 1 — TOP BAR (black, simple links)                      */}
      {/* ============================================================ */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-all duration-500 hidden lg:block ${
          isScrolled
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex items-center justify-center h-10 gap-8">
            {topBarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-all duration-300 rounded-full px-3 py-0 ${
                  isActive(link.href)
                    ? "text-white bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-md scale-105"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 2 — MAIN NAV BAR (red, with logo + primary links)      */}
      {/* ============================================================ */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled ? "top-0" : "lg:top-10 top-0"
        }`}
      >
        {/* Background band (full-width) */}
        <div className="bg-transparent">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-4 xl:px-8">
            {/* Main bar container */}
            <div
              className={`relative flex items-center justify-between transition-all duration-500 ${
                isScrolled ? "py-2" : "py-3"
              }  backdrop-blur-xl rounded-2xl mx-2 my-1.5 px-4 md:rounded-full md:mx-3 md:my-2 md:px-6 lg:mx-0 lg:px-4 lg:my-2 xl:px-8 bg-white/80 lg:bg-transparent`}
              style={{
                boxShadow:
                  "0 6px 30px rgba(7, 10, 49, 0.12), 0 0 0 1px rgba(8, 13, 41, 0.05)",
              }}
            >
              {/* Logo */}
              <Link
                href="/"
                className="relative z-50 flex items-center shrink-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="Throoout Logo"
                  width={190}
                  height={90}
                  className="w-auto h-11 md:h-14 lg:h-12 xl:h-16"
                  priority
                />
              </Link>

              {/* ===== Desktop Main Nav Links ===== */}
              <div className="items-center hidden gap-0.5 lg:flex xl:gap-3">
                {mainNavLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  // Our Services with dropdown
                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.name}
                        ref={servicesDropdownRef}
                        className="static"
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                      >
                        <button
                          onClick={() => setIsServicesOpen((prev) => !prev)}
                          className={`flex items-center gap-1 px-2.5 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer rounded-lg ${
                            isActive("/services")
                              ? "text-white bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-md scale-105"
                              : "text-gray-900 hover:text-gray-900 hover:bg-gray-100/60"
                          }`}
                        >
                          {link.name}
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* ===== MEGA DROPDOWN ===== */}
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-300 ease-out origin-top z-50 ${
                            isServicesOpen
                              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                          }`}
                          style={{
                            width: "min(860px, calc(100vw - 40px))",
                          }}
                        >
                          <div
                            className="relative z-10 p-5 bg-white border border-gray-200 rounded-2xl"
                            style={{
                              boxShadow:
                                "0 25px 60px -12px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.06)",
                            }}
                          >
                            {/* Services Grid — 3 columns */}
                            <div className="grid grid-cols-3 gap-3">
                              {services.map((service, idx) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  onClick={() => setIsServicesOpen(false)}
                                  className={`group/card flex items-start gap-3.5 p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.03] ${
                                    isActive(`/services/${service.slug}`)
                                      ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 border-white/30 shadow-xl scale-[1.02]"
                                      : "bg-gray-50/80 border-gray-200/80 hover:bg-white hover:border-gray-300"
                                  }`}
                                  style={{
                                    animation: isServicesOpen
                                      ? `dropdownCardIn 0.35s ease-out forwards ${idx * 0.04}s`
                                      : "none",
                                    opacity: isServicesOpen ? 1 : 0,
                                  }}
                                >
                                  <div
                                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl shadow-md group-hover/card:shadow-lg group-hover/card:scale-110 transition-all duration-300`}
                                  >
                                    {service.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p
                                      className={`text-sm font-bold transition-colors duration-200 leading-tight ${isActive(`/services/${service.slug}`) ? "text-white" : "text-gray-900 group-hover/card:text-blue-700"}`}
                                    >
                                      {service.title}
                                    </p>
                                    <p
                                      className={`text-xs mt-1 leading-relaxed line-clamp-2 ${isActive(`/services/${service.slug}`) ? "text-white/80" : "text-gray-500"}`}
                                    >
                                      {serviceDescriptions[service.slug] ||
                                        service.hero.subheadline.slice(0, 80)}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {/* View All Services — same card style */}
                              <Link
                                href="/services"
                                onClick={() => setIsServicesOpen(false)}
                                className="group/card flex items-start gap-3.5 p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.03] bg-gray-50/80 border-gray-200/80 hover:bg-white hover:border-gray-300"
                                style={{
                                  animation: isServicesOpen
                                    ? `dropdownCardIn 0.35s ease-out forwards ${services.length * 0.04}s`
                                    : "none",
                                  opacity: isServicesOpen ? 1 : 0,
                                }}
                              >
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl transition-all duration-300 shadow-md rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 group-hover/card:shadow-lg group-hover/card:scale-110">
                                  🔎
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover/card:text-blue-700">
                                    View All Services
                                  </p>
                                  <p className="mt-1 text-xs leading-relaxed text-gray-500 line-clamp-2">
                                    Explore our complete range of solutions.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Regular main nav link
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-lg whitespace-nowrap ${
                        isActive(link.href)
                          ? "text-gray-900 bg-blue-100 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border-white/30"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/60"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop CTA Button */}
              <Link
                href="https://calendly.com/throughoutwithyou/30min"
                onClick={handleCalendlyClick}
                className="group/cta hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs xl:px-7 xl:py-3 xl:text-sm xl:gap-2 font-extrabold text-white bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full transition-all duration-300 tracking-wide uppercase relative overflow-hidden hover:scale-105 hover:shadow-xl border border-white/30"
                style={{
                  boxShadow: "0 4px 20px rgba(56,189,248,0.3)",
                }}
              >
                <span className="relative z-10 hidden xl:inline">
                  Book a Free Call
                </span>
                <span className="relative z-10 xl:hidden">
                  Book a Free Call
                </span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-300 rounded-full opacity-0 group-hover/cta:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]" />
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-11 h-11 flex items-center justify-center focus:outline-none z-[60] rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-all duration-300 shadow-sm"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col justify-between w-6 h-5">
                  <span
                    className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                      isMenuOpen
                        ? "bg-gray-800 rotate-45 translate-y-[9px]"
                        : "bg-gray-800"
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 bg-gray-800" : "bg-gray-800"
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                      isMenuOpen
                        ? "bg-gray-800 -rotate-45 -translate-y-[9px]"
                        : "bg-gray-800"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 flex flex-col ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ top: isScrolled ? "65px" : "72px" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Scrollable Menu Content */}
          <div className="relative mx-4 mt-2 bg-white rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto border border-gray-200">
            {/* Top bar links section */}
            <div className="px-5 pt-5 pb-3 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Quick Links
              </p>
              <div className="flex flex-wrap gap-2">
                {topBarLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 border ${
                      isActive(link.href)
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                    }`}
                    style={{
                      animation: isMenuOpen
                        ? `slideIn 0.4s ease-out forwards ${idx * 0.04}s`
                        : "none",
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main nav links section */}
            <div className="px-5 py-4 space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Services
              </p>

              {mainNavLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http");
                // Our Services with expandable submenu
                if (link.hasDropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                          mobileServicesOpen
                            ? "bg-gray-900 text-white"
                            : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                        }`}
                        style={{
                          animation: isMenuOpen
                            ? `slideIn 0.4s ease-out forwards ${(index + 8) * 0.04}s`
                            : "none",
                          opacity: isMenuOpen ? 1 : 0,
                        }}
                      >
                        <span className="text-sm font-bold">{link.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Mobile services submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          mobileServicesOpen
                            ? "max-h-[700px] opacity-100 mt-2"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <div className="space-y-1.5 pl-2">
                          {services.map((service, sIdx) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white border border-gray-100 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                              style={{
                                animation: mobileServicesOpen
                                  ? `slideIn 0.35s ease-out forwards ${sIdx * 0.04}s`
                                  : "none",
                                opacity: mobileServicesOpen ? 1 : 0,
                              }}
                            >
                              <span
                                className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-base shadow-sm`}
                              >
                                {service.icon}
                              </span>
                              <span className="text-sm font-semibold text-gray-700">
                                {service.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular mobile main nav link
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-gray-900 text-white"
                        : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                    }`}
                    style={{
                      animation: isMenuOpen
                        ? `slideIn 0.4s ease-out forwards ${(index + 8) * 0.04}s`
                        : "none",
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="px-5 pb-5">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
                style={{
                  animation: isMenuOpen
                    ? "slideIn 0.4s ease-out forwards 0.6s"
                    : "none",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes dropdownCardIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
