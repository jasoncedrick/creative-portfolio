import Image from "next/image";
import { about } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <FadeIn><p className="eyebrow">WHO I AM</p></FadeIn>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            {/* Headshot — set about.photo in content.ts (e.g. /jason.jpg) */}
            <FadeIn>
              <div className="ph ph-1-1 max-w-[320px] mb-8 rounded-2xl">
                {about.photo ? (
                  <Image src={about.photo} alt="Jason Cedrick" fill className="object-cover rounded-2xl" />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[color:var(--color-fg-dim)]">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    <span className="ph-label">Headshot · jason.jpg</span>
                  </div>
                )}
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[24px] md:text-[28px] leading-snug tracking-tight font-display">
                {about.intro}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-[color:var(--color-fg-muted)]">
              {about.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.05}><p>{p}</p></FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
