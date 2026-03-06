"use client";

export default function AgentPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: 32, fontFamily: "monospace" }}>
      <h2>Agent Page Error</h2>
      <pre style={{ whiteSpace: "pre-wrap", color: "red", fontSize: 13 }}>
        {error.message}
      </pre>
      <pre style={{ whiteSpace: "pre-wrap", color: "#888", fontSize: 11, marginTop: 8 }}>
        {error.stack}
      </pre>
      <button onClick={reset} style={{ marginTop: 16, padding: "8px 16px" }}>
        Try again
      </button>
    </div>
  );
}
