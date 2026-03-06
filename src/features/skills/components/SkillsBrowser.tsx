"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Puzzle, Search, Server, Store } from "lucide-react";
import { toast } from "sonner";
import type { SkillCategory, SkillDefinition } from "../types";
import { loadSkillsRegistry } from "../skillsRegistry";
import {
  loadInstalledSkills,
  persistInstalledSkills,
  installSkill,
  uninstallSkill,
  isSkillInstalled,
} from "../skillsStore";
import { SkillCard } from "./SkillCard";
import { SkillDetailModal } from "./SkillDetailModal";
import { RealSkillsBrowser } from "./RealSkillsBrowser";

const CATEGORIES: { value: SkillCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "communication", label: "Communication" },
  { value: "productivity", label: "Productivity" },
  { value: "data", label: "Data" },
  { value: "development", label: "Development" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "security", label: "Security" },
];

type ViewMode = "installed" | "marketplace";

export const SkillsBrowser = () => {
  const t = useTranslations("skills");
  const [viewMode, setViewMode] = useState<ViewMode>("installed");
  const [installed, setInstalled] = useState(loadInstalledSkills);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<SkillCategory | "all">("all");
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [registrySkills, setRegistrySkills] = useState<SkillDefinition[]>([]);

  // Load skills from API when marketplace view is shown
  useEffect(() => {
    if (viewMode === "marketplace") {
      void loadSkillsRegistry().then((skills) => setRegistrySkills(skills));
    }
  }, [viewMode]);

  const filtered = useMemo(() => {
    let skills = registrySkills;
    if (category !== "all") {
      skills = skills.filter((s) => s.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      skills = skills.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((tag) => tag.toLowerCase().includes(q)),
      );
    }
    return skills;
  }, [registrySkills, search, category]);

  const selectedSkill = selectedSkillId
    ? (registrySkills.find((s) => s.id === selectedSkillId) ?? null)
    : null;

  const handleInstall = useCallback(
    (skillId: string) => {
      const next = installSkill(installed, skillId);
      setInstalled(next);
      persistInstalledSkills(next);
      const skill = registrySkills.find((s) => s.id === skillId);
      toast.success(`${skill?.name ?? skillId} installed`);
    },
    [installed, registrySkills],
  );

  const handleUninstall = useCallback(
    (skillId: string) => {
      const next = uninstallSkill(installed, skillId);
      setInstalled(next);
      persistInstalledSkills(next);
      toast.success("Skill removed");
    },
    [installed],
  );

  // Helper to check active view mode without TypeScript narrowing
  const isActive = (mode: ViewMode) => viewMode === mode;

  // Show RealSkillsBrowser when in "installed" mode
  if (isActive("installed")) {
    return (
      <div className="flex min-h-0 flex-1 flex-col" data-testid="skills-browser">
        {/* View mode toggle */}
        <div className="flex items-center gap-1 border-b border-border px-5 py-1.5">
          <button
            type="button"
            onClick={() => setViewMode("installed")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
              isActive("installed")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
            }`}
          >
            <Server className="h-3 w-3" />
            Installed
          </button>
          <button
            type="button"
            onClick={() => setViewMode("marketplace")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
              isActive("marketplace")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
            }`}
          >
            <Store className="h-3 w-3" />
            Marketplace
          </button>
        </div>

        <RealSkillsBrowser />
      </div>
    );
  }

  // Marketplace view (original)
  const installedCount = installed.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col" data-testid="skills-browser">
      {/* View mode toggle */}
      <div className="flex items-center gap-1 border-b border-border px-5 py-1.5">
        <button
          type="button"
          onClick={() => setViewMode("installed")}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
            viewMode === "installed"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
          }`}
        >
          <Server className="h-3 w-3" />
          Installed
        </button>
        <button
          type="button"
          onClick={() => setViewMode("marketplace")}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
            viewMode === "marketplace"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
          }`}
        >
          <Store className="h-3 w-3" />
          Marketplace
        </button>
      </div>

      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <Puzzle className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-foreground">
            {t("title")}
          </h2>
          <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
            {installedCount} {t("installed")}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-3 text-xs text-muted-foreground">{t("description")}</p>

        <div className="relative mb-3">
          <Search
            className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="ui-input w-full pl-8 text-xs"
          />
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                category === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              installed={isSkillInstalled(installed, skill.id)}
              onInstall={handleInstall}
              onUninstall={handleUninstall}
              onSelect={setSelectedSkillId}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-8 text-center text-xs text-muted-foreground">
            {t("noResults")}
          </p>
        )}
      </div>

      {selectedSkill ? (
        <SkillDetailModal
          skill={selectedSkill}
          installed={isSkillInstalled(installed, selectedSkill.id)}
          onInstall={handleInstall}
          onUninstall={handleUninstall}
          onClose={() => setSelectedSkillId(null)}
        />
      ) : null}
    </div>
  );
};
