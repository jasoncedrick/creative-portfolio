import { site } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { ContactForm } from "./ContactForm";

type CardProps = { href: string; label: string; value: string; external?: boolean };

function ContactCard({ href, label, value, external }: CardProps) {
  const extra = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a href={href} {...extra} className="card p-5 flex items-center justify-between group hover:border-[color:var(--color-red)]/30">
      <div className="min-w-0">
        <p className="text-[11px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider">{label}</p>
        <p className="mt-1 text-[14px] font-mono break-all">{value}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 ml-3 text-[color:var(--color-fg-faint)] group-hover:text-[color:var(--color-red)] group-hover:translate-x-0.5 -translate-y-0.5 transition-all">
        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function Contact() {
  const waLink = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section id="contact" className="section border-t border-[color:var(--color-border)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(59, 111, 255, 0.08), transparent 70%)" }} aria-hidden />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: pitch + direct-contact options */}
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="eyebrow">LET&apos;S WORK</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-5 text-[34px] md:text-[46px] lg:text-[52px] leading-[1.04] tracking-tight font-semibold">
                Got a brief, a brand, or a budget that needs creative?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-[16px] md:text-[17px] text-[color:var(--color-fg-muted)] max-w-[46ch]">
                Send the brief and I&apos;ll come back with a plan and a quote. Reply within 24 hours,
                every business day. Prefer to skip the form? Reach me directly below.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col gap-3">
                <ContactCard href={`mailto:${site.email}`} label="Email" value={site.email} />
                <ContactCard href={waLink} label="WhatsApp" value={site.whatsappDisplay} external />
                <ContactCard href={site.linkedin} label="LinkedIn" value="in/jasonceddy" external />
              </div>
            </FadeIn>
          </div>

          {/* Right: the form */}
          <FadeIn delay={0.2} className="lg:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
