"use client";

import React, { Dispatch, createContext, useState } from "react";

export const HistoryContext = createContext<
  | [string[] | null, React.Dispatch<React.SetStateAction<string[] | null>>]
  | null
>(null);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<string[] | null>(["none"]);

  return (
    <HistoryContext.Provider value={[history,setHistory]}>
      {children}
    </HistoryContext.Provider>
  );
}
