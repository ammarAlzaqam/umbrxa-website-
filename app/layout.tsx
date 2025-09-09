"use client";

import { Inter, Montserrat } from "next/font/google";
import React, { createContext, useContext, useEffect, useState } from "react";
import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export interface ChildrenProps {
  readonly children: React.ReactNode;
}

const ThemeContext = createContext<any>(null);

export const useTheme = () => useContext(ThemeContext);

export default function RootLayout({ children }: ChildrenProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      localStorage.setItem("theme", darkMode ? "dark" : "");
      return;
    }
    setDarkMode(currentTheme === "dark");
    setLoaded(true);
  }, []);

  if (!loaded)
    return (
      <html>
        <body></body>
      </html>
    );

  return (
    <html lang="en" className={`bg-dark-1 text-light-1 ${darkMode && "dark"} `}>
      <body
        className={`${inter.variable} ${montserrat.variable} font-body antialiased`}
      >
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <AOSProvider>{children}</AOSProvider>

          {/*//! Change Theme Button */}
          <ThemeSwitcher />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
