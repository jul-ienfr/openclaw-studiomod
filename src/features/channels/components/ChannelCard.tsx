"use client";
import type { ChannelWithStatus } from "../types";
import { ChannelStatusBadge } from "./ChannelStatusBadge";

type ChannelCardProps = {
  channel: ChannelWithStatus & { lastActivity?: number | null };
  onConfigure: (id: string) => void;
};

const formatTimeAgo = (timestamp: number): string => {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export const ChannelCard = ({ channel, onConfigure }: ChannelCardProps) => (
  <button
    type="button"
    onClick={() => onConfigure(channel.id)}
    className="ui-card flex items-center gap-3 p-3 text-left transition-colors hover:bg-surface-2 w-full"
    data-testid={`channel-card-${channel.id}`}
  >
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
      style={{ backgroundColor: `${channel.iconColor}18` }}
    >
      {channel.icon}
    </span>
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <span className="truncate text-sm font-medium text-foreground">{channel.name}</span>
        <ChannelStatusBadge status={channel.status} />
      </div>
      <div className="flex items-center gap-2">
        <p className="truncate text-[11px] text-muted-foreground">{channel.description}</p>
        {channel.lastActivity ? (
          <span className="shrink-0 text-[10px] text-muted-foreground">
            {formatTimeAgo(channel.lastActivity)}
          </span>
        ) : null}
      </div>
    </div>
  </button>
);
