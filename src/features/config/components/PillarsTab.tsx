"use client";

import { useState } from "react";
import { usePillars } from "@/features/dashboard/hooks/usePillars";
import { Pillar } from "@/lib/pillars";
import {
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Bot,
  User,
  Building2,
  Edit2,
  Check,
  X,
  Loader2,
} from "lucide-react";

const ICON_OPTIONS = ["User", "Building2", "Bot"];
const COLOR_PRESETS = [
  "#5a849a",
  "#7c5cbf",
  "#2da44e",
  "#e36209",
  "#dc3545",
  "#0969da",
];

type EditingPillar = Partial<Pillar> & { id: string; name: string };

export function PillarsTab() {
  const {
    pillars,
    loading,
    createPillar,
    updatePillar,
    deletePillar,
    refetch,
  } = usePillars();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<EditingPillar>({
    id: "",
    name: "",
    type: "business",
    color: "#7c5cbf",
    icon: "Building2",
    agents: [],
    order: 0,
    enabled: true,
  });
  const [saving, setSaving] = useState(false);

  const startAdd = () => {
    setForm({
      id: "",
      name: "",
      type: "business",
      color: "#7c5cbf",
      icon: "Building2",
      agents: [],
      order: pillars.length,
      enabled: true,
    });
    setAdding(true);
    setEditing(null);
  };

  const startEdit = (pillar: Pillar) => {
    setForm({ ...pillar });
    setEditing(pillar.id);
    setAdding(false);
  };

  const cancel = () => {
    setAdding(false);
    setEditing(null);
  };

  const handleSave = async () => {
    if (!form.id || !form.name) return;
    setSaving(true);
    try {
      if (adding) {
        await createPillar(form);
      } else if (editing) {
        await updatePillar(editing, form);
      }
      cancel();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce pilier ?")) return;
    setSaving(true);
    try {
      await deletePillar(id);
    } finally {
      setSaving(false);
    }
  };

  const handleMove = async (id: string, dir: "up" | "down") => {
    const idx = pillars.findIndex((p) => p.id === id);
    if (dir === "up" && idx === 0) return;
    if (dir === "down" && idx === pillars.length - 1) return;
    const other = pillars[dir === "up" ? idx - 1 : idx + 1];
    await Promise.all([
      updatePillar(id, { order: other.order }),
      updatePillar(other.id, { order: pillars[idx].order }),
    ]);
    refetch();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const FormRow = () => (
    <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">
            ID (unique, slug)
          </label>
          <input
            type="text"
            value={form.id}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                id: e.target.value.toLowerCase().replace(/\s+/g, "-"),
              }))
            }
            disabled={!!editing}
            className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm disabled:opacity-50"
            placeholder="biz-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">Nom</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            placeholder="Services IA"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground">Type:</label>
          {(["personal", "business"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setForm((f) => ({ ...f, type: t }))}
              className={`rounded px-2 py-0.5 text-xs font-medium border transition-colors ${form.type === t ? "border-primary bg-primary/10 text-primary" : "border-border"}`}
            >
              {t === "personal" ? "Personnel" : "Business"}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground">Couleur:</label>
          {COLOR_PRESETS.map((c) => (
            <button
              key={c}
              onClick={() => setForm((f) => ({ ...f, color: c }))}
              className={`h-5 w-5 rounded-full transition-transform ${form.color === c ? "scale-125 ring-2 ring-white/50" : ""}`}
              style={{ backgroundColor: c }}
            />
          ))}
          <input
            type="color"
            value={form.color ?? "#5a849a"}
            onChange={(e) => setForm((f) => ({ ...f, color: e.target.value }))}
            className="h-6 w-6 cursor-pointer rounded"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleSave}
          disabled={saving || !form.id || !form.name}
          className="flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm text-primary-foreground disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Check className="h-3.5 w-3.5" />
          )}
          {adding ? "Créer" : "Sauvegarder"}
        </button>
        <button
          onClick={cancel}
          className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
          Annuler
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Piliers ({pillars.length})
        </h3>
        <button
          onClick={startAdd}
          className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:border-primary hover:text-primary"
        >
          <Plus className="h-4 w-4" /> Ajouter
        </button>
      </div>

      {adding && <FormRow />}

      <div className="space-y-2">
        {pillars.map((pillar, idx) => (
          <div key={pillar.id}>
            {editing === pillar.id ? (
              <FormRow />
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <div
                  className="h-4 w-4 rounded-full shrink-0"
                  style={{ backgroundColor: pillar.color ?? "var(--primary)" }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{pillar.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {pillar.id} · {pillar.type} · {pillar.agents.length} agents
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleMove(pillar.id, "up")}
                    disabled={idx === 0}
                    className="rounded p-1 text-muted-foreground hover:text-foreground disabled:opacity-30"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleMove(pillar.id, "down")}
                    disabled={idx === pillars.length - 1}
                    className="rounded p-1 text-muted-foreground hover:text-foreground disabled:opacity-30"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => startEdit(pillar)}
                    className="rounded p-1 text-muted-foreground hover:text-foreground"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(pillar.id)}
                    className="rounded p-1 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {pillars.length === 0 && !adding && (
          <p className="text-center py-8 text-sm text-muted-foreground">
            Aucun pilier. Cliquez sur &quot;Ajouter&quot; pour créer le premier.
          </p>
        )}
      </div>
    </div>
  );
}
