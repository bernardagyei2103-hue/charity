"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useDonatePaymentModal } from "@/components/providers/donate-payment-modal-provider";
import { Button } from "@/components/ui/button";

export type DonationTier = {
  amount: string;
  description: string;
};

export function DonationCard({
  tiers,
  className,
}: {
  tiers: DonationTier[];
  className?: string;
}) {
  const { openPaymentMethods } = useDonatePaymentModal();
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[34px] bg-gradient-to-br from-hope-deep via-hope to-hope-light p-px shadow-glow",
        className,
      )}
    >
      <div className="relative rounded-[33px] bg-ivory/95 px-6 py-12 backdrop-blur sm:px-12 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-hope/5 px-4 py-2 text-[11px] font-semibold text-hope ring-1 ring-hope/10">
              <HeartHandshake className="h-4 w-4 text-sunrise" aria-hidden />
              100% directed to programmatic outcomes • Published quarterly allocations
            </div>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-hope-deep sm:text-[2.4rem]">
              Your Support Changes Everything
            </h2>
            <p className="mt-4 text-base leading-relaxed text-hope-muted">
              Gifts fuel classroom materials, clinician hours, filtration systems, and local livelihoods—not
              fluff. Choose a preset to see what your generosity unlocks today.
            </p>
          </div>

          <div className="w-full max-w-xl rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-hope/10 lg:max-w-[28rem]">
            <div className="grid gap-3">
              {tiers.map((t) => (
                <motion.a
                  key={t.amount}
                  href={`${SITE.donateUrl}?amount=${encodeURIComponent(t.amount.replace(/[^\d]/g, ""))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "group rounded-2xl border border-hope/10 bg-ivory/60 px-5 py-5 transition",
                    "hover:border-sunrise/45 hover:bg-white hover:shadow-card",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-serif text-xl font-semibold text-hope-deep">{t.amount}</div>
                    <div className="text-right text-[11px] font-semibold uppercase tracking-wide text-hope-muted">
                      Choose
                      <span className="block text-[13px] normal-case tracking-normal text-hope-deep transition group-hover:text-sunrise-deep">
                        {t.description}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
              <Button asChild variant="outline" size="xl" className="w-full rounded-2xl">
                <Link href={SITE.donateUrl} target="_blank" rel="noopener noreferrer">
                  Custom donation
                </Link>
              </Button>
              <Button type="button" size="xl" className="w-full rounded-2xl" onClick={openPaymentMethods}>
                Donate securely
              </Button>
              <p className="text-center text-[12px] leading-relaxed text-hope-muted">
                Cash App and Venmo details open in this window—preset amounts above still use the audited partner checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
