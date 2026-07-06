"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type AnimatedCounterProps = {
  value: string; // "€105K", "5,194", "32.8%", "2.13x"
  durationMs?: number;
};

function parse(value: string) {
  const match = value.match(/^([^\d.-]*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, decimals: 0 };
  const prefix = match[1] ?? "";
  const raw = match[2].replace(/,/g, "");
  const number = parseFloat(raw);
  const suffix = match[3] ?? "";
  const decimals = (raw.split(".")[1] ?? "").length;
  return { prefix, number, suffix, decimals };
}

function format(n: number, decimals: number, includeCommas: boolean) {
  const fixed = n.toFixed(decimals);
  if (!includeCommas) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

export function AnimatedCounter({ value, durationMs = 1200 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const reduced = useReducedMotion();

  const { prefix, number, suffix, decimals } = parse(value);
  const includeCommas = value.includes(",");

  const currentRef = useRef(0);
  const rafRef = useRef(0);
  const [display, setDisplay] = useState(() =>
    Number.isFinite(number) ? `${prefix}${format(0, decimals, includeCommas)}${suffix}` : value
  );

  useEffect(() => {
    if (!Number.isFinite(number)) {
      setDisplay(value);
      return;
    }
    if (reduced) {
      const target = inView ? number : 0;
      currentRef.current = target;
      setDisplay(`${prefix}${format(target, decimals, includeCommas)}${suffix}`);
      return;
    }

    const from = currentRef.current;
    const to = inView ? number : 0;
    if (from === to) return;

    const start = performance.now();
    cancelAnimationFrame(rafRef.current);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const cur = from + (to - from) * eased;
      currentRef.current = cur;
      setDisplay(`${prefix}${format(cur, decimals, includeCommas)}${suffix}`);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, reduced, number, prefix, suffix, decimals, includeCommas, durationMs, value]);

  return (
    <span ref={ref} className="tabular">
      {display}
    </span>
  );
}
