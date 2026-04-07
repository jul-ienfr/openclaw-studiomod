"use client";

import { useCallback } from "react";
import { Download } from "lucide-react";
import type { AgentChatItem } from "@/features/agents/components/chatItems";

interface ChatExportProps {
  messages: AgentChatItem[];
  agentName: string;
}

function triggerDownload(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function toMarkdown(messages: AgentChatItem[], agentName: string): string {
  const lines: string[] = [`# Conversation — ${agentName}`, ""];
  for (const msg of messages) {
    if (msg.kind === "user") {
      lines.push("## User", msg.text, "");
    } else if (msg.kind === "assistant") {
      lines.push("## Assistant", msg.text, "");
    } else if (msg.kind === "thinking") {
      lines.push("## Thinking", msg.text, "");
    } else if (msg.kind === "tool") {
      lines.push("## Tool", msg.text, "");
    }
  }
  return lines.join("\n");
}

export function ChatExport({ messages, agentName }: ChatExportProps) {
  const safeName = agentName.replace(/[^a-z0-9_-]/gi, "_").toLowerCase();

  const exportMarkdown = useCallback(() => {
    const content = toMarkdown(messages, agentName);
    triggerDownload(content, `${safeName}-conversation.md`, "text/markdown");
  }, [messages, agentName, safeName]);

  const exportJson = useCallback(() => {
    const content = JSON.stringify(messages, null, 2);
    triggerDownload(
      content,
      `${safeName}-conversation.json`,
      "application/json",
    );
  }, [messages, safeName]);

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={exportMarkdown}
        title="Export as Markdown"
        className="flex items-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
        aria-label="Export conversation as Markdown"
      >
        <Download className="h-3.5 w-3.5" />
        MD
      </button>
      <button
        onClick={exportJson}
        title="Export as JSON"
        className="flex items-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
        aria-label="Export conversation as JSON"
      >
        <Download className="h-3.5 w-3.5" />
        JSON
      </button>
    </div>
  );
}
