"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { Moon, Sun, Palette, Check } from "lucide-react";
import { cn } from "../lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", label: "LIGHT", icon: Sun },
    { value: "dark", label: "DARK", icon: Moon },
    { value: "theme-blue", label: "BLUE", icon: Palette },
    { value: "theme-green", label: "GREEN", icon: Palette },
    { value: "theme-purple", label: "PURPLE", icon: Palette },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-mono">
        {themes.slice(0, 2).map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={cn("font-mono", theme === themeOption.value && "bg-accent")}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{themeOption.label}</span>
              {theme === themeOption.value && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        {themes.slice(2).map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={cn("font-mono", theme === themeOption.value && "bg-accent")}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{themeOption.label}</span>
              {theme === themeOption.value && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}