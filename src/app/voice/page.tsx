"use client";

import { useState } from "react";
import { VoiceControls } from "@/features/voice/components/VoiceControls";
import { VoiceboxSection } from "@/features/voice/components/VoiceboxSection";

type Tab = "controls" | "voicebox";

export default function VoicePage() {
  const [tab, setTab] = useState<Tab>("controls");

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Tab bar */}
      <div className="flex border-b border-border px-5">
        <button
          type="button"
          onClick={() => setTab("controls")}
          className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-colors ${
            tab === "controls"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Contrôles
        </button>
        <button
          type="button"
          onClick={() => setTab("voicebox")}
          className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-colors ${
            tab === "voicebox"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Voicebox
        </button>
      </div>

      {tab === "controls" && <VoiceControls />}

      {tab === "voicebox" && (
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <VoiceboxSection />
        </div>
      )}
    </div>
  );
}
