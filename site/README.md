# matterseal.com

The MatterSeal product site, built with [Astro](https://astro.build) into plain static pages: no code runs in
the visitor's browser and no cookies are set. It will be served by Firebase Hosting from the Google Cloud project
`ms-shared-website` (not set up yet). Nothing here is published until that step.

## Changing the words

- Each page's words are in `src/words/<page>.md`, in the block between the `---` lines.
- The product name, plans, email addresses, menu and legal links are in `src/settings.json`.
- App screens are in `src/assets/screens/` and named in `src/assets/screens.ts`. Take them from the app's
  browser demo (demo data only) at 1440 x 900, twice the size.
- Every claim is checked against the feature list and the legal pages first; `docs/claims.md` records where each
  one comes from.

## Checking

```
cd site
npm ci
npm run check
```

`npm run check` builds both sites and then checks: words (no prices, competitor names, founder name, device
claims or invented proof), every link, every old pangurlabs.com address (`old-addresses.txt`, byte for byte),
page weight (1 MB a page before the video, which loads only on press), the security headers from
`firebase.json` (any blocked script, style or picture fails), and accessibility (axe-core, light and dark,
desktop and phone).

`npm run preview` serves the built site; `npm run pictures -- http://127.0.0.1:4321 pictures` takes pictures
of every page (desktop and phone, light and dark).

## Two sites, one project

- `dist/` is matterseal.com (Firebase target `matterseal`).
- `dist-pangurlabs/` is today's pangurlabs.com files copied unchanged (target `pangurlabs`), for the later move
  of pangurlabs.com off GitHub Pages. That move waits for Google's Gmail review to close.
