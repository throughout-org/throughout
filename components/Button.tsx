"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
  variant?: "primary" | "secondary";
  href?: string;
  children?: ReactNode;
  className?: string; // Additional classes
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button = ({
  isMenuOpen = false,
  setIsMenuOpen,
  variant = "primary",
  href = "/contact",
  children = "Book a Free Call",
  className = "",
  onClick,
}: ButtonProps) => {
  const primaryClasses =
    "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl border border-white/30 backdrop-blur-md group relative overflow-hidden";
  const primaryStyles = {
    boxShadow:
      "0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)",
    transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
  };

  const secondaryClasses =
    "bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-900 hover:shadow-lg";
  const secondaryStyles = {};

  const variantClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;
  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        setIsMenuOpen?.(false);
      }}
      className={`block w-full text-center px-6 py-3.5 text-sm sm:text-lg font-extrabold rounded-full transition-all duration-300 uppercase tracking-wide hover:scale-105 ${variantClasses} ${className}`}
      style={{
        animation: isMenuOpen ? "slideIn 0.4s ease-out forwards 0.6s" : "none",
        ...variantStyles,
      }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {variant === "primary" && (
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 group-hover:opacity-100"></div>
      )}
    </Link>
  );
};

export default Button;
