"use client";
import { useState, useCallback, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Radio, Search } from "lucide-react";
import { toast } from "sonner";
import type { ChannelId, ChannelConfig, ChannelWithStatus } from "../types";
import { CHANNEL_REGISTRY } from "../channelRegistry";
import { fetchChannelConfigsFromGateway, patchGatewayChannel, deleteGatewayChannel, buildChannelsWithStatus } from "../channelStore";
import { ChannelCard } from "./ChannelCard";
import { ChannelConfigModal } from "./ChannelConfigModal";

export const ChannelsPanel = () => {
  const t = useTranslations("channels");
  const [configs, setConfigs] = useState<Record<string, ChannelConfig>>({});
  const [editingChannelId, setEditingChannelId] = useState<ChannelId | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    void fetchChannelConfigsFromGateway().then((remote) => {
      setConfigs(remote);
    });
  }, []);

  const allChannels: ChannelWithStatus[] = useMemo(() => buildChannelsWithStatus(configs), [configs]);

  const channels = useMemo(() => {
    if (!search.trim()) return allChannels;
    const q = search.toLowerCase();
    return allChannels.filter(
      (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [allChannels, search]);

  const connectedCount = allChannels.filter((c) => c.status === "connected").length;
  const editingChannel = editingChannelId ? CHANNEL_REGISTRY.find((c) => c.id === editingChannelId) : null;

  const handleSave = useCallback(async (config: ChannelConfig) => {
    const next = { ...configs, [config.id]: config };
    setConfigs(next);
    setEditingChannelId(null);
    try {
      await patchGatewayChannel(config.id, { enabled: config.enabled, ...config.fields });
      toast.success(`${CHANNEL_REGISTRY.find((c) => c.id === config.id)?.name ?? config.id} configured`);
    } catch {
      toast.error("Failed to save channel config");
    }
  }, [configs]);

  const handleRemove = useCallback(async () => {
    if (!editingChannelId) return;
    const next = { ...configs };
    delete next[editingChannelId];
    setConfigs(next);
    setEditingChannelId(null);
    try {
      await deleteGatewayChannel(editingChannelId);
      toast.success("Channel removed");
    } catch {
      toast.error("Failed to remove channel");
    }
  }, [configs, editingChannelId]);

  return (
    <div className="flex h-full flex-col" data-testid="channels-panel">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <Radio className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-foreground">{t("title")}</h2>
          <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
            {connectedCount}/{allChannels.length}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-3 text-xs text-muted-foreground">{t("description")}</p>
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-md border border-border/50 bg-background/60 py-2 pl-8 pr-3 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/60"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {channels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
              onConfigure={(id) => setEditingChannelId(id as ChannelId)}
            />
          ))}
        </div>
        {channels.length === 0 && (
          <p className="py-8 text-center text-xs text-muted-foreground">{t("noResults")}</p>
        )}
      </div>

      {editingChannel ? (
        <ChannelConfigModal
          channel={editingChannel}
          existingConfig={configs[editingChannelId!]}
          onSave={handleSave}
          onRemove={configs[editingChannelId!] ? handleRemove : undefined}
          onClose={() => setEditingChannelId(null)}
        />
      ) : null}
    </div>
  );
};
