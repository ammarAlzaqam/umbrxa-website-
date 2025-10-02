"use client";

import { createContext, useContext, useEffect, useState } from "react";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const ThemeContext = createContext<any>(null);

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setDarkMode(currentTheme === "dark");
    } else {
      // default dark
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
      <ThemeSwitcher />
    </ThemeContext.Provider>
  );
}
