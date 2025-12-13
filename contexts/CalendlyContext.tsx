"use client";

import React, { createContext, useContext, useState } from "react";

interface CalendlyContextType {
  openCalendly: boolean;
  setOpenCalendly: (open: boolean) => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [openCalendly, setOpenCalendly] = useState(false);

  return (
    <CalendlyContext.Provider value={{ openCalendly, setOpenCalendly }}>
      {children}
    </CalendlyContext.Provider>
  );
}

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within CalendlyProvider");
  }
  return context;
};
