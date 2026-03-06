"use client";

import { useState, useEffect, useCallback } from "react";
import type { CronJob, CronConfig, CronStats } from "../types";

type UseCronJobsResult = {
  jobs: CronJob[];
  config: CronConfig | null;
  stats: CronStats;
  loading: boolean;
  error: string | null;
  refresh: () => void;
};

function computeStats(jobs: CronJob[]): CronStats {
  let ok = 0;
  let error = 0;
  let neverRan = 0;
  let disabled = 0;

  for (const job of jobs) {
    if (!job.enabled) {
      disabled++;
      continue;
    }
    const status = resolveStatus(job);
    if (status === "ok") ok++;
    else if (status === "error") error++;
    else neverRan++;
  }

  return { total: jobs.length, ok, error, neverRan, disabled };
}

export function resolveStatus(job: CronJob): "ok" | "error" | "never" {
  if (!job.state) return "never";
  const s = job.state.lastStatus ?? job.state.lastRunStatus;
  if (!s || s === "never") return "never";
  if (s === "ok") return "ok";
  return "error";
}

export function useCronJobs(): UseCronJobsResult {
  const [jobs, setJobs] = useState<CronJob[]>([]);
  const [config, setConfig] = useState<CronConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/config/cron");
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? data.message ?? `Erreur ${res.status}`);
        setJobs([]);
        setConfig(null);
        return;
      }

      setJobs(data.jobs ?? []);
      setConfig(data.config ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur reseau");
      setJobs([]);
      setConfig(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const stats = computeStats(jobs);

  return { jobs, config, stats, loading, error, refresh: fetchJobs };
}
