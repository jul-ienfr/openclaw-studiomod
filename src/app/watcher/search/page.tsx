"use client";

import { useState } from "react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { ReviewList } from "@/features/watcher/components/ReviewList";
import { Search as SearchIcon, Globe, Database, AlertCircle } from "lucide-react";

export default function WatcherSearchPage() {
  const { loadItems } = useWatcherController();
  const { state } = useWatcherStore();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [localResults, setLocalResults] = useState<any[]>([]);
  const [clawhubResults, setClawhubResults] = useState<any[]>([]);
  const [clawhubError, setClawhubError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setLocalResults([]);
      setClawhubResults([]);
      return;
    }

    setIsSearching(true);
    setClawhubError(null);

    try {
      // Recherche locale
      const localRes = await fetch(`/api/watcher/search?q=${encodeURIComponent(query)}&limit=20`);
      const localData = await localRes.json();
      setLocalResults(localData.items || []);

      // Recherche ClawHub
      try {
        const clawhubRes = await fetch(`/api/watcher/search/clawhub?q=${encodeURIComponent(query)}&limit=10`);
        const clawhubData = await clawhubRes.json();
        if (clawhubData.error) {
          setClawhubError(clawhubData.error);
          setClawhubResults([]);
        } else {
          setClawhubResults(clawhubData.items || []);
        }
      } catch (e) {
        setClawhubError(e instanceof Error ? e.message : "Erreur ClawHub");
        setClawhubResults([]);
      }
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Recherche</h2>
          <p className="text-sm text-muted-foreground">Chercher des items par thème ou mot-clé</p>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ex: météo, traduction, screenshot..."
            className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSearching}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={isSearching || !query.trim()}
          className="ui-btn-primary flex items-center gap-2 px-4 py-2.5 text-sm"
        >
          <SearchIcon className={`h-4 w-4 ${isSearching ? "animate-pulse" : ""}`} />
          Rechercher
        </button>
      </div>

      {/* Résultats */}
      {localResults.length > 0 || clawhubResults.length > 0 ? (
        <div className="space-y-6">
          {/* Résultats locaux */}
          {localResults.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Database className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">
                  Résultats locaux ({localResults.length})
                </h3>
              </div>
              <ReviewList items={localResults} onRefresh={() => {}} />
            </div>
          )}

          {/* Résultats ClawHub */}
          {clawhubResults.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">
                  Skills ClawHub ({clawhubResults.length})
                </h3>
              </div>
              <div className="rounded-lg border border-border bg-sidebar/50 p-4">
                <p className="text-xs text-muted-foreground mb-3">
                  Ces skills ne sont pas encore dans votre veille. Vous pouvez les consulter sur ClawHub.
                </p>
                {clawhubResults.map((skill) => (
                  <div
                    key={skill.slug}
                    className="flex items-start justify-between py-2 border-b border-border last:border-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground">
                        {skill.displayName}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {skill.summary}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                        {skill.version && <span>v{skill.version}</span>}
                        <span>score: {skill.score.toFixed(1)}</span>
                      </div>
                    </div>
                    <a
                      href={`https://clawhub.com/skills/${skill.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-xs text-primary hover:underline"
                    >
                      Voir →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : query && !isSearching ? (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">Aucun résultat pour &quot;{query}&quot;</p>
        </div>
      ) : clawhubError && localResults.length === 0 ? (
        <div className="flex items-center gap-2 text-sm text-amber-500 bg-amber-500/10 px-3 py-2 rounded-lg">
          <AlertCircle className="h-4 w-4" />
          <span>Erreur ClawHub : {clawhubError}</span>
        </div>
      ) : null}
    </div>
  );
}
