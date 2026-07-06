"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type ProofState = { images: string[]; index: number };

/* ---- Proof lightbox: mixed-dimension safe (one image, object-contain) -- */
function ProofLightbox({
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
      aria-label="Project proof"
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
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
            <button type="button" onClick={prev} aria-label="Previous" className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-[color:var(--color-red)] text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={next} aria-label="Next" className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-[color:var(--color-red)] text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
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

export function CaseStudies() {
  const featured = caseStudies.filter((c) => c.featured);
  const others = caseStudies.filter((c) => !c.featured);
  const [active, setActive] = useState<ProofState | null>(null);

  return (
    <section id="work" className="section border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4">
          <FadeIn><p className="eyebrow">SELECTED WORK</p></FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[36px] md:text-[54px] leading-[1.03] tracking-tight max-w-[22ch]">
              Seven projects across DTC, performance ads, branding, healthcare, and creator growth.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[15px] md:text-[16px] text-[color:var(--color-fg-faint)] font-mono">
              Numbers verifiable on request.
            </p>
          </FadeIn>
        </div>

        {/* Featured — 3 hero cases, deep dive (no cover image) */}
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {featured.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.08}>
              <Link href={`/work/${c.slug}`} className="card card-link group block h-full p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[10px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{c.tag}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-red-dim)] border border-[color:var(--color-red)]/25 text-[color:var(--color-red)] px-3.5 py-1.5 text-[12px] font-mono font-medium uppercase tracking-wider shrink-0 group-hover:bg-[color:var(--color-red)] group-hover:text-white group-hover:border-[color:var(--color-red)] transition-colors">
                    Deep dive
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
                <h3 className="mt-4 text-[24px] md:text-[26px] font-semibold tracking-tight">{c.client}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-fg-muted)]">{c.brief}</p>
                <div className="mt-6 pt-5 border-t border-[color:var(--color-border)] grid grid-cols-3 gap-3">
                  {c.results.slice(0, 3).map((r) => (
                    <div key={r.label}>
                      <div className="text-[19px] md:text-[21px] font-mono font-medium tracking-tight">{r.value}</div>
                      <div className="mt-1 text-[9px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{r.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Others — metric-forward cards + View proof lightbox */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((c, i) => {
            const proof = (c.proof ?? []).filter(Boolean);
            return (
              <FadeIn key={c.slug} delay={i * 0.05}>
                <article className="card h-full flex flex-col p-6">
                  <p className="text-[10px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{c.tag}</p>
                  <h3 className="mt-3 text-[19px] font-semibold tracking-tight">{c.client}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-fg-muted)] flex-1">{c.brief}</p>
                  <div className="mt-5 pt-5 border-t border-[color:var(--color-border)] flex flex-wrap gap-x-5 gap-y-2">
                    {c.results.map((r) => (
                      <div key={r.label} className="flex items-baseline gap-1.5">
                        <span className="text-[15px] font-mono font-medium tracking-tight">{r.value}</span>
                        <span className="text-[10px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{r.label}</span>
                      </div>
                    ))}
                  </div>
                  {proof.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActive({ images: proof, index: 0 })}
                      className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--color-border-strong)] px-4 py-2 text-[12px] font-mono uppercase tracking-wider text-[color:var(--color-fg)] hover:text-[color:var(--color-red)] hover:border-[color:var(--color-red)] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M3 14l5-4 4 3 3-2 6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      View proof ({proof.length})
                    </button>
                  )}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {active && <ProofLightbox images={active.images} startIndex={active.index} onClose={() => setActive(null)} />}
    </section>
  );
}
