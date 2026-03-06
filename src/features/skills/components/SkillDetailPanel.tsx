"use client";

import { useState } from "react";
import { X, Terminal, Tag, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TabList } from "@/components/ui/Tabs";
import { SkillAutoForm } from "./SkillAutoForm";
import type { SkillWithUI } from "../types";

export function SkillDetailPanel({
  skill,
  onClose,
}: {
  skill: SkillWithUI;
  onClose: () => void;
}) {
  const tabs = skill.uiSchemas.map((s) => ({
    id: s.commandName,
    label: s.commandName,
    icon: Terminal,
  }));

  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  const activeSchema = skill.uiSchemas.find(
    (s) => s.commandName === activeTab,
  );

  // Extract tags from metadata
  const tags: string[] =
    (
      (skill.metadata?.openclaw as Record<string, unknown> | undefined)
        ?.tags as string[] | undefined
    ) ?? [];

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-border px-4 py-3">
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-semibold text-foreground truncate">
            {skill.name}
          </h2>
          {skill.description && (
            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
              {skill.description}
            </p>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="info">
                <Tag className="h-2.5 w-2.5" />
                {tag}
              </Badge>
            ))}
            <Badge variant="outline">
              <Terminal className="h-2.5 w-2.5" />
              {skill.commands.length} command{skill.commands.length !== 1 ? "s" : ""}
            </Badge>
          </div>
        </div>
        <button
          onClick={onClose}
          className="ml-2 rounded p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Skill path */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-1.5 text-[10px] text-muted-foreground">
        <FolderOpen className="h-3 w-3" />
        <span className="font-mono truncate">{skill.path}</span>
      </div>

      {/* Tabs */}
      {tabs.length > 0 && (
        <div className="px-4 pt-1">
          <TabList tabs={tabs} active={activeTab} onChange={setActiveTab} />
        </div>
      )}

      {/* Form content */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        {activeSchema ? (
          <div>
            <p className="mb-3 text-xs text-muted-foreground">
              {activeSchema.commandDescription}
            </p>
            <SkillAutoForm schema={activeSchema} skillPath={skill.path} />
          </div>
        ) : (
          <p className="py-8 text-center text-xs text-muted-foreground">
            This skill has no commands with exec blocks.
          </p>
        )}
      </div>
    </div>
  );
}
