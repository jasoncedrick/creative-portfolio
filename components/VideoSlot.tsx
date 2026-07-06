"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type VideoSlotProps = {
  src?: string;
  poster?: string;
  label: string;
  className?: string;
};

/**
 * VideoSlot
 * ---------
 * Vertical 9:16 tile.
 *
 * - Ambient mode (default): the clip autoplays muted and looped, but ONLY while
 *   the tile is actually on screen. An IntersectionObserver pauses anything
 *   scrolled out of view, so off-screen clips cost no bandwidth or CPU. On
 *   mobile (horizontal scroll) that means just the 1–2 visible tiles ever play.
 * - Click a tile: it unmutes, restarts from the top, and shows native controls
 *   so the work plays properly with sound. When it ends, it drops back to the
 *   silent ambient loop.
 * - prefers-reduced-motion: no autoplay at all — the tile waits for a click.
 * - Empty `src` renders the styled placeholder.
 * - Download button, right-click save, and picture-in-picture are disabled.
 */
export function VideoSlot({ src, poster, label, className = "" }: VideoSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [unmuted, setUnmuted] = useState(false);
  const [inView, setInView] = useState(false);

  // Only play tiles that are actually on screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  // `muted` must be a real DOM property (not just an attribute) for autoplay.
  useEffect(() => {
    if (ref.current) ref.current.muted = !unmuted;
  }, [unmuted]);

  // Ambient play/pause driven by visibility.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (!inView) {
      v.pause();
      return;
    }
    if (reduced || unmuted) return; // don't auto-play in these modes
    v.muted = true;
    v.play().catch(() => {
      /* autoplay may be blocked; the overlay still lets them tap to play */
    });
  }, [inView, reduced, unmuted]);

  // ---- Empty state: styled placeholder -----------------------------------
  if (!src) {
    return (
      <div className={`ph ph-9-16 group ${className}`}>
        <div className="flex flex-col items-center gap-3">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg)]/60 group-hover:border-[color:var(--color-red)] transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
            </svg>
          </span>
          <span className="ph-label">{label}</span>
          <span className="text-[10px] font-mono text-[color:var(--color-fg-dim)] tracking-wider">9:16</span>
        </div>
      </div>
    );
  }

  const enableSound = () => {
    const v = ref.current;
    if (!v) return;
    setUnmuted(true);
    v.muted = false;
    try {
      v.currentTime = 0;
    } catch {
      /* ignore */
    }
    v.play().catch(() => {
      /* native controls still allow playback if blocked */
    });
  };

  const backToAmbient = () => {
    const v = ref.current;
    if (v) {
      try {
        v.currentTime = 0;
      } catch {
        /* ignore */
      }
    }
    setUnmuted(false);
  };

  return (
    <div ref={containerRef} className={`ph ph-9-16 ${className}`} style={{ background: "#000" }}>
      <video
        ref={ref}
        src={src}
        poster={poster || undefined}
        playsInline
        muted
        loop={!unmuted}
        preload="metadata"
        controls={unmuted}
        controlsList="nodownload noremoteplayback noplaybackrate"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onEnded={backToAmbient}
        className="w-full h-full object-cover"
      />

      {!unmuted && (
        <button
          type="button"
          onClick={enableSound}
          aria-label={`Play ${label} with sound`}
          className="absolute inset-0 w-full h-full cursor-pointer group"
        >
          {/* legibility wash */}
          <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" aria-hidden />

          {/* muted / tap-for-sound affordance */}
          <span className="absolute top-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-black/55 border border-white/20 backdrop-blur-sm px-2 py-1 text-white/90 transition-colors group-hover:bg-[color:var(--color-red)] group-hover:border-[color:var(--color-red)] group-hover:text-white">
            {reduced ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
                <path d="M17 9l4 6M21 9l-4 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
            <span className="text-[9px] font-mono uppercase tracking-wider max-w-0 overflow-hidden opacity-0 group-hover:max-w-[60px] group-hover:opacity-100 transition-all duration-200">
              {reduced ? "Play" : "Sound"}
            </span>
          </span>

          {/* label */}
          <span className="absolute bottom-2.5 left-0 right-0 px-2 text-center text-[10px] font-mono uppercase tracking-wider text-white/90">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
