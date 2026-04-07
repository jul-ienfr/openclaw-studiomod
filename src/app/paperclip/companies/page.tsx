"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building2, Users, FolderOpen, Plus, Pencil } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { TextField, TextareaField } from "@/components/paperclip/FormField";
import type { PcCompany } from "@/types/paperclip";

function CompanyModal({
  open,
  onClose,
  initial,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial?: Partial<PcCompany>;
  onSave: (data: Partial<PcCompany>) => Promise<void>;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [brandColor, setBrandColor] = useState(
    initial?.brandColor ?? "#6366f1",
  );
  const [issuePrefix, setIssuePrefix] = useState(initial?.issuePrefix ?? "");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setName(initial?.name ?? "");
      setDescription(initial?.description ?? "");
      setBrandColor(initial?.brandColor ?? "#6366f1");
      setIssuePrefix(initial?.issuePrefix ?? "");
    }
  }, [open, initial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave({
        name,
        description: description || null,
        brandColor,
        issuePrefix: issuePrefix || undefined,
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
      title={initial?.id ? "Edit Company" : "New Company"}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Name"
          id="co-name"
          value={name}
          onChange={setName}
          required
          placeholder="Zero Human Company"
        />
        <TextareaField
          label="Description"
          id="co-desc"
          value={description}
          onChange={setDescription}
          placeholder="Describe this company…"
        />
        <div className="grid grid-cols-2 gap-3">
          <TextField
            label="Issue Prefix"
            id="co-prefix"
            value={issuePrefix}
            onChange={(v) => setIssuePrefix(v.toUpperCase())}
            placeholder="ZHC"
            hint="Short uppercase code (e.g. ZHC)"
          />
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="co-color"
              className="text-xs font-medium text-foreground"
            >
              Brand Color
            </label>
            <div className="flex items-center gap-2">
              <input
                id="co-color"
                type="color"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="h-9 w-12 cursor-pointer rounded border border-border bg-transparent p-0.5"
              />
              <span className="text-xs text-muted-foreground font-mono">
                {brandColor}
              </span>
            </div>
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

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<PcCompany[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<PcCompany | null>(null);

  const load = () => {
    setLoading(true);
    fetch("/api/paperclip/companies")
      .then((r) => r.json())
      .then((data) => {
        setCompanies(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      load();
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const createCompany = async (data: Partial<PcCompany>) => {
    const res = await fetch("/api/paperclip/companies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    load();
  };

  const updateCompany = async (data: Partial<PcCompany>) => {
    const res = await fetch(`/api/paperclip/companies/${editTarget!.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
    load();
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Loading companies…
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-64 text-destructive text-sm">
        Error: {error}
      </div>
    );

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Companies</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {companies.length} compan{companies.length !== 1 ? "ies" : "y"}
          </p>
        </div>
        <Button size="sm" onClick={() => setCreateOpen(true)}>
          <Plus className="h-4 w-4" /> New Company
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div
            key={company.id}
            className="group rounded-xl border border-border bg-surface-1 p-5 relative"
          >
            <Link
              href={`/paperclip/companies/${company.id}`}
              className="flex items-start gap-3"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: company.brandColor ?? "#6366f1" }}
              >
                <Building2 className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                {company.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                    {company.description}
                  </p>
                )}
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {company.issuePrefix}
                  </span>
                  <span className="flex items-center gap-1">
                    <FolderOpen className="h-3 w-3" />
                    {company.issueCounter} issues
                  </span>
                </div>
              </div>
            </Link>
            <button
              onClick={() => setEditTarget(company)}
              className="absolute right-3 top-3 hidden group-hover:flex items-center justify-center h-7 w-7 rounded-lg border border-border bg-surface-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {companies.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Building2 className="h-10 w-10 mb-3 opacity-30" />
          <p className="text-sm">No companies yet</p>
        </div>
      )}

      <CompanyModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSave={createCompany}
      />
      <CompanyModal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        initial={editTarget ?? undefined}
        onSave={updateCompany}
      />
    </div>
  );
}
