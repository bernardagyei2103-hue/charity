"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

export function AnimatedNumber({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1650;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(n)}
      {suffix}
    </span>
  );
}

export function MetricsCounterStrip({
  items,
}: {
  items: readonly { value: number; suffix: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 rounded-[28px] bg-white/8 p-4 ring-1 ring-white/14 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div key={it.label} className="rounded-2xl bg-hope-deep/30 px-4 py-3 ring-1 ring-white/10">
          <div className="font-serif text-3xl font-semibold tracking-tight text-white md:text-[2.1rem]">
            <AnimatedNumber value={it.value} suffix={it.suffix} />
          </div>
          <div className="mt-2 text-[13px] font-medium text-white/70">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

export type MetricItem = {
  label: string;
  value: number;
  suffix: string;
  supporting?: string;
};

export function MetricsCounter({ items }: { items: readonly MetricItem[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="group relative overflow-hidden rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-hope/10"
        >
          <dt className="text-sm font-semibold text-hope-muted">{it.label}</dt>
          <dd className="mt-3 font-serif text-[clamp(2.15rem,3.5vw,2.85rem)] font-semibold tracking-tight text-hope-deep">
            <AnimatedNumber value={it.value} suffix={it.suffix} />
          </dd>
          {it.supporting ? (
            <p className="mt-3 text-sm leading-relaxed text-hope-muted">{it.supporting}</p>
          ) : (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 translate-y-full bg-gradient-to-r from-sunrise/60 via-growth/55 to-hope-muted/55 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          )}
        </div>
      ))}
    </dl>
  );
}
