"use client";

import { useEffect, useState } from "react";
import { WeeklyReport } from "@/features/watcher/components/WeeklyReport";

interface ReportFile {
  name: string;
  date?: string;
  size?: number;
}

export default function ReportsPage() {
  const [reportFiles, setReportFiles] = useState<ReportFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [reportData, setReportData] = useState<Record<string, unknown> | null>(null);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingReport, setLoadingReport] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReportList() {
      setLoadingList(true);
      setError(null);
      try {
        const res = await fetch("/api/watcher/reports");
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        const data = await res.json();
        // API returns { reports: [{file, size, modified}] } — normalize to ReportFile shape
        const raw: Array<{file?: string; name?: string; size?: number; modified?: string; date?: string}> =
          Array.isArray(data) ? data : (data.reports ?? data.files ?? []);
        const files: ReportFile[] = raw.map(r => ({
          name: r.name ?? r.file ?? "",
          date: r.date ?? r.modified,
          size: r.size,
        }));
        setReportFiles(files);
        if (files.length > 0) {
          setSelectedFile(files[0].name);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Impossible de charger la liste des rapports");
      } finally {
        setLoadingList(false);
      }
    }

    fetchReportList();
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setReportData(null);
      return;
    }

    async function fetchReport() {
      setLoadingReport(true);
      setError(null);
      try {
        const res = await fetch(`/api/watcher/reports?file=${encodeURIComponent(selectedFile!)}`);
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        const data = await res.json();
        setReportData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Impossible de charger le rapport");
        setReportData(null);
      } finally {
        setLoadingReport(false);
      }
    }

    fetchReport();
  }, [selectedFile]);

  return (
    <div className="space-y-6">
      {error && (
        <div className="glass-panel border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {loadingList ? (
        <div className="glass-panel p-8 text-center text-muted-foreground">
          Chargement de la liste des rapports...
        </div>
      ) : reportFiles.length === 0 ? (
        <div className="glass-panel p-12 text-center text-muted-foreground">
          <p className="text-base">Aucun rapport généré</p>
          <p className="mt-1 text-sm">Les rapports hebdomadaires apparaîtront ici une fois générés.</p>
        </div>
      ) : (
        <div className="flex gap-6">
          <aside className="w-64 shrink-0 space-y-1">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Fichiers ({reportFiles.length})
            </p>
            {reportFiles.map((file) => (
              <button
                key={file.name}
                onClick={() => setSelectedFile(file.name)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selectedFile === file.name
                    ? "bg-primary/20 text-foreground font-medium"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <span className="block truncate">{file.name}</span>
                {file.date && (
                  <span className="block text-xs text-muted-foreground">{file.date}</span>
                )}
              </button>
            ))}
          </aside>

          <div className="flex-1">
            {loadingReport ? (
              <div className="glass-panel p-8 text-center text-muted-foreground">
                Chargement du rapport...
              </div>
            ) : reportData ? (
              <WeeklyReport file={selectedFile ?? ""} content={typeof reportData?.content === "string" ? reportData.content : JSON.stringify(reportData, null, 2)} />
            ) : (
              <div className="glass-panel p-8 text-center text-muted-foreground">
                Sélectionnez un rapport
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
