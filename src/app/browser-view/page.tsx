"use client";

export default function BrowserViewPage() {
  return (
    <iframe
      src="/browser-view/vnc_lite.html?path=browser-view/websockify&scale=true"
      className="h-full w-full border-none"
      title="Browser View"
      allow="same-origin"
    />
  );
}
