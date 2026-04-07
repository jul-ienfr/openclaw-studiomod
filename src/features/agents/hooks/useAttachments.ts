import { useCallback, useEffect, useRef, useState } from "react";
import { randomUUID } from "@/lib/uuid";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export type Attachment = {
  id: string;
  file: File;
  fileName: string;
  mimeType: string;
  base64: string;
  previewUrl: string | null;
  sizeBytes: number;
};

export type GatewayAttachment = {
  type?: string;
  mimeType: string;
  content: string;
  fileName?: string;
};

const readFileAsBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.replace(/^data:[^;]+;base64,/, "");
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const isImageMime = (mime: string) => mime.startsWith("image/");

export function useAttachments() {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const previewUrlsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const urls = previewUrlsRef.current;
    return () => {
      for (const url of urls) URL.revokeObjectURL(url);
      urls.clear();
    };
  }, []);

  const addFiles = useCallback(async (files: FileList | File[]) => {
    const incoming = Array.from(files);
    const results: Attachment[] = [];
    for (const file of incoming) {
      if (file.size > MAX_FILE_SIZE) continue;
      const base64 = await readFileAsBase64(file);
      let previewUrl: string | null = null;
      if (isImageMime(file.type)) {
        previewUrl = URL.createObjectURL(file);
        previewUrlsRef.current.add(previewUrl);
      }
      results.push({
        id: randomUUID(),
        file,
        fileName: file.name,
        mimeType: file.type || "application/octet-stream",
        base64,
        previewUrl,
        sizeBytes: file.size,
      });
    }
    if (results.length > 0) {
      setAttachments((prev) => [...prev, ...results]);
    }
  }, []);

  const removeAttachment = useCallback((id: string) => {
    setAttachments((prev) => {
      const item = prev.find((a) => a.id === id);
      if (item?.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
        previewUrlsRef.current.delete(item.previewUrl);
      }
      return prev.filter((a) => a.id !== id);
    });
  }, []);

  const clearAll = useCallback(() => {
    setAttachments((prev) => {
      for (const a of prev) {
        if (a.previewUrl) {
          URL.revokeObjectURL(a.previewUrl);
          previewUrlsRef.current.delete(a.previewUrl);
        }
      }
      return [];
    });
  }, []);

  const toGatewayFormat = useCallback((): GatewayAttachment[] => {
    return attachments.map((a) => ({
      ...(isImageMime(a.mimeType) ? { type: "image" } : {}),
      mimeType: a.mimeType,
      content: a.base64,
      fileName: a.fileName,
    }));
  }, [attachments]);

  return { attachments, addFiles, removeAttachment, clearAll, toGatewayFormat };
}
