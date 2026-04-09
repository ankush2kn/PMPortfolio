/**
 * Visitor-facing defaults (no ?preview in URL).
 * Add ?preview to any page URL to show section variant switcher + typography toggle.
 */
export const PREVIEW_QUERY_KEY = "preview";

export const DEFAULT_TYPOGRAPHY = "sans" as const;

export const DEFAULT_VARIANTS = {
  Hero: "C",
  Impact: "A",
  Principles: "F",
  Skills: "C",
  Contact: "B",
  Timeline: "Vertical",
  Projects: "A",
} as const;

export type VariantGroup = keyof typeof DEFAULT_VARIANTS;
