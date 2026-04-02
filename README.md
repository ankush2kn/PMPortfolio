# Portfolio Site

A personal portfolio built with [Astro](https://astro.build) and Tailwind CSS. Designed to be forked and customized — swap out the data and images, keep the layouts.

**Live site:** [https://ankushbhargava.pages.dev/](https://ankushbhargava.pages.dev/) *(replace with your URL)*

---

## Tech Stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility styling with CSS variable theming
- Variable fonts: Inter, Space Grotesk, Playfair Display

---

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## Customizing the Content

All portfolio content lives in **one file**: `src/data/portfolio.ts`.

### 1. Profile

```ts
export const profile = {
  name: "Your Name",
  portraitSrc: "/images/your-photo.jpg",   // place in public/images/
  portraitAlt: "Portrait of Your Name",
  location: "City, State",
  phone: "555-000-0000",
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourusername",
  portfolioRepo: "https://github.com/yourusername/yourrepo",
  taglines: [
    "First punchy tagline.",
    "Second tagline.",
    "Third tagline.",
  ],
  summary: "One paragraph bio for your hero section.",
  availability: "Available Immediately",
  seeking: "Role type you're targeting",
  seekingSubline: "A sub-line under your seeking statement",
};
```

### 2. Impact Metrics

The numbers displayed prominently on the home page. Add, remove, or reorder freely.

```ts
export const impactMetrics = [
  { value: "$10M", label: "Revenue Grown", context: "Short context", company: "Company Name" },
  // ...
];
```

### 3. Principles

Six short beliefs displayed in the Principles section.

```ts
export const principles = [
  { title: "Your principle", context: "One-line elaboration." },
  // ...
];
```

### 4. Projects (Lab page)

```ts
export const projects = [
  {
    name: "Project Name",
    url: "https://yourproject.com",
    tagline: "Short tagline",
    description: "Longer description paragraph.",
    metrics: ["Metric one", "Metric two"],
    techStack: ["React", "Supabase"],
    icon: "book",                          // "book" | "camera" | "gamepad"
    screenshot: "/projects/screenshot.png", // place in public/projects/
    challenge: "What problem did you solve?",
    outcome: "What was the result?",
  },
];
```

### 5. Career History (Journey page)

Each role is a `CareerEntry`. The Journey page filters and colors entries by **domain**.

```ts
export const career: CareerEntry[] = [
  {
    id: "unique-id",           // must be unique
    chapter: "The Engineer",   // optional chapter label shown on timeline
    title: "Job Title",
    company: "Company Name",
    companyUrl: "https://company.com",  // optional — links company name
    location: "City, State",
    period: "2020–2023",
    yearStart: 2020,
    yearEnd: 2023,
    domains: ["engineering", "product"], // see Domain Tags below
    keyMetric: "One bold headline stat",
    highlights: [
      { text: "Bullet point text", domains: ["engineering"] },
      { text: "Shown under all domain filters", domains: ["all"] },
    ],
    images: [
      "/career/photo.png",              // opens in fullscreen lightbox
      { src: "/career/photo2.png", href: "https://example.com" }, // opens URL instead
    ],
  },
  // oldest → newest order; the site reverses it for display
];
```

#### Domain Tags

Domains drive the filter pills on the Journey page and the accent colors on cards.

| ID | Label | Color |
|----|-------|-------|
| `engineering` | Engineering | Indigo |
| `startup` | Startup | Amber |
| `operations` | Operations | Teal |
| `product` | Product | Blue |
| `b2b` | B2B | Purple |
| `b2c` | B2C | Rose |
| `ai` | AI | Violet |

Each `CareerEntry` must have at least one domain. The **first** domain sets the card's accent color. Each highlight's `domains` array controls which pill shows it: include `"overall"` for the **Overall** pill only, and/or domain ids for those domain pills only (include both if the same line should appear in both).

### 6. Education

```ts
export const education = [
  {
    degree: "Master of Business Administration",
    focus: "Strategy and Operations",
    school: "University of Somewhere",
    year: 2020,
    logoSrc: "/images/school-logo.webp",  // place in public/images/
    logoAlt: "University of Somewhere",
  },
];
```

### 7. Skills

Four categories: `product`, `technical`, `domain`, and `tools` (with `category` sub-labels) + `credentials`.

```ts
export const skills = {
  product: ["Roadmapping", "User Research", ...],
  technical: ["API Design", "SQL & Analytics", ...],
  domain: ["Supply Chain", "Marketplace Platforms", ...],
  tools: [
    { name: "Figma", category: "Design" },
    { name: "Supabase", category: "Cloud" },
  ],
  credentials: ["Certification name", ...],
};
```

---

## Images & Assets

All images go in `public/`:

| Path | Used for |
|------|----------|
| `public/images/` | Profile photo, education logos |
| `public/projects/` | Project screenshots |
| `public/career/` | Career photo galleries |
| `public/favicon.svg` | Browser tab icon |

---

## Section Variants & Preview Mode

Each section of the site has multiple visual layouts (A/B/C or named). The active variant per section is set in `src/data/siteDefaults.ts`:

```ts
export const DEFAULT_VARIANTS = {
  Hero: "C",
  Impact: "B",
  Principles: "A",
  Skills: "C",
  Contact: "B",
  Timeline: "Vertical",  // Vertical | Subway | Elevation | Orbit | FilmStrip
  Projects: "A",
};
```

To browse all variants interactively, add `?preview` to any URL in your dev server:

```
http://localhost:4321/?preview
http://localhost:4321/journey?preview
```

This reveals a floating switcher panel. Once you find a combination you like, update `DEFAULT_VARIANTS` to make it the permanent default for all visitors.

---

## Theming

Two color themes are included — **warm** (default) and **dark** — switchable via the sun/moon toggle in the nav. Theme preference is saved to `localStorage`. Colors are defined as CSS variables in `src/styles/global.css` under the `@theme` block.

---

## Deployment

The site outputs fully static HTML. Deploy to any static host:

- **Cloudflare Pages** — connect your GitHub repo, build command `npm run build`, output `dist/`
- **Vercel / Netlify** — same settings
- **GitHub Pages** — works with the static adapter

---

## License

This project is licensed under the **MIT License** — see `LICENSE` for details.

Fork freely. The only requirement is keeping the copyright notice in `LICENSE`.
