// Checks for matterseal.com, run after `astro build` (npm run check). Each failure says what to fix.
//  1. Words: no prices, competitor names, founder name or device claims; lists "every/always/never" lines for review.
//  2. Links: every address a page uses exists in the build; external links are listed (not fetched here: unknown).
//  3. Old addresses: every pangurlabs.com address in old-addresses.txt is in dist-pangurlabs/, byte for byte.
//  4. Page weight: what a page loads, scrolled to the end, on a desktop and a phone, without the tour video.
//  5. Security headers: pages are served with firebase.json's headers; any blocked script, style or picture fails.
//  6. Accessibility: axe-core on every page, light and dark, desktop and phone.
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const site = join(dirname(fileURLToPath(import.meta.url)), "..");
const repo = join(site, "..");
const dist = join(site, "dist");
const BUDGET = 1_000_000; // bytes, per page, before the video (plan: "under 1 MB before the video")
const failures = [];
const fail = (m) => failures.push(m);
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

if (!existsSync(dist)) { console.error("No dist/: run `npx astro build` first."); process.exit(1); }
const htmlFiles = walk(dist).filter((f) => f.endsWith(".html"));
const pagePath = (f) => "/" + f.slice(dist.length + 1).replace(/index\.html$/, "");

// 1. Words
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/&#39;|&#x27;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/\s+/g, " ");
const banned = [
  [/\$\s?\d/, "a dollar amount (the site lists plans without prices)"],
  [/\b(Clio|MyCase|PracticePanther|Smokeball|Midly)\b/, "a competitor's name"],
  [/\b(Stephen|Buckmelter|Steve)\b/i, "the founder's name"],
  [/\b(iPhone|iPad|Android|Windows|iOS)\b/, "a device we don't claim yet"],
  [/\b(trusted by|customers love|award|certified|SOC ?2|HIPAA compliant|bar[- ]approved)\b/i, "proof we don't have"],
  [/lorem ipsum|TODO|TBD/i, "placeholder text"],
  [/\bsmall (team|law firms?|firms?)\b/i, "\"small team\" or \"small firms\" (Stephen, Nov 11: the site isn't only for small firms)"],
];
const review = [];
for (const f of htmlFiles) {
  const t = text(readFileSync(f, "utf8"));
  for (const [re, what] of banned) { const m = t.match(re); if (m) fail(`${pagePath(f)}: has ${what}: "${m[0]}". Take it out of src/words or src/settings.json.`); }
  for (const s of t.split(/(?<=[.?!])\s+/)) if (/\b(every|always|never|all|only|any)\b/i.test(s)) review.push(`${pagePath(f)}: ${s.trim()}`);
}

// 2. Links
const external = new Set();
for (const f of htmlFiles) {
  const html = readFileSync(f, "utf8");
  const refs = [...html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)].map((m) => m[1])
    .concat([...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(",").map((s) => s.trim().split(/\s+/)[0])));
  for (const r of refs) {
    if (/^(mailto:|#)/.test(r)) continue;
    if (/^https?:/.test(r)) { if (!r.startsWith("https://matterseal.com")) external.add(r); continue; }
    const clean = decodeURIComponent(r.split(/[?#]/)[0]);
    const target = join(dist, clean);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, "index.html")));
    if (!ok) fail(`${pagePath(f)}: links to ${r}, which isn't in the build.`);
  }
}
// The legal links go to pangurlabs.com; they must be addresses that site serves.
const oldAddresses = readFileSync(join(site, "old-addresses.txt"), "utf8").split("\n").filter((l) => l && !l.startsWith("#"));
for (const u of external) {
  if (!u.startsWith("https://pangurlabs.com/")) continue;
  const p = new URL(u).pathname;
  if (!oldAddresses.includes(p)) fail(`A page links to ${u}, which isn't one of pangurlabs.com's addresses (old-addresses.txt).`);
}

// 3. Old addresses
const old = join(site, "dist-pangurlabs");
if (!existsSync(old)) fail("No dist-pangurlabs/: run `node scripts/build-pangurlabs.mjs` first.");
else for (const p of oldAddresses) {
  const file = p.endsWith("/") ? p + "index.html" : p;
  const built = join(old, file);
  if (!existsSync(built)) { fail(`pangurlabs.com${p} would be missing after the move.`); continue; }
  const source = join(repo, file);
  if (existsSync(source) && !readFileSync(source).equals(readFileSync(built))) fail(`pangurlabs.com${p} differs from today's file.`);
}

// 4-6 in a browser, served with firebase.json's headers.
const fb = JSON.parse(readFileSync(join(site, "firebase.json"), "utf8")).hosting.find((h) => h.target === "matterseal");
const headers = Object.fromEntries(fb.headers.find((h) => h.source === "**").headers.map((h) => [h.key, h.value]));
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".mp4": "video/mp4", ".txt": "text/plain", ".xml": "application/xml" };
let served = 0; // bytes the server sent, apart from the tour video
const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  let file = join(dist, p);
  let status = 200;
  if (!existsSync(file) || !statSync(file).isFile()) { file = join(dist, "404.html"); status = 404; }
  res.writeHead(status, { "Content-Type": types[extname(file)] ?? "application/octet-stream", ...headers });
  const body = readFileSync(file);
  if (!file.includes(`${join("dist", "media")}`)) served += body.length;
  res.end(body);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

const { chromium } = require("playwright");
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const browser = await chromium.launch();
const pages = htmlFiles.map(pagePath).filter((p) => p !== "/404.html");
const weights = [];
for (const [device, viewport, scale] of [["desktop", { width: 1440, height: 900 }, 2], ["phone", { width: 390, height: 844 }, 3]]) {
  for (const scheme of ["light", "dark"]) {
    for (const p of pages) {
      // A new context for each page, so nothing comes from the cache and the weight is a first visit's.
      const ctx = await browser.newContext({ viewport, deviceScaleFactor: scale, colorScheme: scheme, isMobile: device === "phone" });
      const page = await ctx.newPage();
      served = 0;
      const problems = [];
      page.on("console", (m) => { if (m.type() === "error") problems.push(m.text()); });
      await page.goto(base + p, { waitUntil: "networkidle" });
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } });
      await page.waitForLoadState("networkidle");
      const bytes = served;
      if (scheme === "light") {
        weights.push(`${p} ${device}: ${(bytes / 1000).toFixed(0)} kB`);
        if (bytes > BUDGET) fail(`${p} on a ${device} loads ${(bytes / 1e6).toFixed(2)} MB before the video; the budget is 1 MB. Use smaller pictures or fewer of them.`);
        const videos = await page.$$eval("video", (v) => v.map((x) => x.getAttribute("preload")));
        if (videos.some((v) => v !== "none")) fail(`${p}: a video doesn't wait for a press (preload="none").`);
        const broken = await page.$$eval("img", (imgs) => imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src));
        for (const b of broken) fail(`${p} on a ${device}: picture didn't load: ${b}`);
      }
      for (const m of problems) fail(`${p} (${device}, ${scheme}): the browser reported: ${m}`);
      await page.addScriptTag({ content: axeSource }).catch(() => page.evaluate(axeSource));
      const result = await page.evaluate(async () => await window.axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"] }));
      for (const v of result.violations) fail(`${p} (${device}, ${scheme}): accessibility: ${v.id}: ${v.help} (${v.nodes.length}x, e.g. ${v.nodes[0].target.join(" ")})`);
      await ctx.close();
    }
  }
}
await browser.close();
server.close();

console.log("Page weight, scrolled to the end, without the video:\n  " + weights.join("\n  "));
console.log(`\nExternal links (not fetched here, so their state is unknown):\n  ${[...external].sort().join("\n  ")}`);
console.log(`\nFor the claim review, sentences with every/always/never/all/only/any (${review.length}):\n  ${[...new Set(review)].join("\n  ")}`);
if (failures.length) { console.error(`\n${failures.length} problem(s):\n- ` + failures.join("\n- ")); process.exit(1); }
console.log(`\nAll checks passed: ${pages.length} pages, ${oldAddresses.length} old pangurlabs.com addresses.`);
