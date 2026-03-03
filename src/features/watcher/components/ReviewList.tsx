"use client";

import { useState, useCallback, useEffect } from "react";
import type { WatchItem, ScoreRecord, Decision } from "@/features/watcher/types";
import { DecisionBadge } from "./DecisionBadge";
import { ScoreBar } from "./ScoreBar";
import {
  ChevronDown,
  ChevronRight,
  Check,
  X,
  ExternalLink,
  Clock,
  Shield,
  Zap,
  Star,
  Loader2,
  User,
} from "lucide-react";

type ReviewItem = WatchItem & Partial<ScoreRecord> & { title_fr?: string; impact?: string };

interface ReviewListProps {
  items: ReviewItem[];
  onRefresh: () => void;
}

// ─── Author Score ────────────────────────────────────────────────────────────

interface AuthorScore {
  author: string;
  score: number;
  role: string;
  contributions: number;
  auto_count: number;
  block_count: number;
  implemented_count: number;
  details: string;
}

const ROLE_LABELS: Record<string, string> = {
  mainteneur: "Mainteneur",
  bot: "Bot",
  contributeur: "Contributeur",
  inconnu: "Inconnu",
};

const ROLE_COLORS: Record<string, string> = {
  mainteneur: "bg-green-500/15 text-green-400",
  bot: "bg-blue-500/15 text-blue-400",
  contributeur: "bg-purple-500/15 text-purple-400",
  inconnu: "bg-slate-500/15 text-slate-400",
};

// ─── Source / Category icons ─────────────────────────────────────────────────

const SOURCE_LABELS: Record<string, string> = {
  github: "GitHub",
  github_studio: "GitHub Studio",
  npm: "npm",
  hackernews: "Hacker News",
  reddit: "Reddit",
  twitter: "Twitter/X",
  clawhub: "ClawHub",
};

const CATEGORY_LABELS: Record<string, string> = {
  release: "Release",
  npm_version: "Version npm",
  npm_dist_tag: "Dist-tag npm",
  commit: "Commit",
  pull_request: "Pull Request",
  issue: "Issue",
  hackernews: "Hacker News",
  reddit: "Reddit",
  twitter: "Tweet",
  clawhub_skill: "Skill ClawHub",
};

const CATEGORY_COLORS: Record<string, string> = {
  release: "bg-green-500/15 text-green-400",
  npm_version: "bg-green-500/15 text-green-400",
  npm_dist_tag: "bg-teal-500/15 text-teal-400",
  commit: "bg-blue-500/15 text-blue-400",
  pull_request: "bg-purple-500/15 text-purple-400",
  issue: "bg-orange-500/15 text-orange-400",
  hackernews: "bg-orange-500/15 text-orange-400",
  reddit: "bg-orange-500/15 text-orange-400",
  twitter: "bg-sky-500/15 text-sky-400",
  clawhub_skill: "bg-indigo-500/15 text-indigo-400",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function timeAgo(ts: string): string {
  if (!ts) return "";
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "à l'instant";
  if (mins < 60) return `il y a ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  return `il y a ${days}j`;
}

function implementationAction(item: ReviewItem): string {
  const cat = item.category;
  if (cat === "release" || cat === "npm_version" || cat === "npm_dist_tag") {
    return `npm install -g openclaw@...`;
  }
  if (cat === "clawhub_skill") return "Installer le skill";
  return "Notification seule";
}

function isActionable(item: ReviewItem): boolean {
  const cat = item.category;
  return ["release", "npm_version", "npm_dist_tag", "clawhub_skill"].includes(cat);
}

// ─── Score Detail Panel ──────────────────────────────────────────────────────

function ScoreDetail({ item }: { item: ReviewItem }) {
  const [authorScore, setAuthorScore] = useState<AuthorScore | null>(null);

  useEffect(() => {
    if (item.author) {
      fetch(`/api/watcher/author-score?author=${encodeURIComponent(item.author)}`)
        .then((r) => r.json())
        .then((data) => { if (!data.error) setAuthorScore(data); })
        .catch(() => {});
    }
  }, [item.author]);

  const scores = [
    { key: "fiabilite", label: "Fiab.", value: item.fiabilite },
    { key: "securite", label: "Sécu.", value: item.securite },
    { key: "fonctionnement", label: "Fonct.", value: item.fonctionnement },
    { key: "interet", label: "Intérêt", value: item.interet },
  ];

  return (
    <div className="space-y-3 mt-2">
      {/* Ligne du haut : Score (1fr) | Auteur (1fr) | Détails (1fr) */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-3">

        {/* ── Score de confiance (compact) ── */}
        <div className="rounded-lg border border-border bg-sidebar/50 p-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Score de confiance
          </h4>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-foreground">{item.global ?? 0}%</span>
          </div>
          <div className="space-y-1.5">
            {scores.map((s) => (
              <div key={s.key} className="flex items-center gap-1.5">
                <span className="text-[10px] text-muted-foreground w-12 shrink-0">{s.label}</span>
                <ScoreBar value={s.value} size="sm" className="flex-1" />
                <span className="text-[10px] font-mono text-muted-foreground w-6 text-right">{s.value ?? 0}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Confiance auteur ── */}
        <div className="rounded-lg border border-border bg-sidebar/50 p-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Confiance auteur
          </h4>
          {item.author ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="text-sm text-foreground truncate">{item.author}</span>
              </div>
              {authorScore ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium ${ROLE_COLORS[authorScore.role] ?? "bg-muted text-muted-foreground"}`}>
                      {ROLE_LABELS[authorScore.role] ?? authorScore.role}
                    </span>
                    <span className={`text-lg font-bold ${
                      authorScore.score >= 75 ? "text-green-400" : authorScore.score >= 50 ? "text-yellow-400" : "text-red-400"
                    }`}>
                      {authorScore.score}%
                    </span>
                  </div>
                  <div className="space-y-0.5 text-[10px] text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Contributions</span>
                      <span className="text-foreground">{authorScore.contributions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AUTO acceptés</span>
                      <span className="text-foreground">{authorScore.auto_count}</span>
                    </div>
                    {authorScore.block_count > 0 && (
                      <div className="flex justify-between">
                        <span>Bloqués</span>
                        <span className="text-red-400">{authorScore.block_count}</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <span className="text-[10px] text-muted-foreground">Chargement…</span>
              )}
            </div>
          ) : (
            <span className="text-xs text-muted-foreground">Auteur inconnu</span>
          )}
        </div>

        {/* ── Détails ── */}
        <div className="rounded-lg border border-border bg-sidebar/50 p-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Détails
          </h4>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Source</span>
              <span className="text-foreground">{SOURCE_LABELS[item.source] ?? item.source}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Catégorie</span>
              <span className="text-foreground">{CATEGORY_LABELS[item.category] ?? item.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="text-foreground">{timeAgo(item.timestamp)}</span>
            </div>
            {isActionable(item) && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Action</span>
                <span className="text-foreground font-mono text-[10px]">{implementationAction(item)}</span>
              </div>
            )}
          </div>
          {/* Titre original si traduit */}
          {item.title_fr && item.title_fr !== item.title && (
            <p className="mt-2 pt-1.5 border-t border-border text-[10px] text-muted-foreground italic truncate">
              Original : {item.title}
            </p>
          )}
        </div>
      </div>

      {/* ── Résumé des modifications (en dessous, pleine largeur) ── */}
      {item.impact && (
        <div className="rounded-lg border border-border bg-sidebar/50 p-4">
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Modifications si implémenté
          </h4>
          <div className="text-sm text-foreground whitespace-pre-line leading-relaxed">
            {item.impact}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Item Row ────────────────────────────────────────────────────────────────

function ReviewItemRow({
  item,
  isOpen,
  onToggle,
  onAccept,
  onReject,
  isProcessing,
}: {
  item: ReviewItem;
  isOpen: boolean;
  onToggle: () => void;
  onAccept: () => void;
  onReject: () => void;
  isProcessing: boolean;
}) {
  const catColor = CATEGORY_COLORS[item.category] ?? "bg-muted text-muted-foreground";

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden transition-colors hover:border-border/80">
      {/* Header row — always visible */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
        onClick={onToggle}
      >
        {/* Expand chevron */}
        {isOpen ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        )}

        {/* Category badge */}
        <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${catColor}`}>
          {CATEGORY_LABELS[item.category] ?? item.category}
        </span>

        {/* Decision */}
        {item.decision && <DecisionBadge decision={item.decision} />}

        {/* Titre (français si disponible) */}
        <span className="flex-1 truncate text-sm text-foreground font-medium">
          {item.title_fr || item.title}
        </span>

        {/* Score pill */}
        {typeof item.global === "number" && (
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-mono font-bold ${
              item.global >= 75
                ? "bg-green-500/15 text-green-400"
                : item.global >= 50
                  ? "bg-yellow-500/15 text-yellow-400"
                  : "bg-red-500/15 text-red-400"
            }`}
          >
            {item.global}%
          </span>
        )}

        {/* Time */}
        <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
          <Clock className="h-3 w-3" />
          {timeAgo(item.timestamp)}
        </span>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5 ml-2" onClick={(e) => e.stopPropagation()}>
          {isActionable(item) && (
            <button
              onClick={onAccept}
              disabled={isProcessing}
              className="inline-flex items-center gap-1 rounded-md bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-400 hover:bg-green-500/25 disabled:opacity-50 transition-colors"
              title="Accepter et implémenter"
            >
              {isProcessing ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Check className="h-3.5 w-3.5" />
              )}
              Accepter
            </button>
          )}
          <button
            onClick={onReject}
            disabled={isProcessing}
            className="inline-flex items-center gap-1 rounded-md bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-400 hover:bg-red-500/20 disabled:opacity-50 transition-colors"
            title="Ignorer et archiver"
          >
            <X className="h-3.5 w-3.5" />
            Ignorer
          </button>
          {item.source_url && (
            <a
              href={item.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md px-1.5 py-1 text-muted-foreground hover:text-foreground transition-colors"
              title="Voir la source"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Expanded detail */}
      {isOpen && (
        <div className="border-t border-border bg-sidebar/30 px-4 py-3">
          <ScoreDetail item={item} />
        </div>
      )}
    </div>
  );
}

// ─── Main List ───────────────────────────────────────────────────────────────

export function ReviewList({ items, onRefresh }: ReviewListProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [processing, setProcessing] = useState<Set<string>>(new Set());

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleAccept = useCallback(async (item: ReviewItem) => {
    setProcessing((p) => new Set(p).add(item.id));
    try {
      const res = await fetch("/api/watcher/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "implement", itemId: item.id }),
      });
      const data = await res.json();
      if (data.ok) onRefresh();
    } catch { /* ignore */ }
    setProcessing((p) => {
      const next = new Set(p);
      next.delete(item.id);
      return next;
    });
  }, [onRefresh]);

  const handleReject = useCallback(async (item: ReviewItem) => {
    setProcessing((p) => new Set(p).add(item.id));
    try {
      const res = await fetch("/api/watcher/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "ignore", itemId: item.id }),
      });
      const data = await res.json();
      if (data.ok) onRefresh();
    } catch { /* ignore */ }
    setProcessing((p) => {
      const next = new Set(p);
      next.delete(item.id);
      return next;
    });
  }, [onRefresh]);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-sidebar/30 py-12 px-4">
        <p className="text-sm text-muted-foreground">Aucun item en attente</p>
        <p className="text-xs text-muted-foreground mt-1">Tout est à jour ✓</p>
      </div>
    );
  }

  // Group by decision priority: AUTO first, then PROPOSE, then rest
  const priority: Record<string, number> = { AUTO: 0, PROPOSE: 1, NOTIFY: 2, SUSPECT: 3, BLOCK: 4, ARCHIVE: 5 };
  const sorted = [...items].sort((a, b) => {
    const pa = priority[a.decision ?? "NOTIFY"] ?? 9;
    const pb = priority[b.decision ?? "NOTIFY"] ?? 9;
    if (pa !== pb) return pa - pb;
    return (b.global ?? 0) - (a.global ?? 0);
  });

  return (
    <div className="space-y-2">
      {sorted.map((item) => (
        <ReviewItemRow
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
          onAccept={() => handleAccept(item)}
          onReject={() => handleReject(item)}
          isProcessing={processing.has(item.id)}
        />
      ))}
    </div>
  );
}
