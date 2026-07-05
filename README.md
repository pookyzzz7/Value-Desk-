# Value Desk — marketing site

Single-page marketing site for Value Desk (tennis value-betting picks).
Next.js App Router + Tailwind CSS + Framer Motion.

## Run it

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Swapping images

All image slots live in `/public/images`. **Keep the filename, replace the
file** — nothing else to change:

| Slot             | File                          | Where it appears                  |
| ---------------- | ----------------------------- | --------------------------------- |
| `hero-bg`        | `images/hero-bg.svg`          | Full-width hero background        |
| `icon-1`…`icon-6`| `images/icon-1.svg` … `icon-6.svg` | Cartes services             |
| `logo`           | `images/logo.svg`             | Logo (header, footer)             |
| `footer-bg`      | `images/footer-bg.svg`        | Footer background                 |

Using a JPG/PNG instead of SVG? Rename accordingly and update the extension
where the slot is referenced in `app/page.tsx` (search for the slot name —
each one is marked with an `IMAGE SLOT:` comment).

Placeholder SVGs ship in the repo so the site looks finished before you swap
anything.

## Design system

- **Palette** — chalk white canvas, deep court-green ink, one tennis-ball
  chartreuse accent. Defined as CSS variables in `app/globals.css`; dark mode
  flips automatically via `prefers-color-scheme` (no `dark:` classes needed).
- **Type** — Gloock (display serif), Instrument Sans (body), Spline Sans Mono
  (odds, labels, numbers). Loaded via `next/font`, zero layout shift.
- **Motion** — one orchestrated hero entrance + quiet scroll reveals
  (`whileInView`, fire once). Fully disabled for users with
  `prefers-reduced-motion`.

## Accessibility

Skip link, semantic landmarks, one `h1`, labelled nav/sections, visible
`:focus-visible` rings, decorative images marked `aria-hidden` / empty `alt`,
AA-checked contrast in both themes, responsible-gambling notice in the footer.
