"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ScoreRecord, Decision } from "@/features/watcher/types";
import { ScoreBar } from "./ScoreBar";
import { DecisionBadge } from "./DecisionBadge";

type ScoringTableProps = {
  scores: ScoreRecord[];
  total?: number;
  page?: number;
  onPageChange?: (p: number) => void;
  showFilters?: boolean;
};

const DECISIONS: Decision[] = ["AUTO", "PROPOSE", "NOTIFY", "ARCHIVE", "BLOCK", "SUSPECT"];

function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max) + "...";
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit" });
}

export function ScoringTable({ scores, total = scores.length, page = 1, onPageChange, showFilters }: ScoringTableProps) {
  const router = useRouter();
  const [filterSource, setFilterSource] = useState("");
  const [filterDecision, setFilterDecision] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState("");

  const limit = 20;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const sources = Array.from(new Set(scores.map((s) => s.source).filter(Boolean))) as string[];
  const categories = Array.from(new Set(scores.map((s) => s.category).filter(Boolean))) as string[];

  const visible = scores.filter((s) => {
    if (filterSource && s.source !== filterSource) return false;
    if (filterDecision && s.decision !== filterDecision) return false;
    if (filterCategory && s.category !== filterCategory) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-4">
      {showFilters && (
        <div className="flex flex-wrap gap-2">
          <select
            className="rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-shadow"
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
          >
            <option value="">Toutes les sources</option>
            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            className="rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-shadow"
            value={filterDecision}
            onChange={(e) => setFilterDecision(e.target.value)}
          >
            <option value="">Toutes les décisions</option>
            {DECISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select
            className="rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-shadow"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-border/50">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b border-border/50">
            <tr className="text-xs text-muted-foreground">
              <th className="px-3 py-2.5 font-semibold tracking-wide">Titre</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Source</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Fiab.</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Sec.</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Fonct.</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Int.</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Global</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Décision</th>
              <th className="px-3 py-2.5 font-semibold tracking-wide">Date</th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 && (
              <tr>
                <td colSpan={9} className="px-3 py-8 text-center text-muted-foreground">
                  Aucun item scoré.
                </td>
              </tr>
            )}
            {visible.map((s) => (
              <tr
                key={s.item_id}
                className="cursor-pointer border-b border-border/30 transition-colors hover:bg-primary/5 hover:border-primary/20 group"
                onClick={() => router.push(`/watcher/scoring/${s.item_id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/watcher/scoring/${s.item_id}`);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <td className="max-w-[220px] px-3 py-2.5 font-medium text-foreground group-hover:text-primary transition-colors">
                  {truncate(s.title ?? s.item_id, 38)}
                </td>
                <td className="px-3 py-2.5 text-xs text-muted-foreground">{s.source ?? "-"}</td>
                <td className="px-3 py-2.5"><ScoreBar value={s.fiabilite} size="sm" /></td>
                <td className="px-3 py-2.5"><ScoreBar value={s.securite} size="sm" /></td>
                <td className="px-3 py-2.5"><ScoreBar value={s.fonctionnement} size="sm" /></td>
                <td className="px-3 py-2.5"><ScoreBar value={s.interet} size="sm" /></td>
                <td className="px-3 py-2.5 font-bold text-foreground">
                  <span
                    className={`${
                      (s.global ?? 0) >= 75
                        ? "text-green-400"
                        : (s.global ?? 0) >= 50
                          ? "text-yellow-400"
                          : "text-red-400"
                    }`}
                  >
                    {s.global}%
                  </span>
                </td>
                <td className="px-3 py-2.5"><DecisionBadge decision={s.decision} /></td>
                <td className="whitespace-nowrap px-3 py-2.5 text-xs text-muted-foreground">
                  {formatDate(s.scored_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Page {page} / {totalPages} ({total} items)
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange?.(page - 1)}
            className="rounded-lg border border-border/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-2 hover:border-border disabled:cursor-not-allowed disabled:opacity-40"
          >
            Précédent
          </button>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange?.(page + 1)}
            className="rounded-lg border border-border/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-2 hover:border-border disabled:cursor-not-allowed disabled:opacity-40"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
