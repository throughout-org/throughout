"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackBookCallOpen } from "@/lib/analytics";

export const BOOK_CALL_URL = "https://cal.com/insaf-inhaam-mqvxhh/30min?overlayCalendar=true";

interface BookCallLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function BookCallLink({ children, onClick, ...rest }: BookCallLinkProps) {
  return (
    <a
      href={BOOK_CALL_URL}
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        trackBookCallOpen();
      }}
    >
      {children}
    </a>
  );
}
