# pangurlabs.github.io

Source for the Pangur Labs LLC website, served by GitHub Pages at
[pangurlabs.com](https://pangurlabs.com).

Plain static HTML and CSS: no framework, no build step, no JavaScript.

## Files

| File           | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| `index.html`   | Landing page                                              |
| `support.html` | Support contact and FAQ                                   |
| `privacy.html` | Privacy policy (MatterSeal; linked from every page)      |
| `privacy-apple.html` | Privacy policy for the App Store apps (DockStick), unlinked |
| `matterseal/privacy.html` | Hosted MatterSeal privacy policy (the Google sign-in app links here) |
| `matterseal/terms.html` | Hosted MatterSeal terms of service |
| `matterseal/data-processing.html` | Hosted MatterSeal data processing agreement |
| `matterseal/subprocessors.html` | Hosted MatterSeal subprocessor list |
| `style.css`    | Shared stylesheet, with automatic dark mode               |
| `.nojekyll`    | Tells GitHub Pages to serve files as-is, without Jekyll   |

The `CNAME` file is managed by GitHub when the custom domain is set in the
repository's Pages settings.

## Deploying

Pushes to `main` deploy automatically.

The `matterseal/` pages are generated from the drafts in the project's legal folder
(`legal/hosted/build-pages.py`, which holds the product name in one place). Edit the drafts and
regenerate rather than editing the HTML by hand.
