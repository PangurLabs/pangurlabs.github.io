// matterseal.com. Static pages only: no code runs in the visitor's browser, and no stylesheet is
// inlined, so the security headers in firebase.json can forbid inline scripts and styles.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://matterseal.com",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "never" },
  compressHTML: true,
  devToolbar: { enabled: false },
});
