"use client";

import { usePathname } from "next/navigation";
import { createContext, useEffect, useMemo, useRef, useState } from "react";

export interface GlobalContext {
  isQuickAccessOpen: boolean;
  setQuickAccessOpen: (value: boolean) => void;
}

const DEFAULT_VALUE: GlobalContext = {
  isQuickAccessOpen: false,
  setQuickAccessOpen: () => {},
};

export const GlobalStateContext = createContext<GlobalContext>(DEFAULT_VALUE);

function usePrevious<T>(value: T) {
  let ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const AppContext = createContext<{ previousPathname?: string }>({});

function GlobalStateProvider({ children }: { children: React.ReactNode }) {
  const [isQuickAccessOpen, setQuickAccessOpen] = useState<boolean>(
    DEFAULT_VALUE.isQuickAccessOpen,
  );

  const value = useMemo(
    () => ({ isQuickAccessOpen, setQuickAccessOpen }),
    [isQuickAccessOpen],
  );
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);

  return (
    <GlobalStateContext.Provider value={value}>
      <AppContext.Provider value={{ previousPathname }}>
        {children}
      </AppContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;
