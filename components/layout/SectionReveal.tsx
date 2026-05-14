"use client";

import type { PropsWithChildren } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { fadeUp } from "@/styles/motion";

type SectionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
