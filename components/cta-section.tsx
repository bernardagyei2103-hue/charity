"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useDonatePaymentModal } from "@/components/providers/donate-payment-modal-provider";
import { Button } from "@/components/ui/button";

export function CTASection({
  eyebrow,
  title,
  subtext,
  primary,
  secondary,
  tone = "deep",
  primaryOpensPaymentModal = false,
}: {
  eyebrow?: string;
  title: string;
  subtext: string;
  primary: { label: string; href: string; external?: boolean };
  secondary: { label: string; href: string; external?: boolean };
  tone?: "deep" | "ivory";
  primaryOpensPaymentModal?: boolean;
}) {
  const { openPaymentMethods } = useDonatePaymentModal();
  const wrapper =
    tone === "ivory"
      ? "bg-ivory text-hope-deep ring-1 ring-hope/10"
      : "bg-hope-deep text-white ring-1 ring-white/10";

  const sub = tone === "ivory" ? "text-hope-muted" : "text-white/70";

  return (
    <section className={cn("relative overflow-hidden rounded-[34px]", wrapper)}>
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-[0.58]" aria-hidden />
      <div className="pointer-events-none absolute -left-36 top-[-80px] h-[460px] w-[460px] rounded-full bg-sunrise/12 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-52 right-[-80px] h-[560px] w-[560px] rounded-full bg-growth/14 blur-[150px]" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 py-14 text-center sm:px-12 sm:py-16 md:py-[4.25rem]">
        {eyebrow ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "mx-auto inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold ring-1 backdrop-blur",
              tone === "ivory"
                ? "bg-white/70 text-hope ring-hope/10"
                : "bg-white/10 text-white ring-white/15",
            )}
          >
            {eyebrow}
          </motion.div>
        ) : null}

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-serif text-[clamp(2.1rem,4.4vw,3.35rem)] font-semibold leading-[1.05] tracking-tight text-balance"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          className={cn("mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-[1.05rem]", sub)}
        >
          {subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          {primaryOpensPaymentModal ? (
            <Button
              type="button"
              size="lg"
              variant={tone === "ivory" ? "default" : "secondary"}
              className="w-full rounded-full sm:w-auto"
              onClick={openPaymentMethods}
            >
              {primary.label}
            </Button>
          ) : (
            <Button
              asChild
              size="lg"
              variant={tone === "ivory" ? "default" : "secondary"}
              className="w-full rounded-full sm:w-auto"
            >
              <Link href={primary.href} {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {primary.label}
              </Link>
            </Button>
          )}
          <Button
            asChild
            size="lg"
            variant={tone === "ivory" ? "outline" : "ivory"}
            className="w-full rounded-full sm:w-auto"
          >
            <Link
              href={secondary.href}
              {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {secondary.label}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
