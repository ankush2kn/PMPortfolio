import type { CareerDomainId } from "@/lib/careerDomains";

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
  highlights?: string[];
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
      "> Pearson's: Built e2e assessment creation workflows",
      "> LexisNexis: next-gen unified content delivery platform across US & Europe"
    ],
    keyMetric: "Enterprise data platforms",
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
    domains: ["startup", "engineering", "b2b", "b2c", "product"],
    highlights: [
      "> Strategied with CEO to built the multi-sided marketplace",
      "> Led PLG turnaround during financial crisis: reduced headcount 70%, scaled to 4x users",
      "> Early adopter of Amazon AWS, migrated infra to cloud",
      "> Launched 300+ marketing campaigns with geo-spatial customer segmentation",
    ],
    keyMetric: "PLG turnaround during crisis",
    images: [
     "/public/career/nuride.png", 
    ],
  },
  {
    id: "internships",
    title: "MBA Intern, Product Tech Strategy",
    yearStart: 2011,
    yearEnd: 2011,
    domains: ["b2b", "product"],
    highlights: [
      "> TMobile: Private routers as public Internet gateways",
      "> Compuware: Identify Management as a service"
    ],
    keyMetric: "New market entry",
  },
  {
    id: "walmart-ops",
    chapter: "The Operator",
    title: "Senior Business Manager",
    company: "Walmart Stores & eCommerce",
    location: "San Francisco Bay Area",
    period: "2012–2016",
    yearStart: 2012,
    yearEnd: 2016,
    domains: ["operations", "b2b"],
    highlights: [
      "> Led inventory flow planning for holiday peak season",
      "> Improved Customer Order Fill Rates from <90% to 95+% in 6 months",
      "> Curated 1M+ highest priority SKUs for eCommerce",
      "> Facilitated eComm CEO's Weekly Business Reviews",
    ],
    keyMetric: "Setup & Improve processes",
  },
  {
    id: "walmart-pm",
    chapter: "The Platform Architect",
    title: "Staff PM → Director of Product Management",
    company: "Walmart Tech",
    location: "San Francisco Bay Area",
    period: "2016–2025",
    yearStart: 2016,
    yearEnd: 2025,
    domains: ["product", "operations"],
    highlights: [
      "> Built 0→1 B2B transportation marketplace to $250M ARR",
      "> End-to-end logistics platform across 5 countries, $50M+ annual savings",
      "> Last mile routing: 250M+ annual deliveries, 20% fewer miles, earned patent",
      "> Created simulation platform for $5B+ infrastructure investments, presented to CEO",
      "> Built sortation center tech: cut delivery costs 10%, reduced time 15%",
    ],
    keyMetric: "$100+ savings impact",
  },
  {
    id: "independent",
    chapter: "The AI Builder",
    title: "Product Lead & Architect",
    company: "Technical Product Innovation",
    location: "Burlingame, CA",
    period: "2025–Present",
    yearStart: 2025,
    yearEnd: 2026,
    domains: ["startup", "product", "engineering", "b2c"],
    highlights: [
      "> Architected 'Force Multiplier' stacks using agentic workflows and GenAI",
      "> SimpleStory.ai: AI-native publishing marketplace — MVP launched",
      "> TroveScore: AI inventory valuation from single image — live product",
      "> Fultu.com: What-If AI game — interactive AI experiences",
    ],
    keyMetric: "3 AI products shipped",
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
    "Google Generative AI Leader",
    "Lean Belt Certification",
    "Patent: Inventory",
    "Patent: Last Mile Delivery",
    "Publication: E2E Supply Chain Optimization",
  ],
};
