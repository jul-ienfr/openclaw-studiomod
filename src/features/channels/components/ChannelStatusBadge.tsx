"use client";
import type { ChannelStatus } from "../types";

const STATUS_CLASSES: Record<ChannelStatus, string> = {
  connected: "bg-green-500/10 text-green-500",
  disconnected: "bg-muted text-muted-foreground",
  error: "bg-destructive/10 text-destructive",
  configuring: "bg-blue-500/10 text-blue-500",
};

const STATUS_LABELS: Record<ChannelStatus, string> = {
  connected: "Connected",
  disconnected: "Not configured",
  error: "Error",
  configuring: "Configured",
};

export const ChannelStatusBadge = ({ status }: { status: ChannelStatus }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_CLASSES[status]}`}>
    {STATUS_LABELS[status]}
  </span>
);
