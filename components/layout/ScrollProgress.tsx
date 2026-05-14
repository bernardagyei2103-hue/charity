"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      const next = max > 0 ? Math.min(1, scrollTop / max) : 0;
      setP(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px] bg-hope-deep/15",
      )}
    >
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-sunrise via-growth to-hope-muted transition-[width] duration-200 ease-out"
        style={{ width: `${Math.round(p * 10000) / 100}%` }}
      />
    </div>
  );
}
