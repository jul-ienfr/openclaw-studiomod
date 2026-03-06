import type { EventType, SSEEvent } from "./types";

type Listener = (event: SSEEvent) => void;

class EventBusClient {
  private listeners = new Map<EventType | "*", Set<Listener>>();
  private source: EventSource | null = null;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private reconnectDelay = 1000;
  private maxReconnectDelay = 30000;

  connect(url = "/api/events/stream") {
    if (this.source?.readyState === EventSource.OPEN) return;
    this.disconnect();

    this.source = new EventSource(url);

    this.source.onmessage = (e) => {
      try {
        const event: SSEEvent = JSON.parse(e.data);
        this.emit(event);
      } catch {
        // ignore malformed events
      }
    };

    this.source.onopen = () => {
      this.reconnectDelay = 1000;
    };

    this.source.onerror = () => {
      this.source?.close();
      this.source = null;
      this.scheduleReconnect(url);
    };
  }

  disconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.source?.close();
    this.source = null;
  }

  private scheduleReconnect(url: string) {
    this.reconnectTimer = setTimeout(() => {
      this.connect(url);
    }, this.reconnectDelay);
    this.reconnectDelay = Math.min(
      this.reconnectDelay * 2,
      this.maxReconnectDelay,
    );
  }

  on(type: EventType | "*", listener: Listener) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type)!.add(listener);
    return () => this.off(type, listener);
  }

  off(type: EventType | "*", listener: Listener) {
    this.listeners.get(type)?.delete(listener);
  }

  private emit(event: SSEEvent) {
    // Notify specific listeners
    this.listeners.get(event.type)?.forEach((fn) => fn(event));
    // Notify wildcard listeners
    this.listeners.get("*")?.forEach((fn) => fn(event));
  }

  get connected() {
    return this.source?.readyState === EventSource.OPEN;
  }
}

// Singleton
export const eventBus = new EventBusClient();
