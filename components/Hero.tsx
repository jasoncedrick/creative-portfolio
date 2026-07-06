import { hero, site } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { VideoSlot } from "./VideoSlot";

export function Hero() {
  const waLink = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)] to-transparent" aria-hidden />

      <div className="container-page relative">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elev)]/60 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-red)] opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-red)]" />
            </span>
            <span className="text-[12px] font-mono tracking-wide text-[color:var(--color-fg-muted)]">AVAILABLE FOR PROJECTS</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-7 text-[36px] leading-[1.05] md:text-[52px] lg:text-[60px] lg:leading-[1.0] tracking-tight font-bold max-w-6xl">
            Short-form video creative that <span className="text-[color:var(--color-red)]">drives revenue</span> for DTC brands and <span className="text-[color:var(--color-blue)]">grows audiences</span> for founders.
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-7 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--color-fg-muted)] max-w-[56ch]">
            {hero.subhead}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Email Me
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5A11 11 0 003 19l-1 4 4-1A11 11 0 1020.5 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Message on WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.24}>
          <p className="mt-6 text-[13px] text-[color:var(--color-fg-faint)] font-mono">{hero.availability}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-14 md:mt-16">
            <div className="flex items-center justify-between mb-5">
              <p className="eyebrow">SHOWREEL · 2026</p>
              <p className="text-[11px] font-mono text-[color:var(--color-fg-dim)]">{hero.reel.length} selects · vertical</p>
            </div>
            <div className="-mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible">
              <div className="flex md:grid md:grid-cols-5 gap-3 md:gap-4 w-max md:w-full">
                {hero.reel.map((r, i) => (
                  <VideoSlot key={i} src={r.src} poster={r.poster} label={r.label} className="w-[150px] md:w-auto shrink-0" />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
