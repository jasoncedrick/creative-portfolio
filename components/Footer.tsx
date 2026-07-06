import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-red)] pulse-dot" />
          <span className="text-[13px] font-medium">Jason Cedrick</span>
          <span className="text-[12px] font-mono text-[color:var(--color-fg-faint)]">© 2026</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-[color:var(--color-fg-muted)]">
          <Link href="/#work" className="hover:text-[color:var(--color-fg)] transition-colors">Work</Link>
          <Link href="/#services" className="hover:text-[color:var(--color-fg)] transition-colors">Services</Link>
          <Link href="/#contact" className="hover:text-[color:var(--color-fg)] transition-colors">Contact</Link>
          <span className="text-[color:var(--color-fg-dim)]">·</span>
          <a href={`mailto:${site.email}`} className="hover:text-[color:var(--color-fg)] transition-colors">Email</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-fg)] transition-colors">LinkedIn</a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-fg)] transition-colors">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}