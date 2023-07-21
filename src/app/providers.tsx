"use client";

import { createContext } from "react";

export const HistoryContext = createContext("");

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HistoryContext.Provider value={"pog"}>{children}</HistoryContext.Provider>
  );
}
