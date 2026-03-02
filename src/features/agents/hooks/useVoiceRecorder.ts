"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type VoiceRecorderState = {
  isRecording: boolean;
  isTranscribing: boolean;
  error: string | null;
};

export function useVoiceRecorder(onTranscribed: (text: string) => void) {
  const [state, setState] = useState<VoiceRecorderState>({
    isRecording: false,
    isTranscribing: false,
    error: null,
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const onTranscribedRef = useRef(onTranscribed);
  onTranscribedRef.current = onTranscribed;

  const cleanup = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) track.stop();
      streamRef.current = null;
    }
    chunksRef.current = [];
  }, []);

  useEffect(() => cleanup, [cleanup]);

  const transcribe = useCallback(async (blob: Blob) => {
    setState((s) => ({ ...s, isTranscribing: true, error: null }));
    try {
      const form = new FormData();
      form.append("audio", blob, "recording.webm");
      form.append("language", "fr");

      const res = await fetch("/api/voice/stt", { method: "POST", body: form });
      const data = (await res.json()) as { text?: string; error?: string };

      if (!res.ok || data.error) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      const text = (data.text ?? "").trim();
      if (text) {
        onTranscribedRef.current(text);
      } else {
        setState((s) => ({ ...s, error: "Aucune parole détectée" }));
      }
    } catch (err) {
      setState((s) => ({ ...s, error: err instanceof Error ? err.message : "Transcription failed" }));
    } finally {
      setState((s) => ({ ...s, isTranscribing: false }));
    }
  }, []);

  const startRecording = useCallback(async () => {
    cleanup();
    setState({ isRecording: false, isTranscribing: false, error: null });

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/webm";

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        for (const track of stream.getTracks()) track.stop();
        streamRef.current = null;
        if (blob.size > 0) {
          void transcribe(blob);
        }
      };

      recorder.start();
      setState((s) => ({ ...s, isRecording: true }));
    } catch (err) {
      cleanup();
      const msg = err instanceof Error ? err.message : "Microphone access denied";
      setState((s) => ({ ...s, error: msg }));
    }
  }, [cleanup, transcribe]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setState((s) => ({ ...s, isRecording: false }));
  }, []);

  const toggleRecording = useCallback(() => {
    if (state.isRecording) {
      stopRecording();
    } else {
      void startRecording();
    }
  }, [state.isRecording, startRecording, stopRecording]);

  return {
    isRecording: state.isRecording,
    isTranscribing: state.isTranscribing,
    error: state.error,
    toggleRecording,
    startRecording,
    stopRecording,
  };
}
