# SEO & GEO Enhancements — Portfolio Site

**Domain:** `ankushbhargava.us`
**Deliverable file:** `C:\Users\ankus\CursorProjects\PortfolioSite\PLANs To Do\seo-geo-enhancements.md`

> Goal: maximize recruiter/hiring-manager discoverability across Google, Bing, and AI-powered search (Perplexity, ChatGPT, Gemini, Claude). Domain assumed purchased and pointed at Cloudflare Pages before implementation.

---

## Phase 1 — High Value + Low Effort

### ✅ 1. Set `site` URL in `astro.config.mjs` + install sitemap
**File:** `astro.config.mjs`  
**Effort:** 5 min | **Value:** Critical — required for all canonical/sitemap generation

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ankushbhargava.us',
  vite: { plugins: [tailwindcss()] },
  output: 'static',
  integrations: [sitemap()],
});
```

Install: `npm install @astrojs/sitemap`  
Generates `/sitemap-index.xml` + `/sitemap-0.xml` at build time. Submit to Google Search Console after deploy.

---

### ✅ 2. Upgrade `Layout.astro` head — OG, Twitter, canonical, author
**File:** `src/layouts/Layout.astro` (lines 1–21, insert into `<head>` after line 61)  
**Effort:** 10 min | **Value:** High — every URL share (Slack, email, LinkedIn DM) shows a rich preview card; canonical deduplicates domain signals

Add props to the frontmatter:
```astro
interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
}

const {
  title = "Ankush Bhargava — Product Leader & AI Builder",
  description = "20+ years across Product, Engineering and Operations. Building the future with lovable products.",
  ogImage = "/images/ankush-bhargava-profile.jpg",
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
const ogImageURL = new URL(ogImage, Astro.site);
```

Add to `<head>` after the existing `<link rel="icon">`:
```html
<!-- Canonical -->
<link rel="canonical" href={canonicalURL} />

<!-- Author -->
<meta name="author" content="Ankush Bhargava" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImageURL} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Ankush Bhargava" />
<meta property="og:locale" content="en_US" />

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImageURL} />
```

---

### ✅ 3. `public/robots.txt`
**File:** `public/robots.txt` (new file)  
**Effort:** 2 min | **Value:** High — tells crawlers to index everything, advertises sitemap

```
User-agent: *
Allow: /

Sitemap: https://ankushbhargava.us/sitemap-index.xml
```

---

### ✅ 4. `public/llms.txt` (GEO)
**File:** `public/llms.txt` (new file)  
**Effort:** 5 min | **Value:** High — emerging standard read by Perplexity, ChatGPT Browse, Claude; positions Ankush in AI-powered recruiter searches

```markdown
# Ankush Bhargava — Product Leader & AI Builder

Ankush Bhargava is a product and engineering leader in the San Francisco Bay Area with 20+ years of experience spanning product management, software engineering, startup founding, logistics operations, B2B platforms, and AI development.

## Professional Profile
- Current focus: AI products, agentic workflows, and PM roles in B2B & AI
- Key achievements: $250M ARR B2B marketplace (Walmart), $50M+ savings across 5 logistics markets, 2 utility patents (inventory & delivery), 3 AI products built and launched independently
- Background: Engineering → Startup → Operations → Product → AI Builder

## Links
- Portfolio: https://ankushbhargava.us
- Career timeline: https://ankushbhargava.us/journey
- AI projects: https://ankushbhargava.us/lab
- LinkedIn: https://linkedin.com/in/ankushbhargava
- Newsletter (Product Logistics): https://productlogistics.beehiiv.com/
```

---

### ✅ 5. JSON-LD Person schema on homepage (GEO + SEO)
**File:** `src/pages/index.astro`  
**Effort:** 15 min | **Value:** Critical — enables Google Knowledge Panel candidacy; AI systems use Person schema to build factual citations about individuals

Add inside `<Layout>` slot (renders in `<body>`, Astro serializes it):
```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ankush Bhargava",
  "url": "https://ankushbhargava.us",
  "image": "https://ankushbhargava.us/images/ankush-bhargava-profile.jpg",
  "jobTitle": "Product Leader & AI Builder",
  "description": "Entrepreneurial player-coach with 20+ years across Product, Engineering and Business. AI-enabled, data-fluent, patent holder.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco Bay Area",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "knowsAbout": ["Product Management", "Artificial Intelligence", "B2B Platforms", "Logistics Technology", "Software Engineering", "Startup Founding"],
  "sameAs": [
    "https://linkedin.com/in/ankushbhargava",
    "https://github.com/ankush2kn",
    "https://productlogistics.beehiiv.com/"
  ]
})} />
```

---

### ✅ 6. JSON-LD SoftwareApplication schema on `/lab` (GEO)
**File:** `src/pages/lab.astro`  
**Effort:** 20 min | **Value:** High — makes AI projects citable by AI search; links projects back to Ankush as creator

For each project in `labProjects` (from `portfolio.ts`), emit a schema block:
```astro
{labProjects.map(p => (
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": p.name,
    "description": p.description,
    "author": {
      "@type": "Person",
      "name": "Ankush Bhargava",
      "url": "https://ankushbhargava.us"
    },
    ...(p.url ? { "url": p.url } : {})
  })} />
))}
```

---

### ✅ 7. Per-page meta descriptions for `/journey` and `/lab`
**Files:** `src/pages/journey.astro`, `src/pages/lab.astro`  
**Effort:** 5 min | **Value:** High — unique descriptions improve CTR from search results; currently both pages fall back to homepage default

- `/journey` description: `"Ankush Bhargava's career timeline — 20+ years spanning software engineering, product leadership, startup founding, logistics operations, data products, analytics and AI development."`
- `/lab` description: `"AI projects and experiments by Ankush Bhargava — consumer apps, tools, and open-source work built with LLMs and agentic frameworks."`

---

### ✅ 8. BreadcrumbList schema on `/journey` and `/lab`
**Files:** `src/pages/journey.astro`, `src/pages/lab.astro`  
**Effort:** 10 min | **Value:** Medium-high — breadcrumb rich results appear in Google SERP; signals site structure to crawlers

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "About", "item": "https://ankushbhargava.us" },
    { "@type": "ListItem", "position": 2, "name": "My Journey", "item": "https://ankushbhargava.us/journey" }
  ]
})} />
```

---

### ✅ 9. Tune page titles for keyword targeting
**Files:** `src/layouts/Layout.astro`, `src/pages/journey.astro`, `src/pages/lab.astro`  
**Effort:** 5 min | **Value:** Medium-high — recruiter keyword matching for "Product Manager San Francisco", "AI Product Manager"

- Homepage: `"Ankush Bhargava — Product Manager & AI Builder | San Francisco Bay Area"` (adds geo + role keyword)
- Journey: `"Ankush Bhargava — Career & Work History | Product Manager, Engineering Leader"`
- Lab: `"Ankush Bhargava — AI Projects & Portfolio | LLMs, Agentic Workflows"`

---

---

## Phase 1b — Recruiter Bot / Talent Intelligence Additions

These additions specifically target talent intelligence platforms (SeekOut, HireEZ, AmazingHiring, Eightfold.ai) that crawl the open web to build candidate profiles, and AI-powered recruiter research tools.

---

### ✅ 10. Enrich Person schema — work history, patents, occupation
**File:** `src/pages/index.astro`  
**Effort:** 15 min | **Value:** High — talent platforms parse `alumniOf`, `hasOccupation`, and `award` fields to match candidates to roles; patents are a strong signal

Add to the existing Person schema object:
```json
"hasOccupation": {
  "@type": "Occupation",
  "name": "Product Manager",
  "occupationLocation": { "@type": "City", "name": "San Francisco Bay Area" },
  "skills": "Product Management, Artificial Intelligence, B2B Platforms, Logistics Technology, Agentic Workflows"
},
"alumniOf": [
  { "@type": "Organization", "name": "Walmart" },
  { "@type": "Organization", "name": "University of Michigan" }
],
"award": [
  "US Utility Patent — Inventory Management",
  "US Utility Patent — Delivery Logistics"
]
```

---

### ✅ 11. `ProfilePage` schema wrapping the homepage
**File:** `src/pages/index.astro`  
**Effort:** 5 min | **Value:** Medium-high — schema.org's `ProfilePage` type is specifically designed for personal profile pages; some talent crawlers prioritize pages with this type

Wrap the Person schema in a ProfilePage:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": { ...Person schema object... }
}
```

---

### ✅ 12. `rel="me"` on all outbound social/profile links
**File:** wherever social links are rendered (contact section, nav, etc.)  
**Effort:** 5 min | **Value:** Medium — `rel="me"` links connect your site to your social identities in web identity graphs used by some talent platforms and Google

```html
<a href="https://linkedin.com/in/ankushbhargava" rel="me">LinkedIn</a>
<a href="https://github.com/ankush2kn" rel="me">GitHub</a>
```

---

### 13. Downloadable resume PDF with structured metadata
**File:** `public/resume-ankush-bhargava.pdf`  
**Effort:** 30 min | **Value:** High — SeekOut, HireEZ, AmazingHiring specifically index downloadable PDFs as resume signals; PDF file metadata (author, title, keywords) is parsed by talent bots. Link from homepage/contact section.

PDF metadata to set (in Acrobat, macOS Preview, or any PDF editor):
- Title: `Ankush Bhargava — Product Manager Resume`
- Author: `Ankush Bhargava`
- Keywords: `Product Manager, AI, B2B, Logistics, San Francisco, Walmart`

---

### ✅ 14. WorkHistory JSON-LD on `/journey` page
**File:** `src/pages/journey.astro`  
**Effort:** 30 min | **Value:** High — structured employment history is the primary data talent platforms extract; an `ItemList` of positions with org name, title, start/end dates makes parsing unambiguous

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Work History — Ankush Bhargava",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "OrganizationRole",
        "roleName": "Director of Product Management",
        "startDate": "2018",
        "endDate": "2023",
        "memberOf": { "@type": "Organization", "name": "Walmart" }
      }
    }
    // ... one entry per career stop from portfolio.ts
  ]
}
```

Generate dynamically from `careerEntries` in `portfolio.ts` to avoid maintaining separately.

---

### Off-Site Actions (Not Code Changes)
These don't require code changes but directly affect recruiter tool discoverability:

1. **GitHub profile** — Create `github.com/ankush2kn/ankush2kn` README linking to `ankushbhargava.us`. AmazingHiring and SeekOut weight GitHub heavily for technical candidates.
2. **LinkedIn profile** — Add `ankushbhargava.us` to Contact Info. This is how talent platforms link your site to your LinkedIn identity.
3. **Crunchbase / AngelList / Wellfound** — Add a founder profile for any startup history. These are indexed by talent intelligence platforms.
4. **Google Patents** — Your Walmart patents are already public; ensure your name spelling matches across sources.

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
