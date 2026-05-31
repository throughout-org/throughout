"use client";

import React, {
  type MouseEvent,
  type ReactNode,
  type ButtonHTMLAttributes,
  useEffect,
} from "react";
import { trackCalendlyOpen, trackCalendlyBooked } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/throughoutwithyou/30min";

export function openCalendlyPopup(e?: MouseEvent<HTMLElement>) {
  if (typeof window === "undefined") return;

  trackCalendlyOpen();

  const calendly = (window as any).Calendly;

  if (calendly && typeof calendly.initPopupWidget === "function") {
    if (e) e.preventDefault();
    calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank");
  }
}

/** Hook that listens for Calendly's "event_scheduled" postMessage and fires conversion */
export function useCalendlyConversion() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.event_scheduled") {
        trackCalendlyBooked();
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);
}

interface CalendlyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CalendlyButton({ children, onClick, type = "button", ...rest }: CalendlyButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    openCalendlyPopup(e);
  };

  return (
    <button type={type} {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}
