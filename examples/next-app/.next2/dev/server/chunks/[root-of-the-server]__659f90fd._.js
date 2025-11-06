module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/examples/next-app/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$next$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/next-app/node_modules/next/server.js [middleware] (ecmascript)");
;
function proxy(req) {
    const url = req.nextUrl;
    // Base response
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$next$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
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
    let themeToSet;
    if (pref === "dark" || pref === "light") {
        themeToSet = pref;
    }
    // Write theme cookie if we have a preference and it's different
    if (themeToSet && themeToSet !== existingTheme) {
        res.cookies.set("theme", themeToSet, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365
        });
    }
    // If palette mode is system, set palette cookie based on mapped values
    if (paletteMode === "system" && themeToSet) {
        const nextPalette = themeToSet === "dark" ? systemDark : systemLight;
        res.cookies.set("palette", nextPalette, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365
        });
    }
    // Route guard for /settings (migrated from deprecated middleware)
    if (url.pathname.startsWith("/settings")) {
        const canAccess = req.cookies.get("canAccessSettings")?.value === "true";
        if (!canAccess) {
            const redirectUrl = url.clone();
            redirectUrl.pathname = "/";
            redirectUrl.searchParams.set("settings", "denied");
            return __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$next$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
        }
    }
    return res;
}
const config = {
    // Run for all paths to ensure Accept-CH is advertised; guard logic checks /settings
    matcher: [
        "/(.*)"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__659f90fd._.js.map