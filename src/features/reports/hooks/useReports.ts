"use client";

import { useState, useEffect, useCallback } from "react";
import type { Report, ReportStatus } from "../types";

type UseReportsOptions = {
  agent?: string;
  status?: ReportStatus;
};

type UseReportsResult = {
  reports: Report[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
};

export function useReports(options?: UseReportsOptions): UseReportsResult {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReports = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (options?.agent) params.set("agent", options.agent);
      if (options?.status) params.set("status", options.status);

      const qs = params.toString();
      const url = `/api/reports${qs ? `?${qs}` : ""}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        setError(data.message ?? data.error ?? `Erreur ${res.status}`);
        setReports(data.reports ?? []);
        return;
      }

      setReports(data.reports ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur reseau");
      setReports([]);
    } finally {
      setLoading(false);
    }
  }, [options?.agent, options?.status]);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const refresh = useCallback(() => {
    fetchReports();
  }, [fetchReports]);

  return { reports, loading, error, refresh };
}
