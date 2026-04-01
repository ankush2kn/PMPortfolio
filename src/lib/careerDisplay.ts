import type { CareerHighlight } from "@/data/portfolio";

/** Neutral fallback when `domain` is missing or unknown */
export const DEFAULT_CAREER_DOMAIN_COLOR = "#888888";

export function careerStr(value: string | undefined | null): string | null {
  if (value == null) return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

/** First word of company for compact map nodes */
export function careerCompanyShort(company: string | undefined | null): string | null {
  const c = careerStr(company);
  if (!c) return null;
  const first = c.split(/\s+/)[0];
  return first && first.length > 0 ? first : null;
}

export function careerPeriodLocation(
  period: string | undefined | null,
  location: string | undefined | null,
): string | null {
  const p = careerStr(period);
  const l = careerStr(location);
  if (p && l) return `${p} · ${l}`;
  return p ?? l ?? null;
}

/** Start / end labels for the vertical timeline spine (above / below the connector). */
export function careerYearStartEndLabels(entry: {
  yearStart?: number;
  yearEnd?: number;
  period?: string;
}): { start: string | null; end: string | null } {
  const ys = entry.yearStart;
  const ye = entry.yearEnd;

  if (ys != null) {
    if (ye != null && ye !== ys) {
      return { start: String(ys), end: String(ye) };
    }
    if (ye != null) {
      return { start: String(ys), end: null };
    }
    const per = careerStr(entry.period);
    if (per?.toLowerCase().includes("present")) {
      return { start: String(ys), end: "Present" };
    }
    return { start: String(ys), end: null };
  }

  const per = careerStr(entry.period);
  if (!per) return { start: null, end: null };
  const normalized = per.replace(/\u2013/g, "-").replace(/\u2212/g, "-").trim();
  const dash = normalized.match(/^(\d{4})\s*[-\u2013]\s*(.+)$/);
  if (dash) {
    const endPart = careerStr(dash[2]);
    return { start: dash[1], end: endPart };
  }
  return { start: per, end: null };
}

/** Compact single-line range (e.g. other UIs). */
export function careerYearRangeLabel(entry: {
  yearStart?: number;
  yearEnd?: number;
  period?: string;
}): string | null {
  const { start, end } = careerYearStartEndLabels(entry);
  if (!start && !end) return null;
  if (start && end) return `${start}–${end}`;
  return start ?? end;
}

/** Strip legacy manual “bullet” prefixes (e.g. `> `) from highlight copy. */
export function careerHighlightDisplayText(text: string): string {
  return text.replace(/^\s*>\s*/, "").trim();
}

/** Comma-separated tags for `data-highlight-tags` (Journey domain filter). */
export function careerHighlightTagsCsv(domains: CareerHighlight["domains"]): string {
  return domains.join(",");
}

/** Non-empty trimmed text only; optional slice by count. */
export function careerHighlightsPreview(highlights: CareerHighlight[] | undefined | null, max?: number): CareerHighlight[] {
  if (!highlights?.length) return [];
  const cleaned = highlights.filter((h) => careerStr(h.text));
  return max === undefined ? cleaned : cleaned.slice(0, max);
}

export function pickCareerDomainColor(
  map: Record<string, string>,
  domain: string | undefined | null,
): string {
  if (domain && map[domain]) return map[domain];
  return DEFAULT_CAREER_DOMAIN_COLOR;
}

export interface CareerImageResolved {
  src: string;
  href?: string;
}

function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

/** Normalize career `images`: strings become `{ src }`; objects must include a non-empty `src`. */
export function careerImageItems(images: unknown[] | undefined | null): CareerImageResolved[] {
  if (!images?.length) return [];
  const out: CareerImageResolved[] = [];
  for (const raw of images) {
    if (typeof raw === "string") {
      const src = careerStr(raw);
      if (src) out.push({ src });
      continue;
    }
    if (!isRecord(raw)) continue;
    const src = careerStr(typeof raw.src === "string" ? raw.src : null);
    if (!src) continue;
    const href = careerStr(typeof raw.href === "string" ? raw.href : null);
    out.push(href ? { src, href } : { src });
  }
  return out;
}
