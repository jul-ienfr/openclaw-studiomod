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
    <div>
      {showFilters && (
        <div className="mb-4 flex flex-wrap gap-3">
          <select
            className="rounded border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground"
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
          >
            <option value="">Toutes les sources</option>
            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            className="rounded border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground"
            value={filterDecision}
            onChange={(e) => setFilterDecision(e.target.value)}
          >
            <option value="">Toutes les décisions</option>
            {DECISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select
            className="rounded border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground">
              <th className="px-3 py-2 font-medium">Titre</th>
              <th className="px-3 py-2 font-medium">Source</th>
              <th className="px-3 py-2 font-medium">Fiab.</th>
              <th className="px-3 py-2 font-medium">Sec.</th>
              <th className="px-3 py-2 font-medium">Fonct.</th>
              <th className="px-3 py-2 font-medium">Int.</th>
              <th className="px-3 py-2 font-medium">Global</th>
              <th className="px-3 py-2 font-medium">Décision</th>
              <th className="px-3 py-2 font-medium">Date</th>
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
                className="cursor-pointer border-b border-border/50 transition-colors hover:bg-surface-2/40"
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
                <td className="max-w-[220px] px-3 py-2 font-medium text-foreground">
                  {truncate(s.title ?? s.item_id, 38)}
                </td>
                <td className="px-3 py-2 text-xs text-muted-foreground">{s.source ?? "-"}</td>
                <td className="px-3 py-2"><ScoreBar value={s.fiabilite} size="sm" /></td>
                <td className="px-3 py-2"><ScoreBar value={s.securite} size="sm" /></td>
                <td className="px-3 py-2"><ScoreBar value={s.fonctionnement} size="sm" /></td>
                <td className="px-3 py-2"><ScoreBar value={s.interet} size="sm" /></td>
                <td className="px-3 py-2 font-bold text-foreground">{s.global}%</td>
                <td className="px-3 py-2"><DecisionBadge decision={s.decision} /></td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-muted-foreground">
                  {formatDate(s.scored_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Page {page} / {totalPages} ({total} items)
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange?.(page - 1)}
            className="rounded border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Précédent
          </button>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange?.(page + 1)}
            className="rounded border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
