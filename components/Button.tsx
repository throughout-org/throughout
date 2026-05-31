"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
  variant?: "primary" | "secondary";
  href?: string;
  children?: ReactNode;
  className?: string;
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
    "bg-sky-600 text-white shadow-md hover:bg-sky-700 hover:shadow-lg group relative overflow-hidden";

  const secondaryClasses =
    "bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-900 hover:shadow-lg";

  const variantClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        setIsMenuOpen?.(false);
      }}
      className={`block w-full text-center px-6 py-3.5 text-sm sm:text-lg font-extrabold rounded-full transition-all duration-200 uppercase tracking-wide hover:scale-105 ${variantClasses} ${className}`}
      style={{
        animation: isMenuOpen ? "slideIn 0.4s ease-out forwards 0.6s" : "none",
      }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {variant === "primary" && (
          <span className="transition-transform group-hover:translate-x-1">→</span>
        )}
      </span>
    </Link>
  );
};

export default Button;
