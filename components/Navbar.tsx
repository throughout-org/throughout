"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BookCallLink } from "@/components/BookCallLink";

const navigation = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in the middle of the viewport (home page only).
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navigation
      .map((link) => document.getElementById(link.href.slice(2)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const href = `/#${entry.target.id}`;
          if (entry.isIntersecting) setActive(href);
          else setActive((current) => (current === href ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const solid = scrolled || isMenuOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? "border-hairline bg-canvas/85 shadow-[0_10px_30px_-20px_rgba(0,51,102,0.35)] backdrop-blur-md"
          : "border-transparent bg-canvas"
      }`}
      aria-label="Main navigation"
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-4 transition-[height] duration-300 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 ${
          scrolled ? "h-16" : "h-16 lg:h-[72px]"
        }`}
      >
        <Link href="/" className="relative z-50 flex w-fit shrink-0 items-center" aria-label="Throughout home">
          <Image
            src="/images/logo.png"
            alt="Throughout"
            width={974}
            height={256}
            className="h-9 w-auto lg:h-10"
            priority
            sizes="160px"
          />
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-hairline bg-canvas/70 p-1 lg:flex">
          {navigation.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative flex min-h-9 items-center rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${
                    isActive ? "bg-mist text-sapphire" : "text-ink-2 hover:bg-mist/60 hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden justify-end lg:flex">
          <BookCallLink className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-sapphire py-1 pl-5 pr-1 text-sm font-semibold text-on-sapphire transition-colors hover:bg-sapphire/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
            Book a call
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal text-sapphire transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </BookCallLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-hairline transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span aria-hidden="true" className="relative h-3 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-full rounded bg-ink transition-transform ${isMenuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-full rounded bg-ink transition-transform ${isMenuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full flex h-[calc(100dvh-4rem)] flex-col border-t border-hairline bg-canvas px-4 pb-8 pt-4 transition-[opacity,visibility,transform] duration-300 sm:px-6 lg:hidden ${
          isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul>
          {navigation.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-baseline gap-4 border-b border-hairline py-5"
              >
                <span className="font-mono text-xs text-ink-3">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-3xl font-bold text-ink transition-colors group-hover:text-sapphire">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <BookCallLink className="mt-auto flex min-h-14 items-center justify-between rounded-full bg-sapphire py-1 pl-6 pr-1.5 text-base font-semibold text-on-sapphire">
          Book a call
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal text-sapphire">
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </BookCallLink>
      </div>
    </nav>
  );
}
