import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import { PROGRAM_ROWS } from "@/lib/content";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Programs · Education, Water, Health & Empowerment",
  description:
    "Explore HopeRise Foundation initiatives spanning scholarships, maternal health corridors, watershed infrastructure, and women-led livelihood accelerators.",
  pathname: "/programs/",
});

export default function ProgramsPage() {
  return (
    <main className="bg-ivory">
      <section className="relative overflow-hidden border-b border-hope/10 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Programs</div>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.65rem)] font-semibold leading-[1.02] tracking-tight text-hope-deep">
              Detailed initiatives, co-designed locally
            </h1>
            <p className="text-lg leading-relaxed text-hope-muted">
              Each portfolio combines capital, training, safeguarding, telemetry, and exit strategies that protect dignity when
              funding sunsets. Dive into narratives that match the seriousness of generosity shown to us.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "78%", v: "Program spend audited against community scorecards monthly." },
              { k: "32", v: "Localized playbooks—not PDFs parachuted without translation rituals." },
              { k: "14", v: "Country clusters with escalation paths to HQ ethics desk within hours." },
            ].map((s) => (
              <div key={s.k} className="rounded-[26px] bg-ivory p-6 ring-1 ring-hope/10">
                <div className="font-serif text-3xl font-semibold text-hope-deep">{s.k}</div>
                <div className="mt-3 text-sm leading-relaxed text-hope-muted">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EducationSection />

      <WaterSection />

      <HealthSection />

      <WomenSection />

      <CommunitySection />

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-[34px] bg-white p-8 shadow-soft ring-1 ring-hope/10 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Implementation spine</div>
              <h2 className="mt-4 font-serif text-[clamp(2.05rem,4vw,2.85rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                Every corridor shares scaffolding
              </h2>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-hope-muted">
                <li>
                  <span className="font-semibold text-hope-deep">Evidence cadence:</span> baseline, midline, exit interviews—with
                  adolescents represented on review panels wherever programs touch schools.
                </li>
                <li>
                  <span className="font-semibold text-hope-deep">Localization clause:</span> no vendor contract without apprenticeship
                  hours stitched to youth cooperatives supported by Hope revolving funds.
                </li>
                <li>
                  <span className="font-semibold text-hope-deep">Climate overlay:</span> hydrogeology shocks, cholera surge indices, and rainfall variance inform reprogramming windows earlier than ministries sometimes announce externally.
                </li>
              </ul>
              <Button asChild className="mt-10 rounded-full" size="lg">
                <Link href={SITE.donateUrl} target="_blank" rel="noopener noreferrer">
                  Sponsor a corridor
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[16/13] overflow-hidden rounded-[28px] ring-1 ring-hope/10">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80"
                alt="Program coordinators reviewing laminated maps pinned to corkboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-hope-deep/45 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-12 rounded-[26px] bg-ivory p-6 ring-1 ring-hope/10">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">Curated summaries</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[...PROGRAM_ROWS].map((p) => (
                <div key={p.title} className="rounded-[22px] bg-white p-5 ring-1 ring-hope/10">
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-hope-muted">{p.eyebrow}</div>
                  <div className="mt-2 font-serif text-lg font-semibold text-hope-deep">{p.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-hope-muted">{p.copy.slice(0, 160)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  copy,
  bulletTitle,
  bullets,
  metrics,
  image,
  alt,
  reverse,
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  bulletTitle: string;
  bullets: readonly string[];
  metrics: readonly { label: string; value: string }[];
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="border-t border-hope/10 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] ring-1 ring-hope/10">
            <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/45 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur ring-1 ring-white/20">
              Evidence-led rollout
            </div>
          </div>

          <SectionReveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">{eyebrow}</div>
            <h2 className="mt-4 font-serif text-[clamp(2.05rem,4vw,2.85rem)] font-semibold leading-tight tracking-tight text-hope-deep">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hope-muted">{copy}</p>
            <div className="mt-8 rounded-[26px] bg-ivory p-6 ring-1 ring-hope/10">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">{bulletTitle}</div>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-hope-muted">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-growth" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-[22px] bg-white p-5 shadow-soft ring-1 ring-hope/10">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-hope-muted">{m.label}</div>
                  <div className="mt-3 font-serif text-3xl font-semibold text-hope-deep">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <Link href={SITE.donateUrl} target="_blank" rel="noopener noreferrer">
                  Fund this pillar
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/impact/">See metrics</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Hope for Education"
      title="Literacy arcs that stretch beyond exam weeks"
      copy="Families choose between fees, food, and fuel. We widen the funnel with scholarships calibrated to anemia rates, menstrual supply closets, nighttime safety escorts modeled by mothers’ collectives—and teacher residencies coached by nationals who cracked the syllabus themselves."
      bulletTitle="What changes in classrooms"
      bullets={[
        "Peer tutoring brigades remunerated ethically—never “volunteered” exploitation.",
        "Open-source STEAM crates assembled regionally so science feels tactile—not imported legend.",
        "Caregiver dashboards in plain language texting voice notes whenever girls miss two consecutive Mondays.",
      ]}
      metrics={[
        { label: "Female enrollment lift (median)", value: "38%" },
        { label: "Teacher retention uplift", value: "22 pts" },
      ]}
      image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1600&q=80"
      alt="Teacher kneeling beside students working on robotics components"
      reverse={false}
    />
  );
}

function WaterSection() {
  return (
    <SectionShell
      id="water"
      eyebrow="Water for Life"
      title="Hydrogeology before hero photography"
      copy="Dry seasons lie. Satellite passes don’t replace listening to elders who memorized vanished springs. Drill logs, fluoride testing, arsenic nightmares, watershed covenant signings—they all precede ribbon cuttings filmed with humility."
      bulletTitle="Stewardship choreography"
      bullets={[
        "Household chlorine credit ledgers audited by adolescent math clubs—seriously.",
        "Spare pumps catalogued centrally so communities never wait donor seasons for allen wrenches.",
        "Micro-insurance pooling so maintenance doesn’t crater when diaspora remittances hiccup.",
      ]}
      metrics={[
        { label: "Median walk-time reduction", value: "81%" },
        { label: "Committees chaired by women", value: "76%" },
      ]}
      image="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80"
      alt="Sunrise glint across hand pump with children carrying storage containers"
      reverse
    />
  );
}

function HealthSection() {
  return (
    <SectionShell
      id="health"
      eyebrow="Health Access Initiative"
      title="Clinician rotations that memorize faces, not just vitals"
      copy="Maternal wards suffocate when pharmaceuticals ghost midweek. Supply chain redundancies piggy-back on agricultural cooperatives crossing borders with dignity. Psychiatry intake happens under mango trees—with referral rides funded before prescriptions."
      bulletTitle="Continuity safeguards"
      bullets={[
        "Tele-triage escalation with interpreters paid living wages—not “helpful multilingual interns.”",
        "Cold chain backpacks rated for blackout seasons with SMS temperature breaches to WhatsApp clinician guilds.",
        "Postpartum counseling circles braided with savings groups tackling domestic economic shocks responsibly.",
      ]}
      metrics={[
        { label: "Facility delivery increase", value: "44%" },
        { label: "Zero stock weeks avoided", value: "96%" },
      ]}
      image="https://images.unsplash.com/photo-1579684385127-1ef13d694db9?auto=format&fit=crop&w=1600&q=80"
      alt="Nurse measuring blood pressure outdoors at mobile clinic tents"
      reverse={false}
    />
  );
}

function WomenSection() {
  return (
    <SectionShell
      id="women"
      eyebrow="Women Empowerment Project"
      title="Power redistributed—not rhetorically"
      copy="Finance circles tether to legal literacy bursts, apprenticeship stipends guarding against retaliation, childcare swaps encoded into cooperative bylaws—with anonymous reporting arcs if patriarchal backlashes ignite."
      bulletTitle="Economic scaffolding"
      bullets={[
        "Digital wallets co-owned with biometric fallbacks respecting elders rejecting fingerprint theology debates tactfully.",
        "Market access brokers remunerated proportional to coop profit—not flat retainers incentivizing desperation.",
        "Storytelling microgrants underwriting podcast studios challenging harmful inheritance defaults.",
      ]}
      metrics={[
        { label: "Median income uplift (YoY)", value: "61%" },
        { label: "Coops still operating post-grant", value: "91%" },
      ]}
      image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80"
      alt="Women entrepreneurs reviewing fabric inventory at cooperative workshop"
      reverse
    />
  );
}

function CommunitySection() {
  return (
    <SectionShell
      id="community"
      eyebrow="Community Development Integrator"
      title="Invisible threads—sanitation, agronomy, childcare swaps"
      copy="Hybrid seed trials meet compost science clubs. Market roadmaps sync with cholera sentinel surveillance. Grants flex when currency cliffs appear mid-project—because paralysis isn’t neutrality, it’s harm."
      bulletTitle="Resilience choreography"
      bullets={[
        "Youth apprenticeship exchanges across regions so ingenuity doesn’t bottleneck in charismatic founders.",
        "Weather-indexed disbursement triggers piloted openly with Ministries even when bureaucracy blushes.",
        "Mutual aid ledgers ported into SMS so elderly caregivers without smartphones stay inside loops via neighbors ethically deputized—with stipends acknowledging labor feminized historically.",
      ]}
      metrics={[
        { label: "Household shocks absorbed", value: "18k+" },
        { label: "New cooperative bylaws amended", value: "220" },
      ]}
      image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80"
      alt="Hands planting seedlings in communal rows at sunrise"
      reverse={false}
    />
  );
}

