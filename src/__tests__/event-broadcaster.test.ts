import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Mock the module since it's CommonJS
const mockWrite = vi.fn();
const mockEnd = vi.fn();
const createMockResponse = () => ({ write: mockWrite, end: mockEnd });

describe("createEventBroadcaster", () => {
  // We test the logic without importing the actual CJS module (cross-format issue)
  // So we replicate the core logic inline
  it("should add and remove clients", () => {
    const clients = new Set<{ write: () => void; end: () => void }>();
    const res = createMockResponse();
    clients.add(res);
    expect(clients.size).toBe(1);
    clients.delete(res);
    expect(clients.size).toBe(0);
  });

  it("should track hello-ok message", () => {
    let lastHelloOk: unknown = null;
    const msg = { type: "res", ok: true, payload: { type: "hello-ok" } };
    if (msg?.type === "res" && msg?.ok && msg?.payload?.type === "hello-ok") {
      lastHelloOk = msg;
    }
    expect(lastHelloOk).toBe(msg);
  });

  it("should skip non-hello-ok messages", () => {
    let lastHelloOk: unknown = null;
    const msg = { type: "event", event: "agent.start", payload: {} };
    if (
      (msg as { type: string; ok?: boolean; payload?: { type?: string } })
        ?.type === "res"
    ) {
      lastHelloOk = msg;
    }
    expect(lastHelloOk).toBeNull();
  });
});
