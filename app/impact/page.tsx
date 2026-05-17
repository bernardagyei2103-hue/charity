import Link from "next/link";

import type { Metadata } from "next";

import { IMPACT_BIG_STATS } from "@/lib/content";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { GlobalImpactMap } from "@/components/global-impact-map";
import { MetricsCounter } from "@/components/metrics-counter";
import { TransparencyBar } from "@/components/transparency-bar";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Impact · Verified Metrics & Public Reports",
  description:
    "Quantified stewardship across Guild programs, with externally reviewed figures and allocation transparency donors can scrutinize freely.",
  pathname: "/impact/",
});

export default function ImpactPage() {
  return (
    <main className="bg-ivory">
      <section className="border-b border-hope/10 bg-white">
        <div className="mx-auto max-w-shell px-3 py-16 sm:px-5 sm:py-20 lg:px-6 xl:px-10">
          <div className="max-w-5xl space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Impact</div>
            <h1 className="font-serif text-[clamp(2.35rem,5vw,3.55rem)] font-semibold leading-[1.02] tracking-tight text-hope-deep">
              Verified metrics stitched to lived timelines
            </h1>
            <p className="text-lg leading-relaxed text-hope-muted">
              Every headline number below answers—without dodging—to external reviewers, participatory audits, adolescent feedback,
              and hydrogeologic dossiers. Misses publish alongside corrective roadmaps endorsed locally.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild className="rounded-full" size="lg">
              <Link href="#reports">Annual reports archive</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full" size="lg">
              <Link href="/stories/">Field reflections</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-shell px-3 py-14 sm:px-5 lg:px-6 xl:px-10">
        <SectionReveal className="max-w-5xl space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Scorecard chorus</div>
          <h2 className="font-serif text-[clamp(2.05rem,4vw,2.95rem)] font-semibold leading-tight tracking-tight text-hope-deep">
            Core indicators (past 36 months rollup)
          </h2>
        </SectionReveal>
        <div className="mt-10">
          <MetricsCounter items={IMPACT_BIG_STATS} />
        </div>
      </section>

      <section id="transparency" className="border-y border-hope/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            <SectionReveal className="max-w-xl space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Allocation discipline</div>
              <h2 className="font-serif text-[clamp(2.05rem,4vw,2.85rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                Where revenue breathes hardest
              </h2>
              <p className="text-base leading-relaxed text-hope-muted">
                Operational overhead reflects safeguarding escalations, climate shocks, forensic audits—we budget plainly so
                  communities never unknowingly subsidize opacity.
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#reports">Reviewer letters</Link>
              </Button>
            </SectionReveal>

            <SectionReveal delay={0.06} className="rounded-[34px] bg-ivory p-8 shadow-soft ring-1 ring-hope/10 sm:p-10">
              <div className="space-y-7">
                <TransparencyBar label="Programs delivered directly in-field" pct={78} tone="growth" />
                <TransparencyBar label="Operational integrity & safeguarding" pct={12} tone="hope" />
                <TransparencyBar label="Advocacy, donor reporting, alliances" pct={10} tone="sunrise" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-shell px-3 pb-14 sm:px-5 lg:px-6 xl:px-10">
        <GlobalImpactMap />
      </section>

      <section id="reports" className="border-t border-hope/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <SectionReveal className="max-w-5xl space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Reports archive</div>
            <h2 className="font-serif text-[clamp(2.05rem,4vw,2.95rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Download audited snapshots
            </h2>
            <p className="text-base leading-relaxed text-hope-muted">
              PDF placeholders below illustrate UI anchors. Hosting teams swap href targets for gated URLs respecting confidentiality.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "FY25 Consolidated Stewardship Ledger", subtitle: "Board-certified · 482 pages · EN/FR", href: "#" },
              { title: "WASH Hydrogeologic Annex Q1–Q3 2026", subtitle: "Open well telemetry companion data", href: "#" },
              { title: "Safeguarding Independent Memo 2025", subtitle: "Redacted case exemplars appended", href: "#" },
            ].map((r) => (
              <div key={r.title} className="rounded-[26px] bg-ivory p-6 ring-1 ring-hope/10">
                <div className="font-serif text-lg font-semibold leading-snug text-hope-deep">{r.title}</div>
                <div className="mt-2 text-sm text-hope-muted">{r.subtitle}</div>
                <Button asChild variant="outline" className="mt-6 w-full rounded-2xl">
                  <Link href={r.href}>Request download link</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
