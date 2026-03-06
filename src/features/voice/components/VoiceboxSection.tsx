"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Mic,
  Plus,
  Trash2,
  ChevronDown,
  ChevronRight,
  Upload,
  Edit2,
  Check,
  X,
  Activity,
  AlertCircle,
  Loader2,
  Play,
  Square,
} from "lucide-react";

type VoiceProfile = {
  id: string;
  name: string;
  description: string | null;
  language: string;
  created_at: string;
  updated_at: string;
};

type ProfileSample = {
  id: string;
  profile_id: string;
  audio_path: string;
  reference_text: string;
};

type ServiceStatus = {
  running: boolean;
  model_loaded?: boolean;
  gpu_available?: boolean;
  gpu_type?: string | null;
  vram_used_mb?: number | null;
};

const LANGUAGES = ["fr", "en", "de", "es", "it", "ja", "ko", "pt", "ru", "zh"];

export function VoiceboxSection() {
  const [status, setStatus] = useState<ServiceStatus | null>(null);
  const [profiles, setProfiles] = useState<VoiceProfile[]>([]);
  const [samples, setSamples] = useState<Record<string, ProfileSample[]>>({});
  const [expandedProfiles, setExpandedProfiles] = useState<Set<string>>(
    new Set(),
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create profile state
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newLang, setNewLang] = useState("fr");
  const [creating, setCreating] = useState(false);

  // Edit profile name inline
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  // Upload sample state per profile
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);
  const [uploadRefText, setUploadRefText] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Deleting
  const [deletingProfile, setDeletingProfile] = useState<string | null>(null);
  const [deletingSample, setDeletingSample] = useState<string | null>(null);

  // Audio playback
  const [playingSample, setPlayingSample] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/voice/voicebox/status");
      const data = (await res.json()) as ServiceStatus;
      setStatus(data);
    } catch {
      setStatus({ running: false });
    }
  }, []);

  const fetchProfiles = useCallback(async () => {
    try {
      const res = await fetch("/api/voice/voicebox/profiles");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as VoiceProfile[];
      setProfiles(data);
      setError(null);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Erreur de connexion à Voicebox",
      );
    }
  }, []);

  const fetchSamples = useCallback(async (profileId: string) => {
    try {
      const res = await fetch(
        `/api/voice/voicebox/profiles/${profileId}/samples`,
      );
      if (!res.ok) return;
      const data = (await res.json()) as ProfileSample[];
      setSamples((prev) => ({ ...prev, [profileId]: data }));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      await Promise.all([fetchStatus(), fetchProfiles()]);
      setLoading(false);
    })();
  }, [fetchStatus, fetchProfiles]);

  const toggleExpand = useCallback(
    async (profileId: string) => {
      setExpandedProfiles((prev) => {
        const next = new Set(prev);
        if (next.has(profileId)) {
          next.delete(profileId);
        } else {
          next.add(profileId);
        }
        return next;
      });
      if (!samples[profileId]) {
        await fetchSamples(profileId);
      }
    },
    [samples, fetchSamples],
  );

  const handleCreateProfile = useCallback(async () => {
    if (!newName.trim()) return;
    setCreating(true);
    try {
      const res = await fetch("/api/voice/voicebox/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName.trim(),
          description: newDesc.trim() || null,
          language: newLang,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await fetchProfiles();
      setShowCreate(false);
      setNewName("");
      setNewDesc("");
      setNewLang("fr");
    } catch (e) {
      alert(e instanceof Error ? e.message : "Erreur lors de la création");
    } finally {
      setCreating(false);
    }
  }, [newName, newDesc, newLang, fetchProfiles]);

  const handleRenameProfile = useCallback(
    async (profileId: string) => {
      if (!editName.trim()) return;
      try {
        await fetch(`/api/voice/voicebox/profiles/${profileId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: editName.trim() }),
        });
        await fetchProfiles();
      } catch {
        /* ignore */
      } finally {
        setEditingId(null);
      }
    },
    [editName, fetchProfiles],
  );

  const handleDeleteProfile = useCallback(
    async (profileId: string) => {
      if (!confirm("Supprimer ce profil et tous ses échantillons ?")) return;
      setDeletingProfile(profileId);
      try {
        await fetch(`/api/voice/voicebox/profiles/${profileId}`, {
          method: "DELETE",
        });
        await fetchProfiles();
        setExpandedProfiles((prev) => {
          const s = new Set(prev);
          s.delete(profileId);
          return s;
        });
        setSamples((prev) => {
          const n = { ...prev };
          delete n[profileId];
          return n;
        });
      } catch {
        /* ignore */
      } finally {
        setDeletingProfile(null);
      }
    },
    [fetchProfiles],
  );

  const handleUploadSample = useCallback(
    async (profileId: string) => {
      if (!uploadFile || !uploadRefText.trim()) return;
      setUploading(true);
      try {
        const form = new FormData();
        form.append("file", uploadFile);
        form.append("reference_text", uploadRefText.trim());
        const res = await fetch(
          `/api/voice/voicebox/profiles/${profileId}/samples`,
          {
            method: "POST",
            body: form,
          },
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await fetchSamples(profileId);
        setUploadingFor(null);
        setUploadFile(null);
        setUploadRefText("");
      } catch (e) {
        alert(e instanceof Error ? e.message : "Erreur lors de l'upload");
      } finally {
        setUploading(false);
      }
    },
    [uploadFile, uploadRefText, fetchSamples],
  );

  const handleDeleteSample = useCallback(
    async (sampleId: string, profileId: string) => {
      setDeletingSample(sampleId);
      try {
        await fetch(`/api/voice/voicebox/profiles/samples/${sampleId}`, {
          method: "DELETE",
        });
        setSamples((prev) => ({
          ...prev,
          [profileId]: (prev[profileId] ?? []).filter((s) => s.id !== sampleId),
        }));
      } catch {
        /* ignore */
      } finally {
        setDeletingSample(null);
      }
    },
    [],
  );

  const stopPlayback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setPlayingSample(null);
  }, []);

  const handlePlaySample = useCallback(
    async (sampleId: string) => {
      if (playingSample === sampleId) {
        stopPlayback();
        return;
      }
      stopPlayback();
      try {
        const audio = new Audio(
          `/api/voice/voicebox/profiles/samples/${sampleId}`,
        );
        audioRef.current = audio;
        setPlayingSample(sampleId);
        audio.onended = () => setPlayingSample(null);
        audio.onerror = () => setPlayingSample(null);
        await audio.play();
      } catch {
        setPlayingSample(null);
      }
    },
    [playingSample, stopPlayback],
  );

  const handlePlayProfile = useCallback(
    async (profileId: string) => {
      let profileSamples = samples[profileId];
      if (!profileSamples) {
        try {
          const res = await fetch(
            `/api/voice/voicebox/profiles/${profileId}/samples`,
          );
          if (!res.ok) return;
          const data = (await res.json()) as ProfileSample[];
          setSamples((prev) => ({ ...prev, [profileId]: data }));
          profileSamples = data;
        } catch {
          return;
        }
      }
      if (profileSamples.length === 0) return;
      await handlePlaySample(profileSamples[0].id);
    },
    [samples, handlePlaySample],
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Service status */}
      <div className="flex items-center gap-2 rounded-lg bg-surface-2 px-3 py-2 text-[11px]">
        <Activity className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        {status?.running ? (
          <>
            <span className="text-green-500 font-medium">Voicebox actif</span>
            {status.model_loaded !== undefined && (
              <span className="text-muted-foreground">
                · modèle {status.model_loaded ? "chargé" : "non chargé"}
              </span>
            )}
            {status.gpu_type && (
              <span className="text-muted-foreground">· {status.gpu_type}</span>
            )}
            {status.vram_used_mb != null && (
              <span className="text-muted-foreground">
                · {Math.round(status.vram_used_mb)} MB VRAM
              </span>
            )}
          </>
        ) : (
          <span className="text-destructive font-medium">Voicebox inactif</span>
        )}
        <button
          type="button"
          onClick={() => {
            void fetchStatus();
            void fetchProfiles();
          }}
          className="ml-auto text-[10px] text-muted-foreground hover:text-foreground"
        >
          Actualiser
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-[11px] text-destructive">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </div>
      )}

      {/* Header with create button */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-foreground">
          Profils vocaux ({profiles.length})
        </h3>
        <button
          type="button"
          onClick={() => setShowCreate((v) => !v)}
          className="flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-3 w-3" />
          Nouveau profil
        </button>
      </div>

      {/* Create profile form */}
      {showCreate && (
        <div className="space-y-3 rounded-lg border border-border bg-surface-2/50 p-3">
          <h4 className="text-[11px] font-semibold text-foreground">
            Créer un profil
          </h4>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nom du profil"
            className="ui-input w-full text-xs"
            autoFocus
          />
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Description (optionnel)"
            className="ui-input w-full text-xs"
          />
          <select
            value={newLang}
            onChange={(e) => setNewLang(e.target.value)}
            className="ui-input w-full text-xs"
          >
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void handleCreateProfile()}
              disabled={!newName.trim() || creating}
              className="ui-btn-primary flex-1 py-1.5 text-xs disabled:opacity-50"
            >
              {creating ? (
                <Loader2 className="mx-auto h-3.5 w-3.5 animate-spin" />
              ) : (
                "Créer"
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCreate(false);
                setNewName("");
                setNewDesc("");
              }}
              className="ui-btn-secondary flex-1 py-1.5 text-xs"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Profile list */}
      {profiles.length === 0 && !error && (
        <p className="text-center text-[11px] text-muted-foreground py-4">
          Aucun profil. Créez-en un pour commencer.
        </p>
      )}

      <div className="space-y-2">
        {profiles.map((profile) => {
          const expanded = expandedProfiles.has(profile.id);
          const profileSamples = samples[profile.id] ?? [];
          const isDeleting = deletingProfile === profile.id;
          const isEditing = editingId === profile.id;

          return (
            <div
              key={profile.id}
              className="rounded-lg border border-border bg-surface-2/30"
            >
              {/* Profile row */}
              <div className="flex items-center gap-2 px-3 py-2.5">
                <button
                  type="button"
                  onClick={() => void toggleExpand(profile.id)}
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  {expanded ? (
                    <ChevronDown className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5" />
                  )}
                </button>

                <Mic className="h-3.5 w-3.5 shrink-0 text-primary" />

                {isEditing ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="ui-input flex-1 text-xs py-0.5"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter")
                        void handleRenameProfile(profile.id);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                  />
                ) : (
                  <span
                    className="flex-1 text-xs font-medium text-foreground truncate cursor-pointer"
                    onClick={() => void toggleExpand(profile.id)}
                  >
                    {profile.name}
                  </span>
                )}

                <span className="text-[10px] text-muted-foreground uppercase shrink-0">
                  {profile.language}
                </span>

                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={() => void handleRenameProfile(profile.id)}
                      className="ui-btn-icon xs text-green-500"
                      aria-label="Valider"
                    >
                      <Check className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="ui-btn-icon xs"
                      aria-label="Annuler"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => void handlePlayProfile(profile.id)}
                      className="ui-btn-icon xs text-muted-foreground hover:text-primary"
                      aria-label="Écouter"
                    >
                      {playingSample &&
                      samples[profile.id]?.some(
                        (s) => s.id === playingSample,
                      ) ? (
                        <Square className="h-3 w-3" />
                      ) : (
                        <Play className="h-3 w-3" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(profile.id);
                        setEditName(profile.name);
                      }}
                      className="ui-btn-icon xs text-muted-foreground hover:text-foreground"
                      aria-label="Renommer"
                    >
                      <Edit2 className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDeleteProfile(profile.id)}
                      disabled={isDeleting}
                      className="ui-btn-icon xs text-destructive/60 hover:text-destructive"
                      aria-label="Supprimer"
                    >
                      {isDeleting ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <Trash2 className="h-3 w-3" />
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Expanded: samples */}
              {expanded && (
                <div className="border-t border-border px-3 pb-3 pt-2 space-y-2">
                  {profile.description && (
                    <p className="text-[10px] text-muted-foreground">
                      {profile.description}
                    </p>
                  )}

                  {/* Sample list */}
                  {profileSamples.length === 0 ? (
                    <p className="text-[10px] text-muted-foreground italic">
                      Aucun échantillon audio — ajoutez-en pour améliorer le
                      clonage.
                    </p>
                  ) : (
                    <div className="space-y-1.5">
                      {profileSamples.map((sample) => (
                        <div
                          key={sample.id}
                          className="flex items-start gap-2 rounded-md bg-surface-2 px-2.5 py-2"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-foreground line-clamp-2">
                              {sample.reference_text}
                            </p>
                            <p className="text-[9px] text-muted-foreground mt-0.5 truncate">
                              {sample.audio_path.split("/").pop()}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => void handlePlaySample(sample.id)}
                            className="shrink-0 ui-btn-icon xs text-muted-foreground hover:text-primary"
                            aria-label="Écouter l'échantillon"
                          >
                            {playingSample === sample.id ? (
                              <Square className="h-3 w-3" />
                            ) : (
                              <Play className="h-3 w-3" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              void handleDeleteSample(sample.id, profile.id)
                            }
                            disabled={deletingSample === sample.id}
                            className="shrink-0 ui-btn-icon xs text-destructive/60 hover:text-destructive"
                            aria-label="Supprimer l'échantillon"
                          >
                            {deletingSample === sample.id ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <Trash2 className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Upload form */}
                  {uploadingFor === profile.id ? (
                    <div className="space-y-2 rounded-md border border-border bg-surface-2/50 p-2.5">
                      <p className="text-[10px] font-medium text-foreground">
                        Ajouter un échantillon
                      </p>

                      {/* File drop zone */}
                      <div
                        className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-border py-3 hover:border-primary/50 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="h-4 w-4 text-muted-foreground mb-1" />
                        <p className="text-[10px] text-muted-foreground">
                          {uploadFile
                            ? uploadFile.name
                            : "Cliquer pour sélectionner (WAV, MP3, OGG…)"}
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="audio/*"
                          className="hidden"
                          onChange={(e) =>
                            setUploadFile(e.target.files?.[0] ?? null)
                          }
                        />
                      </div>

                      <textarea
                        value={uploadRefText}
                        onChange={(e) => setUploadRefText(e.target.value)}
                        placeholder="Transcription exacte de l'audio (obligatoire)"
                        className="ui-input w-full text-xs resize-none"
                        rows={3}
                      />

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => void handleUploadSample(profile.id)}
                          disabled={
                            !uploadFile || !uploadRefText.trim() || uploading
                          }
                          className="ui-btn-primary flex-1 py-1 text-[11px] disabled:opacity-50"
                        >
                          {uploading ? (
                            <Loader2 className="mx-auto h-3.5 w-3.5 animate-spin" />
                          ) : (
                            "Uploader"
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setUploadingFor(null);
                            setUploadFile(null);
                            setUploadRefText("");
                          }}
                          className="ui-btn-secondary flex-1 py-1 text-[11px]"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setUploadingFor(profile.id)}
                      className="flex items-center gap-1.5 text-[11px] text-primary hover:text-primary/80"
                    >
                      <Upload className="h-3 w-3" />
                      Ajouter un échantillon audio
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
