import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { useFuzzySearch } from "./useFuzzySearch";

// ─── Helpers ─────────────────────────────────────────────────────────────────

type Item = { id: number; name: string };

const items: Item[] = [
  { id: 1, name: "Settings" },
  { id: 2, name: "Search agents" },
  { id: 3, name: "Create agent" },
  { id: 4, name: "System logs" },
  { id: 5, name: "Cron jobs" },
];

const getLabel = (item: Item) => item.name;

function search(query: string, list: Item[] = items): Item[] {
  const { result } = renderHook(() => useFuzzySearch(list, query, getLabel));
  return result.current;
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe("useFuzzySearch", () => {
  it("returns all items when query is empty", () => {
    const results = search("");
    expect(results).toEqual(items);
  });

  it("returns all items when query is whitespace", () => {
    const results = search("   ");
    expect(results).toEqual(items);
  });

  it("exact match scores highest", () => {
    const results = search("Settings");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0].name).toBe("Settings");
  });

  it("prefix match works", () => {
    const results = search("Sett");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0].name).toBe("Settings");
  });

  it("fuzzy match works (skipped characters)", () => {
    // "Stgs" should match "Settings" (S..t..g..s)
    const results = search("Stgs");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results.some((r) => r.name === "Settings")).toBe(true);
  });

  it("no match returns empty", () => {
    const results = search("zzzzxxx");
    expect(results).toEqual([]);
  });

  it("is case-insensitive", () => {
    const results = search("settings");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0].name).toBe("Settings");
  });

  it("exact match ranks above prefix match", () => {
    const list: Item[] = [
      { id: 1, name: "Search" },
      { id: 2, name: "Search agents" },
    ];
    const results = search("Search", list);
    expect(results[0].name).toBe("Search");
  });

  it("prefix match ranks above fuzzy match", () => {
    const list: Item[] = [
      { id: 1, name: "System logs" },
      { id: 2, name: "Sy things" },
      { id: 3, name: "a S y item" },
    ];
    // "Sy" is a prefix of "System logs" and "Sy things", fuzzy for "a S y item"
    const results = search("Sy", list);
    // Prefix matches (score 80) should come before fuzzy matches
    expect(results.length).toBeGreaterThanOrEqual(2);
    // Both prefix matches should be first
    const prefixNames = results.slice(0, 2).map((r) => r.name);
    expect(prefixNames).toContain("System logs");
    expect(prefixNames).toContain("Sy things");
  });
});
