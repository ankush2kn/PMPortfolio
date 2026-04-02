import type { CareerDomainId, CareerHighlightDomainTag } from "@/lib/careerDomains";

/** Mandatory `domains` on each bullet for Journey filters. Use `"overall"` for high-level copy (shown only on the Overall pill). Use domain id(s) for specifics (shown only when that domain pill is selected). */
export interface CareerHighlight {
  /** Plain sentence; timelines render an accent rail (no manual `>` bullets). */
  text: string;
  domains: [CareerHighlightDomainTag, ...CareerHighlightDomainTag[]];
}

export const profile = {
  name: "Ankush Bhargava",
  portraitSrc: "/images/ankush-bhargava-profile.jpg",
  portraitAlt: "Portrait of Ankush Bhargava, product leader",
  location: "San Francisco Bay Area, CA",
  phone: "734-494-2012",
  linkedin: "https://linkedin.com/in/ankushbhargava",
  github: "https://github.com/ankush2kn",
  portfolioRepo: "https://github.com/ankush2kn/PMPortfolio",
  taglines: [
    "20 years building products. Now building with AI.",
    "Enterprise scale meets startup speed.",
    "From $250M platforms to agentic workflows.",
  ],
  summary:
    "Entrepreneurial player-coach with 20+ years across Product, Engineering and Business. AI-enabled, data-fluent, patent holder with a growth mindset.",
  availability: "Available Immediately",
  seeking: "Product Manager roles in B2B & AI",
  seekingSubline: "Let's solve some hard problems together",
};

// columns to left, right
export const impactMetrics = [
  { value: "3", label: "AI Products", context: "Built & Launched Solo", company: "Independent" },
  { value: "$250M", label: "ARR in 18m", context: "B2B Marketplace", company: "Walmart" },
  { value: "$50M+", label: "Savings in 5 Markets", context: "Transportation Platform", company: "Walmart" },
  { value: "First", label: "E2E Simulation Platform", context: "$5B+ Investment Support to CEO", company: "Walmart" },
  { value: "2", label: "Utility Patents", context: "Inventory & Delivery", company: "Walmart" },
  { value: "250M+", label: "Last Mile Deliveries/yr", context: "Routing, Scheduling, Execution", company: "Walmart" },
  { value: "First", label: "Delivery Sortation Center", context: "Tech Inside & Outside a New Building Type", company: "Walmart" }
];

export const principles = [
  { title: "Data over opinions", context: "Understand first, Strategize second, and Execute last." },
  { title: "Build to learn, learn to build", context: "Ship fast. Iterate faster." },
  { title: "End-to-end thinking", context: "Strategy through execution, no handoffs." },
  { title: "0 to 1 to N", context: "Energized by building from scratch, then scaling." },
  { title: "Every 1% matters at scale", context: "Small wins, massive P&L impact." },
  { title: "Leave it better than I find it", context: "Solve the hardest problems. Always." },
];

export const projects = [
  {
    name: "SimpleStory.ai",
    url: "https://simplestory.ai",
    tagline: "AI-native publishing marketplace for educational content",
    description:
      "Multimodal AI platform that enables creators to build educational stories with AI-generated visuals, narration, and interactive elements.",
    metrics: ["MVP launched", "Low-friction creator UX validated"],
    techStack: ["Vertex AI", "Google Cloud", "ElevenLabs", "Supabase"],
    icon: "book",
    screenshot: "/projects/simplestory.png",
    challenge:
      "Teachers and parents needed faster ways to create engaging, personalized learning stories without a production team.",
    outcome:
      "Shipped an AI-native publishing flow with generated visuals and voice — validated creator UX through MVP launch.",
  },
  {
    name: "TroveScore",
    url: "https://trovescore.com",
    tagline: "AI-powered inventory valuation from a single photo",
    description:
      "Scan your bookshelf with one picture. AI identifies every book, cross-references real-time market data from Google & eBay to automate sell vs. donate decisions.",
    metrics: ["Real-time market data", "Single-image recognition"],
    techStack: ["Vertex AI", "Google Cloud", "eBay API", "Fal.ai"],
    icon: "camera",
    screenshot: "/projects/trovescore.png",
    challenge:
      "People with large home libraries couldn’t quickly value books or decide sell vs. donate vs. keep without manual lookup.",
    outcome:
      "Built one-tap shelf capture with ID + live market pricing to recommend the best next action.",
  },
  {
    name: "Fultu",
    url: "https://fultu.com",
    tagline: "The What-If AI game",
    description:
      "An AI-powered game that explores alternate scenarios and what-if questions through interactive storytelling and dynamic content generation.",
    metrics: ["AI-driven gameplay", "Interactive narratives"],
    techStack: ["AI/ML", "Interactive Design"],
    icon: "gamepad",
    screenshot: "/projects/fultu.png",
    challenge:
      "Exploring “what if” scenarios was mostly static or generic — few playful, interactive ways to branch narratives with AI.",
    outcome:
      "Launched a what-if game engine that turns hypotheticals into short, dynamic AI-driven story paths.",
  },
];

/** One career photo: thumbnail uses `src`; optional `href` opens in a new tab instead of the lightbox */
export interface CareerImageItem {
  src: string;
  href?: string;
}

export interface CareerEntry {
  id: string;
  chapter?: string;
  title?: string;
  company?: string;
  /** If set, company name is linked and opens in a new tab on Journey timelines */
  companyUrl?: string;
  location?: string;
  period?: string;
  yearStart?: number;
  yearEnd?: number;
  /** One or more domains per role; used for colors (first) and Journey domain filter */
  domains: CareerDomainId[];
  highlights?: CareerHighlight[];
  keyMetric?: string;
  /** Each entry is a `src` string or `{ src, href? }`. With `href`, click opens a new tab; otherwise the fullscreen lightbox. */
  images?: (string | CareerImageItem)[];
}

export const career: CareerEntry[] = [
  {
    id: "infosys",
    chapter: "The Engineer",
    title: "Software Engineer",
    company: "Infosys Technologies",
    companyUrl: "https://www.infosys.com/",
    location: "India, Ohio & Texas",
    period: "2002–2006",
    yearStart: 2002,
    yearEnd: 2006,
    domains: ["engineering", "b2b"],
    highlights: [
      { text: "Pearson's: Built e2e assessment creation workflows", domains: ["overall", "engineering", "b2b"] },
      { text: "LexisNexis: unified content delivery platform for US & EU", domains: ["overall", "engineering", "b2b"] },
    ],
    keyMetric: "Core part of global Enterprise data platform",
    images: [
      { src: "/career/award-icon.svg", href: "https://drive.google.com/file/d/1oXkI_2ZVGbFOQ5v7hZTl5jvFgRxl_p3-/view?usp=sharing" },
     ], 
  },
  {
    id: "agilemile",
    title: "Lead Developer & Product Manager",
    company: "Agile Mile (formerly NuRide)",
    companyUrl: "https://agilemile.com/",
    location: "Virginia & Connecticut",
    period: "2006–2010",
    yearStart: 2006,
    yearEnd: 2010,
    domains: ["engineering", "b2b", "b2c", "d2c", "product"],
    highlights: [
      { text: "Early-stage startup focused on combining social networks with traffic demand management. As full stack developer and first PM, my work for key to PLG", domains: ["overall"] },
      { text: "Team size: 1 to 2 Engineers", domains: ["overall"] },
      { text: "Strategied with CEO to built the multi-sided marketplace", domains: ["product", "b2b", "b2c"] },
      { text: "Led PLG turnaround during financial crisis: reduced headcount 70%, scaled to 4x users", domains: ["product"] },
      { text: "Early adopter of Amazon AWS, migrated infra to cloud", domains: ["engineering"] },
      { text: "Launched 300+ marketing campaigns with geo-spatial customer segmentation", domains: ["product", "b2c"] },
    ],
    keyMetric: "Achieved PLG turnaround and earned substantial responsibilities",
    images: [
     "/career/nuride.png", 
    ],
  },
  {
    id: "internships",
    title: "MBA Intern, Product Tech Strategy",
    yearStart: 2011,
    yearEnd: 2011,
    domains: ["b2b", "product"],
    highlights: [
      { text: "TMobile: Private routers as public Internet gateways", domains: ["overall", "product", "b2b"] },
      { text: "Compuware: Identify Management as a service", domains: ["overall", "product", "b2b"] },
    ],
    keyMetric: "Evaluated new market entry opportunities",
  },
  {
    id: "walmart-ops",
    chapter: "The Operator",
    title: "Analyst → Senior Business Manager",
    company: "Walmart Stores & eCommerce",
    companyUrl: "https://walmart.com/",
    location: "SF Bay Area",
    period: "2012–2016",
    yearStart: 2012,
    yearEnd: 2016,
    domains: ["operations", "b2b"],
    highlights: [
      { text: "Incubated innovative processes and broke silos by cultivating cross-functional partnerships across inventory, merchandising, and supply planning", domains: ["overall"] },
      { text: "Team size: 1 to 5 Operators & Analysts", domains: ["overall"] },
      { text: "Led inventory flow planning for holiday peak season", domains: ["operations", "b2b"] },
      { text: "Improved Customer Order Fill Rates from <90% to 95+% in 6 months", domains: ["operations", "b2b"] },
      { text: "Curated 1M+ highest priority SKUs for eCommerce", domains: ["operations", "product"] },
      { text: "Facilitated eComm CEO's Weekly Business Reviews", domains: ["operations", "b2b"] },
    ],
    keyMetric: "Improved working capital, InStock rates, SKU sanity and built best practices",
  },
  {
    id: "walmart-pm1",
    chapter: "Inventory & Capacity Management",
    title: "Senior PM → Staff PM",
    company: "Walmart Gloabl Tech",
    companyUrl: "https://tech.walmart.com/content/walmart-global-tech/en_us.html",
    location: "SF Bay Area",
    period: "2016–2025",
    yearStart: 2016,
    yearEnd: 2019,
    domains: ["product", "b2b"],
    highlights: [
      { text: "Delivered millions in cost savings by modernizing eCommerce predictive analytics and inventory planning products, while designing intuitive journeys for data-heavy decision tools.", domains: ["overall"] },
      { text: "Team size: 1 to 6 PMs & Data Scientists", domains: ["overall"] },
      { text: "Launched m/l based demand forecast, improving YoY accuracy by 25%", domains: ["product", "engineering","b2b"] },
      { text: "Created products that converged tribal knowledge with systematic data to enable high speed decision making", domains: ["product", "operations"] },
      { text: "Developed Walmart's first SKU-region level demand engine", domains: ["product", "engineering"] },
    ],
    keyMetric: "Captial efficiency of $1B+ inventory by optimizing inventory physical network",
  },
  {
    id: "walmart-pm2",
    chapter: "The Platform Architect",
    title: "Principal PM → Director",
    company: "Walmart Global Tech",
    companyUrl: "https://tech.walmart.com/content/walmart-global-tech/en_us.html",
    location: "SF Bay Area",
    period: "2016–2025",
    yearStart: 2019,
    yearEnd: 2025,
    domains: ["product", "operations", "b2b", "d2c"],
    highlights: [
      { text: "As first hire for freight transportation team, led enterprise transportation, last-mile, and eCommerce products", domains: ["overall"] },
      { text: "Team size: 1 to 10 PMs", domains: ["overall"] },
      { text: "Built 0→1 B2B transportation marketplace to $250M ARR", domains: ["product", "b2b"] },
      { text: "End-to-end logistics platform across 5 countries, $50M+ annual savings", domains: ["product", "operations"] },
      { text: "Last mile routing: 250M+ annual deliveries, 20% fewer miles, earned patent", domains: ["product", "engineering"] },
      { text: "Created simulation platform for $5B+ infrastructure investments, presented to CEO", domains: ["product", "operations"] },
      { text: "Built sortation center tech: cut delivery costs 10%, reduced time 15%", domains: ["product", "engineering"] },
    ],
    keyMetric: "$100M+ platform savings driven by automation and optimizations",
    images: [
      { src: "/career/award-icon.svg", href: "https://drive.google.com/file/d/1h73W6pvaw-5jAh8OQbQZ5PdjRtjR9v_j/view?usp=sharing" },
      { src: "/career/award-icon.svg", href: "https://drive.google.com/file/d/10rX1WxuRx0LNYBNmnaooY9GDZTZPg_DA/view?usp=sharing" },
    ],
  },
  {
    id: "independent",
    chapter: "The AI Builder",
    title: "Product Lead & Architect",
    company: "Product Innovation",
    companyUrl: "/lab",
    location: "SF Bay Area",
    period: "2025–Present",
    yearStart: 2025,
    domains: ["product", "engineering", "b2c", "b2b", "d2c"],
    highlights: [
      { text: "SimpleStory.ai: AI native content marketplace", domains: ["overall", "product", "b2b", "b2c", "engineering"] },
      { text: "TroveScore.com: AI vision powered book shelf valuation", domains: ["overall", "d2c", "product", "engineering"] },
      { text: "Fultu.com: What-If-AI game — interactive experiences", domains: ["overall", "d2c", "product", "engineering"] },
    ],
    keyMetric: "Shipped 3 AI products",
    images: [
      { src: "/projects/simplestory.png", href: "https://simplestory.ai" },
      { src: "/projects/trovescore.png", href: "https://trovescore.com" },
      { src: "/projects/fultu.png", href: "https://fultu.com" },
      { src: "/career/ODF.png", href: "https://www.linkedin.com/posts/ankushbhargava_odf-activity-7433309687002906629-lMMg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAAe-IsBt2zOUo6ATAv-NfKeeUD-m3WCqEo" },
    ],
  },
];

/** Newest roles first — used on Journey timeline views */
export const careerReverseChronological: CareerEntry[] = [...career].reverse();

export const education = [
  {
    degree: "Master of Business Administration",
    focus: "Strategy and Operations",
    school: "University of Michigan, Ann Arbor",
    year: 2012,
    logoSrc: "/images/Michigan_large.webp",
    logoAlt: "University of Michigan",
  },
  {
    degree: "Bachelor of Information Technology (Engineering)",
    focus: "Internet Technologies",
    school: "University of Delhi, New Delhi, India",
    year: 2002,
    logoSrc: "/images/pngwing.com.png",
    logoAlt: "University of Delhi",
  },
];

/** Tech credential pill: plain string, or `{ label, href }` for linked badges (e.g. Credly). */
export type SkillCredential = string | { label: string; href?: string };

export function skillCredentialLabel(c: SkillCredential): string {
  return typeof c === "string" ? c : c.label;
}

export function skillCredentialHref(c: SkillCredential): string | undefined {
  return typeof c === "string" ? undefined : c.href;
}

export const skills = {
  product: [
    "Roadmapping",
    "0→1 Product Development",
    "Platform Strategy",
    "A/B Testing",
    "User Research",
    "OKRs & Metrics",
    "Stakeholder Management",
    "Cross-functional Leadership",
  ],
  technical: [
    "Agentic AI Workflows",
    "ML/Optimization",
    "API Design",
    "Microservices",
    "Data Modeling",
    "SQL & Analytics",
    "Cloud Architecture",
    "Full Stack Development",
  ],
  domain: [
    "Supply Chain & Logistics",
    "Last Mile Delivery",
    "Marketplace / Multi-sided Platforms",
    "eCommerce",
    "Forecasting & Simulation",
    "Inventory Management",
    "Transportation Management",
    "EdTech / Content Platforms",
  ],
  tools: [
    { name: "Cursor AI", category: "AI/ML" },
    { name: "Claude Code", category: "AI/ML" },
    { name: "Vertex AI", category: "AI/ML" },
    { name: "OpenRouter", category: "AI/ML" },
    { name: "Fal.ai", category: "AI/ML" },
    { name: "ElevenLabs", category: "AI/ML" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Supabase", category: "Cloud" },
    { name: "GitHub", category: "Cloud" },
    { name: "Cloudflare", category: "Cloud" },
    { name: "PostHog", category: "Analytics" },
    { name: "Umami", category: "Analytics" },
    { name: "Tableau", category: "Analytics" },
    { name: "Stripe", category: "Growth" },
    { name: "Braze", category: "Growth" },
    { name: "Salesforce", category: "Growth" },
  ],
  credentials: [
    {
      label: "Google Generative AI Leader",
      href: "https://www.credly.com/badges/3586fb03-f8d1-4faa-8920-2cf3958ea226/linked_in_profile",
    },
    {
      label: "Lean Belt Certification",
      href: "https://drive.google.com/file/d/1WOXZfzB5xfSQrWL-Qzb6hKEnc0onzq_k/view",
    },
    {
      label: "Patent: Inventory",
      href: "https://patents.google.com/patent/US10839348B2/",
    },
    {
      label: "Patent: Last Mile Delivery",
      href: "https://patents.google.com/patent/US20220245585A1",
    },
    {
      label: "Publication: E2E Supply Chain Optimization",
      href: "https://pubsonline.informs.org/doi/10.1287/inte.2023.0093",
    },
  ] as SkillCredential[],
};
