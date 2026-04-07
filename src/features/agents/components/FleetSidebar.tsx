import type { AgentState, FocusFilter } from "@/features/agents/state/store";
import { useLayoutEffect, useMemo, useRef, useState, memo } from "react";
import { useTranslations } from "next-intl";
import { Search, MessageSquare, Clock, Star } from "lucide-react";
import { AgentAvatar } from "./AgentAvatar";
import {
  NEEDS_APPROVAL_BADGE_CLASS,
  resolveAgentStatusBadgeClass,
  resolveAgentStatusLabel,
} from "./colorSemantics";
import { EmptyStatePanel } from "./EmptyStatePanel";
import type { AgentChannelLink } from "@/features/routing/agentChannelResolver";

type LocalFilter = FocusFilter | "favorites";

type FleetSidebarProps = {
  agents: AgentState[];
  selectedAgentId: string | null;
  filter: FocusFilter;
  onFilterChange: (next: FocusFilter) => void;
  onSelectAgent: (agentId: string) => void;
  onCreateAgent: () => void;
  createDisabled?: boolean;
  createBusy?: boolean;
  channelsByAgent?: Map<string, AgentChannelLink[]>;
  favoriteAgentIds?: string[];
  onToggleFavorite?: (agentId: string) => void;
};

const BASE_FILTER_KEYS: FocusFilter[] = ["all", "running", "approvals"];

const formatRelativeTime = (timestampMs: number | null): string | null => {
  if (!timestampMs) return null;
  const delta = Date.now() - timestampMs;
  if (delta < 60_000) return "<1m";
  if (delta < 3_600_000) return `${Math.floor(delta / 60_000)}m`;
  if (delta < 86_400_000) return `${Math.floor(delta / 3_600_000)}h`;
  return `${Math.floor(delta / 86_400_000)}d`;
};

const STATUS_DOT_CLASS: Record<string, string> = {
  running: "bg-[#4ade80] animate-pulse shadow-[0_0_4px_rgba(74,222,128,0.7)]",
  idle: "bg-muted-foreground/40",
  error: "bg-destructive",
};

function resolveStatusDotClass(status: AgentState["status"]): string {
  return STATUS_DOT_CLASS[status] ?? "bg-muted-foreground/40";
}

function FleetSidebarComponent({
  agents,
  selectedAgentId,
  filter,
  onFilterChange,
  onSelectAgent,
  onCreateAgent,
  createDisabled = false,
  createBusy = false,
  channelsByAgent,
  favoriteAgentIds = [],
  onToggleFavorite,
}: FleetSidebarProps) {
  const t = useTranslations("fleet");
  const ts = useTranslations("status");
  const [searchQuery, setSearchQuery] = useState("");
  // Local "favorites" tab lives inside the sidebar, doesn't need to propagate up
  const [localFilter, setLocalFilter] = useState<LocalFilter>(filter);
  const rowRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const previousTopByAgentIdRef = useRef<Map<string, number>>(new Map());
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const favoritesSet = useMemo(
    () => new Set(favoriteAgentIds),
    [favoriteAgentIds],
  );

  const handleFilterClick = (key: LocalFilter) => {
    setLocalFilter(key);
    if (key !== "favorites") {
      onFilterChange(key as FocusFilter);
    }
  };

  const filteredBySearch = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return agents;
    return agents.filter((a) => a.name.toLowerCase().includes(q));
  }, [agents, searchQuery]);

  // Apply local filter (may include "favorites" tab)
  const filteredByFilter = useMemo(() => {
    const active = localFilter;
    if (active === "favorites") {
      return filteredBySearch.filter((a) => favoritesSet.has(a.agentId));
    }
    if (active === "running") {
      return filteredBySearch.filter((a) => a.status === "running");
    }
    if (active === "approvals") {
      return filteredBySearch.filter((a) => a.awaitingUserInput);
    }
    return filteredBySearch;
  }, [localFilter, filteredBySearch, favoritesSet]);

  // Sort: favorites first within the current view (unless in favorites-only view)
  const sortedAgents = useMemo(() => {
    if (localFilter === "favorites") return filteredByFilter;
    return [...filteredByFilter].sort((a, b) => {
      const aFav = favoritesSet.has(a.agentId) ? 0 : 1;
      const bFav = favoritesSet.has(b.agentId) ? 0 : 1;
      return aFav - bFav;
    });
  }, [filteredByFilter, favoritesSet, localFilter]);

  const agentOrderKey = useMemo(
    () => sortedAgents.map((agent) => agent.agentId).join("|"),
    [sortedAgents],
  );

  useLayoutEffect(() => {
    const scroller = scrollContainerRef.current;
    if (!scroller) return;
    const scrollerRect = scroller.getBoundingClientRect();

    const getTopInScrollContent = (node: HTMLElement) =>
      node.getBoundingClientRect().top - scrollerRect.top + scroller.scrollTop;

    const nextTopByAgentId = new Map<string, number>();
    const agentIds = agentOrderKey.length === 0 ? [] : agentOrderKey.split("|");
    for (const agentId of agentIds) {
      const node = rowRefs.current.get(agentId);
      if (!node) continue;
      const nextTop = getTopInScrollContent(node);
      nextTopByAgentId.set(agentId, nextTop);
      const previousTop = previousTopByAgentIdRef.current.get(agentId);
      if (typeof previousTop !== "number") continue;
      const deltaY = previousTop - nextTop;
      if (Math.abs(deltaY) < 0.5) continue;
      if (typeof node.animate !== "function") continue;
      node.animate(
        [
          { transform: `translateY(${deltaY}px)` },
          { transform: "translateY(0px)" },
        ],
        { duration: 300, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      );
    }
    previousTopByAgentIdRef.current = nextTopByAgentId;
  }, [agentOrderKey]);

  const baseFilterLabels: Record<FocusFilter, string> = {
    all: t("filterAll"),
    running: t("filterRunning"),
    approvals: t("filterApprovals"),
  };

  return (
    <aside
      className="relative flex h-full w-full min-w-72 flex-col gap-3 backdrop-blur-sm bg-background/80 border-r border-border/50 p-3 xl:max-w-[320px]"
      data-testid="fleet-sidebar"
    >
      <div className="flex items-center justify-between gap-2 px-1">
        <p className="console-title type-page-title text-foreground">
          {t("title", { count: agents.length })}
        </p>
        <button
          type="button"
          data-testid="fleet-new-agent-button"
          className="ui-btn-primary px-3 py-2 font-mono text-[12px] font-medium tracking-[0.02em] disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-muted-foreground"
          onClick={onCreateAgent}
          disabled={createDisabled || createBusy}
        >
          {createBusy ? t("creating") : t("newAgent")}
        </button>
      </div>

      <div className="relative">
        <Search
          className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="text"
          className="ui-input w-full rounded-md py-1.5 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground"
          placeholder={t("searchPlaceholder")}
          aria-label={t("searchLabel")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          data-testid="fleet-search-input"
        />
      </div>

      {/* Filter bar — base filters + favorites star */}
      <div className="flex items-center gap-0.5 rounded-md bg-surface-2/50 p-0.5">
        {BASE_FILTER_KEYS.map((key) => {
          const active = localFilter === key;
          return (
            <button
              key={key}
              type="button"
              data-testid={`fleet-filter-${key}`}
              aria-pressed={active}
              className={`flex-1 rounded-sm px-2 py-1 font-mono text-[11px] font-medium tracking-[0.02em] transition-colors ${
                active
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => handleFilterClick(key)}
            >
              {baseFilterLabels[key]}
            </button>
          );
        })}
        {/* Favorites tab */}
        <button
          type="button"
          data-testid="fleet-filter-favorites"
          aria-pressed={localFilter === "favorites"}
          aria-label="Favorites"
          className={`shrink-0 rounded-sm px-2 py-1 transition-colors ${
            localFilter === "favorites"
              ? "bg-background text-yellow-400 shadow-sm"
              : "text-muted-foreground hover:text-yellow-400"
          }`}
          onClick={() => handleFilterClick("favorites")}
        >
          <Star
            className="h-3 w-3"
            fill={localFilter === "favorites" ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="ui-scroll min-h-0 flex-1 overflow-auto"
      >
        {sortedAgents.length === 0 ? (
          <EmptyStatePanel
            title={
              localFilter === "favorites"
                ? "No favorites yet"
                : searchQuery
                  ? t("noSearchResults")
                  : t("noAgents")
            }
            compact
            className="p-3 text-xs"
          />
        ) : (
          <div className="flex flex-col gap-1.5">
            {sortedAgents.map((agent) => {
              const selected = selectedAgentId === agent.agentId;
              const isFavorite = favoritesSet.has(agent.agentId);
              const avatarSeed = agent.avatarSeed ?? agent.agentId;
              return (
                <button
                  key={agent.agentId}
                  ref={(node) => {
                    if (node) {
                      rowRefs.current.set(agent.agentId, node);
                      return;
                    }
                    rowRefs.current.delete(agent.agentId);
                  }}
                  type="button"
                  data-testid={`fleet-agent-row-${agent.agentId}`}
                  className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-lg px-3 py-2.5 text-left transition-colors ${
                    selected
                      ? "bg-primary/10 border border-primary/20 shadow-sm"
                      : "border border-transparent hover:bg-accent/50 hover:border-border/30"
                  }`}
                  onClick={() => onSelectAgent(agent.agentId)}
                >
                  <div className="relative shrink-0">
                    <AgentAvatar
                      seed={avatarSeed}
                      name={agent.name}
                      avatarUrl={agent.avatarUrl ?? null}
                      size={38}
                      isSelected={selected}
                    />
                    {/* Status dot */}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background ${resolveStatusDotClass(agent.status)}`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold leading-tight text-foreground">
                      {agent.name}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      <span
                        className={`ui-badge ${resolveAgentStatusBadgeClass(agent.status)}`}
                        data-status={agent.status}
                      >
                        {ts(resolveAgentStatusLabel(agent.status))}
                      </span>
                      {agent.awaitingUserInput ? (
                        <span
                          className={`ui-badge ${NEEDS_APPROVAL_BADGE_CLASS}`}
                          data-status="approval"
                        >
                          {t("needsApproval")}
                        </span>
                      ) : null}
                      {(channelsByAgent?.get(agent.agentId) ?? []).map(
                        (link) => (
                          <span
                            key={link.channelId}
                            className="ui-badge flex items-center gap-1 bg-surface-2/60 text-foreground/70"
                            title={link.ruleName}
                          >
                            <span className="text-[9px]">
                              {link.channelIcon}
                            </span>
                            <span className="text-[9px]">
                              {link.channelName}
                            </span>
                          </span>
                        ),
                      )}
                    </div>
                    <div className="mt-0.5 flex items-center gap-3 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-0.5">
                        <MessageSquare
                          className="h-2.5 w-2.5"
                          aria-hidden="true"
                        />
                        {agent.outputLines.length}
                      </span>
                      {formatRelativeTime(agent.lastActivityAt) ? (
                        <span className="flex items-center gap-0.5">
                          <Clock className="h-2.5 w-2.5" aria-hidden="true" />
                          {formatRelativeTime(agent.lastActivityAt)}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {/* Favorite star button */}
                  {onToggleFavorite ? (
                    <button
                      type="button"
                      aria-label={
                        isFavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                      aria-pressed={isFavorite}
                      className={`shrink-0 rounded-sm p-0.5 transition-colors ${
                        isFavorite
                          ? "text-yellow-400"
                          : "text-transparent group-hover:text-muted-foreground/50 hover:!text-yellow-400"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(agent.agentId);
                      }}
                    >
                      <Star
                        className="h-3.5 w-3.5"
                        fill={isFavorite ? "currentColor" : "none"}
                      />
                    </button>
                  ) : null}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}

export const FleetSidebar = memo(FleetSidebarComponent);
