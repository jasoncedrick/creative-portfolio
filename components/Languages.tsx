import { languages } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function Languages() {
  return (
    <section className="py-12 md:py-16 border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4">
          <FadeIn>
            <p className="eyebrow">BUILT FOR INTERNATIONAL BRANDS</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] leading-[1.08] tracking-tight font-semibold max-w-[24ch]">
              Most editors hand you English. I hand you a campaign localized for the market it&apos;s running in.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <p className="text-[11px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider mb-5">
                Localization-ready
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {languages.ready.map((l) => (
                  <li key={l.code} className="card px-3.5 py-3 flex items-baseline gap-2.5">
                    <span className="text-[15px] font-mono font-medium text-[color:var(--color-red)]">{l.code}</span>
                    <span className="text-[12px] text-[color:var(--color-fg-muted)] leading-tight">{l.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-[11px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider mb-5">
                Markets shipped
              </p>
              <ul className="flex flex-wrap gap-2">
                {languages.markets.map((m) => (
                  <li key={m} className="px-3.5 py-2 text-[13px] rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elev)] hover:border-[color:var(--color-blue)]/40 transition-colors">
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)] max-w-[48ch]">
                Localization isn&apos;t just translation. It&apos;s adapting product names, currencies, measurements, regional references, and cultural cues so the copy feels native, not translated.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
