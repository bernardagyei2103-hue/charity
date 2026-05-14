import Link from "next/link";

import type { Metadata } from "next";

import { DONATION_TIERS } from "@/lib/content";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { CTASection } from "@/components/cta-section";
import { DonationCard } from "@/components/donation-card";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Get Involved · Volunteer, Partner, Donate",
  description:
    "Volunteer deployments, ethical partnership rails, donation presets, and safeguarding onboarding for anyone ready to amplify HopeRise programs responsibly.",
  pathname: "/get-involved/",
});

export default function GetInvolvedPage() {
  return (
    <main className="bg-ivory">
      <section className="relative overflow-hidden border-b border-hope/10 bg-hope-deep text-white">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-[0.55]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-white/60">Get involved</div>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.65rem)] font-semibold leading-[1.02] tracking-tight">
              Mobilize empathy without romanticizing burnout
            </h1>
            <p className="text-lg leading-relaxed text-white/72">
              We recruit volunteers ethically, forge partnerships accountable to safeguarding clauses, route donations through audited rails—nothing performative slips past procurement.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "6", v: "Onboarding pillars: ethics, safeguarding, accessibility, telemetry, contextual humility, decompress rituals." },
              { k: "48h", v: "Median response from volunteer desk acknowledging applications—bots never ghost humans." },
              { k: "100%", v: "Partnership contracts include exit clauses protecting communities if alliances sour philosophically materially." },
            ].map((c) => (
              <div key={c.k} className="rounded-[26px] bg-white/5 p-6 ring-1 ring-white/15">
                <div className="font-serif text-3xl font-semibold">{c.k}</div>
                <div className="mt-3 text-sm leading-relaxed text-white/70">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteer" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <SectionReveal className="max-w-2xl space-y-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Volunteer arcs</div>
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Join Our Mission
            </h2>
            <p className="text-base leading-relaxed text-hope-muted">
              Remote translators, accountants, counselors, GIS analysts, playwrights rewriting safeguarding skits—we match skills to moral imagination. Field deployments prioritize neighbors already embedded regionally—you never parachute narcissism accidentally if onboarding holds.
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-hope-muted">
              <li>• Living stipends for deployments exceeding 21 consecutive days domestically/abroad.</li>
              <li>• Weekly trauma-informed supervision circles—even when nothing dramatic surfaces.</li>
              <li>• Portfolio verification so résumés never imply heroics contradictory to safeguarding truth.</li>
            </ul>
            <Button asChild className="rounded-full">
              <Link href="/contact/">Submit volunteer application</Link>
            </Button>
          </SectionReveal>

          <SectionReveal delay={0.05} className="rounded-[34px] bg-white p-8 shadow-soft ring-1 ring-hope/10">
            <h3 className="font-serif text-2xl font-semibold text-hope-deep">Remote-friendly rotations</h3>
            <p className="mt-4 text-sm leading-relaxed text-hope-muted">
              Microtasks ship with mentorship loops—localization reviewers receive glossaries braided with folklore notes so mistranslations never sabotage tenderness accidentally.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-relaxed text-hope-muted">
              <div className="rounded-2xl bg-ivory p-5 ring-1 ring-hope/10">
                <div className="font-semibold text-hope-deep">Illustrators cohort</div>
                <div className="mt-2">Rebuild hygiene comics—deadline cadence humane, critiques never anonymous toxicity.</div>
              </div>
              <div className="rounded-2xl bg-ivory p-5 ring-1 ring-hope/10">
                <div className="font-semibold text-hope-deep">Data dignity reviewers</div>
                <div className="mt-2">Scrutinize dashboards anonymizing outliers respectfully—not deleting inconvenient truths statistically.</div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="partner" className="border-t border-hope/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Partnerships</div>
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Partner With HopeRise—without laundering optics
            </h2>
            <p className="text-base leading-relaxed text-hope-muted">
              Multi-year charters blend matching grants, skills-based volunteering, crisis capital lines, anonymized survivor storytelling guardrails—we decline vanity campaigns politely when communities disagree philosophically politely loudly validly simultaneously.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="rounded-[34px] bg-ivory p-10 ring-1 ring-hope/10">
              <h3 className="font-serif text-xl font-semibold text-hope-deep">What corporate allies receive</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-hope-muted">
                <li>• Quarterly participatory review calls—with adolescent advisory microphones never cosmetically optional.</li>
                <li>• Brand usage guidelines preventing poverty aesthetics accidentally hijacking billboard budgets.</li>
                <li>• Carbon interplay when logistics corridors amplify emissions—we document offsets where applicable.</li>
              </ul>
              <Button asChild className="mt-10 rounded-full">
                <Link href="/contact/">Start partnership dossier</Link>
              </Button>
            </div>
            <div className="rounded-[34px] bg-hope-deep p-10 text-white ring-1 ring-white/15">
              <h3 className="font-serif text-xl font-semibold">Red lines we articulate cheerfully upfront</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                No exploitative voluntourism imagery. No supply drops that communities didn’t democratically prioritize. No gag clauses silencing whistleblowing—ever.
              </p>
              <Button asChild variant="secondary" className="mt-10 w-full rounded-2xl sm:w-auto">
                <Link href="/impact/">Review transparency spine</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <DonationCard tiers={[...DONATION_TIERS]} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <CTASection
          eyebrow="Still deciding how you’d like to help?"
          title="We'll triage thoughtfully—never pressure theatrically"
          subtext={`Email ${SITE.email} outlining constraints—humans riff possibilities within seventy-two hours without automation gaslighting tone-deaf politely.`}
          primary={{ label: "Email introductions", href: `mailto:${SITE.email}` }}
          secondary={{ label: "Browse stories grounding metrics", href: "/stories/" }}
          tone="ivory"
        />
      </section>
    </main>
  );
}
