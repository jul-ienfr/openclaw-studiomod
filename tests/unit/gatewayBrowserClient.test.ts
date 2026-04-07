import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { GatewayBrowserClient } from "@/lib/gateway/openclaw/GatewayBrowserClient";

class MockEventSource {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSED = 2;
  static instances: MockEventSource[] = [];

  readyState = MockEventSource.CONNECTING;
  onopen: (() => void) | null = null;
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: (() => void) | null = null;

  constructor(public url: string) {
    MockEventSource.instances.push(this);
  }

  open() {
    this.readyState = MockEventSource.OPEN;
    this.onopen?.();
  }

  emitMessage(payload: unknown) {
    this.onmessage?.({
      data: typeof payload === "string" ? payload : JSON.stringify(payload),
    } as MessageEvent);
  }

  close() {
    this.readyState = MockEventSource.CLOSED;
  }
}

describe("GatewayBrowserClient", () => {
  const originalEventSource = globalThis.EventSource;
  const originalFetch = globalThis.fetch;
  const originalSubtle = globalThis.crypto?.subtle;
  const fetchMock = vi.fn();

  beforeEach(() => {
    MockEventSource.instances = [];
    globalThis.EventSource = MockEventSource as unknown as typeof EventSource;
    globalThis.fetch = fetchMock as unknown as typeof fetch;
    fetchMock.mockReset();
    if (globalThis.crypto) {
      Object.defineProperty(globalThis.crypto, "subtle", {
        value: undefined,
        configurable: true,
      });
    }
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    globalThis.EventSource = originalEventSource;
    globalThis.fetch = originalFetch;
    if (globalThis.crypto) {
      Object.defineProperty(globalThis.crypto, "subtle", {
        value: originalSubtle,
        configurable: true,
      });
    }
  });

  it("sends connect via the runtime message route when connect.challenge arrives", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers(),
    } as Response);
    const onHello = vi.fn();
    const client = new GatewayBrowserClient({
      url: "ws://example.com",
      onHello,
    });
    client.start();

    const eventSource = MockEventSource.instances[0];
    if (!eventSource) {
      throw new Error("EventSource not created");
    }

    eventSource.open();
    eventSource.emitMessage({
      type: "event",
      event: "connect.challenge",
      payload: { nonce: "abc" },
    });

    await Promise.resolve();
    await Promise.resolve();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [, init] = fetchMock.mock.calls[0] ?? [];
    const frame = JSON.parse(String(init?.body ?? "{}"));
    expect(frame.type).toBe("req");
    expect(frame.method).toBe("connect");
    expect(typeof frame.id).toBe("string");
    expect(frame.params?.client?.id).toBe("openclaw-control-ui");

    eventSource.emitMessage({
      type: "res",
      id: frame.id,
      ok: true,
      payload: { type: "hello-ok", protocol: 3 },
    });
    await Promise.resolve();

    expect(onHello).toHaveBeenCalledWith(
      expect.objectContaining({ type: "hello-ok", protocol: 3 }),
    );
  });

  it("retries transient send failures before rejecting the pending request", async () => {
    fetchMock
      .mockResolvedValueOnce({
        ok: false,
        status: 503,
        headers: new Headers({ "Retry-After": "1" }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        headers: new Headers(),
      } as Response);
    const client = new GatewayBrowserClient({ url: "ws://example.com" });
    client.start();

    const eventSource = MockEventSource.instances[0];
    if (!eventSource) {
      throw new Error("EventSource not created");
    }

    eventSource.open();
    const requestPromise = client.request("agents.list", {});
    await Promise.resolve();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const firstFrame = JSON.parse(
      String(fetchMock.mock.calls[0]?.[1]?.body ?? "{}"),
    );

    await vi.advanceTimersByTimeAsync(1000);
    await Promise.resolve();

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const secondFrame = JSON.parse(
      String(fetchMock.mock.calls[1]?.[1]?.body ?? "{}"),
    );
    expect(secondFrame.id).toBe(firstFrame.id);
    expect(secondFrame.method).toBe("agents.list");

    eventSource.emitMessage({
      type: "res",
      id: secondFrame.id,
      ok: true,
      payload: { agents: [] },
    });

    await expect(requestPromise).resolves.toEqual({ agents: [] });
  });
});
