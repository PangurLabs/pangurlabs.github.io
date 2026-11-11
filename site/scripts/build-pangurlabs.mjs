// pangurlabs.com for its later move to Firebase Hosting: today's GitHub Pages files, copied byte for byte
// into dist-pangurlabs/. Google's Gmail review, the Google sign-in branding, Twilio and the Startups
// program point at these addresses, so they move unchanged. The company page is rewritten in a later step.
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const out = join(repo, "site", "dist-pangurlabs");
const skip = (f) => f.startsWith("site/") || f.startsWith(".github/") || ["README.md", "CNAME", ".nojekyll", ".gitignore"].includes(f);

const files = execFileSync("git", ["ls-files"], { cwd: repo, encoding: "utf8" }).split("\n").filter(Boolean).filter((f) => !skip(f));
rmSync(out, { recursive: true, force: true });
for (const f of files) {
  mkdirSync(dirname(join(out, f)), { recursive: true });
  cpSync(join(repo, f), join(out, f));
}
console.log(`pangurlabs.com: ${files.length} files copied to dist-pangurlabs/`);
