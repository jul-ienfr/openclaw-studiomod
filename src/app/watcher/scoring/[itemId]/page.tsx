"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ScoringDetail } from "@/features/watcher/components/ScoringDetail";

interface ItemData {
  item: Record<string, unknown> | null;
  score: Record<string, unknown> | null;
}

export default function ScoringDetailPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = use(params);
  const [data, setData] = useState<ItemData>({ item: null, score: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const [itemRes, scoreRes] = await Promise.all([
          fetch(`/api/watcher/items/${itemId}`),
          fetch(`/api/watcher/scores/${itemId}`),
        ]);

        if (!itemRes.ok) throw new Error(`Item fetch failed: ${itemRes.status}`);
        if (!scoreRes.ok) throw new Error(`Score fetch failed: ${scoreRes.status}`);

        const [item, score] = await Promise.all([itemRes.json(), scoreRes.json()]);
        setData({ item, score });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [itemId]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/watcher/scoring"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>&#8592;</span>
          <span>Retour au scoring</span>
        </Link>
      </div>

      {loading && (
        <div className="glass-panel p-8 text-center text-muted-foreground">
          Chargement...
        </div>
      )}

      {error && (
        <div className="glass-panel p-6 border border-red-500/30 bg-red-500/10">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && data.item && data.score && (
        <ScoringDetail item={data.item as unknown as import("@/features/watcher/types").WatchItem} score={data.score as unknown as import("@/features/watcher/types").ScoreRecord} />
      )}

      {!loading && !error && (!data.item || !data.score) && (
        <div className="glass-panel p-8 text-center text-muted-foreground">
          Aucune donnée trouvée pour cet élément.
        </div>
      )}
    </div>
  );
}
