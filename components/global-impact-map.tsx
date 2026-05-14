"use client";

import { motion } from "framer-motion";

import { WORLD_MARKERS } from "@/lib/site";

export function GlobalImpactMap() {
  return (
    <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-b from-white to-ivory p-px shadow-soft ring-1 ring-hope/10">
      <div className="relative overflow-hidden rounded-[33px] bg-hope-deep p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-[0.55]" />
        <div className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-sunrise/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-52 right-[-90px] h-[520px] w-[520px] rounded-full bg-growth/10 blur-[140px]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold text-white ring-1 ring-white/15">
              Global presence · Locally led
            </div>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-[2.35rem]">
              Where hope is rising right now
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Markers indicate active program clusters across 14 countries. Every site is anchored to community
              leadership, localized metrics, and long-term stewardship plans—not fly-in aid.
            </p>
          </div>
          <div className="text-sm text-white/65">
            <span className="font-semibold text-white">Highlighted regions:</span> West Africa • East Africa • South
            Asia • Central America • Andean corridors
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[28px] ring-1 ring-white/15">
          <div className="relative aspect-[16/10] bg-gradient-to-b from-hope/45 to-hope-deep">
            <svg
              viewBox="0 0 950 490"
              className="absolute inset-0 h-full w-full text-white/10"
              role="img"
              aria-label="Abstract world regions map with program markers"
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                  <stop offset="55%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
                <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                </linearGradient>
              </defs>

              <rect width="950" height="490" fill="transparent" />

              {/* Stylized arcs suggesting continents */}
              <path
                fill="url(#land)"
                d="M80 265c62-118 226-173 392-157 122 11 239 71 294 173 24 43 13 103-53 139-104 61-279 62-389 12-134-61-218-167-244-167Z"
              />
              <path
                fill="url(#land)"
                d="M550 155c118-74 279-93 356-43 46 31 71 114 43 173-61 139-297 173-389 129-104-52-118-207-10-259Z"
                opacity="0.55"
              />
              <ellipse cx="480" cy="170" rx="420" ry="160" fill="url(#glow)" opacity="0.55" />
            </svg>

            {/* Markers */}
            {WORLD_MARKERS.map((m, i) => (
              <motion.button
                key={m.country}
                type="button"
                aria-label={`Active programs in ${m.country}`}
                initial={{ opacity: 0.35, scale: 0.8 }}
                animate={{ opacity: 1, scale: [0.92, 1.05, 1] }}
                transition={{
                  delay: i * 0.08 + 0.15,
                  duration: 1.05,
                  ease: [0.16, 1, 0.3, 1],
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 6,
                }}
                className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2"
                style={{ left: m.cx, top: m.cy }}
              >
                <span className="absolute inset-0 rounded-full bg-sunrise/25 blur-md" aria-hidden />
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[11px] font-bold text-hope-deep ring-2 ring-sunrise/45 shadow-glow">
                  {m.country.slice(0, 2).toUpperCase()}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
