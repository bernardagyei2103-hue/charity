"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ImpactArea = {
  title: string;
  description: string;
  metric: string;
  ctaHref: string;
  ctaLabel: string;
  icon: LucideIcon;
  accent?: "hope" | "sunrise" | "growth";
};

export function ImpactCard({ item }: { item: ImpactArea }) {
  const Icon = item.icon;
  const accent =
    item.accent === "sunrise"
      ? "from-sunrise/15 via-white to-ivory"
      : item.accent === "growth"
        ? "from-growth/12 via-white to-ivory"
        : "from-hope/10 via-white to-ivory";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-[32px] bg-gradient-to-b p-8 shadow-card ring-1 ring-hope/10 sm:p-9",
        accent,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-hope-deep text-white shadow-soft ring-1 ring-white/15">
          <Icon className="h-7 w-7" aria-hidden />
        </div>
        <div className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-hope-muted ring-1 ring-hope/10 backdrop-blur">
          {item.metric}
        </div>
      </div>

      <h3 className="mt-6 font-serif text-xl font-semibold tracking-tight text-hope-deep sm:text-[1.7rem] sm:leading-snug md:text-[1.875rem]">
        {item.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-hope-muted">{item.description}</p>

      <div className="mt-8">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="rounded-full px-0 text-hope-deep hover:bg-transparent hover:text-hope-muted"
        >
          <Link href={item.ctaHref} className="inline-flex items-center gap-2">
            <span>{item.ctaLabel}</span>
            <span
              aria-hidden
              className="translate-x-0 transition duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Button>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/85 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
      />
    </motion.article>
  );
}
