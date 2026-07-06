"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-red)] pulse-dot" />
          <span className="text-[15px] font-medium tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="btn-primary">
            Email Me
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden w-10 h-10 -mr-2 inline-flex items-center justify-center rounded-md hover:bg-[color:var(--color-bg-elev)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-[color:var(--color-fg)] transition-transform ${
                mobileOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[color:var(--color-fg)] transition-transform ${
                mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t border-[color:var(--color-border)] ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-page py-4 flex flex-col gap-1 bg-[color:var(--color-bg)]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-[15px] text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="btn-primary mt-3 self-start"
            onClick={() => setMobileOpen(false)}
          >
            Email Me
          </a>
        </div>
      </div>
    </header>
  );
}
