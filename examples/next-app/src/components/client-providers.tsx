"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { AppThemeProvider, Palette } from "@/components/app-theme-context";

export default function ClientProviders({
  children,
  initialPalette,
  initialPaletteMode,
  initialSystemLight,
  initialSystemDark,
}: {
  children: React.ReactNode;
  initialPalette?: Palette;
  initialPaletteMode?: "custom" | "system";
  initialSystemLight?: Palette;
  initialSystemDark?: Palette;
}) {

  const [palette, setPalette] = useState<Palette>(() => {
    // Prefer server-provided initial value to avoid hydration mismatches
    if (initialPalette) return initialPalette;
    if (typeof window === "undefined") return "";
    const saved =
      (typeof window !== "undefined"
        ? localStorage.getItem("theme-color")
        : null) || getCookie("palette");
    return (saved as Palette | null) || "";
  });

  const [paletteMode, setPaletteMode] = useState<"custom" | "system">(() => {
    if (initialPaletteMode) return initialPaletteMode;
    if (typeof window === "undefined") return "custom";
    const saved =
      (typeof window !== "undefined"
        ? localStorage.getItem("palette-mode")
        : null) || getCookie("palette-mode");
    return saved === "system" ? "system" : "custom";
  });

  const [systemLight, setSystemLight] = useState<Palette>(() => {
    if (initialSystemLight) return initialSystemLight;
    const saved =
      (typeof window !== "undefined"
        ? localStorage.getItem("palette-system-light")
        : null) || getCookie("palette-system-light");
    return (saved as Palette | null) || ("blue" as Palette);
  });

  const [systemDark, setSystemDark] = useState<Palette>(() => {
    if (initialSystemDark) return initialSystemDark;
    const saved =
      (typeof window !== "undefined"
        ? localStorage.getItem("palette-system-dark")
        : null) || getCookie("palette-system-dark");
    return (saved as Palette | null) || ("indigo" as Palette);
  });

  useEffect(() => {
    try {
      if (palette) {
        localStorage.setItem("theme-color", palette);
        setCookie("palette", palette);
      } else {
        localStorage.removeItem("theme-color");
        deleteCookie("palette");
      }
    } catch {}
  }, [palette]);

  useEffect(() => {
    try {
      localStorage.setItem("palette-mode", paletteMode);
      setCookie("palette-mode", paletteMode);
    } catch {}
  }, [paletteMode]);

  useEffect(() => {
    try {
      localStorage.setItem("palette-system-light", systemLight);
      setCookie("palette-system-light", systemLight);
    } catch {}
  }, [systemLight]);

  useEffect(() => {
    try {
      localStorage.setItem("palette-system-dark", systemDark);
      setCookie("palette-system-dark", systemDark);
    } catch {}
  }, [systemDark]);

  const wrapperClass = useMemo(() => {
    return palette ? `theme-${palette}` : "";
  }, [palette]);

  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PaletteSystemSync
        palette={palette}
        setPalette={setPalette}
        paletteMode={paletteMode}
        systemLight={systemLight}
        systemDark={systemDark}
      />
      {/* Sync a simple `theme` cookie ('dark'|'light') for SSR alignment */}
      <ThemeCookieSync />
      <AppThemeProvider
        value={{
          palette,
          setPalette,
          paletteMode,
          setPaletteMode,
          systemLight,
          setSystemLight,
          systemDark,
          setSystemDark,
        }}
      >
        <div className={wrapperClass}>{children}</div>
      </AppThemeProvider>
    </NextThemeProvider>
  );
}

function PaletteSystemSync({
  palette,
  setPalette,
  paletteMode,
  systemLight,
  systemDark,
}: {
  palette: Palette;
  setPalette: (p: Palette) => void;
  paletteMode: "custom" | "system";
  systemLight: Palette;
  systemDark: Palette;
}) {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (paletteMode !== "system") return;
    const next = resolvedTheme === "dark" ? systemDark : systemLight;
    if (next !== palette) setPalette(next as Palette);
  }, [paletteMode, resolvedTheme, setPalette, palette, systemLight, systemDark]);
  return null;
}

function setCookie(name: string, value: string) {
  try {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 365}`;
  } catch {}
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function deleteCookie(name: string) {
  try {
    document.cookie = `${name}=; path=/; max-age=0`;
  } catch {}
}

function ThemeCookieSync() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    if (!resolvedTheme) return;
    const val = resolvedTheme === "dark" ? "dark" : "light";
    try {
      localStorage.setItem("theme", val);
      setCookie("theme", val);
    } catch {}
  }, [resolvedTheme]);
  return null;
}