"use client";

import React, {
  type MouseEvent,
  type ReactNode,
  type ButtonHTMLAttributes,
} from "react";

const CALENDLY_URL = "https://calendly.com/throughoutwithyou/30min";

export function openCalendlyPopup(e?: MouseEvent<HTMLElement>) {
  if (typeof window === "undefined") return;

  const calendly = (window as any).Calendly;
  const url = CALENDLY_URL;

  if (calendly && typeof calendly.initPopupWidget === "function") {
    if (e) e.preventDefault();
    calendly.initPopupWidget({ url });
  } else {
    window.open(url, "_blank");
  }
}

interface CalendlyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CalendlyButton({
  children,
  onClick,
  type = "button",
  ...rest
}: CalendlyButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (e.defaultPrevented) return;

    openCalendlyPopup(e);
  };

  return (
    <button type={type} {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}
