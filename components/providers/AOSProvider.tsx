"use client"

import AOS from "aos";
import { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}
