"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const [navLinksRect, setNavLinksRect] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const pathname = usePathname();

  // Batch DOM reads/writes to avoid forced reflow
  useEffect(() => {
    // Only run after paint
    if (!isScrolled && navLinksRef.current) {
      const el = navLinksRef.current;
      // Read values first
      const left = el.offsetLeft;
      const width = el.offsetWidth;
      // Write state after all reads
      setNavLinksRect({ left, width });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolled, isMenuOpen, pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add icons for each nav link (use Heroicons or similar, or fallback to emoji for demo)
  const navLinks = [
    { name: "Home", href: "/", abbr: "HM" },
    { name: "About", href: "/about", abbr: "AB" },
    { name: "Services", href: "/services", abbr: "SV" },
    { name: "Why Us", href: "/why-us", abbr: "WU" },
    { name: "Insights", href: "/insights", abbr: "IN" },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };
    useEffect(() => {
    const timeout = setTimeout(() => {
      if (navLinksRef.current) {
        const el = navLinksRef.current;
        setNavLinksRect({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [pathname, isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-center items-center transition-all duration-500
        ${isScrolled ? 'lg:!bg-transparent lg:!backdrop-blur-none  lg:!shadow-none' : ''}
        ${isScrolled && !isMenuOpen? 'bg-white/30 backdrop-blur-md  shadow-sm' : ''}
        lg:bg-transparent lg:backdrop-blur-none  lg:shadow-none
      `}
      style={{ minHeight: "90px" }}
    >
      <div className="max-w-[1600px] w-full mx-auto px-8 ">
        <div className="flex justify-between items-center h-14 relative transition-all duration-500 ">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 z-50 relative transition-all duration-300"
          >
            <div className="relative overflow-hidden mt-[-20px] lg:mt-0">
              {/* Continuous Shining Effect */}
              <div className="absolute inset-0 pointer-events-none"></div>
              <Image
                src="/images/logo.png"
                alt="Throoout Logo"
                width={190}
                height={90}
                className="h-16 mt-2 w-auto relative z-13"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation with animated background */}
          <div
            ref={navLinksRef}
            className="hidden lg:flex items-center space-x-5 mt-4 relative z-10"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-6 py-2 font-extrabold rounded-full transition-all duration-300 group text-base focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg backdrop-blur-md ${
                    active
                      ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border border-white/30"
                      : "bg-white/40 text-blue-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-200/80 hover:text-blue-900 hover:scale-105 border border-white/20"
                  }`}
                  style={{
                    boxShadow: active
                      ? "0 4px 24px 0 rgba(56,189,248,0.18), 0 1.5px 8px 0 rgba(99,102,241,0.10)"
                      : "0 1.5px 8px 0 rgba(99,102,241,0.08)",
                    transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
                  }}
                >
                  {/* Show full text at all breakpoints, but smaller font size below 1140px */}
                  <span className="block text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold tracking-wide">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
          {/* Animated expanding background on scroll */}
          <div
            className={`hidden lg:block absolute transition-all duration-700 ease-[cubic-bezier(.4,2,.6,1)] bg-white/60 shadow-2xl backdrop-blur-2xl border border-white/30 ${
              isScrolled
                ? "top-0 left-0 right-0 h-[calc(100%+16px)] rounded-4xl opacity-100 scale-105"
                : "rounded-4xl shadow-lg opacity-90 scale-100"
            }`}
            style={{
              ...(isScrolled
                ? {
                    zIndex: 1,
                    width: "98%",
                    backdropFilter: "blur(24px) saturate(1.5)",
                  }
                : navLinksRect
                ? {
                    zIndex: 1,
                    top: "calc(50% + 8px)",
                    left: navLinksRect.left - 12,
                    width: navLinksRect.width + 24,
                    height: 56,
                    transform: "translateY(-50%)",
                    backdropFilter: "blur(24px) saturate(1.5)",
                  }
                : { zIndex: 1, backdropFilter: "blur(24px) saturate(1.5)" }),
              boxShadow:
                "0 -4px 16px 0 rgba(30,64,175,0.10), 0 4px 16px 0 rgba(30,64,175,0.07), 0 1px 8px 0 rgba(56,189,248,0.10)",
            }}
          ></div>

          {/* Desktop CTA Button */}
          <div
            className="hidden lg:flex items-center gap-4 mt-4"
            style={{ zIndex: 2 }}
          >
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white text-xs sm:text-sm xl:text-base 2xl:text-lg font-extrabold rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-md flex items-center gap-2"
              style={{
                boxShadow:
                  "0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)",
                transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
              }}
            >
              {/* Show icon only between 1140px and 425px, show text above 1140px */}
              <span className="inline 2xl:hidden text-2xl align-middle text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white fill-current" aria-hidden="true">
                  <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="currentColor"/>
                </svg>
              </span>
              <span className="hidden 2xl:inline">Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center focus:outline-none z-[60] rounded-full bg-blue-50/70 border border-blue-200 shadow-md hover:bg-blue-200 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-1 rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-blue-700 rotate-45 translate-y-3"
                    : "bg-blue-700"
                }`}
              ></span>
              <span
                className={`w-full h-1 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 bg-blue-700" : "bg-blue-700"
                }`}
              ></span>
              <span
                className={`w-full h-1 rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-blue-700 -rotate-45 -translate-y-2"
                    : "bg-blue-700"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu (fixed, rounded, blue) */}
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 flex justify-center items-start    pt-25 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Soft blue background with floating blobs */}
        <div className="absolute inset-0 bg-blue-100/90"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-blue-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-blue-100/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        {/* Menu Content */}
        <div
          className="relative bg-gradient-to-br from-white/70 via-blue-100/60 to-blue-200/40 rounded-3xl shadow-2xl min-w-[320px] max-w-xs mx-auto my-8 flex flex-col items-center justify-center py-10 px-6 space-y-8 border border-white/40 backdrop-blur-2xl"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(30,64,175,0.10), 0 1.5px 8px 0 rgba(99,102,241,0.08), 0 2px 24px 0 rgba(56,189,248,0.10)",
          }}
        >
          {/* Logo */}

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full text-center relative text-xl font-extrabold transition-all duration-500 transform rounded-full px-6 py-3 group focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg backdrop-blur-md border ${
                isActive(link.href)
                  ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border-white/30"
                  : "bg-white/40 text-blue-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-200/80 hover:text-blue-900 hover:scale-105 border-white/20"
              }`}
              style={{
                animation: isMenuOpen
                  ? `slideIn 0.5s ease-out forwards ${index * 0.1}s`
                  : "none",
                opacity: isMenuOpen ? 1 : 0,
                boxShadow: isActive(link.href)
                  ? "0 4px 24px 0 rgba(56,189,248,0.18), 0 1.5px 8px 0 rgba(99,102,241,0.10)"
                  : "0 1.5px 8px 0 rgba(99,102,241,0.08)",
                transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
              }}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile CTA Button */}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`w-full text-center relative text-xl font-extrabold transition-all duration-500 transform rounded-full px-6 py-3 group focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg backdrop-blur-md border ${
              isActive("/contact")
                ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white scale-105 shadow-xl border-white/30"
                : "bg-white/40 text-blue-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-200/80 hover:text-blue-900 hover:scale-105 border-white/20"
            }`}
            style={{
              animation: isMenuOpen
                ? "slideIn 0.5s ease-out forwards 0.5s"
                : "none",
              opacity: isMenuOpen ? 1 : 0,
              boxShadow:
                "0 4px 24px 0 rgba(56,189,248,0.18), 0 1.5px 8px 0 rgba(99,102,241,0.10)",
              transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
      {/* Move styles outside the menu content */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes logo-shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-logo-shine {
          animation: logo-shine 3s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </nav>
  );
}
