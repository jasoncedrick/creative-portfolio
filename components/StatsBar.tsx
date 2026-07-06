import { stats } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { AnimatedCounter } from "./AnimatedCounter";

export function StatsBar() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/40">
      <div className="container-page py-12 md:py-16">
        {/* Primary row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {stats.primary.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="flex flex-col gap-2">
                <div className="text-[34px] md:text-[42px] leading-none font-mono font-medium tracking-tight">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-[12px] text-[color:var(--color-fg-faint)] font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="my-10 divider-glow" />

        {/* Secondary row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
          {stats.secondary.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.04}>
              <div className="flex flex-col gap-1.5">
                <div className="text-[22px] md:text-[26px] leading-none font-mono font-medium text-[color:var(--color-fg-muted)]">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-[11px] text-[color:var(--color-fg-faint)] font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
