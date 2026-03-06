import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useTranslations } from "next-intl";
import type { AgentState as AgentRecord } from "@/features/agents/state/store";
import {
  Check,
  Cog,
  FileText,
  Mic,
  Paperclip,
  Pencil,
  Play,
  Shuffle,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import { getThinkingLevels } from "@/lib/gateway/models";
import {
  classifyMessageDifficulty,
  isClaude46Model,
} from "@/lib/thinking/autoThinkingLevel";
import { normalizeAssistantDisplayText } from "@/lib/text/assistantText";
import { useVoiceRecorder } from "@/features/agents/hooks/useVoiceRecorder";
import {
  useAttachments,
  type Attachment,
  type GatewayAttachment,
} from "@/features/agents/hooks/useAttachments";
import {
  loadAgentUiPrefs,
  saveAgentUiPref,
} from "@/features/agents/state/agentUiPrefs";
import { AgentAvatar } from "./AgentAvatar";
import { resolveEmptyChatIntroMessage } from "./chat/chatUtils";
import type {
  ExecApprovalDecision,
  PendingExecApproval,
} from "@/features/agents/approvals/types";
import {
  buildAgentChatRenderBlocks,
  buildFinalAgentChatItems,
} from "./chatItems";
import { LightboxContext, ChatImageLightbox } from "./chat/ChatMarkdownImg";
import { AgentChatTranscript } from "./chat/ChatContent";
import { AnalyzeLinkWidget } from "./AnalyzeLinkWidget";
import { ModelSelector } from "./ModelSelector";
import { SessionSelector } from "./SessionSelector";
import type { SessionInfo } from "@/features/agents/hooks/useAgentSessions";

type AgentChatPanelProps = {
  agent: AgentRecord;
  isSelected: boolean;
  canSend: boolean;
  models: GatewayModelChoice[];
  stopBusy: boolean;
  stopDisabledReason?: string | null;
  onLoadMoreHistory: () => void;
  onOpenSettings: () => void;
  onRename?: (name: string) => Promise<boolean>;
  onNewSession?: () => Promise<void> | void;
  onModelChange: (value: string | null) => void;
  onThinkingChange: (value: string | null) => void;
  onToolCallingToggle?: (enabled: boolean) => void;
  onThinkingTracesToggle?: (enabled: boolean) => void;
  onHideSystemMessagesToggle?: (enabled: boolean) => void;
  onDraftChange: (value: string) => void;
  onSend: (message: string, attachments?: GatewayAttachment[]) => void;
  onRemoveQueuedMessage?: (index: number) => void;
  onSendQueuedNow?: (index: number) => void;
  onStopRun: () => void;
  onAvatarShuffle: () => void;
  otherAgents?: { agentId: string; name: string }[];
  onForwardToAgent?: (targetAgentId: string, message: string) => void;
  pendingExecApprovals?: PendingExecApproval[];
  onResolveExecApproval?: (id: string, decision: ExecApprovalDecision) => void;
  sessions?: SessionInfo[];
  sessionsLoading?: boolean;
  onSelectSession?: (sessionKey: string) => void;
};

const noopToggle = () => {};
const InlineHoverTooltip = ({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <div className="group/tooltip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-7 left-1/2 z-20 w-max max-w-none -translate-x-1/2 whitespace-nowrap rounded-md border border-border/70 bg-card px-2 py-1 font-mono text-[10px] text-foreground opacity-0 shadow-sm transition-opacity duration-150 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
      >
        {text}
      </span>
    </div>
  );
};

const AgentChatComposer = memo(function AgentChatComposer({
  value,
  onChange,
  onKeyDown,
  onSend,
  onStop,
  canSend,
  stopBusy,
  stopDisabledReason,
  running,
  sendDisabled,
  queuedMessages,
  onRemoveQueuedMessage,
  onSendQueuedNow,
  inputRef,
  models,
  modelOptions,
  modelValue,
  allowThinking,
  thinkingValue,
  thinkingLevels,
  onModelChange,
  onThinkingChange,
  autoThinking,
  onAutoThinkingToggle,
  toolCallingEnabled,
  showThinkingTraces,
  hideSystemMessages,
  onToolCallingToggle,
  onThinkingTracesToggle,
  onHideSystemMessagesToggle,
  voiceRecording,
  voiceTranscribing,
  onToggleVoice,
  attachments,
  onAddFiles,
  onRemoveAttachment,
}: {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  onStop: () => void;
  canSend: boolean;
  stopBusy: boolean;
  stopDisabledReason?: string | null;
  running: boolean;
  sendDisabled: boolean;
  queuedMessages: string[];
  onRemoveQueuedMessage?: (index: number) => void;
  onSendQueuedNow?: (index: number) => void;
  inputRef: (el: HTMLTextAreaElement | HTMLInputElement | null) => void;
  models: GatewayModelChoice[];
  modelOptions: { value: string; label: string }[];
  modelValue: string;
  allowThinking: boolean;
  thinkingValue: string;
  thinkingLevels: { value: string; label: string }[];
  onModelChange: (value: string | null) => void;
  onThinkingChange: (value: string | null) => void;
  autoThinking: boolean;
  onAutoThinkingToggle: () => void;
  toolCallingEnabled: boolean;
  showThinkingTraces: boolean;
  hideSystemMessages: boolean;
  onToolCallingToggle: (enabled: boolean) => void;
  onThinkingTracesToggle: (enabled: boolean) => void;
  onHideSystemMessagesToggle: (enabled: boolean) => void;
  voiceRecording: boolean;
  voiceTranscribing: boolean;
  onToggleVoice: () => void;
  attachments: Attachment[];
  onAddFiles: (files: FileList | File[]) => Promise<void>;
  onRemoveAttachment: (id: string) => void;
}) {
  const tc = useTranslations("chat");
  const stopReason = stopDisabledReason?.trim() ?? "";
  const stopDisabled = !canSend || stopBusy || Boolean(stopReason);
  const stopAriaLabel = stopReason
    ? `${tc("stopUnavailable")}: ${stopReason}`
    : tc("stop");
  const modelSelectedLabel = useMemo(() => {
    if (modelOptions.length === 0) return tc("noModels");
    return (
      modelOptions.find((option) => option.value === modelValue)?.label ??
      modelValue
    );
  }, [modelOptions, modelValue, tc]);
  const modelSelectWidthCh = Math.max(
    11,
    Math.min(44, modelSelectedLabel.length + 6),
  );
  const thinkingSelectedLabel = useMemo(
    () =>
      thinkingLevels.find((l) => l.value === thinkingValue)?.label ?? "Default",
    [thinkingLevels, thinkingValue],
  );
  const thinkingSelectWidthCh = Math.max(
    9,
    Math.min(22, thinkingSelectedLabel.length + 6),
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
      const files = event.clipboardData?.files;
      if (files && files.length > 0) {
        event.preventDefault();
        void onAddFiles(files);
      }
    },
    [onAddFiles],
  );
  const hasAttachments = attachments.length > 0;
  return (
    <div className="rounded-2xl border border-border/65 bg-surface-2/45 px-3 py-2">
      {hasAttachments ? (
        <div className="mb-2 flex flex-wrap gap-2">
          {attachments.map((att) => (
            <div
              key={att.id}
              className="group relative flex items-center gap-1.5 rounded-md border border-border/70 bg-card/80 px-2 py-1"
            >
              {att.previewUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={att.previewUrl}
                  alt={att.fileName}
                  className="h-10 w-10 rounded object-cover"
                />
              ) : (
                <FileText className="h-5 w-5 flex-none text-muted-foreground" />
              )}
              <span className="max-w-[120px] truncate text-[11px] text-foreground">
                {att.fileName}
              </span>
              <button
                type="button"
                className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-sm text-muted-foreground transition hover:bg-surface-2 hover:text-foreground"
                aria-label={`Remove ${att.fileName}`}
                onClick={() => onRemoveAttachment(att.id)}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      ) : null}
      {queuedMessages.length > 0 ? (
        <div
          className={`mb-2 grid items-start gap-2 ${
            running
              ? "grid-cols-[minmax(0,1fr)_auto_auto]"
              : "grid-cols-[minmax(0,1fr)_auto]"
          }`}
        >
          <div
            className="min-w-0 max-w-full space-y-1 overflow-hidden"
            data-testid="queued-messages-bar"
            aria-label={tc("queued")}
          >
            {queuedMessages.map((queuedMessage, index) => (
              <div
                key={`${index}-${queuedMessage}`}
                className="flex w-full min-w-0 max-w-full items-center gap-1 overflow-hidden rounded-md border border-border/70 bg-card/80 px-2 py-1 text-[11px] text-foreground"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground">
                  {tc("queued")}
                </span>
                <span
                  className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
                  title={queuedMessage}
                >
                  {queuedMessage}
                </span>
                {onSendQueuedNow ? (
                  <button
                    type="button"
                    className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-sm text-muted-foreground transition hover:bg-surface-2 hover:text-foreground"
                    aria-label={tc("sendNow")}
                    title={tc("sendNow")}
                    onClick={() => onSendQueuedNow(index)}
                  >
                    <Play className="h-3 w-3" />
                  </button>
                ) : null}
                <button
                  type="button"
                  className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-sm text-muted-foreground transition hover:bg-surface-2 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={tc("removeQueued", { index: index + 1 })}
                  onClick={() => onRemoveQueuedMessage?.(index)}
                  disabled={!onRemoveQueuedMessage}
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          {running ? (
            <button
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              disabled
              className="invisible rounded-md border border-border/70 bg-surface-3 px-3 py-2 font-mono text-[12px] font-medium tracking-[0.02em] text-foreground"
            >
              {stopBusy ? tc("stopping") : tc("stop")}
            </button>
          ) : null}
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            disabled
            className="ui-btn-primary ui-btn-send invisible px-3 py-2 font-mono text-[12px] font-medium tracking-[0.02em]"
          >
            {tc("send")}
          </button>
        </div>
      ) : null}
      <div className="flex items-end gap-2">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          multiple
          accept="image/*,audio/*,.pdf,.doc,.docx,.txt,.csv,.json,.xml,.md"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              void onAddFiles(e.target.files);
            }
            e.target.value = "";
          }}
        />
        <button
          className="rounded-md border border-border/70 bg-surface-3 px-2 py-2 transition hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label={tc("attachFile")}
          title={tc("attachFile")}
        >
          <Paperclip className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <textarea
          ref={inputRef}
          rows={1}
          value={value}
          className="chat-composer-input min-h-[28px] flex-1 resize-none border-0 bg-transparent px-0 py-1 text-[15px] leading-6 text-foreground outline-none shadow-none transition placeholder:text-muted-foreground/65 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onPaste={handlePaste}
          placeholder={tc("typeMessage")}
        />
        {running ? (
          <span className="inline-flex" title={stopReason || undefined}>
            <button
              className="rounded-md border border-border/70 bg-surface-3 px-3 py-2 font-mono text-[12px] font-medium tracking-[0.02em] text-foreground transition hover:bg-surface-2 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
              type="button"
              onClick={onStop}
              disabled={stopDisabled}
              aria-label={stopAriaLabel}
            >
              {stopBusy ? tc("stopping") : tc("stop")}
            </button>
          </span>
        ) : null}
        <button
          className="ui-btn-primary ui-btn-send px-3 py-2 font-mono text-[12px] font-medium tracking-[0.02em] disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-muted-foreground"
          type="button"
          onClick={onSend}
          disabled={sendDisabled}
        >
          Send
        </button>
        <button
          className={`rounded-md border px-2 py-2 transition disabled:cursor-not-allowed disabled:opacity-50 ${
            voiceRecording
              ? "border-destructive/50 bg-destructive/15 hover:bg-destructive/25"
              : "border-border/70 bg-surface-3 hover:bg-surface-2"
          }`}
          type="button"
          onClick={onToggleVoice}
          disabled={voiceTranscribing}
          aria-label={
            voiceRecording ? "Arrêter l'enregistrement" : "Enregistrer un vocal"
          }
          title={
            voiceTranscribing
              ? "Transcription..."
              : voiceRecording
                ? "Cliquer pour envoyer"
                : "Vocal"
          }
        >
          <Mic
            className={`h-3.5 w-3.5 ${voiceRecording ? "text-destructive animate-pulse" : voiceTranscribing ? "text-muted-foreground animate-pulse" : "text-muted-foreground"}`}
          />
        </button>
      </div>
      <div className="mt-1 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <ModelSelector
            models={models}
            value={modelValue}
            onChange={onModelChange}
          />
          {allowThinking ? (
            <>
              <InlineHoverTooltip
                text={
                  autoThinking
                    ? tc("autoThinkingDisable")
                    : tc("autoThinkingEnable")
                }
              >
                <button
                  type="button"
                  onClick={onAutoThinkingToggle}
                  className={`flex h-6 items-center gap-1 rounded-md px-1.5 text-[10px] font-semibold transition-colors ${
                    autoThinking
                      ? "bg-primary text-primary-foreground"
                      : "ui-input text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={autoThinking}
                  aria-label={
                    autoThinking
                      ? tc("autoThinkingDisable")
                      : tc("autoThinkingEnable")
                  }
                >
                  <Zap className="h-3 w-3" strokeWidth={2} />
                  Auto
                </button>
              </InlineHoverTooltip>
              <InlineHoverTooltip text={tc("selectReasoning")}>
                <select
                  className="ui-input ui-control-important h-6 rounded-md px-1.5 text-[10px] font-semibold text-foreground"
                  aria-label={tc("thinking")}
                  value={thinkingValue}
                  disabled={autoThinking}
                  style={{
                    width: `${thinkingSelectWidthCh}ch`,
                    opacity: autoThinking ? 0.6 : 1,
                  }}
                  onChange={(event) => {
                    const nextValue = event.target.value.trim();
                    onThinkingChange(nextValue ? nextValue : null);
                  }}
                >
                  {thinkingLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </InlineHoverTooltip>
            </>
          ) : null}
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="font-mono tracking-[0.02em]">{tc("show")}</span>
          <button
            type="button"
            role="switch"
            aria-label={tc("showToolCalls")}
            aria-checked={toolCallingEnabled}
            className={`inline-flex h-5 items-center rounded-sm border px-1.5 font-mono text-[10px] tracking-[0.01em] transition ${
              toolCallingEnabled
                ? "border-primary/45 bg-primary/14 text-foreground"
                : "border-border/70 bg-surface-2/40 text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => onToolCallingToggle(!toolCallingEnabled)}
          >
            {tc("tools")}
          </button>
          <button
            type="button"
            role="switch"
            aria-label={tc("showThinking")}
            aria-checked={showThinkingTraces}
            className={`inline-flex h-5 items-center rounded-sm border px-1.5 font-mono text-[10px] tracking-[0.01em] transition ${
              showThinkingTraces
                ? "border-primary/45 bg-primary/14 text-foreground"
                : "border-border/70 bg-surface-2/40 text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => onThinkingTracesToggle(!showThinkingTraces)}
          >
            {tc("thinking")}
          </button>
          <button
            type="button"
            role="switch"
            aria-label="Toggle system notices"
            aria-checked={hideSystemMessages}
            title={
              hideSystemMessages
                ? "System notices visible"
                : "System notices hidden"
            }
            className={`inline-flex h-5 items-center rounded-sm border px-1.5 font-mono text-[10px] tracking-[0.01em] transition ${
              hideSystemMessages
                ? "border-primary/45 bg-primary/14 text-foreground"
                : "border-border/70 bg-surface-2/40 text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => onHideSystemMessagesToggle(!hideSystemMessages)}
          >
            Notices
          </button>
        </div>
      </div>
    </div>
  );
});

export const AgentChatPanel = ({
  agent,
  isSelected,
  canSend,
  models,
  stopBusy,
  stopDisabledReason = null,
  onLoadMoreHistory,
  onOpenSettings,
  onRename,
  onNewSession,
  onModelChange,
  onThinkingChange,
  onToolCallingToggle = noopToggle,
  onThinkingTracesToggle = noopToggle,
  onHideSystemMessagesToggle = noopToggle,
  onDraftChange,
  onSend,
  onRemoveQueuedMessage,
  onSendQueuedNow,
  onStopRun,
  onAvatarShuffle,
  otherAgents = [],
  onForwardToAgent,
  pendingExecApprovals = [],
  onResolveExecApproval,
  sessions = [],
  sessionsLoading = false,
  onSelectSession,
}: AgentChatPanelProps) => {
  const tc = useTranslations("chat");
  const [draftValue, setDraftValue] = useState(agent.draft);
  const [newSessionBusy, setNewSessionBusy] = useState(false);
  const [renameEditing, setRenameEditing] = useState(false);
  const [renameSaving, setRenameSaving] = useState(false);
  const [renameDraft, setRenameDraft] = useState(agent.name);
  const [renameError, setRenameError] = useState<string | null>(null);
  const draftRef = useRef<HTMLTextAreaElement | null>(null);
  const renameInputRef = useRef<HTMLInputElement | null>(null);
  const renameEditorRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottomNextOutputRef = useRef(false);
  const plainDraftRef = useRef(agent.draft);
  const draftIdentityRef = useRef<{ agentId: string; sessionKey: string }>({
    agentId: agent.agentId,
    sessionKey: agent.sessionKey,
  });
  const pendingResizeFrameRef = useRef<number | null>(null);

  const resizeDraft = useCallback(() => {
    const el = draftRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflowY = el.scrollHeight > el.clientHeight ? "auto" : "hidden";
  }, []);

  const handleReply = useCallback(
    (text: string) => {
      const lines = text.replace(/^> /gm, "").trim();
      const quoted = lines
        .split("\n")
        .map((l) => `> ${l}`)
        .join("\n");
      const newDraft = `${quoted}\n\n`;
      setDraftValue(newDraft);
      plainDraftRef.current = newDraft;
      onDraftChange(newDraft);
      requestAnimationFrame(() => {
        const el = draftRef.current;
        if (!el) return;
        el.focus();
        el.selectionStart = el.selectionEnd = newDraft.length;
        resizeDraft();
      });
    },
    [onDraftChange, resizeDraft],
  );

  const handleForward = useCallback(
    (targetAgentId: string, text: string) => {
      onForwardToAgent?.(targetAgentId, text);
    },
    [onForwardToAgent],
  );

  const handleDraftRef = useCallback(
    (el: HTMLTextAreaElement | HTMLInputElement | null) => {
      draftRef.current = el instanceof HTMLTextAreaElement ? el : null;
    },
    [],
  );

  useEffect(() => {
    const previousIdentity = draftIdentityRef.current;
    const identityChanged =
      previousIdentity.agentId !== agent.agentId ||
      previousIdentity.sessionKey !== agent.sessionKey;
    if (identityChanged) {
      draftIdentityRef.current = {
        agentId: agent.agentId,
        sessionKey: agent.sessionKey,
      };
      plainDraftRef.current = agent.draft;
      setDraftValue(agent.draft);
      scrollToBottomNextOutputRef.current = true;
      return;
    }
    if (agent.draft === plainDraftRef.current) return;
    if (agent.draft.length !== 0) return;
    plainDraftRef.current = "";
    setDraftValue("");
  }, [agent.agentId, agent.draft, agent.sessionKey]);

  useEffect(() => {
    setRenameEditing(false);
    setRenameSaving(false);
    setRenameError(null);
    setRenameDraft(agent.name);
  }, [agent.agentId, agent.name]);

  useEffect(() => {
    if (!renameEditing) return;
    const frameId = requestAnimationFrame(() => {
      renameInputRef.current?.focus();
      renameInputRef.current?.select();
    });
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [renameEditing]);

  useEffect(() => {
    if (pendingResizeFrameRef.current !== null) {
      cancelAnimationFrame(pendingResizeFrameRef.current);
    }
    pendingResizeFrameRef.current = requestAnimationFrame(() => {
      pendingResizeFrameRef.current = null;
      resizeDraft();
    });
    return () => {
      if (pendingResizeFrameRef.current !== null) {
        cancelAnimationFrame(pendingResizeFrameRef.current);
        pendingResizeFrameRef.current = null;
      }
    };
  }, [resizeDraft, draftValue]);

  const attachmentsBag = useAttachments();

  const handleSend = useCallback(
    (message: string, extraAttachments?: GatewayAttachment[]) => {
      if (!canSend) return;
      const trimmed = message.trim();
      const hasAttachments = extraAttachments && extraAttachments.length > 0;
      if (!trimmed && !hasAttachments) return;
      plainDraftRef.current = "";
      setDraftValue("");
      onDraftChange("");
      scrollToBottomNextOutputRef.current = true;
      onSend(trimmed, extraAttachments);
    },
    [canSend, onDraftChange, onSend],
  );

  const handleComposerSendWithAttachments = useCallback(() => {
    const gwAttachments = attachmentsBag.toGatewayFormat();
    handleSend(
      draftValue,
      gwAttachments.length > 0 ? gwAttachments : undefined,
    );
    attachmentsBag.clearAll();
  }, [draftValue, handleSend, attachmentsBag]);

  const handleVoiceTranscribed = useCallback(
    (text: string) => {
      handleSend(text);
    },
    [handleSend],
  );
  const voice = useVoiceRecorder(handleVoiceTranscribed);

  const chatItems = useMemo(
    () =>
      buildFinalAgentChatItems({
        outputLines: agent.outputLines,
        showThinkingTraces: agent.showThinkingTraces,
        toolCallingEnabled: agent.toolCallingEnabled,
        hideSystemMessages: agent.hideSystemMessages,
      }),
    [
      agent.outputLines,
      agent.showThinkingTraces,
      agent.toolCallingEnabled,
      agent.hideSystemMessages,
    ],
  );
  const running = agent.status === "running";
  const renderBlocks = useMemo(
    () => buildAgentChatRenderBlocks(chatItems),
    [chatItems],
  );
  const hasActiveStreamingTailInTranscript =
    running &&
    renderBlocks.length > 0 &&
    !renderBlocks[renderBlocks.length - 1].text;
  const liveAssistantText =
    running && agent.streamText
      ? normalizeAssistantDisplayText(agent.streamText)
      : "";
  const liveThinkingText =
    running && agent.showThinkingTraces && agent.thinkingTrace
      ? agent.thinkingTrace.trim()
      : "";
  const hasVisibleLiveThinking = Boolean(liveThinkingText.trim());
  const showTypingIndicator =
    running &&
    !hasVisibleLiveThinking &&
    !liveAssistantText &&
    !hasActiveStreamingTailInTranscript;

  const modelOptions = useMemo(() => {
    // Detect duplicate model IDs across providers
    const idCount = new Map<string, number>();
    for (const entry of models) {
      idCount.set(entry.id, (idCount.get(entry.id) ?? 0) + 1);
    }
    return models.map((entry) => {
      const key = `${entry.provider}/${entry.id}`;
      const alias = typeof entry.name === "string" ? entry.name.trim() : "";
      let label = !alias || alias === key ? key : alias;
      // Append provider when multiple providers offer the same model ID
      if (
        (idCount.get(entry.id) ?? 0) > 1 &&
        !label.toLowerCase().includes(entry.provider.toLowerCase())
      ) {
        label = `${label} (${entry.provider})`;
      }
      return {
        value: key,
        label,
        reasoning: entry.reasoning,
      };
    });
  }, [models]);
  const modelValue = agent.model ?? "";
  const modelOptionsWithFallback =
    modelValue && !modelOptions.some((option) => option.value === modelValue)
      ? [
          { value: modelValue, label: modelValue, reasoning: undefined },
          ...modelOptions,
        ]
      : modelOptions;
  const selectedModel = modelOptionsWithFallback.find(
    (option) => option.value === modelValue,
  );
  const allowThinking = selectedModel?.reasoning !== false;
  // When no model is stored yet, use the first option in the list (what's displayed)
  const effectiveModelStr =
    selectedModel?.value ?? modelOptionsWithFallback[0]?.value ?? "";

  const thinkingLevels = useMemo(
    () => getThinkingLevels(effectiveModelStr, selectedModel?.reasoning),
    [effectiveModelStr, selectedModel?.reasoning],
  );

  // Auto-adaptive thinking level — default ON, persisted per agent
  const [autoThinking, setAutoThinking] = useState(() => {
    const prefs = loadAgentUiPrefs(agent.agentId);
    return prefs.autoThinking !== false;
  });
  const lastAutoLevelRef = useRef<string | null>(null);

  useEffect(() => {
    if (!autoThinking || !allowThinking) return;
    if (isClaude46Model(effectiveModelStr)) {
      // Claude 4.6 supports native adaptive thinking — just set it once
      if (lastAutoLevelRef.current !== "adaptive") {
        lastAutoLevelRef.current = "adaptive";
        onThinkingChange("adaptive");
      }
      return;
    }
    // Other reasoning models: heuristic debounced on draft
    if (!draftValue.trim()) return;
    const timer = setTimeout(() => {
      const detected = classifyMessageDifficulty(draftValue);
      const newLevel = detected === "off" ? null : detected;
      if (newLevel !== lastAutoLevelRef.current) {
        lastAutoLevelRef.current = newLevel;
        onThinkingChange(newLevel);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [
    draftValue,
    autoThinking,
    allowThinking,
    effectiveModelStr,
    onThinkingChange,
  ]);

  // Reset tracking when auto is turned off
  useEffect(() => {
    if (!autoThinking) lastAutoLevelRef.current = null;
  }, [autoThinking]);

  // Reset auto mode when model changes (different model may not support adaptive)
  const prevModelRef = useRef(effectiveModelStr);
  useEffect(() => {
    if (prevModelRef.current !== effectiveModelStr) {
      prevModelRef.current = effectiveModelStr;
      lastAutoLevelRef.current = null;
    }
  }, [effectiveModelStr]);

  const avatarSeed = agent.avatarSeed ?? agent.agentId;
  const emptyStateTitle = useMemo(
    () => resolveEmptyChatIntroMessage(agent.agentId, agent.sessionEpoch),
    [agent.agentId, agent.sessionEpoch],
  );
  const sendDisabled =
    !canSend || (!draftValue.trim() && attachmentsBag.attachments.length === 0);

  const handleComposerChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      plainDraftRef.current = value;
      setDraftValue(value);
      onDraftChange(value);
    },
    [onDraftChange],
  );

  const handleComposerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229)
        return;
      if (event.key !== "Enter" || event.shiftKey) return;
      if (event.defaultPrevented) return;
      event.preventDefault();
      handleComposerSendWithAttachments();
    },
    [handleComposerSendWithAttachments],
  );

  const handleComposerSend = handleComposerSendWithAttachments;

  const beginRename = useCallback(() => {
    if (!onRename) return;
    setRenameEditing(true);
    setRenameDraft(agent.name);
    setRenameError(null);
  }, [agent.name, onRename]);

  const cancelRename = useCallback(() => {
    if (renameSaving) return;
    setRenameEditing(false);
    setRenameDraft(agent.name);
    setRenameError(null);
  }, [agent.name, renameSaving]);

  useEffect(() => {
    if (!renameEditing) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (renameEditorRef.current?.contains(target)) return;
      cancelRename();
    };
    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [cancelRename, renameEditing]);

  const submitRename = useCallback(async () => {
    if (!onRename || renameSaving) return;
    const nextName = renameDraft.trim();
    const currentName = agent.name.trim();
    if (!nextName) {
      setRenameError("Agent name is required.");
      return;
    }
    if (nextName === currentName) {
      setRenameEditing(false);
      setRenameError(null);
      setRenameDraft(agent.name);
      return;
    }
    setRenameSaving(true);
    setRenameError(null);
    try {
      const ok = await onRename(nextName);
      if (!ok) {
        setRenameError("Failed to rename agent.");
        return;
      }
      setRenameEditing(false);
      setRenameDraft(nextName);
    } finally {
      setRenameSaving(false);
    }
  }, [agent.name, onRename, renameDraft, renameSaving]);

  const handleRenameInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        void submitRename();
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        cancelRename();
      }
    },
    [cancelRename, submitRename],
  );

  const handleNewSession = useCallback(async () => {
    if (!onNewSession || newSessionBusy || !canSend) return;
    setNewSessionBusy(true);
    try {
      await onNewSession();
    } finally {
      setNewSessionBusy(false);
    }
  }, [canSend, newSessionBusy, onNewSession]);

  const newSessionDisabled = newSessionBusy || !canSend || !onNewSession;

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <LightboxContext.Provider value={setLightboxSrc}>
      <div
        data-agent-panel
        className="group fade-up relative flex h-full w-full flex-col"
      >
        <div className="px-3 pt-2 sm:px-4 sm:pt-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <div className="group/avatar relative">
                <AgentAvatar
                  seed={avatarSeed}
                  name={agent.name}
                  avatarUrl={agent.avatarUrl ?? null}
                  size={84}
                  isSelected={isSelected}
                />
                <button
                  className="nodrag ui-btn-icon ui-btn-icon-xs agent-avatar-shuffle-btn absolute bottom-0.5 right-0.5"
                  type="button"
                  aria-label={tc("shuffleAvatar")}
                  data-testid="agent-avatar-shuffle"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onAvatarShuffle();
                  }}
                >
                  <Shuffle className="h-2.5 w-2.5" />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="min-w-0 w-[clamp(11rem,34vw,16rem)]">
                    {renameEditing ? (
                      <div
                        ref={renameEditorRef}
                        className="flex h-8 items-center gap-1.5"
                      >
                        <input
                          ref={renameInputRef}
                          className="ui-input agent-rename-input h-8 min-w-0 flex-1 rounded-md px-2 text-[12px] font-semibold text-foreground"
                          aria-label={tc("editAgentName")}
                          data-testid="agent-rename-input"
                          value={renameDraft}
                          disabled={renameSaving}
                          onChange={(event) => {
                            setRenameDraft(event.target.value);
                            if (renameError) setRenameError(null);
                          }}
                          onKeyDown={handleRenameInputKeyDown}
                        />
                        <button
                          className="ui-btn-icon ui-btn-icon-sm agent-rename-control"
                          type="button"
                          aria-label={tc("saveAgentName")}
                          data-testid="agent-rename-save"
                          onClick={() => {
                            void submitRename();
                          }}
                          disabled={renameSaving}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </button>
                        <button
                          className="ui-btn-icon ui-btn-icon-sm agent-rename-control"
                          type="button"
                          aria-label={tc("cancelRename")}
                          data-testid="agent-rename-cancel"
                          onClick={cancelRename}
                          disabled={renameSaving}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex h-8 min-w-0 items-center gap-1.5">
                        <div className="type-agent-name min-w-0 truncate text-foreground">
                          {agent.name}
                        </div>
                        {onRename ? (
                          <button
                            className="ui-btn-icon ui-btn-icon-xs agent-rename-control shrink-0"
                            type="button"
                            aria-label={tc("renameAgent")}
                            data-testid="agent-rename-toggle"
                            onClick={beginRename}
                          >
                            <Pencil className="h-3 w-3" />
                          </button>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
                {renameError ? (
                  <div className="ui-text-danger mt-1 text-[11px]">
                    {renameError}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-0.5 flex items-center gap-2">
              {onSelectSession ? (
                <SessionSelector
                  sessions={sessions}
                  currentSessionKey={agent.sessionKey}
                  onSelectSession={onSelectSession}
                  loading={sessionsLoading}
                />
              ) : null}
              <button
                className="nodrag ui-btn-primary px-2.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.02em] disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-muted-foreground"
                type="button"
                data-testid="agent-new-session-toggle"
                aria-label={tc("startNewSession")}
                title={tc("startNewSession")}
                onClick={() => {
                  void handleNewSession();
                }}
                disabled={newSessionDisabled}
              >
                {newSessionBusy ? tc("starting") : tc("newSession")}
              </button>
              <button
                className="nodrag ui-btn-icon"
                type="button"
                data-testid="agent-settings-toggle"
                aria-label={tc("openBehavior")}
                title={tc("behavior")}
                onClick={onOpenSettings}
              >
                <Cog className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 flex min-h-0 flex-1 flex-col px-3 pb-3 sm:px-4 sm:pb-4">
          <AgentChatTranscript
            key={agent.agentId}
            agentId={agent.agentId}
            name={agent.name}
            avatarSeed={avatarSeed}
            avatarUrl={agent.avatarUrl ?? null}
            status={agent.status}
            historyMaybeTruncated={agent.historyMaybeTruncated}
            historyFetchedCount={agent.historyFetchedCount}
            historyFetchLimit={agent.historyFetchLimit}
            onLoadMoreHistory={onLoadMoreHistory}
            chatItems={chatItems}
            liveThinkingText={liveThinkingText}
            liveAssistantText={liveAssistantText}
            showTypingIndicator={showTypingIndicator}
            outputLineCount={agent.outputLines.length}
            liveAssistantCharCount={liveAssistantText.length}
            liveThinkingCharCount={liveThinkingText.length}
            runStartedAt={agent.runStartedAt}
            scrollToBottomNextOutputRef={scrollToBottomNextOutputRef}
            pendingExecApprovals={pendingExecApprovals}
            onResolveExecApproval={onResolveExecApproval}
            emptyStateTitle={emptyStateTitle}
            onReply={handleReply}
            onForward={handleForward}
            otherAgents={otherAgents}
          />

          {agent.agentId === "veille-strategique" && (
            <div className="mt-3">
              <AnalyzeLinkWidget
                agentId={agent.agentId}
                onSend={(message) => handleSend(message)}
              />
            </div>
          )}

          <div className="mt-3">
            <AgentChatComposer
              value={draftValue}
              inputRef={handleDraftRef}
              onChange={handleComposerChange}
              onKeyDown={handleComposerKeyDown}
              onSend={handleComposerSend}
              onStop={onStopRun}
              canSend={canSend}
              stopBusy={stopBusy}
              stopDisabledReason={stopDisabledReason}
              running={running}
              sendDisabled={sendDisabled}
              queuedMessages={agent.queuedMessages ?? []}
              onRemoveQueuedMessage={onRemoveQueuedMessage}
              onSendQueuedNow={onSendQueuedNow}
              models={models}
              modelOptions={modelOptionsWithFallback.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
              modelValue={modelValue}
              allowThinking={allowThinking}
              thinkingValue={agent.thinkingLevel ?? ""}
              thinkingLevels={thinkingLevels}
              onModelChange={onModelChange}
              onThinkingChange={onThinkingChange}
              autoThinking={autoThinking}
              onAutoThinkingToggle={() =>
                setAutoThinking((v) => {
                  const next = !v;
                  saveAgentUiPref(agent.agentId, "autoThinking", next);
                  return next;
                })
              }
              toolCallingEnabled={agent.toolCallingEnabled}
              showThinkingTraces={agent.showThinkingTraces}
              hideSystemMessages={agent.hideSystemMessages}
              onToolCallingToggle={onToolCallingToggle}
              onThinkingTracesToggle={onThinkingTracesToggle}
              onHideSystemMessagesToggle={onHideSystemMessagesToggle}
              voiceRecording={voice.isRecording}
              voiceTranscribing={voice.isTranscribing}
              onToggleVoice={voice.toggleRecording}
              attachments={attachmentsBag.attachments}
              onAddFiles={attachmentsBag.addFiles}
              onRemoveAttachment={attachmentsBag.removeAttachment}
            />
          </div>
        </div>
      </div>
      {lightboxSrc ? (
        <ChatImageLightbox src={lightboxSrc} onClose={closeLightbox} />
      ) : null}
    </LightboxContext.Provider>
  );
};
