import { process } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function Process() {
  return (
    <section id="process" className="section border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4">
          <FadeIn>
            <p className="eyebrow">HOW I WORK</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[36px] md:text-[52px] leading-[1.05] tracking-tight max-w-[22ch]">
              A five-step process built for speed and consistency.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[15px] md:text-[16px] text-[color:var(--color-fg-muted)] max-w-[55ch]">
              Designed so you spend less time managing me and more time launching.
            </p>
          </FadeIn>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-2xl overflow-hidden">
          {process.map((step, i) => (
            <FadeIn key={step.n} as="li" delay={i * 0.05}>
              <div className="bg-[color:var(--color-bg)] p-6 md:p-7 h-full flex flex-col gap-4 hover:bg-[color:var(--color-bg-elev)] transition-colors">
                <span className="text-[12px] font-mono text-[color:var(--color-red)] tracking-wider">
                  {step.n}
                </span>
                <h3 className="text-[18px] font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[color:var(--color-fg-muted)] flex-1">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
