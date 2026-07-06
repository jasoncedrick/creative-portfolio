import { services } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function Services() {
  return (
    <section id="services" className="section border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4">
          <FadeIn>
            <p className="eyebrow">WHAT I DO</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[36px] md:text-[52px] leading-[1.05] tracking-tight max-w-[18ch]">
              Five core services. Choose one, stack a few, or hand me the full pipeline.
            </h2>
          </FadeIn>
        </div>

        <ul className="mt-16 grid gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <FadeIn key={s.id} as="li" delay={i * 0.04}>
              <article className="group bg-[color:var(--color-bg)] p-7 md:p-10 grid md:grid-cols-12 gap-6 hover:bg-[color:var(--color-bg-elev)] transition-colors">
                <div className="md:col-span-1 flex md:flex-col items-baseline md:items-start gap-3">
                  <span className="text-[12px] font-mono text-[color:var(--color-fg-faint)] tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-[22px] md:text-[26px] font-medium tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] font-mono text-[color:var(--color-fg-faint)]">
                    {s.audience}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-[color:var(--color-fg-muted)]">
                    {s.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
