import { NextRequest, NextResponse } from "next/server";

// Proxy runs before routes. We use it to:
// - Advertise and consume Sec-CH-Prefers-Color-Scheme client hint
// - Set a stable `theme` cookie ('dark' | 'light') to align SSR/CSR
// - In system palette mode, set `palette` from mapped light/dark cookies
// - Preserve existing route guard for /settings

export function proxy(req: NextRequest) {
  const url = req.nextUrl;

  // Base response
  const res = NextResponse.next();

  // Advertise support for color scheme client hint and make it critical
  res.headers.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme");
  res.headers.set("Vary", "Sec-CH-Prefers-Color-Scheme");
  res.headers.set("Critical-CH", "Sec-CH-Prefers-Color-Scheme");

  // Read client hint (may be quoted)
  const ch = req.headers.get("Sec-CH-Prefers-Color-Scheme") || "";
  const pref = ch.replace(/"/g, "").toLowerCase(); // "dark" | "light" | ""

  const existingTheme = req.cookies.get("theme")?.value;
  const paletteMode = req.cookies.get("palette-mode")?.value || "custom";
  const systemLight = req.cookies.get("palette-system-light")?.value || "blue";
  const systemDark = req.cookies.get("palette-system-dark")?.value || "indigo";

  let themeToSet: "dark" | "light" | undefined;
  if (pref === "dark" || pref === "light") {
    themeToSet = pref as "dark" | "light";
  }

  // Write theme cookie if we have a preference and it's different
  if (themeToSet && themeToSet !== existingTheme) {
    res.cookies.set("theme", themeToSet, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  // If palette mode is system, set palette cookie based on mapped values
  if (paletteMode === "system" && themeToSet) {
    const nextPalette = themeToSet === "dark" ? systemDark : systemLight;
    res.cookies.set("palette", nextPalette, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  // Route guard for /settings (migrated from deprecated middleware)
  if (url.pathname.startsWith("/settings")) {
    const canAccess = req.cookies.get("canAccessSettings")?.value === "true";
    if (!canAccess) {
      const redirectUrl = url.clone();
      redirectUrl.pathname = "/";
      redirectUrl.searchParams.set("settings", "denied");
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}

export const config = {
  // Run for all paths to ensure Accept-CH is advertised; guard logic checks /settings
  matcher: ["/(.*)"],
};