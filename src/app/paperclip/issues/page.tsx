"use client";

import { useEffect, useState } from "react";
import {
  CircleDot,
  ArrowUp,
  Minus,
  ArrowDown,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  TextField,
  TextareaField,
  SelectField,
} from "@/components/paperclip/FormField";
import { useCompanyStore } from "@/stores/company-store";
import type { PcIssue, PcAgent, PcProject } from "@/types/paperclip";

const STATUS_CLASSES: Record<string, string> = {
  backlog: "bg-gray-500/15 text-gray-400",
  todo: "bg-yellow-500/15 text-yellow-400",
  in_progress: "bg-blue-500/15 text-blue-400",
  done: "bg-green-500/15 text-green-400",
};

const STATUS_LABEL: Record<string, string> = {
  backlog: "Backlog",
  todo: "Todo",
  in_progress: "In Progress",
  done: "Done",
};

const PRIORITY_ICON: Record<string, React.ReactNode> = {
  high: <ArrowUp className="h-3.5 w-3.5 text-red-400" />,
  medium: <Minus className="h-3.5 w-3.5 text-yellow-400" />,
  low: <ArrowDown className="h-3.5 w-3.5 text-blue-400" />,
};

function IssueModal({
  open,
  onClose,
  initial,
  companyId,
  agents,
  projects,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial?: Partial<PcIssue>;
  companyId: string;
  agents: PcAgent[];
  projects: PcProject[];
  onSave: (data: Partial<PcIssue>) => Promise<void>;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [status, setStatus] = useState<string>(initial?.status ?? "backlog");
  const [priority, setPriority] = useState<string>(
    initial?.priority ?? "medium",
  );
  const [assigneeAgentId, setAssigneeAgentId] = useState(
    initial?.assigneeAgentId ?? "",
  );
  const [projectId, setProjectId] = useState(initial?.projectId ?? "");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(initial?.title ?? "");
      setDescription(initial?.description ?? "");
      setStatus(initial?.status ?? "backlog");
      setPriority(initial?.priority ?? "medium");
      setAssigneeAgentId(initial?.assigneeAgentId ?? "");
      setProjectId(initial?.projectId ?? "");
    }
  }, [open, initial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({
        title,
        description: description || null,
        status: status as PcIssue["status"],
        priority: priority as PcIssue["priority"],
        assigneeAgentId: assigneeAgentId || null,
        projectId: projectId || null,
      });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initial?.id ? "Edit Issue" : "New Issue"}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Title"
          id="iss-title"
          value={title}
          onChange={setTitle}
          required
          placeholder="Describe the issue…"
        />
        <TextareaField
          label="Description"
          id="iss-desc"
          value={description}
          onChange={setDescription}
          placeholder="Additional details…"
          rows={4}
        />
        <div className="grid grid-cols-2 gap-3">
          <SelectField
            label="Status"
            id="iss-status"
            value={status}
            onChange={setStatus}
            options={[
              { value: "backlog", label: "Backlog" },
              { value: "todo", label: "Todo" },
              { value: "in_progress", label: "In Progress" },
              { value: "done", label: "Done" },
            ]}
          />
          <SelectField
            label="Priority"
            id="iss-priority"
            value={priority}
            onChange={setPriority}
            options={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SelectField
            label="Assign to Agent"
            id="iss-agent"
            value={assigneeAgentId}
            onChange={setAssigneeAgentId}
            options={[
              { value: "", label: "— Unassigned —" },
              ...agents.map((a) => ({ value: a.id, label: a.name })),
            ]}
          />
          <SelectField
            label="Project"
            id="iss-project"
            value={projectId}
            onChange={setProjectId}
            options={[
              { value: "", label: "— No project —" },
              ...projects.map((p) => ({ value: p.id, label: p.name })),
            ]}
          />
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" size="sm" loading={saving}>
            {initial?.id ? "Save" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default function IssuesPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [issues, setIssues] = useState<PcIssue[]>([]);
  const [agents, setAgents] = useState<PcAgent[]>([]);
  const [projects, setProjects] = useState<PcProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<PcIssue | null>(null);

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  const loadIssues = () => {
    if (!activeCompanyId) return;
    setLoading(true);
    const qs = statusFilter !== "all" ? `?status=${statusFilter}` : "";
    fetch(`/api/paperclip/companies/${activeCompanyId}/issues${qs}`)
      .then((r) => r.json())
      .then((data) => {
        setIssues(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadIssues();
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [activeCompanyId, statusFilter]);

  useEffect(() => {
    if (!activeCompanyId) return;
    Promise.all([
      fetch(`/api/paperclip/companies/${activeCompanyId}/agents`).then((r) =>
        r.json(),
      ),
      fetch(`/api/paperclip/companies/${activeCompanyId}/projects`).then((r) =>
        r.json(),
      ),
    ])
      .then(([a, p]) => {
        setAgents(Array.isArray(a) ? a : []);
        setProjects(Array.isArray(p) ? p : []);
      })
      .catch(() => {});
  }, [activeCompanyId]);

  const createIssue = async (data: Partial<PcIssue>) => {
    const res = await fetch(
      `/api/paperclip/companies/${activeCompanyId}/issues`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    if (!res.ok) throw new Error(await res.text());
    loadIssues();
  };

  const updateIssue = async (data: Partial<PcIssue>) => {
    const res = await fetch(`/api/paperclip/issues/${editTarget!.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    loadIssues();
  };

  const deleteIssue = async (id: string) => {
    if (!confirm("Delete this issue?")) return;
    await fetch(`/api/paperclip/issues/${id}`, { method: "DELETE" });
    loadIssues();
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Issues</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeCompany?.name} · {issues.length} issue
            {issues.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex gap-1">
            {["all", "backlog", "todo", "in_progress", "done"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${statusFilter === s ? "bg-primary/15 text-primary" : "border border-border text-muted-foreground hover:bg-surface-2 hover:text-foreground"}`}
              >
                {s === "all" ? "All" : (STATUS_LABEL[s] ?? s)}
              </button>
            ))}
          </div>
          <Button size="sm" onClick={() => setCreateOpen(true)}>
            <Plus className="h-4 w-4" /> New Issue
          </Button>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading issues…
        </div>
      )}

      {!loading && (
        <div className="space-y-1">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3 hover:border-border/70 transition-colors"
            >
              <span className="text-xs text-muted-foreground/60 font-mono w-16 shrink-0">
                {issue.identifier}
              </span>
              <span className="shrink-0">{PRIORITY_ICON[issue.priority]}</span>
              <p className="flex-1 min-w-0 text-sm text-foreground truncate">
                {issue.title}
              </p>
              {issue.assigneeAgentId && (
                <span className="shrink-0 text-xs text-muted-foreground">
                  {agents.find((a) => a.id === issue.assigneeAgentId)?.name ??
                    "—"}
                </span>
              )}
              <span
                className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${STATUS_CLASSES[issue.status] ?? "bg-gray-500/15 text-gray-400"}`}
              >
                {STATUS_LABEL[issue.status] ?? issue.status}
              </span>
              <div className="hidden group-hover:flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setEditTarget(issue)}
                  className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-surface-2"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => deleteIssue(issue.id)}
                  className="p-1 rounded text-muted-foreground hover:text-destructive hover:bg-surface-2"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
          {issues.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <CircleDot className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">No issues found</p>
            </div>
          )}
        </div>
      )}

      <IssueModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        companyId={activeCompanyId ?? ""}
        agents={agents}
        projects={projects}
        onSave={createIssue}
      />
      <IssueModal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        initial={editTarget ?? undefined}
        companyId={activeCompanyId ?? ""}
        agents={agents}
        projects={projects}
        onSave={updateIssue}
      />
    </div>
  );
}
