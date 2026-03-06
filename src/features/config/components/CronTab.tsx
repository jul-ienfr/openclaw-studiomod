"use client";

import { useState, useEffect, useCallback } from "react";
import { Loader2, Save } from "lucide-react";

interface CronJobState {
  consecutiveErrors?: number;
  lastRunAtMs?: number;
  lastRunStatus?: string;
  lastDurationMs?: number;
  lastError?: string | null;
}

interface CronJob {
  id: string;
  agentId: string;
  name: string;
  enabled: boolean;
  schedule?: { expr?: string };
  state?: CronJobState;
}

interface CronConfig {
  enabled?: boolean;
  maxConcurrentRuns?: number;
  sessionRetention?: string;
}

interface CronData {
  jobs: CronJob[];
  config: CronConfig;
}

function relativeTime(ms: number): string {
  const now = Date.now();
  const diffSec = Math.floor((now - ms) / 1000);
  if (diffSec < 60) return `il y a ${diffSec}s`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `il y a ${diffMin}min`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `il y a ${diffH}h`;
  const diffD = Math.floor(diffH / 24);
  return `il y a ${diffD}j`;
}

function jobStatusBadge(job: CronJob) {
  if (!job.enabled) {
    return (
      <span className="inline-flex items-center rounded-full bg-gray-500/10 px-2 py-0.5 text-[10px] font-semibold text-gray-400">
        disabled
      </span>
    );
  }
  const status = job.state?.lastRunStatus;
  if (status === "error") {
    return (
      <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-500">
        error
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-500">
      ok
    </span>
  );
}

function errorCount(job: CronJob): number {
  return job.state?.consecutiveErrors ?? 0;
}

function errorCountClass(count: number): string {
  if (count === 0) return "text-muted-foreground";
  if (count <= 2) return "text-yellow-500 font-medium";
  return "text-red-500 font-semibold";
}

export function CronTab() {
  const [data, setData] = useState<CronData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  // Editable config fields
  const [maxConcurrent, setMaxConcurrent] = useState<number>(3);
  const [sessionRetention, setSessionRetention] = useState<string>("7d");

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/config/cron");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as CronData;
      setData(json);
      setMaxConcurrent(json.config.maxConcurrentRuns ?? 3);
      setSessionRetention(json.config.sessionRetention ?? "7d");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg(null);
    try {
      const res = await fetch("/api/config/cron", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          maxConcurrentRuns: maxConcurrent,
          sessionRetention,
        }),
      });
      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        throw new Error(json.error || `HTTP ${res.status}`);
      }
      setSaveMsg("Configuration sauvegardee");
      setTimeout(() => setSaveMsg(null), 3000);
    } catch (err) {
      setSaveMsg(err instanceof Error ? err.message : "Erreur de sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="max-w-4xl space-y-4">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const jobs = data.jobs;
  const totalJobs = jobs.length;
  const activeJobs = jobs.filter((j) => j.enabled).length;
  const errorJobs = jobs.filter(
    (j) => (j.state?.consecutiveErrors ?? 0) > 0,
  ).length;

  return (
    <div className="max-w-4xl space-y-6">
      {/* Stats row */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Taches planifiees
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-semibold">{totalJobs}</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-semibold text-green-500">
              {activeJobs}
            </p>
            <p className="text-xs text-muted-foreground">Actifs</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p
              className={`text-2xl font-semibold ${errorJobs > 0 ? "text-red-500" : "text-muted-foreground"}`}
            >
              {errorJobs}
            </p>
            <p className="text-xs text-muted-foreground">En erreur</p>
          </div>
        </div>
      </div>

      {/* Jobs table */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Jobs
        </h3>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {jobs.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground text-center">
              Aucun job configure
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Nom
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Agent
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Schedule
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Dernier run
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Erreurs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr
                      key={job.id}
                      className="border-b border-border last:border-0"
                    >
                      <td
                        className="px-4 py-2.5 text-sm max-w-[200px] truncate"
                        title={job.name}
                      >
                        {job.name}
                      </td>
                      <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                        {job.agentId}
                      </td>
                      <td className="px-4 py-2.5 font-mono text-xs">
                        {job.schedule?.expr ?? "-"}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground">
                        {job.state?.lastRunAtMs
                          ? relativeTime(job.state.lastRunAtMs)
                          : "-"}
                      </td>
                      <td className="px-4 py-2.5">{jobStatusBadge(job)}</td>
                      <td
                        className={`px-4 py-2.5 text-xs ${errorCountClass(errorCount(job))}`}
                      >
                        {errorCount(job)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Config section */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Configuration
        </h3>
        <div className="rounded-xl border border-border bg-card p-4 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="maxConcurrent"
                className="text-xs font-medium text-muted-foreground"
              >
                Max runs simultanes
              </label>
              <input
                id="maxConcurrent"
                type="number"
                min={1}
                max={20}
                value={maxConcurrent}
                onChange={(e) =>
                  setMaxConcurrent(parseInt(e.target.value, 10) || 1)
                }
                className="w-full rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="sessionRetention"
                className="text-xs font-medium text-muted-foreground"
              >
                Retention des sessions
              </label>
              <input
                id="sessionRetention"
                type="text"
                value={sessionRetention}
                onChange={(e) => setSessionRetention(e.target.value)}
                placeholder="7d"
                className="w-full rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Sauvegarder
            </button>
            {saveMsg && (
              <span
                className={`text-xs ${saveMsg.startsWith("Erreur") ? "text-red-400" : "text-green-500"}`}
              >
                {saveMsg}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
