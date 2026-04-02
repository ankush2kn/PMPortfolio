export type CareerDomainId =
  | "engineering"
  | "startup"
  | "operations"
  | "product"
  | "b2b"
  | "b2c"
  | "d2c"
  | "ai";

/** Tag career highlights: `"overall"` for the Overall pill only; real domain id(s) for that domain’s pill only (one mode or the other per bullet, or combine both tags if a line should appear in both). */
export type CareerHighlightDomainTag = CareerDomainId | "overall";

export const CAREER_DOMAIN_ORDER: CareerDomainId[] = [
  "product",
  "engineering",
  "operations",
  "startup",
  "b2b",
  "b2c",
  "d2c",
  "ai"
];

export const CAREER_DOMAIN_HEX: Record<CareerDomainId, string> = {
  engineering: "#6366f1",
  startup: "#f59e0b",
  operations: "#10b981",
  product: "#3b82f6",
  b2b: "#0d9488",
  b2c: "#f43f5e",
  d2c: "#ec4899",
  ai: "#e88c4f",
};

/** Vertical timeline spine / card accent: yellow → blue → green by row index (not primary domain). */
export const VERTICAL_TIMELINE_ACCENT_CYCLE = ["#f59e0b", "#3b82f6", "#10b981"] as const;

export function verticalTimelineAccentByIndex(stepIndex: number): string {
  return VERTICAL_TIMELINE_ACCENT_CYCLE[stepIndex % VERTICAL_TIMELINE_ACCENT_CYCLE.length]!;
}

export const CAREER_DOMAIN_LABEL: Record<CareerDomainId, string> = {
  engineering: "Engineering",
  startup: "Startup",
  operations: "Operations",
  product: "Product",
  b2b: "B2B",
  b2c: "B2C",
  d2c: "D2C",
  ai: "AI",
};

export function careerEntryDomains(entry: { domains?: CareerDomainId[] }): CareerDomainId[] {
  return entry.domains?.filter(Boolean) ?? [];
}

export function careerEntryPrimaryDomain(entry: { domains?: CareerDomainId[] }): CareerDomainId | undefined {
  return careerEntryDomains(entry)[0];
}

export function careerDomainsCsv(entry: { domains?: CareerDomainId[] }): string {
  return careerEntryDomains(entry).join(",");
}

export function uniqueCareerDomainsPresent(career: { domains?: CareerDomainId[] }[]): CareerDomainId[] {
  const seen = new Set<CareerDomainId>();
  for (const e of career) {
    for (const d of careerEntryDomains(e)) {
      seen.add(d);
    }
  }
  return CAREER_DOMAIN_ORDER.filter((id) => seen.has(id));
}
