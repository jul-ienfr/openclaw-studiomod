"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { use } from "react";
import { ArrowLeft, Bot, FolderOpen, Circle } from "lucide-react";
import type { PcCompany, PcAgent, PcProject } from "@/types/paperclip";

const STATUS_COLOR: Record<string, string> = {
  idle: "text-green-500",
  running: "text-blue-500",
  error: "text-red-500",
};

const PROJECT_STATUS_LABEL: Record<string, string> = {
  backlog: "Backlog",
  active: "Active",
  done: "Done",
};

export default function CompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [company, setCompany] = useState<PcCompany | null>(null);
  const [agents, setAgents] = useState<PcAgent[]>([]);
  const [projects, setProjects] = useState<PcProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/api/paperclip/companies/${id}`).then((r) => r.json()),
      fetch(`/api/paperclip/companies/${id}/agents`).then((r) => r.json()),
      fetch(`/api/paperclip/companies/${id}/projects`).then((r) => r.json()),
    ])
      .then(([comp, agts, projs]) => {
        setCompany(comp);
        setAgents(Array.isArray(agts) ? agts : []);
        setProjects(Array.isArray(projs) ? projs : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Loading…
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Company not found.
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link
        href="/paperclip/companies"
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-4 w-fit"
      >
        <ArrowLeft className="h-3 w-3" /> Companies
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white text-xl font-bold"
          style={{ backgroundColor: company.brandColor ?? "#6366f1" }}
        >
          {company.name[0]}
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            {company.name}
          </h1>
          {company.description && (
            <p className="text-sm text-muted-foreground">
              {company.description}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Agents */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Bot className="h-4 w-4 text-primary" />
            Agents ({agents.length})
          </h2>
          <div className="space-y-2">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3"
              >
                <Circle
                  className={`h-2 w-2 shrink-0 fill-current ${STATUS_COLOR[agent.status] ?? "text-gray-400"}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {agent.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {agent.title ?? agent.role}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {agent.adapterType}
                </span>
              </div>
            ))}
            {agents.length === 0 && (
              <p className="text-xs text-muted-foreground py-4 text-center">
                No agents
              </p>
            )}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <FolderOpen className="h-4 w-4 text-primary" />
            Projects ({projects.length})
          </h2>
          <div className="space-y-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/paperclip/projects?companyId=${company.id}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3 hover:border-primary/40 transition-colors"
              >
                <div
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: project.color ?? "#6366f1" }}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {project.name}
                  </p>
                  {project.description && (
                    <p className="text-xs text-muted-foreground truncate">
                      {project.description}
                    </p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {PROJECT_STATUS_LABEL[project.status] ?? project.status}
                </span>
              </Link>
            ))}
            {projects.length === 0 && (
              <p className="text-xs text-muted-foreground py-4 text-center">
                No projects
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
