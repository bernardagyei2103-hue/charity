import { Award, BadgeCheck, Building2, Shield } from "lucide-react";

import { SectionReveal } from "@/components/layout/SectionReveal";

const partners = [
  "Global Aid Alliance",
  "Health for Humanity",
  "Future Scholars Initiative",
] as const;

export function TrustBar() {
  return (
    <section className="border-b border-hope/10 bg-white">
      <div className="mx-auto max-w-shell px-2 py-10 sm:px-4 lg:px-6 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
          <SectionReveal className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-growth/10 px-3 py-2 text-[11px] font-semibold text-growth-dark ring-1 ring-growth/15">
                <BadgeCheck className="h-4 w-4" aria-hidden />
                Registered nonprofit · Gold transparency tier
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-hope/5 px-3 py-2 text-[11px] font-semibold text-hope ring-1 ring-hope/10">
                <Shield className="h-4 w-4" aria-hidden />
                Annual third-party review
              </div>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-hope-muted">
              <div className="inline-flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 text-sunrise" aria-hidden />
                <span>
                  <span className="font-semibold text-hope-deep">Operational since 2014</span> — audited
                  financials posted publicly every year.
                </span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.06} className="grid gap-4 sm:grid-cols-3">
            {partners.map((name) => (
              <div
                key={name}
                className="relative overflow-hidden rounded-[26px] bg-ivory p-6 ring-1 ring-hope/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-serif text-sm font-semibold leading-snug text-hope-deep">{name}</div>
                  <Building2 className="h-5 w-5 shrink-0 text-hope-muted" aria-hidden />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/35 to-transparent" />
                <div className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-hope-muted">
                  Partner emblem
                  <span className="block text-[12px] font-normal capitalize tracking-normal text-hope-muted/85">
                    Placeholder logo
                  </span>
                </div>
              </div>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
