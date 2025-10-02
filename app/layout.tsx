"use client";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import React from "react";
import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AOSProvider from "@/components/providers/AOSProvider";
import ThemeProvider, { useTheme } from "@/components/providers/ThemeProvider";
import ToasterProvider from "@/components/providers/ToasterProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={`bg-dark-1 text-light-1`}>
      <body
        className={`${playfair.variable} ${inter.variable} ${montserrat.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <AOSProvider>
            <ToasterProvider>{children}</ToasterProvider>
          </AOSProvider>

          {/*//! Change Theme Button */}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
