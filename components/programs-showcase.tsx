"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { Button } from "@/components/ui/button";

// NOTE: PROGRAM_ROWS imported as values in consuming file; typings inferred there.
type Row = {
  eyebrow: string;
  title: string;
  copy: string;
  statLabel: string;
  statValue: string;
  ctaHref: string;
  image: string;
  alt: string;
  reverse?: boolean;
};

export function ProgramsShowcase({ rows }: { rows: Row[] }) {
  return (
    <div className="space-y-14">
      {rows.map((r) => (
        <motion.section
          key={r.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[36px] bg-white shadow-soft ring-1 ring-hope/10"
        >
          <div
            className={cn(
              "grid gap-0 lg:grid-cols-2",
              r.reverse ? "lg:[&>*:first-child]:order-2" : "",
            )}
          >
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-[580px]">
              <Image
                src={r.image}
                alt={r.alt}
                fill
                className="object-cover transition duration-[1200ms] hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/45 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute left-6 top-6 rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur">
                Immersive program story
              </div>
            </div>

            <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:py-16">
              <SectionReveal delay={0.02}>
                <div className="text-[11px] font-bold uppercase tracking-[0.35em] text-hope-muted">
                  {r.eyebrow}
                </div>
                <h3 className="mt-4 font-serif text-[clamp(1.95rem,3.8vw,2.75rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                  {r.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-hope-muted">{r.copy}</p>

                <div className="mt-8 grid max-w-lg grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-ivory p-5 ring-1 ring-hope/10">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">
                      {r.statLabel}
                    </div>
                    <div className="mt-2 font-serif text-3xl font-semibold text-hope-deep">{r.statValue}</div>
                  </div>
                  <div className="rounded-2xl bg-hope/5 p-5 ring-1 ring-hope/10">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">
                      Delivery model
                    </div>
                    <div className="mt-2 text-sm font-semibold text-hope-deep leading-snug">
                      Co-designed milestones + published quarterly trackers
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Button asChild className="rounded-full">
                    <Link href={r.ctaHref}>Explore this program</Link>
                  </Button>
                </div>
              </SectionReveal>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
