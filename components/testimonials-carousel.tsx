"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  type: "Donor" | "Beneficiary" | "Partner" | "Volunteer";
  imageSrc: string;
  imageAlt: string;
};

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((v) => (v + 1) % items.length);
    }, 7200);
    return () => window.clearInterval(id);
  }, [items.length]);

  const active = items[idx];

  const next = () => setIdx((v) => (v + 1) % items.length);
  const prev = () => setIdx((v) => (v - 1 + items.length) % items.length);

  return (
    <div className="relative overflow-hidden rounded-[34px] bg-white p-6 shadow-soft ring-1 ring-hope/10 sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-24 h-[320px] w-[320px] rounded-full bg-sunrise/10 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-36 left-[-60px] h-[420px] w-[420px] rounded-full bg-growth/10 blur-[110px]" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative mx-auto aspect-square w-[min(440px,100%)] overflow-hidden rounded-[30px] ring-1 ring-hope/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.imageSrc}
              initial={{ opacity: 0.15, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={active.imageSrc}
                alt={active.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 440px"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/40 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative max-w-xl flex-1">
          <Quote className="h-10 w-10 text-sunrise/60" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 font-serif text-2xl font-semibold leading-snug tracking-tight text-hope-deep sm:text-[2rem]"
            >
              “{active.quote}”
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-hope-deep">{active.name}</div>
              <div className="text-sm text-hope-muted">
                {active.role} · {active.type}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-hope/10 bg-white",
                  "text-hope-deep transition hover:border-hope/20 hover:bg-ivory",
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-hope/10 bg-white",
                  "text-hope-deep transition hover:border-hope/20 hover:bg-ivory",
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {items.map((it, i) => (
              <button
                key={`${it.name}-${i}`}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={cn(
                  "h-2.5 rounded-full transition",
                  i === idx ? "w-10 bg-hope" : "w-2.5 bg-hope/15 hover:bg-hope/30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
