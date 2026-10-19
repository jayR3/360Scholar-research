# 360Scholar Research

Standalone landing page for 360Scholar's research and learning support services. The production domain is `https://research.360scholar.org`.

## Update site content and design

- Edit copy, services, FAQs, contact details, and promotion settings in `site-content.ts`.
- Turn a discount banner on or off with `siteContent.promo.enabled`; update the offer text, code, and end date in the same file.
- Change colours, layout, and responsive styles in `app/globals.css`; the colour tokens are in `site-content.ts`.
- Replace `public/research-consultation-hero.svg` to change the hero image.

Every change pushed to `main` starts a GitHub Actions build and deploys the static site to GitHub Pages.

## GitHub Pages and DNS setup

In the repository settings, choose **Settings → Pages → Build and deployment → GitHub Actions** and set the custom domain to `research.360scholar.org`. At the DNS provider, create a CNAME record with host `research` and target `jayr3.github.io`. The workflow publishes the `out/` folder.

## Local development

Use Node.js 22 or newer and run `pnpm install`, then `pnpm dev`. Run `pnpm build` to produce the static site in `out/`.
