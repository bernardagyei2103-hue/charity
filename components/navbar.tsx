"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Sunrise, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useDonatePaymentModal } from "@/components/providers/donate-payment-modal-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openPaymentMethods } = useDonatePaymentModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-hope/10 bg-ivory/85 shadow-[0_10px_40px_-30px_rgb(6_31_51_/_35%)] backdrop-blur-xl"
          : "border-b border-transparent bg-ivory/70 backdrop-blur-md",
      )}
    >
      <div className="flex h-[72px] w-full items-center justify-between px-3 sm:px-4 lg:px-5 xl:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${SITE.name} home`}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-gradient-to-br from-hope via-hope-muted to-growth shadow-card ring-1 ring-white/25">
            <div className="absolute inset-0 bg-hero-radial opacity-55" aria-hidden />
            <div className="relative flex h-full w-full items-center justify-center">
              <Sunrise className="h-6 w-6 text-white drop-shadow" aria-hidden />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold tracking-tight text-hope-deep">
              {SITE.name}
            </div>
            <div className="hidden text-[11px] font-medium text-hope-muted sm:block">
              {SITE.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-hope-muted transition hover:bg-hope/5 hover:text-hope-deep",
                  active && "bg-hope/5 text-hope-deep",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href="/get-involved/">Volunteer</Link>
          </Button>
          <Button type="button" size="sm" className="rounded-full" onClick={openPaymentMethods}>
            Donate Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hope/10 bg-white/70 text-hope-deep shadow-sm backdrop-blur lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-hope/10 bg-ivory/95 backdrop-blur-xl lg:hidden"
          >
            <div className="w-full space-y-2 px-3 py-4 sm:px-4 lg:px-5 xl:px-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-hope-deep ring-1 ring-hope/10"
                >
                  {link.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button asChild variant="outline" className="w-full rounded-2xl">
                  <Link href="/get-involved/">Volunteer</Link>
                </Button>
                <Button
                  type="button"
                  className="w-full rounded-2xl"
                  onClick={() => {
                    openPaymentMethods();
                    setOpen(false);
                  }}
                >
                  Donate
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
