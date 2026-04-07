/**
 * Server-Sent Events (SSE) broadcaster with backpressure queue per client.
 * Maintains a map of browser clients and broadcasts gateway events to them.
 *
 * On connect, new clients receive the last hello-ok immediately (if available)
 * so the browser can transition to "connected" state without waiting for a replay.
 *
 * Each client has an independent queue (max 500 messages). If the queue overflows
 * the client is disconnected to avoid unbounded memory growth.
 */
function createEventBroadcaster() {
  // Map<response, { queue: string[], draining: boolean, queuedBytes: number }>
  const clients = new Map();
  let lastHelloOkChunk = null;

  // Heartbeat interval to ping clients and detect dead connections
  let heartbeatInterval = null;

  const MAX_QUEUE = 500;
  const MAX_BATCH_MESSAGES = 50;
  const MAX_BATCH_BYTES = 64 * 1024;

  const startHeartbeat = () => {
    if (heartbeatInterval) return;
    heartbeatInterval = setInterval(() => {
      const deadClients = [];
      for (const [client] of clients) {
        try {
          client.write(': heartbeat\n\n');
        } catch (err) {
          console.error("[broadcaster] failed to send heartbeat to client", err.message);
          deadClients.push(client);
        }
      }
      for (const client of deadClients) {
        clients.delete(client);
        try { client.end(); } catch {}
      }
      if (clients.size === 0) stopHeartbeat();
    }, 25000);
  };

  const stopHeartbeat = () => {
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    }
  };

  const disconnectClient = (client) => {
    const state = clients.get(client);
    if (state) {
      state.queue.length = 0;
      state.queuedBytes = 0;
    }
    clients.delete(client);
    if (clients.size === 0) stopHeartbeat();
    try { client.end(); } catch {}
  };

  const flushQueue = async (client) => {
    const state = clients.get(client);
    if (!state || state.draining) return;
    state.draining = true;
    while (state.queue.length > 0) {
      let batch = "";
      let batchBytes = 0;
      let batchCount = 0;
      while (state.queue.length > 0 && batchCount < MAX_BATCH_MESSAGES) {
        const nextChunk = state.queue[0];
        const nextBytes = Buffer.byteLength(nextChunk);
        if (batchCount > 0 && batchBytes + nextBytes > MAX_BATCH_BYTES) break;
        batch += nextChunk;
        batchBytes += nextBytes;
        batchCount += 1;
        state.queue.shift();
        state.queuedBytes = Math.max(0, state.queuedBytes - nextBytes);
      }
      if (!batch) continue;
      try {
        client.write(batch);
      } catch (err) {
        console.error("[broadcaster] failed to send to client during flush", err.message);
        disconnectClient(client);
        return;
      }
      // Yield to event loop to avoid blocking
      await new Promise((resolve) => setImmediate(resolve));
      // Re-check in case client was removed during yield
      if (!clients.has(client)) return;
    }
    state.draining = false;
  };

  const addClient = (response) => {
    const state = { queue: [], draining: false, queuedBytes: 0 };
    clients.set(response, state);

    // Ensure heartbeat is running when we have clients
    if (clients.size === 1) startHeartbeat();

    // Send hello-ok immediately so browser knows gateway is ready
    if (lastHelloOkChunk) {
      try {
        response.write(lastHelloOkChunk);
      } catch (err) {
        console.error("[broadcaster] failed to send hello-ok to new client", err.message);
        clients.delete(response);
        if (clients.size === 0) stopHeartbeat();
      }
    }

    return () => {
      disconnectClient(response);
    };
  };

  const broadcast = (message) => {
    const serialized = `data: ${JSON.stringify(message)}\n\n`;
    // Track the latest hello-ok for new clients joining later
    if (message?.type === "res" && message?.ok && message?.payload?.type === "hello-ok") {
      lastHelloOkChunk = serialized;
    }

    // Enqueue message for each client and flush asynchronously
    for (const [client, state] of clients) {
      if (state.queue.length >= MAX_QUEUE) {
        console.error("[broadcaster] client queue overflow (>500), disconnecting client");
        disconnectClient(client);
        continue;
      }
      state.queue.push(serialized);
      state.queuedBytes += Buffer.byteLength(serialized);
      // Fire and forget flush (errors handled inside flushQueue)
      void flushQueue(client);
    }
  };

  const getClientCount = () => clients.size;

  const shutdown = () => {
    stopHeartbeat();
    for (const [client] of clients) {
      try {
        client.end();
      } catch {}
    }
    clients.clear();
    lastHelloOkChunk = null;
  };

  return {
    addClient,
    broadcast,
    getClientCount,
    shutdown,
  };
}

module.exports = { createEventBroadcaster };
