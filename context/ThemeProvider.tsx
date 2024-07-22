"use client"; // since this is a provider we will make it client component

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ThemeContextType {
  mode: string;
  // a function which accepts the mode as string and returns void
  // cause localstorage doesnt know what is the current active theme
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    // (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) checks if the user's system is in dark mode or not
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // Commentd out the setMode because useEffect was triggering handleThemeChange which repeatedly changed light->dark and dark->light mode causing an infinte loop

      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}