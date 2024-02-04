"use client";
import type { ReactNode } from "react";
import { useThemeContext } from "@/providers/context";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext();
  return (
    <div className={`${theme == "dark" ? "dark" : "light"}`}>{children}</div>
  );
}
