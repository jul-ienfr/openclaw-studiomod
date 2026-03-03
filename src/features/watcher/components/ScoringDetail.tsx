"use client";

import { useState } from "react";
import type { ScoreRecord, WatchItem } from "@/features/watcher/types";
import { ScoreBar } from "./ScoreBar";
import { DecisionBadge } from "./DecisionBadge";

type ScoringDetailProps = {
  score: ScoreRecord;
  item: WatchItem;
};

type Section = { key: keyof Pick<ScoreRecord, "fiabilite" | "securite" | "fonctionnement" | "interet">; label: string };

const SECTIONS: Section[] = [
  { key: "fiabilite", label: "Fiabilité" },
  { key: "securite", label: "Sécurité" },
  { key: "fonctionnement", label: "Fonctionnement" },
  { key: "interet", label: "Intérêt" },
];

function formatDate(d: string) {
  return new Date(d).toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function ScoringDetail({ score, item }: ScoringDetailProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showJson, setShowJson] = useState(false);

  const toggleSection = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleAction = async (action: "implement" | "ignore") => {
    await fetch("/api/watcher/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, itemId: item.id }),
    });
  };

  let parsedDetails: Record<string, unknown> | null = null;
  try {
    parsedDetails = JSON.parse(score.details);
  } catch {
    parsedDetails = null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="ui-card p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-base font-semibold text-foreground leading-snug">{item.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="font-mono">{item.source}</span>
              {item.author && <span>par {item.author}</span>}
              <span>{formatDate(item.timestamp)}</span>
              {item.source_url && (
                <a
                  href={item.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Lien original
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-3xl font-bold text-foreground">{score.global}<span className="text-base font-normal text-muted-foreground">%</span></span>
            <DecisionBadge decision={score.decision} />
          </div>
        </div>
      </div>

      {/* Score sections */}
      <div className="space-y-3">
        {SECTIONS.map(({ key, label }) => {
          const val = score[key] as number;
          const isOpen = expanded[key];
          return (
            <div key={key} className="ui-card overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-left"
                onClick={() => toggleSection(key)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">{label}</span>
                  <ScoreBar value={val} size="sm" />
                  <span className="text-xs text-muted-foreground font-mono">{val}%</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isOpen && parsedDetails && (
                <div className="border-t border-border px-4 pb-4 pt-3">
                  <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
                    {JSON.stringify((parsedDetails as Record<string, unknown>)[key] ?? {}, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="ui-btn-primary px-4 py-2 text-sm font-medium"
          onClick={() => handleAction("implement")}
        >
          Implémenter
        </button>
        <button
          type="button"
          className="rounded border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2/70"
          onClick={() => handleAction("ignore")}
        >
          Ignorer
        </button>
        <button
          type="button"
          className="ml-auto rounded border border-border px-4 py-2 text-xs font-mono text-muted-foreground transition-colors hover:bg-surface-2"
          onClick={() => setShowJson((v) => !v)}
        >
          {showJson ? "Masquer le JSON" : "Voir le JSON brut"}
        </button>
      </div>

      {showJson && (
        <div className="ui-card overflow-auto p-4">
          <pre className="text-xs text-muted-foreground">
            {JSON.stringify({ score, item }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
