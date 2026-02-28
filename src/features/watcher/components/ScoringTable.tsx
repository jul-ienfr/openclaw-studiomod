"use client";

import type { ScoreRecord } from "@/features/watcher/types";
import { ScoreBar } from "./ScoreBar";
import { DecisionBadge } from "./DecisionBadge";

type ScoringTableProps = {
  scores: ScoreRecord[];
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onItemClick?: (itemId: string) => void;
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max) + "...";
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

export function ScoringTable({
  scores,
  total,
  page,
  limit,
  onPageChange,
  onItemClick,
}: ScoringTableProps) {
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs text-muted-foreground dark:border-slate-700">
              <th className="px-3 py-2 font-medium">Title</th>
              <th className="px-3 py-2 font-medium">Source</th>
              <th className="px-3 py-2 font-medium">Fiabilite</th>
              <th className="px-3 py-2 font-medium">Securite</th>
              <th className="px-3 py-2 font-medium">Fonctionnement</th>
              <th className="px-3 py-2 font-medium">Interet</th>
              <th className="px-3 py-2 font-medium">Global</th>
              <th className="px-3 py-2 font-medium">Decision</th>
              <th className="px-3 py-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.length === 0 && (
              <tr>
                <td
                  colSpan={9}
                  className="px-3 py-8 text-center text-muted-foreground"
                >
                  No scored items.
                </td>
              </tr>
            )}
            {scores.map((s) => (
              <tr
                key={s.item_id}
                className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                onClick={() => onItemClick?.(s.item_id)}
                role={onItemClick ? "button" : undefined}
                tabIndex={onItemClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if (onItemClick && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onItemClick(s.item_id);
                  }
                }}
                style={onItemClick ? { cursor: "pointer" } : undefined}
              >
                <td className="max-w-[250px] px-3 py-2 font-medium text-foreground">
                  {truncate(s.title ?? s.item_id, 40)}
                </td>
                <td className="px-3 py-2 text-muted-foreground">
                  {s.source ?? "-"}
                </td>
                <td className="px-3 py-2">
                  <ScoreBar score={s.fiabilite} />
                </td>
                <td className="px-3 py-2">
                  <ScoreBar score={s.securite} />
                </td>
                <td className="px-3 py-2">
                  <ScoreBar score={s.fonctionnement} />
                </td>
                <td className="px-3 py-2">
                  <ScoreBar score={s.interet} />
                </td>
                <td className="px-3 py-2 font-bold text-foreground">
                  {s.global}
                </td>
                <td className="px-3 py-2">
                  <DecisionBadge decision={s.decision} />
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-muted-foreground">
                  {formatDate(s.scored_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Page {page} of {totalPages} ({total} items)
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="rounded border border-slate-300 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:hover:bg-slate-800"
          >
            Prev
          </button>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className="rounded border border-slate-300 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:hover:bg-slate-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
