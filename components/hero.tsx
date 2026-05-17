"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { HERO_STATS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useDonatePaymentModal } from "@/components/providers/donate-payment-modal-provider";
import { MetricsCounterStrip } from "@/components/metrics-counter";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { openPaymentMethods } = useDonatePaymentModal();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.45 });
  const y = useTransform(smooth, [0, 1], ["0%", "18%"]);

  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const parallaxProps = !reduceMotion ? { style: { y } } : {};

  return (
    <section ref={ref} id="hero" className="relative min-h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" {...parallaxProps}>
        <Image
          src="/hero/hero-background.png"
          alt="Volunteers and local families gathered with donated supplies outside a community center after a Guild distribution"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hope-deep/65 via-hope-deep/45 to-hope-deep/90" />
        <div className="absolute inset-0 bg-hero-radial opacity-90 mix-blend-soft-light" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-end px-2 pb-12 pt-28 sm:px-4 sm:pb-14 sm:pt-32 lg:px-5 xl:px-11 lg:pb-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4 text-sunrise-soft" aria-hidden />
            Independently reviewed programs · Field-led delivery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "mt-6 font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-white",
              "text-balance",
            )}
          >
            Together We Can Rewrite Someone’s Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {SITE.name} empowers vulnerable communities through education, healthcare, clean water, and
            sustainable development — with reporting you can read, results you can feel, and dignity at the
            center of every program.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button type="button" size="lg" className="rounded-full shadow-glow" onClick={openPaymentMethods}>
              Donate Now
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/impact/">See Our Impact</Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-12">
          <MetricsCounterStrip items={HERO_STATS} />
        </div>
      </div>
    </section>
  );
}
