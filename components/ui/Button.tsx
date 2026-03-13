import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function PrimaryButton({ href, children, className = "", icon, ...props }: ButtonProps) {
  const baseClasses = `relative inline-flex items-center justify-center gap-2 px-8 py-4 overflow-hidden text-lg font-extrabold text-white transition-all duration-300 border rounded-full shadow-xl group bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:shadow-2xl hover:scale-105 border-white/30 backdrop-blur-md ${className}`;
  const style = {
    boxShadow: "0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)",
    transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {icon || (
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 group-hover:opacity-100"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} style={style} {...props}>
      {content}
    </button>
  );
}

export function SecondaryButton({ href, children, className = "", icon, ...props }: ButtonProps) {
  const baseClasses = `flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white border-2 border-gray-200 rounded-full hover:border-gray-900 hover:shadow-lg ${className}`;

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
