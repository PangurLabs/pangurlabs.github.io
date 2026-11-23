// Pictures of every page: desktop and phone, light and dark, full length.
// Run against a server that serves dist/ (npm run preview): node scripts/pictures.mjs <base url> <out folder>
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const base = process.argv[2] ?? "http://127.0.0.1:4321";
const out = process.argv[3] ?? "pictures";
const pages = ["/", "/how-it-works/", "/security/", "/plans/", "/help/", "/404.html"];
const sizes = { desktop: { width: 1440, height: 900 }, phone: { width: 390, height: 844 } };
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const scheme of ["light", "dark"]) {
  for (const [device, viewport] of Object.entries(sizes)) {
    const ctx = await browser.newContext({ viewport, colorScheme: scheme, deviceScaleFactor: device === "phone" ? 3 : 2, isMobile: device === "phone", hasTouch: device === "phone" });
    const page = await ctx.newPage();
    for (const path of pages) {
      await page.goto(base + path, { waitUntil: "networkidle" });
      // Lazy pictures load as they come into view; load them all first so the full-length picture has them.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
        window.scrollTo(0, 0);
      });
      await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 20000 });
      await page.waitForLoadState("networkidle");
      const name = (path === "/" ? "home" : path.replace(/\//g, "").replace(".html", "")) || "home";
      await page.screenshot({ path: `${out}/${name}-${device}-${scheme}.png`, fullPage: true });
    }
    await ctx.close();
  }
}
await browser.close();
console.log(`pictures in ${out}`);
