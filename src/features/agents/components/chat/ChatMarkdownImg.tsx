import { createContext, memo, useContext, useEffect } from "react";
import { X } from "lucide-react";

/* ── Image lightbox context ──────────────────────────────────────── */

export const LightboxContext = createContext<(src: string) => void>(() => {});

export const chatUrlTransform = (url: string): string => {
  if (url.startsWith("data:")) return url;
  if (/^https?:\/\//i.test(url)) return url;
  return url;
};

export const ChatMarkdownImg = (
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) => {
  const openLightbox = useContext(LightboxContext);
  const src = typeof props.src === "string" ? props.src : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={props.alt ?? ""}
      className="my-1 inline-block max-h-48 max-w-[200px] cursor-pointer rounded-md border border-border/40 object-cover transition hover:opacity-80"
      onClick={() => src && openLightbox(src)}
    />
  );
};

export const chatMarkdownComponents = { img: ChatMarkdownImg } as const;

export const ChatImageLightbox = memo(function ChatImageLightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="max-h-[90vh] max-w-[90vw] rounded-md object-contain shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
});
