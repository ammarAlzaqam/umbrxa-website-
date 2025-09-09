import { ChildrenProps } from "@/app/layout";
import AOS from "aos";
import { useEffect } from "react";

export default function AOSProvider({ children }: ChildrenProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}
