"use client";

import { useState, useEffect, useCallback } from "react";
import { Loader2, RefreshCw } from "lucide-react";

interface DiskInfo {
  total: string;
  used: string;
  available: string;
  percent: number;
}

interface ServiceInfo {
  name: string;
  status: string;
}

interface SystemInfo {
  disk: DiskInfo;
  gateway: "up" | "down";
  daemon: "up" | "down";
  services: ServiceInfo[];
}

function diskColor(percent: number): string {
  if (percent >= 85) return "bg-red-500";
  if (percent >= 75) return "bg-yellow-500";
  return "bg-green-500";
}

function diskTextColor(percent: number): string {
  if (percent >= 85) return "text-red-500";
  if (percent >= 75) return "text-yellow-500";
  return "text-green-500";
}

function statusBadge(status: "up" | "down") {
  if (status === "up") {
    return (
      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-500">
        UP
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-500">
      DOWN
    </span>
  );
}

function serviceBadge(status: string) {
  const normalized = status.trim().toLowerCase();
  if (normalized === "active") {
    return (
      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-500">
        active
      </span>
    );
  }
  if (normalized === "failed") {
    return (
      <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-500">
        failed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-semibold text-yellow-500">
      {status || "unknown"}
    </span>
  );
}

export function SystemTab() {
  const [data, setData] = useState<SystemInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/config/system");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as SystemInfo;
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="max-w-3xl space-y-4">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-3xl space-y-6">
      {/* Header + Refresh */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Informations systeme
        </h2>
        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          Rafraichir
        </button>
      </div>

      {/* Disk usage */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Espace disque
        </h3>
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {data.disk.used} utilise sur {data.disk.total}
            </span>
            <span
              className={`font-semibold ${diskTextColor(data.disk.percent)}`}
            >
              {data.disk.percent}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-surface-2">
            <div
              className={`h-2 rounded-full transition-all ${diskColor(data.disk.percent)}`}
              style={{ width: `${Math.min(data.disk.percent, 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {data.disk.available} disponible
          </p>
        </div>
      </div>

      {/* Endpoints */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Endpoints
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Gateway */}
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Gateway</span>
              {statusBadge(data.gateway)}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              http://localhost:18789
            </p>
          </div>

          {/* AI Daemon */}
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">AI Daemon</span>
              {statusBadge(data.daemon)}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              http://localhost:18089
            </p>
          </div>
        </div>
      </div>

      {/* Services table */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Services systemd
        </h3>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Service
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody>
              {data.services.map((svc) => (
                <tr
                  key={svc.name}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2.5 font-mono text-sm">{svc.name}</td>
                  <td className="px-4 py-2.5">{serviceBadge(svc.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
