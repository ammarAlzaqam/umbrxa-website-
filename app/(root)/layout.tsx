import type { Metadata } from "next";
import { ChildrenProps } from "../layout";

export const metadata: Metadata = {
  title: "Umbrxa Studio",
  description: "Luxury Branding & Business Services",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <>
      <section className="w-full">{children}</section>
    </>
  );
}
