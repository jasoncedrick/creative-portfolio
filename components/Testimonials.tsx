"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type ProofState = { images: string[] };

/* ---- Lightbox modal: blurred backdrop + 2x2 grid ---------------------- */
function ProofModal({ images, onClose }: { images: string[]; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Client proof screenshots"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md overflow-y-auto"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl my-auto">
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

        <div className="grid grid-cols-2 gap-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-video rounded-lg overflow-hidden border border-[color:var(--color-border-strong)] bg-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Client proof ${i + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Section ----------------------------------------------------------- */
export function Testimonials() {
  const [active, setActive] = useState<ProofState | null>(null);

  return (
    <section className="section border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4">
          <FadeIn><p className="eyebrow">WHAT CLIENTS SAY</p></FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[36px] md:text-[52px] leading-[1.05] tracking-tight max-w-[20ch]">
              Receipts are nice. So is a client who&apos;d hire me again.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const proof = (t.proof ?? []).filter(Boolean);
            const initials = t.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <FadeIn key={i} delay={i * 0.06}>
                <figure className="card p-7 h-full flex flex-col">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[color:var(--color-red)] mb-5">
                    <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.5-1.5 4-4 4M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.5-1.5 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <blockquote className="text-[16px] leading-relaxed text-[color:var(--color-fg-muted)] flex-1">
                    {t.quote}
                  </blockquote>

                  {proof.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActive({ images: proof })}
                      className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--color-border-strong)] px-4 py-2 text-[12px] font-mono uppercase tracking-wider text-[color:var(--color-fg)] hover:text-[color:var(--color-red)] hover:border-[color:var(--color-red)] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M3 14l5-4 4 3 3-2 6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      View proof ({proof.length})
                    </button>
                  )}

                  <figcaption className="mt-6 pt-5 border-t border-[color:var(--color-border)] flex items-center gap-3">
                    {t.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="w-9 h-9 rounded-full object-cover border border-[color:var(--color-border-strong)]"
                      />
                    ) : (
                      <span className="w-9 h-9 rounded-full bg-[color:var(--color-bg-elev-2)] border border-[color:var(--color-border-strong)] flex items-center justify-center text-[11px] font-mono text-[color:var(--color-fg-faint)]">
                        {initials}
                      </span>
                    )}
                    <div>
                      <p className="text-[13px] font-medium">{t.name}</p>
                      <p className="text-[11px] font-mono text-[color:var(--color-fg-faint)]">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {active && <ProofModal images={active.images} onClose={() => setActive(null)} />}
    </section>
  );
}
