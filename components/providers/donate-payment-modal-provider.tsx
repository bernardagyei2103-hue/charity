"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type DonateModalContextValue = {
  openPaymentMethods: () => void;
  closePaymentMethods: () => void;
};

const DonatePaymentModalContext = createContext<DonateModalContextValue | null>(null);

export function useDonatePaymentModal(): DonateModalContextValue {
  const ctx = useContext(DonatePaymentModalContext);
  if (!ctx) {
    throw new Error("useDonatePaymentModal must be used within DonatePaymentModalProvider");
  }
  return ctx;
}

export function DonatePaymentModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const headingId = useId();

  const openPaymentMethods = useCallback(() => setOpen(true), []);
  const closePaymentMethods = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePaymentMethods();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closePaymentMethods]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const el = panelRef.current;
      if (!el?.contains(e.target as Node)) closePaymentMethods();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open, closePaymentMethods]);

  const ctx = useMemo(
    () => ({ openPaymentMethods, closePaymentMethods }),
    [openPaymentMethods, closePaymentMethods],
  );

  return (
    <DonatePaymentModalContext.Provider value={ctx}>
      {children}

      {open ? (
        <div className="fixed inset-0 z-[200]" role="presentation">
          <div className="absolute inset-0 bg-hope-deep/55 backdrop-blur-[2px]" aria-hidden />

          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={headingId}
              className={cn(
                "relative flex max-h-[min(94dvh,960px)] w-full max-w-[min(520px,calc(100vw-24px))] flex-col rounded-[26px]",
                "bg-white shadow-glow ring-1 ring-hope/15",
              )}
            >
              <div className="flex shrink-0 items-start justify-between gap-3 border-b border-hope/10 px-5 py-4 sm:px-6">
                <div id={headingId} className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-hope-muted">Donate</p>
                  <p className="mt-2 font-serif text-lg font-semibold leading-snug text-hope-deep sm:text-xl">
                    Payment methods · {SITE.name}
                  </p>
                </div>
                <Button
                  ref={closeBtnRef}
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-2xl"
                  aria-label="Close"
                  onClick={closePaymentMethods}
                >
                  <X className="h-5 w-5" aria-hidden />
                </Button>
              </div>

              <div className="overflow-y-auto overscroll-contain px-3 pb-4 pt-3 sm:px-5">
                <div className="relative mx-auto overflow-hidden rounded-2xl bg-ivory/80 ring-1 ring-hope/10">
                  <Image
                    src="/donate-payment-methods.png"
                    alt={`${SITE.name} accepted payment methods, including Cash App and Venmo account details`}
                    width={819}
                    height={1024}
                    className="h-auto w-full object-contain"
                    priority={false}
                    sizes="(max-width: 640px) 92vw, 480px"
                  />
                </div>
                <p className="mt-4 px-2 text-center text-[12px] leading-relaxed text-hope-muted sm:px-0">
                  Thank you — verify handles and digits match before sending. Prefer official apps; never wire transfer to
                  unverified recipients.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DonatePaymentModalContext.Provider>
  );
}
