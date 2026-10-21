"use client";

import { useState } from "react";

/** Load large case-study files only when the visitor presses play. */
export function CaseStudyVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-black">
      <video
        src={src}
        poster={poster || undefined}
        controls
        playsInline
        preload="none"
        aria-label={label}
        className="w-full aspect-[9/16] object-contain"
        onError={() => setFailed(true)}
        onPlaying={(event) => {
          document.querySelectorAll("video").forEach((video) => {
            if (video !== event.currentTarget) video.pause();
          });
        }}
      />
      <figcaption className="p-3 text-center text-[11px] font-mono text-white/80">
        {label}
        {failed && (
          <p role="status" className="mt-2">
            Video could not load. <a href={src} target="_blank" rel="noreferrer" className="underline">Open video directly</a>
          </p>
        )}
      </figcaption>
    </figure>
  );
}
