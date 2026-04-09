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
  twitter: "https://x.com/TheKushBhargava",
  /** The Product Logistics (beehiiv); contact UI label "My blog". */
  newsletter: "https://productlogistics.beehiiv.com/",
  portfolioRepo: "https://github.com/ankush2kn/PMPortfolio",
  taglines: [
    "20 years building products. Now building with AI.",
    "Enterprise scale meets startup speed.",
    "From $250M platforms to agentic workflows.",
  ],
  summary:
    "Entrepreneurial player-coach with 20+ years across Product, Engineering and Business. AI-enabled, data-fluent, patent holder with a growth mindset.",
  availability: "Available Immediately",
  seeking: "Product roles where I own outcomes, not just roadmaps",
  seekingSubline: "I connect strategy, ops, and execution — and ship",
  /**
   * Short bio shown below the hero. Edit freely — aim for 3–5 sentences.
   * Use \n\n for paragraph breaks.
   */
  bio: "Entrepreneurial player-coach with 20+ years across Product, Engineering, and Business — 13 at Walmart scaling supply chain, 4 at a startup, and 4 at a tech consulting firm. I've built across multi-sided marketplaces, last-mile logistics, ML forecasting, inventory, and AI-native consumer apps — many from 0 to 1.\n\nI'm deliberately focused on B2B and AI, and most energized by problems that need deep technical understanding and end-to-end ownership. If you're building something challenging in my space — or just curious about anything you've read here — I'd love to connect.",
};

// columns to left, right
export const impactMetrics = [
  { value: "$50M+", label: "Savings in 5 Markets", context: "Transportation Services Platform", company: "Walmart" },
  { value: "$250M", label: "ARR in 18m", context: "B2B Marketplace", company: "Walmart" },
  { value: "First", label: "E2E Digital Twin", context: "Supported $5B+ Investment to CEO", company: "Walmart" },
  { value: "First", label: "Delivery Sortation Center", context: "Tech Inside & Outside a New to Walmart Building Type", company: "Walmart" },
  { value: "250M+", label: "Last Mile Deliveries/yr", context: "Routing, Scheduling, Execution", company: "Walmart" },
  { value: "2", label: "Utility Patents", context: "Inventory & Delivery", company: "Walmart" },
  { value: "10x", label: "Delivery Sortation Center", context: "Tech Inside & Outside a New Building Type", company: "NuRide" },
  { value: "3", label: "AI D2C Products", context: "Built & Launched Solo", company: "Independent" },
];

export const principles = [
  { title: "Data over opinions", context: "Understand first, Strategize second, and Execute last." },
  { title: "Build to learn, learn to build", context: "Ship fast. Iterate faster." },
  { title: "End-to-end thinking", context: "Strategy through execution, no handoffs." },
  { title: "0 to 1 to N", context: "Energized by building from scratch, then scaling." },
  { title: "Every 1% matters at scale", context: "Small wins, massive P&L impact." },
  { title: "Leave it better than I find it", context: "Solve the hardest problems. Always." },
];

export interface MindsetDomain {
  /** Short pill label */
  domain: string;
  /** Subtitle shown in expanded/detail state */
  subtitle: string;
  /** Emoji icon for the pill */
  icon: string;
  /** The philosophical one-liner for this domain */
  principle: string;
  /** Bullet-point thoughts - edit these freely to reflect your current thinking */
  keywords: string[];
}

export const mindset: MindsetDomain[] = [
  {
    domain: "Customer",
    subtitle: "Obsessively user-centric",
    icon: "👤",
    principle: "Leave it better than I find it - solve real customer problems, always.",
    keywords: [
      "I've build products for lawyers, supply chain operators, supplliers, drivers, store managers, resellers, parents and more",
      "I notice when something is 4px off, and I figure out how to prioritize fixing it",
      "B2B UX is still UX - enterprise tools deserve the same craft as consumer",
      "Good onboarding = value before the user has time to reconsider",
    ],
  },
  {
    domain: "AI & LLMs",
    subtitle: "Building with intelligence",
    icon: "🤖",
    principle: "Build to learn, learn to build - ship fast, iterate faster.",
    keywords: [
      "The best AI UX makes the model invisible - users feel smarter, not assisted",
      "I've shipped 3 AI products solo: agents, vision, audio/video - all in production",
      "AI changes product surface area: new entry points, new failure modes, new expectations",
      "Prompt engineering is product thinking - structure determines output quality",
    ],
  },
  {
    domain: "Product",
    subtitle: "From zero to sticky",
    icon: "🎯",
    principle: "0 to 1 to N - energized by building from scratch, then scaling.",
    keywords: [
      "0→1 is energizing. 1→N is where real PM craft shows",
      "Stickiness is designed in from day one",
      "Onboarding is a product, not a flow: value in the first 30 seconds",
      "PLG: I led 10x user growth during a financial crisis",
      "Build vs. buy is a strategic question first, an implementation one second",
    ],
  },
  {
    domain: "Data",
    subtitle: "Decisions grounded in evidence",
    icon: "📊",
    principle: "Good data and analytics answers questions nobody thought to ask - understand, strategize, then execute.",
    keywords: [
      "I don't trust gut instinct until data confirms or refutes it",
      "I created ML-based demand forecasting that improved yoy accuracy by 25%",
      "Built simulation platform for $5B+ investment decisions for Walmart CEO",
      "I instrument everything - PostHog, kibana, excel - from day one",
      "Raised Walmart Store eComm fill rates from 90% to 95%+ by fixing the invisible",
    ],
  },
  {
    domain: "Operations",
    subtitle: "End-to-end ownership",
    icon: "🔄",
    principle: "End-to-end thinking - strategy through execution, no handoffs.",
    keywords: [
      "I've led programs across 5 countries and 250M+ annual deliveries",
      "Cross-functional leadership means owning outcomes, not just requirements",
      "Lean Belt certified - applied selectively",
      "$50M+ in savings came from building efficient logistics services at Walmart",
      "Built the first delivery sortation center tech: 10% cost cut, 15% faster",
    ],
  },
  {
    domain: "Engineering",
    subtitle: "Technical depth without writing every line",
    icon: "⚙️",
    principle: "Every 1% matters at scale - small wins, massive P&L impact.",
    keywords: [
      "I coded for 6 years, and know how to lead cross-functional teams",
      "Two US utility patents: inventory management and last-mile delivery",
      "CI/CD and observability aren't DevOps concerns - they're PM concerns too",
      "Built and shipped full-stack AI products solo: Astro, React, Node, Python",
    ],
  },
];

export interface CaseStudy {
  label: string;
  company: string;
  period: string;
  title: string;
  keyMetric: string;
  bullets: string[];
}

export const caseStudies: CaseStudy[] = [
  /*{
    label: "Featured Case Study",
    company: "Walmart Tech",
    period: "2024–2026",
    title: "B2B Transportation Marketplace",
    keyMetric: "$250M ARR",
    bullets: [
      "0→1 build: from concept to $250M ARR marketplace. Targeting $100M Savings in 3 years",
      "Co-created vision with cross-functional leaders across GTM, CRM, execution, safety & fraud, and mobile",
      "Optimized onboarding funnel for first 3,000 carriers — reduced activation from 90+ days to 1 day",
      "Partnered with Salesforce, Quantum Metrics, JPMorgan, RMIS to accelerate launch",
    ],
  },
  */
];

/** Lab project cards. */
export interface PortfolioProject {
  name: string;
  description: string;
  screenshot: string;
  challenge: string;
  outcome: string;
  /** Public product URL. Omit when there is no live link - Lab cards stay non-clickable and hide the “View Product” / “View Live” CTAs. */
  url?: string;
  metrics?: string[];
  techStack?: string[];
  icon?: string;
}

export const projects: PortfolioProject[] = [
  {
    name: "SimpleStory.ai",
    url: "https://simplestory.ai",
    description: "AI-native platform that enables creators to build educational stories with AI-generated visuals, narration, and interactive elements.",
    //metrics: ["MVP launched", "Low-friction creator UX validated"],
    techStack: ["AI Audio & Video", "Google Cloud", "ElevenLabs", "Postgres"],
    icon: "book",
    screenshot: "/projects/simplestory.png",
    challenge:
      "Teachers and parents need faster & safer ways to create engaging learning stories without a production team.",
    outcome:
      "AI-native publishing flow with generated visuals and voice - validated creator UX through MVP launch.",
  },
  {
    name: "TroveScore",
    url: "https://trovescore.com",
    description:
      "Scan your bookshelf with one picture. AI identifies every book, cross-references real-time market data from Google & eBay to automate sell vs. donate decisions.",
    //metrics: ["Real-time market data", "Single-image recognition"],
    techStack: ["AI Vision", "Claude Code", "Google Cloud", "eBay API", "PostHog", "Stripe", "Umami", "Supabase"],
    icon: "camera",
    screenshot: "/projects/trovescore.png",
    challenge:
      "People with home libraries couldn’t quickly value books or decide sell vs. donate vs. keep without manual lookup.",
    outcome:
      "One-tap shelf capture with ID + live market pricing. Recommends best next action. One click publish to eBay",
  },
  {
    name: "Fultu",
    url: "https://fultu.com",
    description:
      "An AI-powered game that explores alternate scenarios and what-if questions through interactive storytelling and dynamic content generation.",
    //metrics: ["AI-driven gameplay", "Interactive narratives"],
    techStack: ["AI-driven gameplay", "Claude Code", "Interactive AI", "Stripe", "Custom merchandise store", "Printful", "Fal.ai", "PostHog"],
    icon: "gamepad",
    screenshot: "/projects/fultu.png",
    challenge:
      "Exploring “what if” scenarios was mostly static - few playful, interactive ways to branch narratives with AI.",
    outcome:
      "Launched a what-if game engine that turns hypotheticals into short, dynamic AI-driven story paths. Includes aMerchandise store to monetize the interactions.",
  },
  {
    name: "BotBhargava - OpenClaw",
    //url: "https://fultu.com",
    description: "OpenClaw powered personal assistant for me and my family.",
    //metrics: ["AI-driven gameplay", "Interactive narratives"],
    techStack: ["Amazon EC2", "OpenClaw", "Email/Calendar APIs", "OpenRouter", "Scripting"],
    icon: "gamepad",
    screenshot: "/projects/openclaw_botbhargava.svg",
    challenge:
      "As parents with two kids, it's hard to keep track of school and outside activities. We are constantly losing track.",
    outcome:
      "Trained OpenClaw to be my personal assistant, and it's helping my family keep track of calendar events.",
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
    keyMetric: "Key engineer on global Enterprise data platform",
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
    title: "Sr → Staff PM, Forecast Lead",
    company: "Walmart Gloabl Tech",
    companyUrl: "https://tech.walmart.com/content/walmart-global-tech/en_us.html",
    location: "SF Bay Area",
    period: "2016–2025",
    yearStart: 2016,
    yearEnd: 2019,
    domains: ["product", "b2b"],
    highlights: [
      { text: "Delivered millions in cost savings by modernizing eCommerce predictive analytics and inventory planning products, while designing intuitive journeys for merchants with data-heavy decision tools.", domains: ["overall"] },
      { text: "Built team from 1 to 6 - PMs & Data Scientists", domains: ["overall"] },
      { text: "Launched m/l based demand forecast, improving YoY accuracy by 25%", domains: ["product", "engineering","b2b"] },
      { text: "Created products that converged tribal knowledge with systematic data to enable high speed decision making", domains: ["product", "operations", "b2c"] },
      { text: "Developed Walmart's first SKU-region level demand/capacity management engine", domains: ["product", "engineering", "b2c"] },
    ],
    keyMetric: "Captial efficiency of $1B+ inventory by optimizing inventory physical network",
  },
  {
    id: "walmart-pm2",
    chapter: "The Platform Architect",
    title: "Director, Head of Freight Transportation",
    company: "Walmart Global Tech",
    companyUrl: "https://tech.walmart.com/content/walmart-global-tech/en_us.html",
    location: "SF Bay Area",
    period: "2016–2025",
    yearStart: 2019,
    yearEnd: 2025,
    domains: ["product", "operations", "b2b", "d2c"],
    highlights: [
      { text: "As head of Product for freight transportation, I led product portfolio across freight transportation, last-mile, and eCommerce", domains: ["overall"] },
      { text: "Built global team from 1 to 10 PMs", domains: ["overall"] },
      { text: "0→1 B2B transportation marketplace to $250M ARR", domains: ["product", "b2b"] },
      { text: "0→1 E2E freight logistics platform across 5 countries, $50M+ annual savings", domains: ["product", "operations", "b2b"] },
      { text: "0→1→N last mile delivery planning & routing engine from launch to 250M+ annual deliveries, 20% fewer miles, earned patent", domains: ["product", "engineering", "operations", "b2b"] },
      { text: "0→1 last mile delivery eligibility, delivery slots, freight scheduling services for eCommerce", domains: ["product", "engineering", "b2c", "d2c"] },
      { text: "0→1 simulation platform for $5B+ infrastructure investments, presented to CEO", domains: ["product", "b2b", "engineering"] },
      { text: "0→1→N Sortation delivery station: cut delivery costs 10%, reduced time 15%", domains: ["product", "operations", "b2b"] },
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
      { text: "TroveScore: AI powered book shelf valuation & selling", domains: ["overall", "d2c", "product", "engineering"] },
      { text: "SimpleStory: AI native content marketplace", domains: ["overall", "product", "b2b", "b2c", "engineering"] },
      { text: "Fultu.com: What-If-AI game - interactive experiences", domains: ["overall", "d2c", "product", "engineering"] },
    ],
    keyMetric: "Shipped 3 AI products solo",
    images: [
      { src: "/projects/simplestory.png", href: "https://simplestory.ai" },
      { src: "/projects/trovescore.png", href: "https://trovescore.com" },
      { src: "/projects/fultu.png", href: "https://fultu.com" },
      { src: "/career/ODF.png", href: "https://www.linkedin.com/posts/ankushbhargava_odf-activity-7433309687002906629-lMMg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAAe-IsBt2zOUo6ATAv-NfKeeUD-m3WCqEo" },
    ],
  },
];

/** Newest roles first - used on Journey timeline views */
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
