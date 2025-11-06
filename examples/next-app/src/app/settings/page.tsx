"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeColorPicker from "@/components/theme-color-picker";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAppTheme } from "@/components/app-theme-context";

export default function SettingsPage() {
  const { paletteMode } = useAppTheme();
  const grantAccess = () => {
    document.cookie = `canAccessSettings=true; path=/; max-age=${60 * 60 * 24 * 7}`;
  };
  const revokeAccess = () => {
    document.cookie = `canAccessSettings=; path=/; max-age=0`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-8 py-12 px-8 bg-white dark:bg-black">
        <Card>
          <CardHeader>
            <CardTitle>Theme Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Dark/Light mode (system aware)
              </span>
            </div>

            <div>
              <ThemeColorPicker />
              {paletteMode === "system" ? (
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                  System mode derives palette from your OS theme (light: blue, dark: indigo).
                </p>
              ) : null}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access Control (Demo)</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Button onClick={grantAccess}>Grant Settings Access</Button>
            <Button variant="outline" onClick={revokeAccess}>Revoke Settings Access</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}