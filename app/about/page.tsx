import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import { SectionReveal } from "@/components/layout/SectionReveal";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About · Mission, Vision, Story & Leadership",
  description:
    "Discover founding urgency behind The Bridge Builders Guild, standards for dignity, and leadership safeguarding long-term stewardship.",
  pathname: "/about/",
});

const leaders = [
  {
    name: "Dr. Nancy Anderson",
    role: "Co-founder & Chief Executive Officer",
    bio: "Former pediatric intensivist translating bedside urgency into systems that endure beyond grant cycles.",
    image: "/team/nancy-anderson.png",
    alt: "Portrait of Dr. Nancy Anderson, Co-founder and Chief Executive Officer",
  },
  {
    name: "Marcus Dubois",
    role: "Chief Programs Officer",
    bio: "Hydrologist turned humanitarian leading water, health, and resilience portfolios with geospatial rigor.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Marcus Dubois",
  },
  {
    name: "Neha Rahman",
    role: "Chief Financial & Impact Officer",
    bio: "Auditor-trained finance lead pairing ledgers with lived-experience metrics with no vanity dashboards.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Neha Rahman",
  },
  {
    name: "Robert Miller",
    role: "Director of Safeguarding & Ethics",
    bio: "Child protection specialist embedding anonymous reporting, trauma-informed training, and partner vetting.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Robert Miller, Director of Safeguarding & Ethics",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-ivory">
      <section className="relative overflow-hidden border-b border-hope/10 bg-hope-deep text-white">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-[0.55]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-white/60">About</div>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight tracking-tight">
              Mission, vision, story, leadership
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              We exist because too many nonprofits treat dignity as contingent. The Guild removes asterisks through programs
              co-led by neighbors, transparency radical enough to publish misses alongside wins, and ethics infrastructure
              that never feels optional.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/impact/">Read quantified stewardship</Link>
              </Button>
              <Button asChild size="lg" variant="ivory" className="rounded-full">
                <Link href="/contact/">Book a briefing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <SectionReveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Where we anchor</div>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-hope-deep sm:text-[2.5rem]">
              Mission and vision etched for adults and children alike
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-hope/10">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">Mission</div>
                <p className="mt-3 text-sm leading-relaxed text-hope-muted">
                  Equip underestimated communities with education, health, livelihoods, and clean water infrastructures
                  they co-own, with ethics as non-negotiable infrastructure.
                </p>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-hope/10">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">Vision</div>
                <p className="mt-3 text-sm leading-relaxed text-hope-muted">
                  Futures where caregivers stop choosing between pencils and prescriptions because both arrive with
                  predictability worthy of planning years ahead.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[34px] bg-white p-8 shadow-soft ring-1 ring-hope/10">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">Operational story</div>
              <p className="mt-4 text-base leading-relaxed text-hope-muted">
                Founded in Geneva living rooms and Accra warehouses alike, the Guild grew from patching immediate gaps into
                engineering durable systems—because dignity requires continuity, not camera-ready bandages. Today,
                thirteen national hubs coordinate alliances with ministries, diaspora fundraisers, grassroots cooperatives,
                and logistics partners, all held to safeguarding clauses even when inconvenient.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)] sm:items-center">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[26px] ring-1 ring-hope/10">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80"
                    alt="Team collaborators reviewing program blueprints outdoors"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/45 via-transparent to-transparent" />
                </div>
                <blockquote className="font-serif text-lg font-semibold leading-snug text-hope-deep">
                  {"We did not trademark hope—we tried to decentralize it. Every KPI answers to caregivers first, donors second."}
                  <footer className="mt-6 text-sm font-semibold text-hope-muted">— Dr. Nancy Anderson, CEO</footer>
                </blockquote>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="rounded-[34px] bg-gradient-to-br from-hope-deep via-hope to-hope-light p-px shadow-glow">
              <div className="h-full rounded-[33px] bg-hope-deep px-8 py-10 text-white">
                <div className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/65">Integrity stack</div>
                <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/70">
                  <p>
                    <span className="font-semibold text-white">Quarterly deviations memos:</span> if targets slip, narratives and
                    dollars shift transparently, with community sign-off baked in before press releases breathe.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Partnership charters:</span> corporate allies sign ethics addenda
                    that ban exploitative optics and guarantee local hiring floors.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Safeguarding triads:</span> survivor-centered reporting,
                    multilingual hotlines, and dedicated budgets so protection never raids program lines.
                  </p>
                  <Button asChild variant="secondary" className="mt-8 w-full rounded-2xl sm:w-auto">
                    <Link href="/impact/">Open public dashboards</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="border-t border-hope/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-4xl space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Leadership</div>
            <h2 className="font-serif text-[clamp(2.05rem,4vw,2.95rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              Guardrails lived by humans you can speak with
            </h2>
            <p className="text-base leading-relaxed text-hope-muted">
              Our bench blends clinicians, auditors, economists, adolescent advisory councils, and logistics veterans allergic
              to bottleneck heroics.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.name} className="overflow-hidden rounded-[28px] bg-ivory ring-1 ring-hope/10">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image src={leader.image} alt={leader.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/35 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-hope-deep">{leader.name}</h3>
                  <div className="mt-2 text-sm font-semibold text-sunrise-deep">{leader.role}</div>
                  <p className="mt-4 text-sm leading-relaxed text-hope-muted">{leader.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <CTASection
          tone="ivory"
          eyebrow="We answer hard questions enthusiastically"
          title="Transparency is the beginning of intimacy with donors."
          subtext="Request strategy decks. Redacted versions ship within forty-eight hours. Ask uncomfortable questions—we budget time for discomfort."
          primary={{ label: "Download governance overview", href: "/impact/#reports" }}
          secondary={{ label: "Email leadership", href: `mailto:${SITE.email}` }}
        />
      </section>
    </main>
  );
}
