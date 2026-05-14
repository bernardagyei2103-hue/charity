"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function TransparencyBar({
  label,
  pct,
  tone = "hope",
}: {
  label: string;
  pct: number;
  tone?: "hope" | "sunrise" | "growth";
}) {
  const bar =
    tone === "sunrise"
      ? "from-sunrise to-sunrise-soft"
      : tone === "growth"
        ? "from-growth to-growth-light"
        : "from-hope-muted to-hope";

  return (
    <div>
      <div className="flex items-baseline justify-between gap-6">
        <div className="text-sm font-semibold text-hope-deep">{label}</div>
        <div className="font-serif text-lg font-semibold text-hope-deep">{pct}%</div>
      </div>
      <div className="mt-3 h-3 rounded-full bg-hope/10 ring-1 ring-hope/10">
        <motion.div
          className={cn(
            "h-full rounded-full bg-gradient-to-r shadow-[inset_0_1px_0_rgb(255_255_255_/_35%)]",
            bar,
          )}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
