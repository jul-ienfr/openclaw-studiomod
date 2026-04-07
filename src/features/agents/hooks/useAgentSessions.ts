"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

export type SessionInfo = {
  key: string;
  kind: string;
  channel: string;
  displayName: string;
  updatedAt: number | null;
  origin?: {
    label?: string;
    provider?: string;
    from?: string;
    to?: string;
  } | null;
};

type GatewayClientLike = {
  call: (method: string, params: unknown) => Promise<unknown>;
};

type SessionsListEntry = {
  key?: string;
  kind?: string;
  channel?: string;
  displayName?: string;
  updatedAt?: number | null;
  origin?: {
    label?: string;
    provider?: string;
    from?: string;
    to?: string;
  } | null;
};

type SessionsListResponse = {
  sessions?: SessionsListEntry[];
};

function normalizeSession(raw: SessionsListEntry): SessionInfo {
  return {
    key: raw.key ?? "",
    kind: raw.kind ?? "other",
    channel: raw.channel ?? "",
    displayName: raw.displayName ?? raw.origin?.label ?? raw.key ?? "",
    updatedAt: raw.updatedAt ?? null,
    origin: raw.origin ?? null,
  };
}

function sortSessions(sessions: SessionInfo[]): SessionInfo[] {
  return [...sessions].sort((a, b) => {
    // main session first
    if (a.kind === "main" && b.kind !== "main") return -1;
    if (b.kind === "main" && a.kind !== "main") return 1;
    // then by updatedAt desc
    const aTime = a.updatedAt ?? 0;
    const bTime = b.updatedAt ?? 0;
    return bTime - aTime;
  });
}

export function useAgentSessions(params: {
  client: GatewayClientLike;
  agentId: string;
  status: GatewayStatus;
}): {
  sessions: SessionInfo[];
  loading: boolean;
  refresh: () => void;
} {
  const { client, agentId, status } = params;
  const [sessions, setSessions] = useState<SessionInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchIdRef = useRef(0);
  // Cache sessions by agentId for instant tab switching
  const cacheRef = useRef<Map<string, SessionInfo[]>>(new Map());

  const fetchSessions = useCallback(async () => {
    if (status !== "connected" || !agentId) return;
    const fetchId = ++fetchIdRef.current;

    // Check cache first — display immediately for instant UI
    const cached = cacheRef.current.get(agentId);
    if (cached) {
      setSessions(cached);
      // Still fetch in background to update
    } else {
      setLoading(true);
    }

    try {
      const result = (await client.call("sessions.list", {
        agentId,
        limit: 50,
        includeGlobal: false,
        includeUnknown: false,
      })) as SessionsListResponse;
      if (fetchId !== fetchIdRef.current) return;
      const raw = result?.sessions ?? [];
      const normalized = raw
        .map(normalizeSession)
        .filter((s) => s.key.length > 0);
      const sorted = sortSessions(normalized);
      cacheRef.current.set(agentId, sorted);
      setSessions(sorted);
    } catch {
      // silently fail — non-critical UI
    } finally {
      if (fetchId === fetchIdRef.current) setLoading(false);
    }
  }, [client, agentId, status]);

  useEffect(() => {
    void fetchSessions();
  }, [fetchSessions]);

  return { sessions, loading, refresh: fetchSessions };
}
