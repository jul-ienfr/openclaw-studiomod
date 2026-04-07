"use client";

import { useEffect, useState } from "react";
import { FolderOpen, Plus, Pencil, Trash2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  TextField,
  TextareaField,
  SelectField,
} from "@/components/paperclip/FormField";
import { useCompanyStore } from "@/stores/company-store";
import type { PcProject } from "@/types/paperclip";

const STATUS_CLASSES: Record<string, string> = {
  backlog: "bg-gray-500/15 text-gray-400",
  active: "bg-blue-500/15 text-blue-400",
  done: "bg-green-500/15 text-green-400",
};

function ProjectModal({
  open,
  onClose,
  initial,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial?: Partial<PcProject>;
  onSave: (data: Partial<PcProject>) => Promise<void>;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [status, setStatus] = useState<string>(initial?.status ?? "backlog");
  const [color, setColor] = useState(initial?.color ?? "#6366f1");
  const [targetDate, setTargetDate] = useState(
    initial?.targetDate?.slice(0, 10) ?? "",
  );
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setName(initial?.name ?? "");
      setDescription(initial?.description ?? "");
      setStatus(initial?.status ?? "backlog");
      setColor(initial?.color ?? "#6366f1");
      setTargetDate(initial?.targetDate?.slice(0, 10) ?? "");
    }
  }, [open, initial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({
        name,
        description: description || null,
        status: status as PcProject["status"],
        color,
        targetDate: targetDate || null,
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
      title={initial?.id ? "Edit Project" : "New Project"}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Name"
          id="proj-name"
          value={name}
          onChange={setName}
          required
          placeholder="Project name"
        />
        <TextareaField
          label="Description"
          id="proj-desc"
          value={description}
          onChange={setDescription}
          placeholder="What is this project about?"
        />
        <div className="grid grid-cols-2 gap-3">
          <SelectField
            label="Status"
            id="proj-status"
            value={status}
            onChange={setStatus}
            options={[
              { value: "backlog", label: "Backlog" },
              { value: "active", label: "Active" },
              { value: "done", label: "Done" },
            ]}
          />
          <TextField
            label="Target Date"
            id="proj-date"
            type="date"
            value={targetDate}
            onChange={setTargetDate}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="proj-color"
            className="text-xs font-medium text-foreground"
          >
            Color
          </label>
          <div className="flex items-center gap-2">
            <input
              id="proj-color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-9 w-12 cursor-pointer rounded border border-border bg-transparent p-0.5"
            />
            <span className="text-xs text-muted-foreground font-mono">
              {color}
            </span>
          </div>
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

export default function ProjectsPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [projects, setProjects] = useState<PcProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<PcProject | null>(null);

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  const load = () => {
    if (!activeCompanyId) return;
    setLoading(true);
    fetch(`/api/paperclip/companies/${activeCompanyId}/projects`)
      .then((r) => r.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      load();
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [activeCompanyId]);

  const createProject = async (data: Partial<PcProject>) => {
    const res = await fetch(
      `/api/paperclip/companies/${activeCompanyId}/projects`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    if (!res.ok) throw new Error(await res.text());
    load();
  };

  const updateProject = async (data: Partial<PcProject>) => {
    const res = await fetch(`/api/paperclip/projects/${editTarget!.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    load();
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Delete this project? All its issues will become unlinked."))
      return;
    await fetch(`/api/paperclip/projects/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeCompany?.name} · {projects.length} project
            {projects.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button size="sm" onClick={() => setCreateOpen(true)}>
          <Plus className="h-4 w-4" /> New Project
        </Button>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading projects…
        </div>
      )}

      {!loading && (
        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface-1 px-5 py-4"
            >
              <div
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: project.color ?? "#6366f1" }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground">{project.name}</h3>
                {project.description && (
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {project.description}
                  </p>
                )}
              </div>
              {project.targetDate && (
                <span className="text-xs text-muted-foreground shrink-0">
                  {new Date(project.targetDate).toLocaleDateString()}
                </span>
              )}
              <span
                className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${STATUS_CLASSES[project.status] ?? "bg-gray-500/15 text-gray-400"}`}
              >
                {project.status}
              </span>
              <div className="hidden group-hover:flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setEditTarget(project)}
                  className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-surface-2"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="p-1 rounded text-muted-foreground hover:text-destructive hover:bg-surface-2"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <FolderOpen className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">No projects yet</p>
            </div>
          )}
        </div>
      )}

      <ProjectModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSave={createProject}
      />
      <ProjectModal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        initial={editTarget ?? undefined}
        onSave={updateProject}
      />
    </div>
  );
}
