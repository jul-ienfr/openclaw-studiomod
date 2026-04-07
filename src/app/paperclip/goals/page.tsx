"use client";

import { useEffect, useState } from "react";
import { Target, Plus, ChevronRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  TextField,
  TextareaField,
  SelectField,
} from "@/components/paperclip/FormField";
import { useCompanyStore } from "@/stores/company-store";
import type { PcGoal } from "@/types/paperclip";

const LEVEL_CLASSES: Record<string, string> = {
  strategic: "bg-purple-500/15 text-purple-400",
  epic: "bg-blue-500/15 text-blue-400",
  task: "bg-gray-500/15 text-gray-400",
};

const STATUS_CLASSES: Record<string, string> = {
  planned: "bg-gray-500/15 text-gray-400",
  in_progress: "bg-blue-500/15 text-blue-400",
  completed: "bg-green-500/15 text-green-400",
};

const STATUS_LABEL: Record<string, string> = {
  planned: "Planned",
  in_progress: "In Progress",
  completed: "Completed",
};

function GoalModal({
  open,
  onClose,
  initial,
  goals,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial?: Partial<PcGoal>;
  goals: PcGoal[];
  onSave: (data: Partial<PcGoal>) => Promise<void>;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [level, setLevel] = useState<string>(initial?.level ?? "epic");
  const [status, setStatus] = useState<string>(initial?.status ?? "planned");
  const [parentId, setParentId] = useState(initial?.parentId ?? "");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(initial?.title ?? "");
      setDescription(initial?.description ?? "");
      setLevel(initial?.level ?? "epic");
      setStatus(initial?.status ?? "planned");
      setParentId(initial?.parentId ?? "");
    }
  }, [open, initial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({
        title,
        description: description || null,
        level: level as PcGoal["level"],
        status: status as PcGoal["status"],
        parentId: parentId || null,
      });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const parentOptions = goals.filter((g) => g.id !== initial?.id);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initial?.id ? "Edit Goal" : "New Goal"}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Title"
          id="goal-title"
          value={title}
          onChange={setTitle}
          required
          placeholder="Goal title"
        />
        <TextareaField
          label="Description"
          id="goal-desc"
          value={description}
          onChange={setDescription}
          placeholder="What does this goal achieve?"
        />
        <div className="grid grid-cols-2 gap-3">
          <SelectField
            label="Level"
            id="goal-level"
            value={level}
            onChange={setLevel}
            options={[
              { value: "strategic", label: "Strategic" },
              { value: "epic", label: "Epic" },
              { value: "task", label: "Task" },
            ]}
          />
          <SelectField
            label="Status"
            id="goal-status"
            value={status}
            onChange={setStatus}
            options={[
              { value: "planned", label: "Planned" },
              { value: "in_progress", label: "In Progress" },
              { value: "completed", label: "Completed" },
            ]}
          />
        </div>
        {parentOptions.length > 0 && (
          <SelectField
            label="Parent Goal"
            id="goal-parent"
            value={parentId}
            onChange={setParentId}
            options={[
              { value: "", label: "— No parent —" },
              ...parentOptions.map((g) => ({ value: g.id, label: g.title })),
            ]}
          />
        )}
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

function GoalTree({ goals, level = 0 }: { goals: PcGoal[]; level?: number }) {
  return (
    <>
      {goals.map((goal) => (
        <GoalRow key={goal.id} goal={goal} level={level} allGoals={goals} />
      ))}
    </>
  );
}

function GoalRow({
  goal,
  level,
  allGoals,
}: {
  goal: PcGoal;
  level: number;
  allGoals: PcGoal[];
}) {
  const [expanded, setExpanded] = useState(true);
  const children = allGoals.filter((g) => g.parentId === goal.id);

  return (
    <div>
      <div
        className={`flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3 mb-1 ${level > 0 ? "ml-" + level * 6 : ""}`}
        style={{ marginLeft: level * 24 }}
      >
        {children.length > 0 ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`}
            />
          </button>
        ) : (
          <span className="w-4 shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{goal.title}</p>
          {goal.description && (
            <p className="text-xs text-muted-foreground truncate mt-0.5">
              {goal.description}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${LEVEL_CLASSES[goal.level] ?? ""}`}
        >
          {goal.level}
        </span>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${STATUS_CLASSES[goal.status] ?? ""}`}
        >
          {STATUS_LABEL[goal.status] ?? goal.status}
        </span>
      </div>
      {expanded && children.length > 0 && (
        <div>
          {children.map((child) => (
            <GoalRow
              key={child.id}
              goal={child}
              level={level + 1}
              allGoals={allGoals}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GoalsPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [goals, setGoals] = useState<PcGoal[]>([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<PcGoal | null>(null);

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  const load = () => {
    if (!activeCompanyId) return;
    setLoading(true);
    fetch(`/api/paperclip/companies/${activeCompanyId}/goals`)
      .then((r) => r.json())
      .then((data) => {
        setGoals(Array.isArray(data) ? data : []);
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

  const createGoal = async (data: Partial<PcGoal>) => {
    const res = await fetch(
      `/api/paperclip/companies/${activeCompanyId}/goals`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    if (!res.ok) throw new Error(await res.text());
    load();
  };

  const updateGoal = async (data: Partial<PcGoal>) => {
    const res = await fetch(`/api/paperclip/goals/${editTarget!.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    load();
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Goals</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeCompany?.name} · {goals.length} goal
            {goals.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button size="sm" onClick={() => setCreateOpen(true)}>
          <Plus className="h-4 w-4" /> New Goal
        </Button>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading goals…
        </div>
      )}

      {!loading && (
        <div>
          {goals.length > 0 ? (
            <GoalTree goals={goals} />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Target className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">No goals yet</p>
            </div>
          )}
        </div>
      )}

      <GoalModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        goals={goals}
        onSave={createGoal}
      />
      <GoalModal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        initial={editTarget ?? undefined}
        goals={goals}
        onSave={updateGoal}
      />
    </div>
  );
}
