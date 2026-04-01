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

/** If `max` is omitted, returns all non-empty trimmed highlights. */
export function careerHighlightsPreview(highlights: string[] | undefined | null, max?: number): string[] {
  if (!highlights?.length) return [];
  const cleaned = highlights.map((h) => (typeof h === "string" ? h.trim() : "")).filter(Boolean);
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
