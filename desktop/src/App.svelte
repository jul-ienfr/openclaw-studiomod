<script lang="ts">
  import { onMount } from "svelte";
  import { invoke } from "@tauri-apps/api/core";
  import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
  import type { ServerConfig } from "./lib/types";
  import { getServers, saveServer, deleteServer, testConnection, setLastServerId } from "./lib/storage";

  let servers: ServerConfig[] = $state([]);
  let screen: "pairing" | "studio" = $state("pairing");
  let currentServer: ServerConfig | null = $state(null);

  // Pairing form
  let formUrl = $state("http://192.168.31.96:3000");
  let formToken = $state("");
  let formName = $state("");
  let jsonPaste = $state("");
  let testing = $state(false);
  let testResult: "ok" | "error" | null = $state(null);
  let testError = $state("");
  let saving = $state(false);
  let showJsonPaste = $state(false);
  const jsonPlaceholder = '{"lan":"...","port":3000,"token":"..."}';

  onMount(async () => {
    servers = await getServers();
    // Auto-connect to last used server
    const last = await invoke<ServerConfig | null>("get_last_server");
    if (last) {
      await connectToServer(last);
    }
  });

  async function handleTestConnection() {
    testing = true;
    testResult = null;
    try {
      const ok = await testConnection(formUrl, formToken);
      testResult = ok ? "ok" : "error";
      testError = ok ? "" : "Server unreachable or token invalid";
    } catch (e) {
      testResult = "error";
      testError = String(e);
    } finally {
      testing = false;
    }
  }

  async function handleSave() {
    saving = true;
    try {
      const s = await saveServer({ url: formUrl, token: formToken, name: formName || undefined });
      servers = await getServers();
      await connectToServer(s);
    } finally {
      saving = false;
    }
  }

  async function handleDelete(id: string, e: MouseEvent) {
    e.stopPropagation();
    await deleteServer(id);
    servers = await getServers();
  }

  async function connectToServer(s: ServerConfig) {
    currentServer = s;
    await setLastServerId(s.id);
    // Navigate the Tauri webview to the Studio URL
    const url = `${s.url}${s.token ? `?access_token=${encodeURIComponent(s.token)}` : ""}`;
    const win = getCurrentWebviewWindow();
    await win.navigate(url);
    screen = "studio";
  }

  function handleDisconnect() {
    currentServer = null;
    screen = "pairing";
    const win = getCurrentWebviewWindow();
    // Navigate back to local pairing UI (reload app)
    win.navigate("http://localhost:1421").catch(() => {
      // In production, app is served from tauri://localhost
      win.navigate("tauri://localhost");
    });
  }

  function handleJsonPaste() {
    try {
      const data = JSON.parse(jsonPaste);
      if (data.lan || data.host) formUrl = `http://${data.lan ?? data.host}:${data.port ?? 3000}`;
      if (data.token) formToken = data.token;
      jsonPaste = "";
      showJsonPaste = false;
    } catch {
      // ignore invalid json
    }
  }
</script>

{#if screen === "pairing"}
  <div class="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-white">OpenClaw Studio</h1>
      <p class="mt-1 text-sm text-zinc-400">Connect to your Studio server</p>
    </div>

    <!-- Saved servers -->
    {#if servers.length > 0}
      <div class="w-full max-w-md space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wider text-zinc-500">Saved servers</p>
        {#each servers as s (s.id)}
          <div class="flex w-full items-center justify-between rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 transition-colors hover:border-zinc-500 hover:bg-zinc-800">
            <button
              onclick={() => connectToServer(s)}
              class="min-w-0 flex-1 text-left"
            >
              <p class="truncate text-sm font-medium text-white">{s.name ?? s.url}</p>
              {#if s.name}<p class="truncate text-xs text-zinc-400">{s.url}</p>{/if}
            </button>
            <button
              onclick={(e) => handleDelete(s.id, e)}
              class="ml-3 shrink-0 rounded p-1 text-zinc-600 hover:bg-zinc-700 hover:text-zinc-300"
              aria-label="Remove server"
            >
              ✕
            </button>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Add server form -->
    <div class="w-full max-w-md space-y-4 rounded-xl border border-zinc-700 bg-zinc-900 p-6">
      <h2 class="text-sm font-semibold text-zinc-200">Add server</h2>

      <div class="space-y-3">
        <div>
          <label class="mb-1 block text-xs text-zinc-400" for="url">Server URL</label>
          <input
            id="url"
            type="text"
            bind:value={formUrl}
            placeholder="http://192.168.31.96:3000"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-xs text-zinc-400" for="token">Access token</label>
          <input
            id="token"
            type="text"
            bind:value={formToken}
            placeholder="openclaw-studio-dev"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-xs text-zinc-400" for="name">Name (optional)</label>
          <input
            id="name"
            type="text"
            bind:value={formName}
            placeholder="Home server"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-500"
          />
        </div>

        <!-- JSON paste helper -->
        <button
          onclick={() => (showJsonPaste = !showJsonPaste)}
          class="text-xs text-zinc-500 hover:text-zinc-300"
        >
          {showJsonPaste ? "▼" : "▶"} Paste JSON from QR code
        </button>

        {#if showJsonPaste}
          <div class="flex gap-2">
            <input
              type="text"
              bind:value={jsonPaste}
              placeholder={jsonPlaceholder}
              class="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none focus:border-zinc-500"
            />
            <button
              onclick={handleJsonPaste}
              class="rounded-lg bg-zinc-700 px-3 py-2 text-xs text-white hover:bg-zinc-600"
            >
              Apply
            </button>
          </div>
        {/if}

        {#if testResult === "ok"}
          <p class="text-xs text-green-400">✓ Connection successful</p>
        {:else if testResult === "error"}
          <p class="text-xs text-red-400">✗ {testError}</p>
        {/if}

        <div class="flex gap-3">
          <button
            onclick={handleTestConnection}
            disabled={testing || !formUrl}
            class="flex-1 rounded-lg border border-zinc-700 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {testing ? "Testing..." : "Test connection"}
          </button>
          <button
            onclick={handleSave}
            disabled={saving || !formUrl}
            class="flex-1 rounded-lg bg-white py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Connecting..." : "Connect"}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
<!-- If screen === "studio", the webview will have navigated to the Studio URL -->
