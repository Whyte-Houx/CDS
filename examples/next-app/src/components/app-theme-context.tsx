"use client";

import React, { createContext, useContext } from "react";

export type Palette =
  | ""
  | "zinc"
  | "slate"
  | "gray"
  | "stone"
  | "red"
  | "rose"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink";

type PaletteMode = "custom" | "system";

type AppThemeContextValue = {
  palette: Palette;
  setPalette: (p: Palette) => void;
  paletteMode: PaletteMode;
  setPaletteMode: (m: PaletteMode) => void;
  systemLight: Palette;
  systemDark: Palette;
  setSystemLight: (p: Palette) => void;
  setSystemDark: (p: Palette) => void;
};

const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export function useAppTheme() {
  const ctx = useContext(AppThemeContext);
  if (!ctx) throw new Error("useAppTheme must be used within AppThemeProvider");
  return ctx;
}

export function AppThemeProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: AppThemeContextValue;
}) {
  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
}