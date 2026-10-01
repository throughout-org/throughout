import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function PrimaryButton({ href, children, className = "", icon, ...props }: ButtonProps) {
  const baseClasses = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:-translate-y-0.5 hover:bg-primary-hover active:translate-y-0 active:bg-primary-press focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`;

  const content = (
    <>
      {children}
      {icon || (
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${baseClasses}`} {...props}>
      {content}
    </button>
  );
}

export function SecondaryButton({ href, children, className = "", icon, ...props }: ButtonProps) {
  const baseClasses = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-hairline-strong bg-canvas-elevated px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink-4 hover:bg-canvas-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon}
      {children}
    </button>
  );
}
