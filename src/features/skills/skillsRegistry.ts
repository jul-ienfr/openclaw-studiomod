// skillsRegistry.ts — Now loads from real gateway API instead of mock data
import type { SkillDefinition } from "./types";

let _cache: SkillDefinition[] | null = null;
let _fetching: Promise<SkillDefinition[]> | null = null;

export async function loadSkillsRegistry(): Promise<SkillDefinition[]> {
  if (_cache) return _cache;
  if (_fetching) return _fetching;
  _fetching = fetch("/api/skills/list")
    .then((r) => (r.ok ? r.json() : []))
    .then((data) => {
      const skills = data.skills ?? data ?? [];
      // Map real API fields to SkillDefinition shape when possible
      _cache = skills.map((s: Record<string, unknown>) => ({
        id: s.id ?? s.name ?? s.path ?? "",
        name: String(s.name ?? ""),
        description: String(s.description ?? ""),
        category: (s.category as SkillDefinition["category"]) ?? "custom",
        icon: String(s.icon ?? ""),
        author: String(s.author ?? ""),
        version: String(s.version ?? ""),
        rating: Number(s.rating ?? 0),
        installs: Number(s.installs ?? 0),
        tags: Array.isArray(s.tags) ? s.tags : [],
      }));
      return _cache!;
    })
    .catch(() => [])
    .finally(() => {
      _fetching = null;
    });
  return _fetching;
}

export function invalidateSkillsCache() {
  _cache = null;
}

// Backward compat: sync export (returns empty if not loaded yet)
export const SKILLS_REGISTRY: SkillDefinition[] = [];
