"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Puzzle, Search, Terminal, AlertCircle, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SkillDetailPanel } from "./SkillDetailPanel";
import type { SkillWithUI } from "../types";

export function RealSkillsBrowser() {
  const [skills, setSkills] = useState<SkillWithUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const fetchSkills = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/skills/list");
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to load skills");
        return;
      }
      setSkills(data.skills ?? []);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const filtered = useMemo(() => {
    if (!search.trim()) return skills;
    const q = search.toLowerCase();
    return skills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.commands.some((c) => c.name.toLowerCase().includes(q)),
    );
  }, [skills, search]);

  const selectedSkill = selectedPath
    ? skills.find((s) => s.path === selectedPath) ?? null
    : null;

  return (
    <div
      className="flex min-h-0 flex-1 flex-col"
      data-testid="real-skills-browser"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <Puzzle className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-foreground">
            Installed Skills
          </h2>
          <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
            {skills.length} skills
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={fetchSkills}
          disabled={loading}
          title="Refresh"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Left: list */}
        <div className="flex w-full flex-col overflow-y-auto border-r border-border md:w-80 lg:w-96"
          style={selectedSkill ? { display: undefined } : undefined}
        >
          <div className="px-4 py-3">
            <p className="mb-2 text-xs text-muted-foreground">
              Real skills installed on this server, parsed from SKILL.md files.
            </p>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search skills..."
                className="ui-input w-full pl-8 text-xs"
              />
            </div>
          </div>

          {error && (
            <div className="mx-4 mb-3 flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
              {error}
            </div>
          )}

          {loading && skills.length === 0 ? (
            <div className="flex flex-col gap-2 px-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 animate-pulse rounded-xl border border-border bg-surface-1"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-2 px-4 pb-4 sm:grid-cols-1">
              {filtered.map((skill) => (
                <button
                  key={skill.path}
                  type="button"
                  onClick={() => setSelectedPath(skill.path)}
                  className="text-left w-full"
                >
                  <Card
                    className={`cursor-pointer transition-colors hover:border-primary/50 ${
                      selectedPath === skill.path
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                  >
                    <CardHeader className="mb-1">
                      <CardTitle className="truncate">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {skill.description && (
                        <p className="mb-2 text-xs text-muted-foreground line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Badge variant="outline">
                          <Terminal className="h-2.5 w-2.5" />
                          {skill.commands.length}
                        </Badge>
                        {skill.uiSchemas.some((s) => s.fields.length > 0) && (
                          <Badge variant="info">interactive</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </button>
              ))}
              {filtered.length === 0 && !loading && (
                <p className="py-8 text-center text-xs text-muted-foreground">
                  No skills found matching your search.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right: detail */}
        <div className="hidden flex-1 md:flex">
          {selectedSkill ? (
            <SkillDetailPanel
              skill={selectedSkill}
              onClose={() => setSelectedPath(null)}
            />
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-center">
                <Puzzle className="mx-auto mb-2 h-8 w-8 text-muted-foreground/30" />
                <p className="text-xs text-muted-foreground">
                  Select a skill to view its commands
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile detail overlay */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 bg-card md:hidden">
          <SkillDetailPanel
            skill={selectedSkill}
            onClose={() => setSelectedPath(null)}
          />
        </div>
      )}
    </div>
  );
}
