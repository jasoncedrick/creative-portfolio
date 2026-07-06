"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Press Esc on a deep-dive page to go back to the main page.
 * If a lightbox/modal is open (it locks body scroll), Esc closes that first —
 * we skip navigation in that case so one Esc doesn't do two things.
 */
export function EscBack({ href = "/#work" }: { href?: string }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (document.body.style.overflow === "hidden") return; // a modal is open — let it handle Esc
      router.push(href);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [router, href]);

  return null;
}
