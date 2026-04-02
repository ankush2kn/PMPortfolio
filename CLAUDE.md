# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build for production (static output)
npm run preview  # Preview built site locally
```

No test runner is configured. Validate changes visually via `npm run dev`.

Add `?preview` to any URL in dev to enable the variant switcher UI.

## Architecture

This is an **Astro 4 static site** with Tailwind CSS v4. No SSR — all pages pre-render at build time.

### Pages
- `/` (`pages/index.astro`) — Home: hero, impact metrics, case study, principles, skills, contact
- `/journey` (`pages/journey.astro`) — Career timeline with 5 visualization variants + education
- `/lab` (`pages/lab.astro`) — AI projects showcase

### Variant System
Each section has multiple visual variants (A/B/C or named). The active variant per section is controlled by `DEFAULT_VARIANTS` in `src/data/siteDefaults.ts`. In dev, `?preview` reveals a switcher UI. Current defaults: Timeline=Vertical, Hero=C, Impact=B, etc.

### Data Flow
All content lives in `src/data/portfolio.ts`. The career/timeline pipeline:

```
portfolio.ts  →  careerDomains.ts  →  careerDisplay.ts  →  timeline components
```

- `careerDomains.ts` — Domain registry: 7 domains (engineering, startup, operations, product, b2b, b2c, ai), colors, labels, helper functions
- `careerDisplay.ts` — Formatting utilities: period/location strings, highlight text, image normalization, color lookups
- `careerTimelineLayout.ts` — Geometric helpers: polyline arc-length sampling for SVG-based timelines (subway, elevation, orbit)

### Timeline Components (`src/components/timeline/`)
Five visualization variants, all sharing the same career data:
- **TimelineVertical** (default) — Alternating cards on a center spine, animated slide-in
- **TimelineSubway** — SVG metro map with domain-colored lines and station stops
- **TimelineElevation** — SVG hiking trail with arc-sampled positions
- **TimelineOrbit** — Concentric ring orbits
- **TimelineFilmStrip** — Horizontal-scroll filmstrip cards

Supporting components: `CareerDomainFilter` (interactive filter pills), `CareerCardThumbnails`, `CareerCompanyLine`, `CareerImageLightbox`.

### Career Domain Filter
`CareerDomainFilter.astro` uses `data-*` attributes and DOM queries (no state library). Filter changes dispatch a `journey-career-filter-changed` custom event. Career entries are hidden when no visible highlights remain. The Overall pill shows only highlights whose `domains` include `"overall"`; each domain pill shows only highlights whose `domains` include that domain id.

### Theming
Tailwind v4 with CSS variables in `src/styles/global.css`. Two themes: `warm` (default) and `dark`, toggled via `localStorage`. Custom fonts: Inter Variable (body), Space Grotesk Variable (headings), Playfair Display Variable (decorative).

### CareerEntry Shape (key fields)
```typescript
{
  id: string
  chapter?: string          // "The Engineer", "The Operator", etc.
  domains: CareerDomainId[] // required, drives filtering and colors
  highlights?: { text: string; domains: CareerHighlightDomainTag[] }[]
  keyMetric?: string        // bold headline stat
  images?: (string | { src: string; href?: string })[]
  yearStart?, yearEnd?: number
}
```

### Path Aliases
`@/*` maps to `src/*` (configured in `tsconfig.json`).
