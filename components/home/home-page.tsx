"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Handshake, Users } from "lucide-react";

import { SITE } from "@/lib/site";
import {
  DONATION_TIERS,
  FAQ_ITEMS,
  FEATURED_STORIES,
  IMPACT_AREAS,
  IMPACT_BIG_STATS,
  NEWS_ITEMS,
  PROGRAM_ROWS,
} from "@/lib/content";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { CTASection } from "@/components/cta-section";
import { DonationCard } from "@/components/donation-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { GlobalImpactMap } from "@/components/global-impact-map";
import { Hero } from "@/components/hero";
import { ImpactCard } from "@/components/impact-card";
import { MetricsCounter } from "@/components/metrics-counter";
import { ProgramsShowcase } from "@/components/programs-showcase";
import { StoryCard } from "@/components/story-card";
import { TrustBar } from "@/components/trust-bar";
import { TransparencyBar } from "@/components/transparency-bar";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />

      {/* About */}
      <section className="mx-auto max-w-shell px-3 py-16 sm:px-5 sm:py-20 lg:px-6 xl:px-10">
        <div className="grid gap-12 xl:gap-14 2xl:gap-16 lg:grid-cols-2 lg:items-center">
          <SectionReveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Our story</div>
            <h2 className="mt-4 font-serif text-[clamp(2.1rem,4.3vw,3.05rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Why we exist
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-hope-muted">
              <p>
                Founders met families whose futures were bottlenecked—not by ambition, but by missing basics:
                textbooks, clinician minutes, liters of safe water, credit to startagain after shocks.
              </p>
              <p>
                The Guild exists to shorten that bottleneck with programs co-owned by neighbors, audited books,
                and reporting honest enough for donors—and dignified enough for the people we serve.
              </p>
              <p>
                We don&apos;t parachute miracles. We invest in scaffolding: education that stays lit, taps that stay
                maintained, clinics that deepen roots, livelihoods resilient enough for real life.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.06}>
            <div className="relative overflow-hidden rounded-[36px] ring-1 ring-hope/10 shadow-soft">
              <div className="relative aspect-[16/10] lg:aspect-[16/11] xl:min-h-[22rem]">
                <Image
                  src="/team/nancy-anderson.png"
                  alt="Portrait of Dr. Nancy Anderson, co-founder and Chief Executive"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/60 via-transparent to-transparent" />
              </div>
              <div className="relative bg-white px-6 py-8 sm:px-10 sm:py-11 lg:px-11 lg:py-12">
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-hope-muted">
                  Founder message
                </div>
                <blockquote className="mt-5 font-serif text-[clamp(1.25rem,2.15vw,1.625rem)] font-semibold leading-snug text-hope-deep">
                  “Every child deserves opportunity, dignity, and hope.”
                </blockquote>
                <div className="mt-6 text-sm leading-relaxed text-hope-muted sm:text-[15px]">
                  — Dr. Nancy Anderson · Co-founder &amp; Chief Executive
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] bg-ivory p-5 ring-1 ring-hope/10 sm:p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">Mission</div>
                    <div className="mt-3 text-[15px] font-semibold leading-snug text-hope-deep">
                      Unlock agency through essentials done excellently—with neighbors, not above them.
                    </div>
                  </div>
                  <div className="rounded-[22px] bg-hope/5 p-5 ring-1 ring-hope/10 sm:p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">Vision</div>
                    <div className="mt-3 text-[15px] font-semibold leading-snug text-hope-deep">
                      Communities resilient enough that hope becomes infrastructure, not improvisation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Impact areas */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <SectionReveal className="max-w-5xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">
              Pillars that hold everything up
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2.05rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Impact Areas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hope-muted">
              Four intersecting fronts—because hunger never arrives alone, thirst doesn&apos;t politely wait until
              school ends, and health collapses cascade.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {IMPACT_AREAS.map((a) => (
              <ImpactCard key={a.title} item={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory to-white" />
        <div className="relative mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <SectionReveal className="max-w-5xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">
              Accountability in numbers
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2.05rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Impact that survives headlines
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hope-muted">
              These aren&apos;t vanity figures—they tether to audits, surveys, hydrogeology assessments, enrollment
              registries, and exit interviews stewarded jointly with local councils.
            </p>
          </SectionReveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <MetricsCounter items={IMPACT_BIG_STATS} />
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <SectionReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-5xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">
                Humans first — always
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                Featured Stories
              </h2>
              <p className="mt-4 text-base leading-relaxed text-hope-muted">
                Three snapshots—not to flatten complexity, but to show what becomes possible when systems listen.
              </p>
            </div>
            <Button asChild variant="outline" className="self-start rounded-full sm:self-auto">
              <Link href="/stories/">Explore all stories</Link>
            </Button>
          </SectionReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {FEATURED_STORIES.map((s) => (
              <StoryCard key={s.title} story={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation */}
      <section id="donate" className="mx-auto max-w-shell px-3 py-16 sm:px-5 sm:py-20 lg:px-6 xl:px-10">
        <DonationCard tiers={[...DONATION_TIERS]} />
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-shell px-3 pb-16 sm:px-5 sm:pb-20 lg:px-6 xl:px-10">
        <SectionReveal className="max-w-5xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">
            Proof you can wander through
          </div>
          <h2 className="mt-4 font-serif text-[clamp(2.05rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-hope-deep">
            Programs Showcase
          </h2>
          <p className="mt-5 text-base leading-relaxed text-hope-muted">
            Alternating glimpses—the same rigor unfolds on the ground daily, messy and beautiful beneath policy PDFs.
          </p>
        </SectionReveal>
        <div className="mt-12">
          <ProgramsShowcase rows={[...PROGRAM_ROWS]} />
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="relative overflow-hidden border-y border-hope/10 bg-ivory py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-44 top-20 h-[420px] w-[420px] rounded-full bg-sunrise/10 blur-[130px]" />
        <div className="relative mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            <SectionReveal className="max-w-xl space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Transparency</div>
              <h2 className="font-serif text-[clamp(2.05rem,4vw,2.95rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                Where your generosity travels
              </h2>
              <p className="text-base leading-relaxed text-hope-muted">
                Stewardship matters as much as speed. Boards review quarterly deviations; field teams reconcile
                purchase logs with classroom rosters—not because trust is scarce, but because it should compound.
              </p>

              <div className="rounded-[30px] bg-white p-8 shadow-soft ring-1 ring-hope/10">
                <div className="font-serif text-lg font-semibold text-hope-deep">Our transparency promise</div>
                <p className="mt-4 text-[15px] leading-relaxed text-hope-muted">
                  If we miss a milestone, donors hear it plainly alongside the corrective roadmap. Good news only
                  annual reports are for annual reports—not for people relying on accuracy to give again.
                </p>
              </div>

              <Button asChild variant="outline" className="rounded-full">
                <Link href="/impact/#reports">
                  <Download className="mr-2 h-4 w-4" aria-hidden />
                  Download annual report (PDF)
                </Link>
              </Button>
            </SectionReveal>

            <SectionReveal delay={0.06} className="rounded-[34px] bg-white p-10 shadow-soft ring-1 ring-hope/10 sm:p-12">
              <div className="font-serif text-xl font-semibold text-hope-deep">Fund allocation</div>
              <p className="mt-4 text-[15px] leading-relaxed text-hope-muted">
                Percentages reflect consolidated expenses across audited fiscal periods.
              </p>
              <div className="mt-8 space-y-7">
                <TransparencyBar label="Programs delivered in communities" pct={78} tone="growth" />
                <TransparencyBar label="Operations & compliance" pct={12} tone="hope" />
                <TransparencyBar label="Outreach & donor reporting" pct={10} tone="sunrise" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Volunteer / Partner */}
      <section className="mx-auto max-w-shell px-3 py-16 sm:px-5 sm:py-20 lg:px-6 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-hope-deep via-hope to-hope-light p-[1px] shadow-glow"
          >
            <div className="relative h-full rounded-[33px] bg-hope-deep px-10 py-14 text-white">
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold ring-1 ring-white/15 backdrop-blur">
                <Users className="mr-2 h-4 w-4 text-sunrise-soft" aria-hidden />
                Humanity-powered delivery
              </div>
              <h2 className="mt-6 font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.25rem]">
                Join Our Mission
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                From remote gigs to deployments alongside field leads—skills become oxygen for programs under
                pressure.
              </p>
              <div className="mt-10 grid gap-3">
                <Button asChild variant="secondary" size="xl" className="w-full rounded-2xl">
                  <Link href="/get-involved/#volunteer">Apply as a volunteer</Link>
                </Button>
                <Button asChild variant="ivory" size="xl" className="w-full rounded-2xl">
                  <Link href="/stories/">Hear volunteer voices</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[34px] bg-white px-8 py-12 shadow-soft ring-1 ring-hope/10"
          >
            <div className="inline-flex rounded-full bg-hope/5 px-4 py-2 text-[11px] font-semibold text-hope ring-1 ring-hope/10">
              <Handshake className="mr-2 h-4 w-4 text-sunrise" aria-hidden />
              Built for courageous brands
            </div>
            <h2 className="mt-6 font-serif text-[2rem] font-semibold leading-tight tracking-tight text-hope-deep sm:text-[2.25rem]">
              Partner with the Guild
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hope-muted">
              Multi-year alliances pair capital with safeguarding, employee activation, storytelling guardrails—and
              third-party audited outcomes you can circulate without squinting.
            </p>
            <div className="mt-10 grid gap-3">
              <Button asChild size="xl" className="w-full rounded-2xl">
                <Link href="/get-involved/#partner">Partnership inquiry</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full rounded-2xl">
                <Link href="/contact/">Book a stewardship call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-shell px-3 pb-16 sm:px-5 sm:pb-20 lg:px-6 xl:px-10">
        <GlobalImpactMap />
      </section>

      {/* News */}
      <section className="border-t border-hope/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <SectionReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-5xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">
                Notes from the field
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                News &amp; Updates
              </h2>
              <p className="mt-4 text-base leading-relaxed text-hope-muted">
                Quarterly digests ship with sober context—no sensationalism stock photos can’t erase.
              </p>
            </div>
            <Button asChild variant="outline" className="self-start rounded-full sm:self-auto">
              <Link href="/stories/">View all</Link>
            </Button>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NEWS_ITEMS.map((n) => (
              <motion.article
                key={n.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="flex h-full flex-col rounded-[28px] bg-ivory p-6 ring-1 ring-hope/10"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">{n.date}</div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-hope-deep">{n.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-hope-muted">{n.excerpt}</p>
                <div className="mt-6">
                  <Link
                    href={n.href}
                    className="text-sm font-semibold text-hope hover:text-sunrise-deep"
                  >
                    Read update →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-shell px-3 pb-16 sm:px-5 sm:pb-20 lg:px-6 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionReveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">
              No fine print theatrics
            </div>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hope-muted">
              Straight answers—the same tone our program teams use when sitting on plastic chairs beneath mango
              trees.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <FAQAccordion items={FAQ_ITEMS} />
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-shell px-3 pb-20 sm:px-5 sm:pb-24 lg:px-6 xl:px-10">
        <CTASection
          eyebrow="The next chapter begins now"
          title="Hope Begins With Action"
          subtext="Your contribution can create real change today—while our teams keep receipts, surveys, and maintenance ledgers painfully human and transparent."
          primary={{ label: "Donate Now", href: SITE.donateUrl, external: true }}
          secondary={{ label: "Become a Volunteer", href: "/get-involved/#volunteer" }}
        />
      </section>
    </main>
  );
}
