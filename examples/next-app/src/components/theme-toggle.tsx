"use client";
import React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const onToggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-md border px-3 py-2 text-sm bg-white text-black dark:bg-black dark:text-white"
    >
      Toggle Theme
    </button>
  );
}