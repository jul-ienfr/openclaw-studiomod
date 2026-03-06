import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.openclaw.studio",
  appName: "OpenClaw Studio",
  webDir: "www",
  // server.url is set dynamically at runtime via the pairing screen
  // When paired, the native app will navigate to the Studio server
  server: {
    androidScheme: "http", // avoid mixed-content block when fetching http:// LAN servers
  },
  plugins: {
    Preferences: {
      group: "openclaw_studio",
    },
  },
};

export default config;
