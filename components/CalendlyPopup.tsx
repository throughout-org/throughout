"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { trackCalendlyBooked, trackCalendlyOpen } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/throughoutwithyou/30min";
const CALENDLY_SCRIPT_ID = "calendly-widget-script";
const CALENDLY_STYLES_ID = "calendly-widget-styles";

type CalendlyApi = {
  initPopupWidget: (options: { url: string }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

let calendlyPromise: Promise<CalendlyApi> | null = null;
let conversionListenerAttached = false;

function attachConversionListener() {
  if (conversionListenerAttached) return;
  conversionListenerAttached = true;

  window.addEventListener("message", (event: MessageEvent) => {
    if (
      event.origin === "https://calendly.com" &&
      event.data?.event === "calendly.event_scheduled"
    ) {
      trackCalendlyBooked();
    }
  });
}

function loadCalendly(): Promise<CalendlyApi> {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  if (calendlyPromise) return calendlyPromise;

  calendlyPromise = new Promise((resolve, reject) => {
    if (!document.getElementById(CALENDLY_STYLES_ID)) {
      const stylesheet = document.createElement("link");
      stylesheet.id = CALENDLY_STYLES_ID;
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(stylesheet);
    }

    const existingScript = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null;
    const script = existingScript ?? document.createElement("script");

    const handleLoad = () => {
      if (window.Calendly) resolve(window.Calendly);
      else reject(new Error("Calendly loaded without exposing its widget API."));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", () => reject(new Error("Calendly failed to load.")), { once: true });

    if (!existingScript) {
      script.id = CALENDLY_SCRIPT_ID;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  });

  return calendlyPromise;
}

export async function openCalendlyPopup(event?: MouseEvent<HTMLElement>) {
  if (typeof window === "undefined") return;
  event?.preventDefault();
  trackCalendlyOpen();
  attachConversionListener();

  try {
    const calendly = await loadCalendly();
    calendly.initPopupWidget({ url: CALENDLY_URL });
  } catch {
    window.location.assign(CALENDLY_URL);
  }
}

interface CalendlyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CalendlyButton({ children, onClick, type = "button", ...rest }: CalendlyButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented) void openCalendlyPopup(event);
  };

  return <button type={type} {...rest} onClick={handleClick}>{children}</button>;
}
