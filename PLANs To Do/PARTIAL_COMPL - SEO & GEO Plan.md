# SEO & GEO Enhancements — Portfolio Site

**Domain:** `ankushbhargava.us`
**Deliverable file:** `C:\Users\ankus\CursorProjects\PortfolioSite\PLANs To Do\seo-geo-enhancements.md`

> Goal: maximize recruiter/hiring-manager discoverability across Google, Bing, and AI-powered search (Perplexity, ChatGPT, Gemini, Claude). Domain assumed purchased and pointed at Cloudflare Pages before implementation.

---

## Phase 1 — High Value + Low Effort

### ✅ 1. Set `site` URL in `astro.config.mjs` + install sitemap
**File:** `astro.config.mjs`  
**Effort:** 5 min | **Value:** Critical — required for all canonical/sitemap generation

---

### ✅ 2. Upgrade `Layout.astro` head — OG, Twitter, canonical, author
**File:** `src/layouts/Layout.astro` (lines 1–21, insert into `<head>` after line 61)  
**Effort:** 10 min | **Value:** High — every URL share (Slack, email, LinkedIn DM) shows a rich preview card; canonical deduplicates domain signals
---

### ✅ 3. `public/robots.txt`
**File:** `public/robots.txt` (new file)  
**Effort:** 2 min | **Value:** High — tells crawlers to index everything, advertises sitemap

---

### ✅ 4. `public/llms.txt` (GEO)
**File:** `public/llms.txt` (new file)  
**Effort:** 5 min | **Value:** High — emerging standard read by Perplexity, ChatGPT Browse, Claude; positions Ankush in AI-powered recruiter searches
---

### ✅ 5. JSON-LD Person schema on homepage (GEO + SEO)
**File:** `src/pages/index.astro`  
**Effort:** 15 min | **Value:** Critical — enables Google Knowledge Panel candidacy; AI systems use Person schema to build factual citations about individuals

---

### ✅ 6. JSON-LD SoftwareApplication schema on `/lab` (GEO)
**File:** `src/pages/lab.astro`  
**Effort:** 20 min | **Value:** High — makes AI projects citable by AI search; links projects back to Ankush as creator

---

### ✅ 7. Per-page meta descriptions for `/journey` and `/lab`
**Files:** `src/pages/journey.astro`, `src/pages/lab.astro`  
**Effort:** 5 min | **Value:** High — unique descriptions improve CTR from search results; currently both pages fall back to homepage default

---

### ✅ 8. BreadcrumbList schema on `/journey` and `/lab`
**Files:** `src/pages/journey.astro`, `src/pages/lab.astro`  
**Effort:** 10 min | **Value:** Medium-high — breadcrumb rich results appear in Google SERP; signals site structure to crawlers
---

### ✅ 9. Tune page titles for keyword targeting
**Files:** `src/layouts/Layout.astro`, `src/pages/journey.astro`, `src/pages/lab.astro`  
**Effort:** 5 min | **Value:** Medium-high — recruiter keyword matching for "Product Manager San Francisco", "AI Product Manager"

- Homepage: `"Ankush Bhargava — Product Manager & AI Builder | San Francisco Bay Area"` (adds geo + role keyword)
- Journey: `"Ankush Bhargava — Career & Work History | Product Manager, Engineering Leader"`
- Lab: `"Ankush Bhargava — AI Projects & Portfolio | LLMs, Agentic Workflows"`

---

## Phase 1b — Recruiter Bot / Talent Intelligence Additions

These additions specifically target talent intelligence platforms (SeekOut, HireEZ, AmazingHiring, Eightfold.ai) that crawl the open web to build candidate profiles, and AI-powered recruiter research tools.

---

### ✅ 10. Enrich Person schema — work history, patents, occupation
**File:** `src/pages/index.astro`  
**Effort:** 15 min | **Value:** High — talent platforms parse `alumniOf`, `hasOccupation`, and `award` fields to match candidates to roles; patents are a strong signal

---

### ✅ 11. `ProfilePage` schema wrapping the homepage
**File:** `src/pages/index.astro`  
**Effort:** 5 min | **Value:** Medium-high — schema.org's `ProfilePage` type is specifically designed for personal profile pages; some talent crawlers prioritize pages with this type

---

### ✅ 12. `rel="me"` on all outbound social/profile links
**File:** wherever social links are rendered (contact section, nav, etc.)  
**Effort:** 5 min | **Value:** Medium — `rel="me"` links connect your site to your social identities in web identity graphs used by some talent platforms and Google

---

### 13. Downloadable resume PDF with structured metadata
**File:** `public/resume-ankush-bhargava.pdf`  
**Effort:** 30 min | **Value:** High — SeekOut, HireEZ, AmazingHiring specifically index downloadable PDFs as resume signals; PDF file metadata (author, title, keywords) is parsed by talent bots. Link from homepage/contact section.

---

### ✅ 14. WorkHistory JSON-LD on `/journey` page
**File:** `src/pages/journey.astro`  
**Effort:** 30 min | **Value:** High — structured employment history is the primary data talent platforms extract; an `ItemList` of positions with org name, title, start/end dates makes parsing unambiguous

---

### Off-Site Actions (Not Code Changes)
These don't require code changes but directly affect recruiter tool discoverability:

3. **Crunchbase / AngelList / Wellfound** — Add a founder profile for any startup history. These are indexed by talent intelligence platforms.

---

## Phase 2 — Lower Value / Diminishing Returns

### 15. Apple Touch Icon + Web App Manifest
**Files:** `public/apple-touch-icon.png`, `public/site.webmanifest`  
**Effort:** 20 min (need to generate image assets) | **Value:** Low — affects mobile "Add to Home Screen" only; no measurable recruiter impact

Add to `Layout.astro` head:
```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#f5f0eb" />
```

---

### 16. `theme-color` meta only (subset of #10 if skipping manifest)
**File:** `src/layouts/Layout.astro`  
**Effort:** 2 min | **Value:** Low — colors browser chrome on mobile; minor UX polish

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f0eb" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1814" />
```

---

### 17. Google Search Console verification
**File:** `src/layouts/Layout.astro` or `public/` as HTML file  
**Effort:** 5 min | **Value:** Low as standalone — needed to submit sitemap and monitor index coverage, but only has value after doing #1

```html
<meta name="google-site-verification" content="[token from GSC]" />
```

Do this after deploying with the custom domain.

---

### 18. `og:image` optimized social card (1200×630)
**File:** `public/images/og-card.png` (new asset)  
**Effort:** 30–60 min (design work) | **Value:** Low-medium — a proper OG card with name, title, photo looks more polished when shared; current fallback uses portrait photo which is square, not ideal for 1200×630

---

### 19. `<meta name="robots">` per-page control
**Files:** `src/layouts/Layout.astro`  
**Effort:** 5 min | **Value:** Low — only needed if you ever want to noindex a page; currently everything should be indexed, so this adds no value until a use case arises

---

### 20. OpenSearch description (`opensearch.xml`)
**File:** `public/opensearch.xml`  
**Effort:** 10 min | **Value:** Very low — enables browser address-bar search integration; not relevant for job-search discoverability

---

## Verification Checklist
1. `npm run build` → confirm `dist/sitemap-index.xml` and `dist/sitemap-0.xml` exist
2. Open Graph: paste `https://ankushbhargava.us` into [opengraph.xyz](https://opengraph.xyz)
3. JSON-LD: paste page source into Google's Rich Results Test
4. `llms.txt`: visit `https://ankushbhargava.us/llms.txt` directly
5. After deploy: submit `https://ankushbhargava.us/sitemap-index.xml` to Google Search Console
6. After deploy: search `site:ankushbhargava.us` in Google to confirm indexing

---

## Files to Create/Modify Summary

| File | Action |
|------|--------|
| `astro.config.mjs` | Add `site`, `integrations: [sitemap()]` |
| `src/layouts/Layout.astro` | Add OG, Twitter, canonical, author meta; accept `ogImage` prop |
| `src/pages/index.astro` | Add JSON-LD Person schema |
| `src/pages/journey.astro` | Add description prop, BreadcrumbList schema |
| `src/pages/lab.astro` | Add description prop, SoftwareApplication schemas |
| `public/robots.txt` | New file |
| `public/llms.txt` | New file |
| `package.json` | Add `@astrojs/sitemap` dependency |


--------------
 Recruiter talent intelligence tools that crawl the open web:
  - SeekOut — crawls personal sites, GitHub, patents, publications. Used by large enterprise recruiters.
  - HireEZ (formerly Hiretual) — similar web + social crawling, AI matching
  - AmazingHiring — strong GitHub/web crawl focus; popular for technical talent
  - Eightfold.ai — used by enterprise HRs; parses structured skills/work history for AI matching
  - LinkedIn Talent Hub / Recruiter — primarily LinkedIn, but your sameAs link connects profile to site
  - Perplexity / ChatGPT Research — modern recruiters at tech companies increasingly use these to research candidates
