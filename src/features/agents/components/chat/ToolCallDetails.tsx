import { memo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { rewriteMediaLinesToMarkdown } from "@/lib/text/media-markdown";
import { summarizeToolLabel } from "../chatItems";
import {
  ASSISTANT_MAX_WIDTH_EXPANDED_CLASS,
  ASSISTANT_GUTTER_CLASS,
} from "./chatUtils";
import { chatUrlTransform, chatMarkdownComponents } from "./ChatMarkdownImg";

/* ── Tool call details (expandable) ─────────────────────────────── */

export const ToolCallDetails = memo(function ToolCallDetails({
  line,
  className,
}: {
  line: string;
  className?: string;
}) {
  const { summaryText, body, inlineOnly } = summarizeToolLabel(line);
  const [open, setOpen] = useState(false);
  const resolvedClassName =
    className ??
    `w-full ${ASSISTANT_MAX_WIDTH_EXPANDED_CLASS} ${ASSISTANT_GUTTER_CLASS} self-start rounded-md bg-surface-3 px-2 py-1 text-[10px] text-muted-foreground shadow-2xs`;
  if (inlineOnly) {
    return (
      <div className={resolvedClassName}>
        <div className="font-mono text-[10px] font-semibold tracking-[0.11em]">
          {summaryText}
        </div>
      </div>
    );
  }
  return (
    <details open={open} className={resolvedClassName}>
      <summary
        className="cursor-pointer select-none font-mono text-[10px] font-semibold tracking-[0.11em]"
        onClick={(event) => {
          event.preventDefault();
          setOpen((current) => !current);
        }}
      >
        {summaryText}
      </summary>
      {open && body ? (
        <div className="agent-markdown agent-tool-markdown mt-1 text-foreground">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            urlTransform={chatUrlTransform}
            components={chatMarkdownComponents}
          >
            {rewriteMediaLinesToMarkdown(body)}
          </ReactMarkdown>
        </div>
      ) : null}
    </details>
  );
});
