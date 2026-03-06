import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import { useTranslations } from "next-intl";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight, Clock } from "lucide-react";
import { rewriteMediaLinesToMarkdown } from "@/lib/text/media-markdown";
import { isNearBottom } from "@/lib/dom";
import { AgentAvatar } from "../AgentAvatar";
import type { AgentState as AgentRecord } from "@/features/agents/state/store";
import type {
  ExecApprovalDecision,
  PendingExecApproval,
} from "@/features/agents/approvals/types";
import {
  buildAgentChatRenderBlocks,
  buildFinalAgentChatItems,
  type AssistantTraceEvent,
  type AgentChatItem,
} from "../chatItems";
import {
  SPINE_LEFT,
  ASSISTANT_GUTTER_CLASS,
  ASSISTANT_MAX_WIDTH_DEFAULT_CLASS,
  ASSISTANT_MAX_WIDTH_EXPANDED_CLASS,
  CHAT_TOP_THRESHOLD_PX,
  formatChatTimestamp,
  formatDurationLabel,
  resolveAssistantMaxWidthClass,
} from "./chatUtils";
import { chatUrlTransform, chatMarkdownComponents } from "./ChatMarkdownImg";
import { MessageActionBar } from "./MessageActionBar";
import { ExecApprovalCard } from "./ExecApprovalCard";
import { ToolCallDetails } from "./ToolCallDetails";

/* ── ThinkingDetailsRow ──────────────────────────────────────────── */

const ThinkingDetailsRow = memo(function ThinkingDetailsRow({
  events,
  thinkingText,
  toolLines = [],
  durationMs,
  showTyping,
}: {
  events?: AssistantTraceEvent[];
  thinkingText?: string | null;
  toolLines?: string[];
  durationMs?: number;
  showTyping?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const traceEvents = (() => {
    if (events && events.length > 0) return events;
    const normalizedThinkingText = thinkingText?.trim() ?? "";
    const next: AssistantTraceEvent[] = [];
    if (normalizedThinkingText) {
      next.push({ kind: "thinking", text: normalizedThinkingText });
    }
    for (const line of toolLines) {
      next.push({ kind: "tool", text: line });
    }
    return next;
  })();
  if (traceEvents.length === 0) return null;
  return (
    <details
      open={open}
      className="ui-chat-thinking group rounded-md px-2 py-1.5 text-[10px] shadow-2xs"
    >
      <summary
        className="flex cursor-pointer list-none items-center gap-2 opacity-65 [&::-webkit-details-marker]:hidden"
        onClick={(event) => {
          event.preventDefault();
          setOpen((current) => !current);
        }}
      >
        <ChevronRight className="h-3 w-3 shrink-0 transition group-open:rotate-90" />
        <span className="flex min-w-0 items-center gap-2">
          <span className="font-mono text-[10px] font-medium tracking-[0.02em]">
            Thinking (internal)
          </span>
          {typeof durationMs === "number" ? (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] font-medium tracking-[0.02em] text-muted-foreground/80">
              <Clock className="h-3 w-3" />
              {formatDurationLabel(durationMs)}
            </span>
          ) : null}
          {showTyping ? (
            <span className="typing-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          ) : null}
        </span>
      </summary>
      {open ? (
        <div className="mt-2 space-y-2 pl-5">
          {traceEvents.map((event, index) =>
            event.kind === "thinking" ? (
              <div
                key={`thinking-event-${index}-${event.text.slice(0, 48)}`}
                className="agent-markdown min-w-0 text-foreground/85"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  urlTransform={chatUrlTransform}
                  components={chatMarkdownComponents}
                >
                  {event.text}
                </ReactMarkdown>
              </div>
            ) : (
              <ToolCallDetails
                key={`thinking-tool-${index}-${event.text.slice(0, 48)}`}
                line={event.text}
                className="rounded-md border border-border/45 bg-surface-2/65 px-2 py-1 text-[10px] text-muted-foreground/90 shadow-2xs"
              />
            ),
          )}
        </div>
      ) : null}
    </details>
  );
});

/* ── UserMessageCard ─────────────────────────────────────────────── */

const UserMessageCard = memo(function UserMessageCard({
  text,
  timestampMs,
  onReply,
  onForward,
  otherAgents,
}: {
  text: string;
  timestampMs?: number;
  onReply?: () => void;
  onForward?: (targetAgentId: string, text: string) => void;
  otherAgents?: { agentId: string; name: string }[];
}) {
  const forwardWithText = useMemo(() => {
    if (!onForward) return undefined;
    const raw = text.replace(/^> /gm, "").trim();
    return (targetAgentId: string) => onForward(targetAgentId, raw);
  }, [onForward, text]);

  return (
    <div className="group/msg relative ui-chat-user-card w-full max-w-[70ch] self-end overflow-hidden rounded-[var(--radius-small)] bg-[color:var(--chat-user-bg)]">
      <MessageActionBar
        onReply={onReply}
        onForward={forwardWithText}
        otherAgents={otherAgents}
      />
      <div className="flex items-center justify-between gap-3 bg-[color:var(--chat-user-header-bg)] px-3 py-2 dark:px-3.5 dark:py-2.5">
        <div className="type-meta min-w-0 truncate font-mono text-foreground/90">
          You
        </div>
        {typeof timestampMs === "number" ? (
          <time className="type-meta shrink-0 rounded-md bg-surface-3 px-2 py-0.5 font-mono text-muted-foreground/70">
            {formatChatTimestamp(timestampMs)}
          </time>
        ) : null}
      </div>
      <div className="agent-markdown type-body px-3 py-3 text-foreground dark:px-3.5 dark:py-3.5">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          urlTransform={chatUrlTransform}
          components={chatMarkdownComponents}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
});

/* ── AssistantMessageCard ────────────────────────────────────────── */

const AssistantMessageCard = memo(function AssistantMessageCard({
  avatarSeed,
  avatarUrl,
  name,
  timestampMs,
  thinkingEvents,
  thinkingText,
  thinkingToolLines,
  thinkingDurationMs,
  contentText,
  streaming,
  onReply,
  onForward,
  otherAgents,
}: {
  avatarSeed: string;
  avatarUrl: string | null;
  name: string;
  timestampMs?: number;
  thinkingEvents?: AssistantTraceEvent[];
  thinkingText?: string | null;
  thinkingToolLines?: string[];
  thinkingDurationMs?: number;
  contentText?: string | null;
  streaming?: boolean;
  onReply?: () => void;
  onForward?: (targetAgentId: string, text: string) => void;
  otherAgents?: { agentId: string; name: string }[];
}) {
  const resolvedTimestamp =
    typeof timestampMs === "number" ? timestampMs : null;
  const hasThinking = Boolean(
    (thinkingEvents?.length ?? 0) > 0 ||
    thinkingText?.trim() ||
    (thinkingToolLines?.length ?? 0) > 0,
  );
  const widthClass = hasThinking
    ? ASSISTANT_MAX_WIDTH_EXPANDED_CLASS
    : resolveAssistantMaxWidthClass(contentText);
  const hasContent = Boolean(contentText?.trim());
  const compactStreamingIndicator = Boolean(
    streaming && !hasThinking && !hasContent,
  );
  const showActions = !streaming && hasContent;
  const forwardWithText = useMemo(() => {
    if (!onForward || !contentText) return undefined;
    return (targetAgentId: string) => onForward(targetAgentId, contentText);
  }, [onForward, contentText]);

  return (
    <div className="group/msg w-full self-start">
      <div
        className={`relative w-full ${widthClass} ${ASSISTANT_GUTTER_CLASS}`}
      >
        {showActions ? (
          <MessageActionBar
            onReply={onReply}
            onForward={forwardWithText}
            otherAgents={otherAgents}
          />
        ) : null}
        <div className="absolute left-[4px] top-[2px]">
          <AgentAvatar
            seed={avatarSeed}
            name={name}
            avatarUrl={avatarUrl}
            size={22}
          />
        </div>
        <div className="flex items-center justify-between gap-3 py-0.5">
          <div className="type-meta min-w-0 truncate font-mono text-foreground/90">
            {name}
          </div>
          {resolvedTimestamp !== null ? (
            <time className="type-meta shrink-0 rounded-md bg-surface-3 px-2 py-0.5 font-mono text-muted-foreground/90">
              {formatChatTimestamp(resolvedTimestamp)}
            </time>
          ) : null}
        </div>

        {compactStreamingIndicator ? (
          <div
            className="mt-2 inline-flex items-center gap-2 rounded-md bg-surface-3 px-3 py-2 text-[10px] text-muted-foreground/80 shadow-2xs"
            role="status"
            aria-live="polite"
            data-testid="agent-typing-indicator"
          >
            <span className="font-mono text-[10px] font-medium tracking-[0.02em]">
              Thinking
            </span>
            <span className="typing-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>
        ) : (
          <div className="mt-2 space-y-3 dark:space-y-5">
            {streaming && !hasThinking ? (
              <div
                className="flex items-center gap-2 text-[10px] text-muted-foreground/80"
                role="status"
                aria-live="polite"
                data-testid="agent-typing-indicator"
              >
                <span className="font-mono text-[10px] font-medium tracking-[0.02em]">
                  Thinking
                </span>
                <span className="typing-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            ) : null}

            {hasThinking ? (
              <ThinkingDetailsRow
                events={thinkingEvents}
                thinkingText={thinkingText}
                toolLines={thinkingToolLines ?? []}
                durationMs={thinkingDurationMs}
                showTyping={streaming}
              />
            ) : null}

            {contentText ? (
              <div className="ui-chat-assistant-card">
                {streaming ? (
                  (() => {
                    if (!contentText.includes("MEDIA:")) {
                      return (
                        <div className="whitespace-pre-wrap break-words text-foreground">
                          {contentText}
                        </div>
                      );
                    }
                    const rewritten = rewriteMediaLinesToMarkdown(contentText);
                    if (!rewritten.includes("![](")) {
                      return (
                        <div className="whitespace-pre-wrap break-words text-foreground">
                          {contentText}
                        </div>
                      );
                    }
                    return (
                      <div className="agent-markdown text-foreground">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          urlTransform={chatUrlTransform}
                          components={chatMarkdownComponents}
                        >
                          {rewritten}
                        </ReactMarkdown>
                      </div>
                    );
                  })()
                ) : (
                  <div className="agent-markdown text-foreground">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      urlTransform={chatUrlTransform}
                      components={chatMarkdownComponents}
                    >
                      {rewriteMediaLinesToMarkdown(contentText)}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
});

/* ── AssistantIntroCard ──────────────────────────────────────────── */

const AssistantIntroCard = memo(function AssistantIntroCard({
  avatarSeed,
  avatarUrl,
  name,
  title,
}: {
  avatarSeed: string;
  avatarUrl: string | null;
  name: string;
  title: string;
}) {
  return (
    <div className="w-full self-start">
      <div
        className={`relative w-full ${ASSISTANT_MAX_WIDTH_DEFAULT_CLASS} ${ASSISTANT_GUTTER_CLASS}`}
      >
        <div className="absolute left-[4px] top-[2px]">
          <AgentAvatar
            seed={avatarSeed}
            name={name}
            avatarUrl={avatarUrl}
            size={22}
          />
        </div>
        <div className="flex items-center justify-between gap-3 py-0.5">
          <div className="type-meta min-w-0 truncate font-mono text-foreground/90">
            {name}
          </div>
        </div>
        <div className="ui-chat-assistant-card mt-2">
          <div className="text-[14px] leading-[1.65] text-foreground">
            {title}
          </div>
          <div className="mt-2 font-mono text-[10px] tracking-[0.03em] text-muted-foreground/80">
            Try describing a task, bug, or question to get started.
          </div>
        </div>
      </div>
    </div>
  );
});

/* ── AgentChatFinalItems ─────────────────────────────────────────── */

const AgentChatFinalItems = memo(function AgentChatFinalItems({
  agentId,
  name,
  avatarSeed,
  avatarUrl,
  chatItems,
  running,
  runStartedAt,
  onReply,
  onForward,
  otherAgents,
}: {
  agentId: string;
  name: string;
  avatarSeed: string;
  avatarUrl: string | null;
  chatItems: AgentChatItem[];
  running: boolean;
  runStartedAt: number | null;
  onReply?: (text: string) => void;
  onForward?: (targetAgentId: string, text: string) => void;
  otherAgents?: { agentId: string; name: string }[];
}) {
  const blocks = buildAgentChatRenderBlocks(chatItems);

  return (
    <>
      {blocks.map((block, index) => {
        if (block.kind === "user") {
          return (
            <UserMessageCard
              key={`chat-${agentId}-user-${index}`}
              text={block.text}
              timestampMs={block.timestampMs}
              onReply={onReply ? () => onReply(block.text) : undefined}
              onForward={onForward}
              otherAgents={otherAgents}
            />
          );
        }
        const streaming = running && index === blocks.length - 1 && !block.text;
        return (
          <AssistantMessageCard
            key={`chat-${agentId}-assistant-${index}`}
            avatarSeed={avatarSeed}
            avatarUrl={avatarUrl}
            name={name}
            timestampMs={
              block.timestampMs ??
              (streaming ? (runStartedAt ?? undefined) : undefined)
            }
            thinkingEvents={block.traceEvents}
            thinkingDurationMs={block.thinkingDurationMs}
            contentText={block.text}
            streaming={streaming}
            onReply={
              onReply && block.text ? () => onReply(block.text!) : undefined
            }
            onForward={block.text ? onForward : undefined}
            otherAgents={otherAgents}
          />
        );
      })}
    </>
  );
});

/* ── AgentChatTranscript ─────────────────────────────────────────── */

export type AgentChatTranscriptProps = {
  agentId: string;
  name: string;
  avatarSeed: string;
  avatarUrl: string | null;
  status: AgentRecord["status"];
  historyMaybeTruncated: boolean;
  historyFetchedCount: number | null;
  historyFetchLimit: number | null;
  onLoadMoreHistory: () => void;
  chatItems: AgentChatItem[];
  liveThinkingText: string;
  liveAssistantText: string;
  showTypingIndicator: boolean;
  outputLineCount: number;
  liveAssistantCharCount: number;
  liveThinkingCharCount: number;
  runStartedAt: number | null;
  scrollToBottomNextOutputRef: MutableRefObject<boolean>;
  pendingExecApprovals: PendingExecApproval[];
  onResolveExecApproval?: (id: string, decision: ExecApprovalDecision) => void;
  emptyStateTitle: string;
  onReply?: (text: string) => void;
  onForward?: (targetAgentId: string, text: string) => void;
  otherAgents?: { agentId: string; name: string }[];
};

export const AgentChatTranscript = memo(function AgentChatTranscript({
  agentId,
  name,
  avatarSeed,
  avatarUrl,
  status,
  historyMaybeTruncated,
  historyFetchedCount,
  historyFetchLimit,
  onLoadMoreHistory,
  chatItems,
  liveThinkingText,
  liveAssistantText,
  showTypingIndicator,
  outputLineCount,
  liveAssistantCharCount,
  liveThinkingCharCount,
  runStartedAt,
  scrollToBottomNextOutputRef,
  pendingExecApprovals,
  onResolveExecApproval,
  emptyStateTitle,
  onReply,
  onForward,
  otherAgents,
}: AgentChatTranscriptProps) {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);
  const tc = useTranslations("chat");
  const scrollFrameRef = useRef<number | null>(null);
  const pinnedRef = useRef(true);
  const [isPinned, setIsPinned] = useState(true);
  const [isAtTop, setIsAtTop] = useState(false);
  const [nowMs, setNowMs] = useState<number | null>(null);

  const scrollChatToBottom = useCallback(() => {
    if (!chatRef.current) return;
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView?.({ block: "end" });
      return;
    }
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, []);

  const setPinned = useCallback((nextPinned: boolean) => {
    if (pinnedRef.current === nextPinned) return;
    pinnedRef.current = nextPinned;
    setIsPinned(nextPinned);
  }, []);

  const updatePinnedFromScroll = useCallback(() => {
    const el = chatRef.current;
    if (!el) return;
    const nextAtTop = el.scrollTop <= CHAT_TOP_THRESHOLD_PX;
    setIsAtTop((current) => (current === nextAtTop ? current : nextAtTop));
    setPinned(
      isNearBottom(
        {
          scrollTop: el.scrollTop,
          scrollHeight: el.scrollHeight,
          clientHeight: el.clientHeight,
        },
        48,
      ),
    );
  }, [setPinned]);

  const scheduleScrollToBottom = useCallback(() => {
    if (scrollFrameRef.current !== null) return;
    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      scrollChatToBottom();
    });
  }, [scrollChatToBottom]);

  useEffect(() => {
    updatePinnedFromScroll();
  }, [updatePinnedFromScroll]);

  // Scroll to bottom immediately on mount (triggered on agent switch via key={agentId})
  useLayoutEffect(() => {
    scrollChatToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showJumpToLatest =
    !isPinned &&
    (outputLineCount > 0 ||
      liveAssistantCharCount > 0 ||
      liveThinkingCharCount > 0);

  useEffect(() => {
    const shouldForceScroll = scrollToBottomNextOutputRef.current;
    if (shouldForceScroll) {
      scrollToBottomNextOutputRef.current = false;
      scheduleScrollToBottom();
      return;
    }

    if (pinnedRef.current) {
      scheduleScrollToBottom();
      return;
    }
  }, [
    liveAssistantCharCount,
    liveThinkingCharCount,
    outputLineCount,
    pendingExecApprovals.length,
    scheduleScrollToBottom,
    scrollToBottomNextOutputRef,
  ]);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, []);

  const showLiveAssistantCard =
    status === "running" &&
    Boolean(liveThinkingText || liveAssistantText || showTypingIndicator);
  const hasApprovals = pendingExecApprovals.length > 0;
  const hasTranscriptContent = chatItems.length > 0 || hasApprovals;

  useEffect(() => {
    if (
      status !== "running" ||
      typeof runStartedAt !== "number" ||
      !showLiveAssistantCard
    ) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setNowMs(Date.now());
    }, 0);
    const intervalId = window.setInterval(() => setNowMs(Date.now()), 250);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [runStartedAt, showLiveAssistantCard, status]);

  return (
    <div className="relative flex-1 overflow-hidden">
      <div
        ref={chatRef}
        data-testid="agent-chat-scroll"
        className={`ui-chat-scroll ui-chat-scroll-borderless h-full overflow-auto p-4 dark:p-6 sm:p-5 dark:sm:p-7 ${showJumpToLatest ? "pb-20" : ""}`}
        onScroll={() => updatePinnedFromScroll()}
        onWheel={(event) => {
          event.stopPropagation();
        }}
        onWheelCapture={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="relative flex flex-col gap-6 dark:gap-8 text-[14px] leading-[1.65] text-foreground">
          <div
            aria-hidden
            className={`pointer-events-none absolute ${SPINE_LEFT} top-0 bottom-0 w-px bg-border/20`}
          />
          {historyMaybeTruncated && isAtTop ? (
            <div className="-mx-1 flex items-center justify-between gap-3 rounded-md bg-surface-2 px-3 py-2 shadow-2xs">
              <div className="type-meta min-w-0 truncate font-mono text-muted-foreground">
                Showing most recent{" "}
                {typeof historyFetchedCount === "number"
                  ? historyFetchedCount
                  : "?"}{" "}
                messages
                {typeof historyFetchLimit === "number"
                  ? ` (limit ${historyFetchLimit})`
                  : ""}
              </div>
              <button
                type="button"
                className="shrink-0 rounded-md border border-border/70 bg-surface-3 px-3 py-1.5 font-mono text-[12px] font-medium tracking-[0.02em] text-foreground transition hover:bg-surface-2"
                onClick={onLoadMoreHistory}
              >
                Load more
              </button>
            </div>
          ) : null}
          {!hasTranscriptContent ? (
            <AssistantIntroCard
              avatarSeed={avatarSeed}
              avatarUrl={avatarUrl}
              name={name}
              title={emptyStateTitle}
            />
          ) : (
            <>
              <AgentChatFinalItems
                agentId={agentId}
                name={name}
                avatarSeed={avatarSeed}
                avatarUrl={avatarUrl}
                chatItems={chatItems}
                running={status === "running"}
                runStartedAt={runStartedAt}
                onReply={onReply}
                onForward={onForward}
                otherAgents={otherAgents}
              />
              {showLiveAssistantCard ? (
                <AssistantMessageCard
                  avatarSeed={avatarSeed}
                  avatarUrl={avatarUrl}
                  name={name}
                  timestampMs={runStartedAt ?? undefined}
                  thinkingText={liveThinkingText || null}
                  thinkingDurationMs={
                    typeof runStartedAt === "number" &&
                    typeof nowMs === "number"
                      ? Math.max(0, nowMs - runStartedAt)
                      : undefined
                  }
                  contentText={liveAssistantText || null}
                  streaming={status === "running"}
                />
              ) : null}
              {pendingExecApprovals.map((approval) => (
                <ExecApprovalCard
                  key={approval.id}
                  approval={approval}
                  onResolve={onResolveExecApproval}
                />
              ))}
              <div ref={chatBottomRef} />
            </>
          )}
        </div>
      </div>

      {showJumpToLatest ? (
        <button
          type="button"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md border border-border/70 bg-card px-3 py-1.5 font-mono text-[12px] font-medium tracking-[0.02em] text-foreground shadow-xs transition hover:bg-surface-2"
          onClick={() => {
            setPinned(true);
            scrollChatToBottom();
          }}
          aria-label={tc("jumpToLatest")}
        >
          {tc("jumpToLatest")}
        </button>
      ) : null}
    </div>
  );
});

/* ── Re-export AgentChatItem for consumers ───────────────────────── */
export type { AgentChatItem };
