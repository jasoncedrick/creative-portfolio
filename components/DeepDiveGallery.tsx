"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { FadeIn } from "./FadeIn";

/* ---- Lightbox: mixed-dimension safe (one image, object-contain) -------- */
function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose, prev, next]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Proof image"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-md"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl flex flex-col items-center">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-11 right-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[color:var(--color-red)] text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="w-full flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={index}
            src={images[index]}
            alt={`Proof ${index + 1} of ${images.length}`}
            className="max-h-[80vh] max-w-full w-auto object-contain rounded-lg border border-[color:var(--color-border-strong)] bg-black"
          />
        </div>

        {images.length > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Previous" className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-[color:var(--color-red)] text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button type="button" onClick={next} aria-label="Next" className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-[color:var(--color-red)] text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </>
        )}

        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button key={i} type="button" onClick={() => setIndex(i)} aria-label={`Go to image ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-[color:var(--color-red)]" : "w-1.5 bg-white/30 hover:bg-white/60"}`} />
          ))}
        </div>
        <p className="mt-2 text-center text-[11px] font-mono text-white/60">{index + 1} / {images.length}</p>
      </div>
    </div>
  );
}

/* ---- Gallery section: thumbnail grid -> lightbox ----------------------- */
export function DeepDiveGallery({ images, heading = "The receipts" }: { images?: string[]; heading?: string }) {
  const valid = (images ?? []).filter(Boolean);
  const [open, setOpen] = useState<number | null>(null);

  if (valid.length === 0) return null;

  return (
    <section className="section border-b border-[color:var(--color-border)]">
      <div className="container-page">
        <FadeIn><p className="eyebrow text-[color:var(--color-red)]">PROOF</p></FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-3 text-[28px] md:text-[40px] tracking-tight font-semibold">{heading}</h2>
        </FadeIn>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {valid.map((src, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open proof ${i + 1}`}
                className="block w-full aspect-[4/3] overflow-hidden rounded-lg border border-[color:var(--color-border)] hover:border-[color:var(--color-red)] bg-black transition-colors group cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Proof ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
      {open !== null && <GalleryLightbox images={valid} startIndex={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
