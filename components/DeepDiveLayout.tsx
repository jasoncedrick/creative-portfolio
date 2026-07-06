import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { AnimatedCounter } from "./AnimatedCounter";
import { VideoSlot } from "./VideoSlot";
import { DeepDiveGallery } from "./DeepDiveGallery";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { deepDives, type DeepDive } from "@/lib/deep-dives";
import { EscBack } from "./EscBack";


export function DeepDiveLayout({ dive }: { dive: DeepDive }) {
  // Cycle through the case studies so visitors can go straight to the next one.
  const slugs = Object.keys(deepDives);
  const idx = slugs.indexOf(dive.slug);
  const prev = deepDives[slugs[(idx - 1 + slugs.length) % slugs.length]];
  const next = deepDives[slugs[(idx + 1) % slugs.length]];

  return (
    <>
      <Nav />
         <EscBack />
      <main className="pt-24 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-radial-fade pointer-events-none" aria-hidden />
          <div className="container-page relative pb-12">
            <FadeIn>
              <Link href="/#work" className="inline-flex items-center gap-2 text-[12px] font-mono text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-red)] transition-colors uppercase tracking-wider">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to work
              </Link>
            </FadeIn>
            <FadeIn delay={0.05}><p className="mt-8 eyebrow">{dive.tag}</p></FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-5 text-[44px] md:text-[72px] lg:text-[88px] leading-[1.0] tracking-tight font-bold">
                {dive.client}
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-8 text-[17px] md:text-[20px] leading-relaxed text-[color:var(--color-fg-muted)] max-w-[60ch]">
                {dive.intro}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/40">
          <div className="container-page py-10 md:py-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
              {dive.topStats.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.04}>
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[28px] md:text-[34px] leading-none font-mono font-medium tracking-tight">
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div className="text-[11px] text-[color:var(--color-fg-faint)] font-mono uppercase tracking-wider">{s.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Winning creatives — 3 vertical video slots */}
        <section className="section border-b border-[color:var(--color-border)]">
          <div className="container-page">
            <div className="flex items-center justify-between mb-8">
              <div>
                <FadeIn><p className="eyebrow text-[color:var(--color-red)]">WINNING CREATIVES</p></FadeIn>
                <FadeIn delay={0.05}>
                  <h2 className="mt-3 text-[28px] md:text-[40px] tracking-tight font-semibold">The ads that performed.</h2>
                </FadeIn>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {dive.winners.map((w, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <VideoSlot src={w.src} poster={w.poster} label={w.label} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <DeepDiveGallery images={dive.gallery} />

        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto space-y-16">
              {dive.sections.map((sec, i) => (
                <FadeIn key={i} delay={0.05}>
                  <div>
                    <p className="eyebrow">{`SECTION 0${i + 1}`}</p>
                    <h2 className="mt-3 text-[28px] md:text-[36px] leading-tight tracking-tight font-semibold">{sec.heading}</h2>
                    <div className="mt-6 space-y-5">
                      {sec.body.map((p, j) => (
                        <p key={j} className="text-[17px] md:text-[18px] leading-relaxed text-[color:var(--color-fg-muted)]">{p}</p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {dive.marketBreakdown && (
          <section className="section border-t border-[color:var(--color-border)]">
            <div className="container-page">
              <FadeIn><p className="eyebrow">MARKET BREAKDOWN</p></FadeIn>
              <FadeIn delay={0.05}><h2 className="mt-3 text-[32px] md:text-[44px] tracking-tight font-semibold">Five markets, five adaptations.</h2></FadeIn>
              <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-2xl overflow-hidden">
                {dive.marketBreakdown.map((m, i) => (
                  <FadeIn key={m.market} as="li" delay={i * 0.04}>
                    <div className="bg-[color:var(--color-bg)] p-6 h-full flex flex-col gap-3 hover:bg-[color:var(--color-bg-elev)] transition-colors">
                      <p className="text-[11px] font-mono text-[color:var(--color-blue)] tracking-wider uppercase">Market 0{i + 1}</p>
                      <h3 className="text-[18px] font-semibold tracking-tight">{m.market}</h3>
                      {m.note && <p className="text-[13px] leading-relaxed text-[color:var(--color-fg-muted)]">{m.note}</p>}
                    </div>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section border-t border-[color:var(--color-border)]">
          <div className="container-page">
            <FadeIn>
              <div className="card p-8 md:p-14 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(255,59,48,0.07), transparent 60%)" }} aria-hidden />
                <div className="relative">
                  <p className="eyebrow text-[color:var(--color-red)]">HIGHLIGHT</p>
                  <h2 className="mt-4 text-[32px] md:text-[48px] tracking-tight font-semibold max-w-[18ch]">{dive.highlight.title}</h2>
                  <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--color-fg-muted)] max-w-[60ch]">{dive.highlight.body}</p>
                  <div className="mt-10 pt-8 border-t border-[color:var(--color-border)] grid grid-cols-2 md:grid-cols-4 gap-6">
                    {dive.highlight.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-[28px] md:text-[36px] font-mono font-medium tracking-tight"><AnimatedCounter value={s.value} /></div>
                        <div className="mt-1.5 text-[11px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Prev / Next case study — jump straight between deep dives */}
        <section className="section border-t border-[color:var(--color-border)]">
          <div className="container-page">
            <FadeIn><p className="eyebrow mb-8">MORE CASE STUDIES</p></FadeIn>
            <div className="grid sm:grid-cols-2 gap-5">
              <FadeIn>
                <Link href={`/work/${prev.slug}`} className="card card-link block h-full p-7 group">
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono text-[color:var(--color-fg-faint)] group-hover:text-[color:var(--color-red)] uppercase tracking-wider transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Previous
                  </span>
                  <p className="mt-4 text-[10px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{prev.tag}</p>
                  <h3 className="mt-2 text-[22px] md:text-[26px] font-semibold tracking-tight">{prev.client}</h3>
                </Link>
              </FadeIn>
              <FadeIn delay={0.05}>
                <Link href={`/work/${next.slug}`} className="card card-link block h-full p-7 group sm:text-right">
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono text-[color:var(--color-fg-faint)] group-hover:text-[color:var(--color-red)] uppercase tracking-wider transition-colors sm:flex-row-reverse">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M19 12l-7-7M19 12l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Next
                  </span>
                  <p className="mt-4 text-[10px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{next.tag}</p>
                  <h3 className="mt-2 text-[22px] md:text-[26px] font-semibold tracking-tight">{next.client}</h3>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section border-t border-[color:var(--color-border)]">
          <div className="container-page">
            <div className="max-w-3xl">
              <FadeIn><p className="text-[20px] md:text-[26px] leading-snug tracking-tight font-display">{dive.closing}</p></FadeIn>
              <FadeIn delay={0.1}>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link href="/#contact" className="btn-primary">Talk about your project</Link>
                  <Link href="/#work" className="btn-secondary">See other work</Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}