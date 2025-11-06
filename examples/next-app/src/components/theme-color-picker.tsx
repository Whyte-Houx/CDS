"use client";

import { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useAppTheme } from "@/components/app-theme-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const COLOR_OPTIONS = [
  "zinc",
  "slate",
  "gray",
  "stone",
  "red",
  "rose",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
] as const;

type ColorName = (typeof COLOR_OPTIONS)[number];

export default function ThemeColorPicker() {
  const {
    palette,
    setPalette,
    paletteMode,
    setPaletteMode,
    systemLight,
    setSystemLight,
    systemDark,
    setSystemDark,
  } = useAppTheme();
  const items = useMemo(() => COLOR_OPTIONS, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <Label className="text-sm">Palette mode</Label>
        <RadioGroup
          value={paletteMode}
          onValueChange={(v) => setPaletteMode(v as "custom" | "system")}
          className="flex gap-3"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem id="pm-custom" value="custom" />
            <Label htmlFor="pm-custom">Custom</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="pm-system" value="system" />
            <Label htmlFor="pm-system">System</Label>
          </div>
        </RadioGroup>
      </div>
      <Select
        disabled={paletteMode === "system"}
        value={palette || undefined}
        onValueChange={(val: ColorName) => {
          setPalette(val);
        }}
      >
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Pick theme color" />
        </SelectTrigger>
        <SelectContent>
          {items.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="secondary"
        onClick={() => {
          setPalette("");
        }}
      >
        Reset
      </Button>

      {paletteMode === "system" ? (
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-sm">Light palette</Label>
            <Select
              value={systemLight}
              onValueChange={(val: ColorName) => setSystemLight(val)}
            >
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Select light palette" />
              </SelectTrigger>
              <SelectContent>
                {items.map((c) => (
                  <SelectItem key={`lp-${c}`} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Dark palette</Label>
            <Select
              value={systemDark}
              onValueChange={(val: ColorName) => setSystemDark(val)}
            >
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Select dark palette" />
              </SelectTrigger>
              <SelectContent>
                {items.map((c) => (
                  <SelectItem key={`dp-${c}`} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Button
              variant="outline"
              onClick={() => {
                setSystemLight("blue");
                setSystemDark("indigo");
              }}
            >
              Reset mapping to defaults
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}