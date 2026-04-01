export const profile = {
  name: "Ankush Bhargava",
  location: "San Francisco Bay Area, CA",
  phone: "734-494-2012",
  linkedin: "https://linkedin.com/in/ankushbhargava",
  github: "https://github.com/ankush2kn",
  email: "ankush.bhargava@gmail.com",
  taglines: [
    "20 years building products. Now building with AI.",
    "Enterprise scale meets startup speed.",
    "From $250M platforms to agentic workflows.",
  ],
  summary:
    "Entrepreneurial player-coach with 20+ years across Product, Engineering and Business. AI-enabled, data-fluent, patent holder with a growth mindset.",
  availability: "Available Immediately",
  seeking: "Director / Senior PM roles in B2B SaaS & AI",
};

export const impactMetrics = [
  { value: "$250M", label: "ARR", context: "B2B Marketplace", company: "Walmart" },
  { value: "250M+", label: "Deliveries/yr", context: "Last Mile Routing", company: "Walmart" },
  { value: "$50M+", label: "Annual Savings", context: "Platform Consolidation", company: "Walmart" },
  { value: "2", label: "Patents", context: "Inventory + Delivery", company: "Walmart" },
  { value: "3", label: "AI Products", context: "Built & Launched Solo", company: "Independent" },
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
  },
];

export interface CareerEntry {
  id: string;
  chapter: string;
  title: string;
  company: string;
  location: string;
  period: string;
  yearStart: number;
  yearEnd: number;
  domain: "engineering" | "startup" | "operations" | "product" | "ai";
  highlights: string[];
  keyMetric?: string;
}

export const career: CareerEntry[] = [
  {
    id: "infosys",
    chapter: "The Engineer",
    title: "Software Engineer",
    company: "Infosys Technologies",
    location: "Ohio & Texas",
    period: "2002–2006",
    yearStart: 2002,
    yearEnd: 2006,
    domain: "engineering",
    highlights: [
      "Built enterprise workflows for Pearson's Education",
      "Next-gen unified content delivery platform for LexisNexis across 5 countries",
      "Excellence award from Infosys Global CEO",
      "Best Software Engineer among 1,800 peers",
    ],
    keyMetric: "5 countries",
  },
  {
    id: "agilemile",
    chapter: "The Startup Builder",
    title: "Lead Product Manager & Full Stack Developer",
    company: "Agile Mile (NuRide)",
    location: "Virginia & Connecticut",
    period: "2006–2010",
    yearStart: 2006,
    yearEnd: 2010,
    domain: "startup",
    highlights: [
      "Created strategy with CEO and built the multi-sided marketplace",
      "Led tech-driven turnaround during 2008 crisis: reduced headcount 70%, scaled to 4x users",
      "Early adopter of Amazon AWS, migrated infra to cloud",
      "Launched 300+ marketing campaigns with geo-spatial customer segmentation",
    ],
    keyMetric: "2x ARR impact",
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
    domain: "operations",
    highlights: [
      "Led inventory flow planning for holiday peak season",
      "Improved Customer Order Fill Rates from <90% to 95+% in 6 months",
      "Curated 1M+ highest priority SKUs for eCommerce",
      "Facilitated eComm CEO's Weekly Business Reviews",
    ],
    keyMetric: "$4M top-line increase",
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
    domain: "product",
    highlights: [
      "Built 0→1 B2B transportation marketplace to $250M ARR",
      "End-to-end logistics platform across 5 countries, $50M+ annual savings",
      "Last mile routing: 250M+ annual deliveries, 20% fewer miles, earned patent",
      "Created simulation platform for $5B+ infrastructure investments, presented to CEO",
      "Built sortation center tech: cut delivery costs 10%, reduced time 15%",
    ],
    keyMetric: "$250M ARR",
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
    domain: "ai",
    highlights: [
      "Architected 'Force Multiplier' stacks using agentic workflows and GenAI",
      "SimpleStory.ai: AI-native publishing marketplace — MVP launched",
      "TroveScore: AI inventory valuation from single image — live product",
      "Fultu.com: What-If AI game — interactive AI experiences",
      "Full stack: Cursor AI, Claude Code, Vertex AI, Supabase, PostHog",
    ],
    keyMetric: "3 AI products shipped",
  },
];

export const education = [
  {
    degree: "Master of Business Administration",
    focus: "Strategy and Operations",
    school: "University of Michigan, Ann Arbor",
    year: 2012,
  },
  {
    degree: "Bachelor of Information Technology (Engineering)",
    focus: "Internet Technologies",
    school: "University of Delhi, New Delhi, India",
    year: 2002,
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
