"use client";

import { faqs } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function FAQ() {
  return (
    <section className="section border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <p className="eyebrow">FREQUENTLY ASKED</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-[36px] md:text-[44px] leading-[1.05] tracking-tight">
                Questions, answered.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-[color:var(--color-border)]">
              {faqs.map((f, i) => (
                <FadeIn key={i} as="li" delay={i * 0.03}>
                  <details className="group border-b border-[color:var(--color-border)]">
                    <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none">
                      <span className="text-[17px] md:text-[18px] font-medium tracking-tight pr-4">
                        {f.q}
                      </span>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-[color:var(--color-border-strong)] flex items-center justify-center group-open:bg-[color:var(--color-red)] group-open:text-[color:var(--color-bg)] group-open:border-[color:var(--color-red)] transition-all">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="group-open:rotate-45 transition-transform"
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="pb-6 pr-12 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
                      {f.a}
                    </div>
                  </details>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
