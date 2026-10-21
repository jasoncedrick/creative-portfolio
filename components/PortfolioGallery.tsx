"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioVideos, type PortfolioVideo } from "@/lib/portfolio";

const categories = ["All work", "AI animation", "AI product & UGC", "UGC ads", "Social & podcast"];
const time = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

function Player({ video, onClose }: { video: PortfolioVideo; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  const source = video.src ?? `https://drive.google.com/file/d/${video.driveId}/view`;
  return (
    <dialog ref={dialog} aria-labelledby="portfolio-player-title" className="portfolio-dialog" onCancel={onClose} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="portfolio-player-shell">
        <div className="flex items-start justify-between gap-4 p-4 border-b border-white/10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[color:var(--color-fg-muted)]">{video.brand}</p>
            <h2 id="portfolio-player-title" className="text-lg mt-1">{video.title}</h2>
          </div>
          <button type="button" autoFocus onClick={onClose} aria-label="Close video" className="shrink-0 w-11 h-11 rounded-full border border-white/20 hover:bg-white/10 text-xl">×</button>
        </div>
        <div className={`portfolio-player-media ${video.orientation === "landscape" ? "is-landscape" : ""}`}>
          {video.src ? (
            <video src={video.src} poster={video.poster} controls autoPlay playsInline preload="metadata" onError={() => setFailed(true)} className="w-full h-full object-contain" />
          ) : (
            <iframe src={`https://drive.google.com/file/d/${video.driveId}/preview`} title={`${video.brand}: ${video.title}`} allow="autoplay; fullscreen" allowFullScreen className="w-full h-full border-0" />
          )}
        </div>
        <div className="p-4 text-sm text-[color:var(--color-fg-muted)] flex flex-wrap items-center justify-between gap-3">
          <p>{failed ? "The player could not load this video. Open it directly below." : video.description}</p>
          <a href={source} target="_blank" rel="noreferrer" className="text-white underline underline-offset-4">Open video ↗</a>
        </div>
      </div>
    </dialog>
  );
}

export function PortfolioGallery() {
  const [category, setCategory] = useState("All work");
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<PortfolioVideo | null>(null);
  const filtered = portfolioVideos.filter((v) => category === "All work" || v.category === category);
  const visible = expanded ? filtered : filtered.slice(0, 8);

  return (
    <section id="videos" className="section scroll-mt-24 border-y border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className="eyebrow">THE CREATIVE LIBRARY</p>
            <h2 className="mt-3 text-[36px] md:text-[54px] leading-[1.05] max-w-[20ch]">Different formats.<br /><span className="text-[color:var(--color-red)]">See the work.</span></h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[color:var(--color-fg-muted)] max-w-[44ch]">AI animation, product demos, UGC ads and social edits. Pick a format and watch the full creative.</p>
        </div>
        <div role="group" aria-label="Filter videos by format" className="flex flex-wrap gap-2 mt-8 mb-5">
          {categories.map((c) => {
            const count = c === "All work" ? portfolioVideos.length : portfolioVideos.filter((v) => v.category === c).length;
            return <button key={c} type="button" aria-pressed={c === category} onClick={() => { setCategory(c); setExpanded(false); }} className={`portfolio-filter ${c === category ? "is-active" : ""}`}>{c}<span className="ml-2 opacity-65">{count}</span></button>;
          })}
        </div>
        <p aria-live="polite" className="text-xs text-[color:var(--color-fg-muted)] mb-6">Showing {visible.length} of {filtered.length} videos</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-5">
          {visible.map((video) => (
            <article key={video.id} className="min-w-0">
              <button type="button" onClick={() => setActive(video)} aria-label={`Watch ${video.brand}: ${video.title}`} className="portfolio-cover group">
                {/* Static posters keep the library light; video loads only after a click. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={video.poster} alt="" loading="lazy" width={540} height={video.orientation === "landscape" ? 304 : 960} className={`w-full h-full transition-transform duration-300 group-hover:scale-[1.03] ${video.orientation === "landscape" ? "object-contain" : "object-cover"}`} />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute top-3 right-3 bg-black/65 rounded-full px-2.5 py-1 text-[11px] text-white font-mono">{time(video.duration)}</span>
                <span className="absolute bottom-4 left-3 md:left-4 flex items-center gap-2 text-white text-[12px] md:text-[13px] font-medium"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black group-hover:bg-[color:var(--color-red)] group-hover:text-white transition-colors" aria-hidden="true">▶</span>Watch creative</span>
              </button>
              <p className="mt-4 text-[10px] md:text-[11px] uppercase tracking-wider text-[color:var(--color-fg-muted)]">{video.category}</p>
              <h3 className="mt-1.5 text-[17px] md:text-[20px] leading-tight">{video.brand}</h3>
              <p className="mt-1.5 text-[13px] md:text-[14px] text-[color:var(--color-fg-muted)]">{video.title}</p>
            </article>
          ))}
        </div>
        {!expanded && filtered.length > visible.length && <div className="mt-10 text-center"><button type="button" className="btn-secondary" onClick={() => setExpanded(true)}>Show all {filtered.length} videos <span aria-hidden="true">↓</span></button></div>}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[color:var(--color-fg-muted)]">Want the context and results behind the work?</p>
          <a href="#work" className="text-sm font-medium hover:text-[color:var(--color-red)]">Explore case studies <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      {active && <Player key={active.id} video={active} onClose={() => setActive(null)} />}
    </section>
  );
}
