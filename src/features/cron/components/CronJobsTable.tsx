"use client";

import { useState, useRef, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  Ban,
  AlertTriangle,
  Bot,
  Timer,
  MoreVertical,
  Pencil,
  Play,
  Power,
  Trash2,
} from "lucide-react";
import type { CronJob } from "../types";
import { resolveStatus } from "../hooks/useCronJobs";
import { Modal } from "@/components/ui/Modal";
import type { AvailableModel } from "@/app/api/models/route";
import { useSharedGatewayConnection } from "@/lib/gateway/GatewayConnectionProvider";
import { runCronJobNow } from "@/lib/cron/types";

type CronJobsTableProps = {
  jobs: CronJob[];
  onRefresh: () => void;
};

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSec = seconds % 60;
  return `${minutes}m${remainingSec > 0 ? ` ${remainingSec}s` : ""}`;
}

function formatDate(ms: number | undefined): string {
  if (!ms) return "--";
  const date = new Date(ms);
  const now = Date.now();
  const diff = now - ms;

  if (diff < 60_000) return "A l'instant";
  if (diff < 3_600_000) return `Il y a ${Math.floor(diff / 60_000)} min`;
  if (diff < 86_400_000) return `Il y a ${Math.floor(diff / 3_600_000)}h`;

  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatNextRun(ms: number | undefined): string {
  if (!ms) return "--";
  const now = Date.now();
  const diff = ms - now;

  if (diff < 0) return "En retard";
  if (diff < 60_000) return "Imminent";
  if (diff < 3_600_000) return `Dans ${Math.floor(diff / 60_000)} min`;
  if (diff < 86_400_000) return `Dans ${Math.floor(diff / 3_600_000)}h`;

  const date = new Date(ms);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusBadge({ job }: { job: CronJob }) {
  if (!job.enabled) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted-foreground/10 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
        <Ban className="h-2.5 w-2.5" strokeWidth={2} />
        Desactive
      </span>
    );
  }

  const status = resolveStatus(job);

  if (status === "ok") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
        <CheckCircle className="h-2.5 w-2.5" strokeWidth={2} />
        OK
      </span>
    );
  }

  if (status === "error") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-semibold text-red-500">
        <XCircle className="h-2.5 w-2.5" strokeWidth={2} />
        Erreur
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/15 px-2 py-0.5 text-[10px] font-semibold text-yellow-500">
      <Clock className="h-2.5 w-2.5" strokeWidth={2} />
      Jamais
    </span>
  );
}

// ─── Dropdown menu ─────────────────────────────────────────────────────────────

function ActionsDropdown({
  job,
  onEdit,
  onRun,
  onToggle,
  onDelete,
}: {
  job: CronJob;
  onEdit: () => void;
  onRun: () => void;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded p-1 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
        aria-label="Actions"
      >
        <MoreVertical className="h-4 w-4" strokeWidth={1.75} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-44 rounded-lg border border-border bg-card shadow-xl">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
            className="flex w-full items-center gap-2 rounded-t-lg px-3 py-2 text-xs text-foreground hover:bg-surface-2"
          >
            <Pencil
              className="h-3.5 w-3.5 text-muted-foreground"
              strokeWidth={1.75}
            />
            Modifier
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onRun();
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-xs text-emerald-500 hover:bg-emerald-500/10"
          >
            <Play className="h-3.5 w-3.5" strokeWidth={1.75} />
            Lancer maintenant
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onToggle();
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-surface-2"
          >
            <Power
              className="h-3.5 w-3.5 text-muted-foreground"
              strokeWidth={1.75}
            />
            {job.enabled ? "Désactiver" : "Activer"}
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
            className="flex w-full items-center gap-2 rounded-b-lg px-3 py-2 text-xs text-red-500 hover:bg-red-500/10"
          >
            <Trash2 className="h-3.5 w-3.5" strokeWidth={1.75} />
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Edit Modal ────────────────────────────────────────────────────────────────

type EditFormData = {
  name: string;
  scheduleExpr: string;
  scheduleTz: string;
  agentId: string;
  model: string;
  message: string;
  timeoutSeconds: string;
};

function EditModal({
  job,
  onClose,
  onSave,
}: {
  job: CronJob;
  onClose: () => void;
  onSave: (data: EditFormData) => Promise<void>;
}) {
  const [form, setForm] = useState<EditFormData>({
    name: job.name,
    scheduleExpr: job.schedule.expr,
    scheduleTz: job.schedule.tz ?? "",
    agentId: job.agentId,
    model: job.payload?.model ?? "",
    message: job.payload?.message ?? "",
    timeoutSeconds: String(job.payload?.timeoutSeconds ?? ""),
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableModels, setAvailableModels] = useState<AvailableModel[]>([]);

  useEffect(() => {
    fetch("/api/models")
      .then((r) => r.json())
      .then((data: { availableModels?: AvailableModel[] }) => {
        setAvailableModels(data.availableModels ?? []);
      })
      .catch(() => {});
  }, []);

  function set(field: keyof EditFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";
  const labelClass = "block text-xs font-medium text-muted-foreground mb-1";

  return (
    <Modal open onClose={onClose} title={`Modifier — ${job.name}`} size="md">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className={labelClass}>Nom</label>
          <input
            className={inputClass}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Expression schedule (cron)</label>
            <input
              className={inputClass}
              value={form.scheduleExpr}
              onChange={(e) => set("scheduleExpr", e.target.value)}
              placeholder="*/30 * * * *"
              required
            />
          </div>
          <div>
            <label className={labelClass}>Timezone</label>
            <input
              className={inputClass}
              value={form.scheduleTz}
              onChange={(e) => set("scheduleTz", e.target.value)}
              placeholder="Europe/Paris"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Agent ID</label>
          <input
            className={inputClass}
            value={form.agentId}
            onChange={(e) => set("agentId", e.target.value)}
            required
          />
        </div>

        <div>
          <label className={labelClass}>Modèle (payload.model)</label>
          <select
            className={inputClass}
            value={form.model}
            onChange={(e) => set("model", e.target.value)}
            style={{
              backgroundColor: "var(--surface-2)",
              color: "var(--foreground)",
            }}
          >
            <option value="">
              — hérite du modèle interactif de l&apos;agent —
            </option>
            {availableModels.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
            {/* Si le modèle actuel n'est pas dans la liste, l'ajouter quand même */}
            {form.model &&
              !availableModels.some((m) => m.id === form.model) && (
                <option value={form.model}>{form.model}</option>
              )}
          </select>
        </div>

        <div>
          <label className={labelClass}>Message / Prompt</label>
          <textarea
            className={`${inputClass} resize-y min-h-[80px]`}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Message envoyé à l'agent..."
          />
        </div>

        <div>
          <label className={labelClass}>Timeout (secondes)</label>
          <input
            type="number"
            className={inputClass}
            value={form.timeoutSeconds}
            onChange={(e) => set("timeoutSeconds", e.target.value)}
            placeholder="300"
            min={1}
          />
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}

        <div className="flex justify-end gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-surface-2"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

// ─── Delete Confirm Modal ──────────────────────────────────────────────────────

function DeleteModal({
  job,
  onClose,
  onConfirm,
}: {
  job: CronJob;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConfirm() {
    setDeleting(true);
    setError(null);
    try {
      await onConfirm();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <Modal open onClose={onClose} title="Supprimer le cron job" size="sm">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Supprimer définitivement{" "}
          <span className="font-semibold text-foreground">{job.name}</span> ?
          Cette action est irréversible.
        </p>

        {error && <p className="text-xs text-red-500">{error}</p>}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-surface-2"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={deleting}
            className="rounded-lg bg-red-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-red-600 disabled:opacity-50"
          >
            {deleting ? "Suppression..." : "Supprimer"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─── Main Table ────────────────────────────────────────────────────────────────

export function CronJobsTable({ jobs, onRefresh }: CronJobsTableProps) {
  const [editingJob, setEditingJob] = useState<CronJob | null>(null);
  const [deletingJob, setDeletingJob] = useState<CronJob | null>(null);
  const [runningJobId, setRunningJobId] = useState<string | null>(null);
  const { client } = useSharedGatewayConnection();

  async function handleRun(job: CronJob) {
    if (runningJobId) return;
    setRunningJobId(job.id);
    try {
      await runCronJobNow(client, job.id);
      setTimeout(onRefresh, 1500);
    } catch {
      // silent — gateway may return an error if job is already running
    } finally {
      setRunningJobId(null);
    }
  }

  async function handleToggle(job: CronJob) {
    await fetch(`/api/config/cron/${job.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: !job.enabled }),
    });
    onRefresh();
  }

  async function handleSave(job: CronJob, data: EditFormData) {
    const payload: Record<string, unknown> = {
      name: data.name,
      agentId: data.agentId,
      schedule: {
        ...job.schedule,
        expr: data.scheduleExpr,
        ...(data.scheduleTz ? { tz: data.scheduleTz } : {}),
      },
    };

    if (job.payload) {
      payload.payload = {
        ...job.payload,
        ...(data.model ? { model: data.model } : { model: undefined }),
        ...(data.message ? { message: data.message } : {}),
        ...(data.timeoutSeconds
          ? { timeoutSeconds: Number(data.timeoutSeconds) }
          : {}),
      };
    } else if (data.model) {
      payload.payload = { model: data.model };
    }

    const res = await fetch(`/api/config/cron/${job.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const json = (await res.json()) as { error?: string };
      throw new Error(json.error ?? "Erreur serveur");
    }

    onRefresh();
  }

  async function handleDelete(job: CronJob) {
    const res = await fetch(`/api/config/cron/${job.id}`, { method: "DELETE" });
    if (!res.ok) {
      const json = (await res.json()) as { error?: string };
      throw new Error(json.error ?? "Erreur serveur");
    }
    onRefresh();
  }

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20">
        <Clock
          className="h-10 w-10 text-muted-foreground/50"
          strokeWidth={1.25}
        />
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">
            Aucun job configure
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Les cron jobs configures dans cron/jobs.json apparaitront ici.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium text-muted-foreground">
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Agent</th>
              <th className="px-4 py-3">Modèle</th>
              <th className="px-4 py-3">Schedule</th>
              <th className="px-4 py-3">Dernier run</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3 text-center">Erreurs</th>
              <th className="px-4 py-3">Prochain run</th>
              <th className="px-4 py-3">Duree</th>
              <th className="px-4 py-3 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => {
              const status = resolveStatus(job);
              const isError = status === "error" && job.enabled;
              const isDisabled = !job.enabled;

              return (
                <tr
                  key={job.id}
                  className={`border-b border-border transition-colors hover:bg-surface-2/50 ${
                    isError ? "bg-red-500/5" : isDisabled ? "opacity-50" : ""
                  }`}
                >
                  {/* Name */}
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-foreground truncate max-w-[280px]">
                        {job.name}
                      </span>
                      {job.state?.lastError && (
                        <span className="flex items-center gap-1 text-[10px] text-red-500">
                          <AlertTriangle
                            className="h-2.5 w-2.5 shrink-0"
                            strokeWidth={2}
                          />
                          <span className="truncate max-w-[260px]">
                            {job.state.lastError}
                          </span>
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Agent */}
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      <Bot className="h-2.5 w-2.5" strokeWidth={2} />
                      {job.agentId}
                    </span>
                  </td>

                  {/* Model */}
                  <td className="px-4 py-3">
                    {job.payload?.model ? (
                      <button
                        type="button"
                        title={job.payload.model}
                        onClick={() => setEditingJob(job)}
                        className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-violet-400 hover:bg-violet-500/20 transition-colors max-w-[180px] truncate"
                      >
                        {job.payload.model.split("/").pop()}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setEditingJob(job)}
                        className="text-[10px] text-amber-500/80 hover:text-amber-500 transition-colors"
                        title="Aucun modèle défini — hérite du modèle interactif de l'agent"
                      >
                        hérité ⚠
                      </button>
                    )}
                  </td>

                  {/* Schedule */}
                  <td className="px-4 py-3">
                    <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs font-mono text-muted-foreground">
                      {job.schedule.expr}
                    </code>
                  </td>

                  {/* Last run */}
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {formatDate(job.state?.lastRunAtMs)}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <StatusBadge job={job} />
                  </td>

                  {/* Consecutive errors */}
                  <td className="px-4 py-3 text-center">
                    {job.state?.consecutiveErrors > 0 ? (
                      <span className="inline-flex items-center justify-center rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-bold text-red-500 min-w-[24px]">
                        {job.state.consecutiveErrors}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">0</span>
                    )}
                  </td>

                  {/* Next run */}
                  <td className="px-4 py-3">
                    {job.enabled ? (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Timer className="h-3 w-3" strokeWidth={1.75} />
                        {formatNextRun(job.state?.nextRunAtMs)}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">--</span>
                    )}
                  </td>

                  {/* Duration */}
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {job.state?.lastDurationMs
                      ? formatDuration(job.state.lastDurationMs)
                      : "--"}
                  </td>

                  {/* Actions */}
                  <td className="px-2 py-3">
                    <ActionsDropdown
                      job={job}
                      onEdit={() => setEditingJob(job)}
                      onRun={() => handleRun(job)}
                      onToggle={() => handleToggle(job)}
                      onDelete={() => setDeletingJob(job)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingJob && (
        <EditModal
          job={editingJob}
          onClose={() => setEditingJob(null)}
          onSave={(data) => handleSave(editingJob, data)}
        />
      )}

      {/* Delete Modal */}
      {deletingJob && (
        <DeleteModal
          job={deletingJob}
          onClose={() => setDeletingJob(null)}
          onConfirm={() => handleDelete(deletingJob)}
        />
      )}
    </>
  );
}
