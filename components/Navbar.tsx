"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookCallLink } from "@/components/BookCallLink";

const navigation = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label="Throughout home">
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

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-draw text-sm font-medium text-ink"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <BookCallLink className="inline-flex min-h-10 items-center rounded-md bg-sapphire px-4 text-sm font-semibold text-on-sapphire transition-colors hover:bg-sapphire/90">
            Book a call
          </BookCallLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-md border border-hairline transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span aria-hidden="true" className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-full bg-ink transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-full bg-ink transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-ink transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-hairline bg-canvas px-4 pb-6 pt-2 transition-[opacity,visibility] duration-200 sm:px-6 lg:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible absolute inset-x-0 opacity-0"
        }`}
      >
        {navigation.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="font-display block border-b border-hairline py-4 text-2xl font-bold text-ink"
          >
            {link.name}
          </Link>
        ))}
        <div className="mt-6">
          <BookCallLink className="inline-flex min-h-11 items-center rounded-md bg-sapphire px-5 text-sm font-semibold text-on-sapphire">
            Book a call
          </BookCallLink>
        </div>
      </div>
    </nav>
  );
}
