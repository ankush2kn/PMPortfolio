export type Point = { x: number; y: number };

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

/**
 * Polyline approximating the subway map route (oldest → newest, left → right).
 * Waypoints follow the illustrated lines; stations are sampled by arc length.
 */
export const SUBWAY_ROUTE_VERTICES: Point[] = [
  { x: 120, y: 300 },
  { x: 200, y: 300 },
  { x: 300, y: 300 },
  { x: 370, y: 260 },
  { x: 400, y: 200 },
  { x: 460, y: 180 },
  { x: 550, y: 280 },
  { x: 600, y: 300 },
  { x: 700, y: 300 },
  { x: 780, y: 300 },
  { x: 830, y: 260 },
  { x: 840, y: 210 },
];

/**
 * Polyline along the elevation trail (oldest → newest, low → high).
 */
export const ELEVATION_TRAIL_VERTICES: Point[] = [
  { x: 120, y: 395 },
  { x: 250, y: 382 },
  { x: 310, y: 340 },
  { x: 400, y: 325 },
  { x: 500, y: 310 },
  { x: 620, y: 258 },
  { x: 720, y: 185 },
  { x: 810, y: 120 },
  { x: 890, y: 75 },
];

/**
 * Returns `n` points evenly spaced by arc length along the polyline (first vertex → last).
 * Index `0` = start of path (matches `career[0]`); index `n - 1` = end (matches `career[n - 1]`).
 */
export function samplePositionsAlongPolyline(vertices: Point[], n: number): Point[] {
  if (n < 1) return [];
  if (vertices.length < 1) {
    return Array.from({ length: n }, () => ({ x: 0, y: 0 }));
  }
  if (vertices.length === 1) {
    const p = vertices[0]!;
    return Array.from({ length: n }, () => ({ x: p.x, y: p.y }));
  }
  if (n === 1) {
    const mid = vertices[Math.floor(vertices.length / 2)]!;
    return [{ x: mid.x, y: mid.y }];
  }

  const segLens: number[] = [];
  let total = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    const a = vertices[i]!;
    const b = vertices[i + 1]!;
    segLens.push(Math.hypot(b.x - a.x, b.y - a.y));
    total += segLens[segLens.length - 1]!;
  }

  if (total === 0) {
    const p = vertices[0]!;
    return Array.from({ length: n }, () => ({ x: p.x, y: p.y }));
  }

  const out: Point[] = [];
  for (let k = 0; k < n; k++) {
    const targetDist = (k / (n - 1)) * total;
    let acc = 0;
    for (let i = 0; i < segLens.length; i++) {
      const sl = segLens[i]!;
      const lastSeg = i === segLens.length - 1;
      if (targetDist <= acc + sl || lastSeg) {
        const t = sl > 0 ? clamp01((targetDist - acc) / sl) : 0;
        const va = vertices[i]!;
        const vb = vertices[i + 1]!;
        out.push({
          x: va.x + t * (vb.x - va.x),
          y: va.y + t * (vb.y - va.y),
        });
        break;
      }
      acc += sl;
    }
  }
  return out;
}

/** Min container height (px) for orbit so outer ring + planets fit */
export function orbitContainerMinHeightPx(careerLength: number): number {
  const ringCount = Math.max(0, careerLength - 1);
  if (ringCount === 0) return 320;
  const outerRadius = 100 + (ringCount - 1) * 60;
  return Math.ceil(outerRadius * 2 + 160);
}
