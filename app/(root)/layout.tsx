import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Umbrxa Studio",
  description: "Luxury Branding & Business Services",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <section className="w-full">{children}</section>
    </>
  );
}
