import { useMemo } from "react";

// ---------------------------------------------------------------------------
// Fuzzy-search hook
//
// Matches query characters in order (not necessarily adjacent) against the
// label returned by `getLabel`. Results are scored as:
//   exact match  → 100
//   prefix match → 80
//   fuzzy match  → 1..60 (based on adjacency, gaps, position)
// Only items that match are returned, sorted by descending score.
// ---------------------------------------------------------------------------

type ScoredItem<T> = { item: T; score: number };

function fuzzyScore(label: string, query: string): number {
  const lower = label.toLowerCase();
  const q = query.toLowerCase();

  if (lower === q) return 100; // exact
  if (lower.startsWith(q)) return 80; // prefix

  let score = 0;
  let prevIdx = -1;

  for (let qi = 0; qi < q.length; qi++) {
    const idx = lower.indexOf(q[qi], prevIdx + 1);
    if (idx === -1) return -1; // no match

    // Consecutive characters are worth more
    if (prevIdx >= 0 && idx === prevIdx + 1) {
      score += 8;
    } else {
      score += 2;
    }

    // Characters at start-of-word are worth more
    if (idx === 0 || lower[idx - 1] === " " || lower[idx - 1] === "-") {
      score += 4;
    }

    prevIdx = idx;
  }

  // Cap fuzzy score below prefix
  return Math.min(score, 60);
}

export function useFuzzySearch<T>(
  items: T[],
  query: string,
  getLabel: (item: T) => string,
): T[] {
  return useMemo(() => {
    const q = query.trim();
    if (q.length === 0) return items;

    const scored: ScoredItem<T>[] = [];

    for (const item of items) {
      const label = getLabel(item);
      const s = fuzzyScore(label, q);
      if (s > 0) {
        scored.push({ item, score: s });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.map((s) => s.item);
  }, [items, query, getLabel]);
}
