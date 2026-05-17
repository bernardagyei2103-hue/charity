import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import { FEATURED_STORIES } from "@/lib/content";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Stories · Faces Behind the Figures",
  description:
    "Beneficiary journeys, watershed breakthroughs, and volunteer chronicles grounding Bridge Builders Guild programs in human storytelling.",
  pathname: "/stories/",
});

const longStories = [
  {
    anchor: "story-ama",
    title: "How Access to Education Changed Ama’s Life",
    lede:
      "Ama’s mornings once began with kilometers of water hauling before bells rang—until scholarships arrived with anemia kits, nighttime safety corridors, and teachers coached regionally.",
    body: [
      "Today she co-leads adolescent literacy labs turning folklore into STEAM riddles co-authored by classmates paid honoraria—not exploited ‘volunteer’ labor.",
      "Consistency metrics climbed—but Ama cites something softer: giggles audible when classroom lights stabilize minutes faster thanks to volunteer electricians compensated fairly.",
    ],
    quote: "I teach because someone refused to confuse my exhaustion with destiny.",
    attribution: "— Ama, literacy mentor",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80",
    alt: "Students collaborating outdoors with brightly colored textbooks",
    programHref: "/programs/#education",
    newsHref: "/stories/#news-backtoschool",
    reverse: false,
  },
  {
    anchor: "story-water",
    title: "A Well at the Heart of Three Villages",
    lede:
      "Hydrology data met stubborn oral histories halfway. Committees elected women-majority stewardship statistically—not performatively—because metrics proved they surfaced maintenance anomalies earlier.",
    body: [
      "SMS fluoride sentinels echo elders noticing taste drift before spreadsheet shame arrives.",
      "Attendance leapt—girls reclaimed dawn hours textbooks previously forfeited politely to thirsty roads.",
    ],
    quote: "Water arrived quietly—yet everyone heard it.",
    attribution: "— Malik, watershed treasurer",
    image: "/stories/well-three-villages.png",
    alt: "Villagers gathered around a communal hand pump, filling containers with safe water",
    programHref: "/programs/#water",
    newsHref: "/stories/#news-ghana-wells",
    reverse: true,
  },
  {
    anchor: "story-clinic",
    title: "The Clinic Tent That Stayed—and Grew",
    lede:
      "Regional midwives staffed rotating tents refusing voluntourism caricature. Psychiatry circles convened beneath mango branches—therapy preceding breakdown theatrics politely normalized historically.",
    body: [
      "Cold chains hitchhiked agricultural trucks carrying redundancy—pharmacies rarely ghost prescriptions mid-week now—transport stipends disburse before dosing when fuel equals dignity first.",
    ],
    quote: "They saw me before numbering me.",
    attribution: "— Léa, postpartum caregiver",
    image: "/stories/clinic-tent.png",
    alt: "Outdoor NGO health camp with white tents, clinicians, and a blood test zone serving a rural community",
    programHref: "/programs/#health",
    newsHref: "/stories/#news-volunteer-spotlight",
    reverse: false,
  },
] as const;

export default function StoriesPage() {
  return (
    <main className="bg-ivory">
      <section className="border-b border-hope/10 bg-white">
        <div className="mx-auto max-w-shell px-3 py-16 sm:px-5 sm:py-20 lg:px-6 xl:px-10">
          <div className="max-w-5xl space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Stories</div>
            <h1 className="font-serif text-[clamp(2.35rem,5vw,3.65rem)] font-semibold leading-[1.02] tracking-tight text-hope-deep">
              Faces behind audited figures breathe here
            </h1>
            <p className="text-lg leading-relaxed text-hope-muted">
              Copy carries consent tiers, safeguarding review, adolescent editorial circles—poverty voyeurism never ships.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <Link href="#featured">Featured snapshot cards</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/impact/">Evidence companion page</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-shell px-3 py-14 sm:px-5 lg:px-6 xl:px-10">
        <SectionReveal className="max-w-5xl space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Three windows</div>
          <h2 className="font-serif text-[clamp(2.05rem,4vw,2.95rem)] font-semibold leading-tight tracking-tight text-hope-deep">
            Featured introductions
          </h2>
        </SectionReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {FEATURED_STORIES.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-hope/10">
              <div className="relative aspect-[16/11]">
                <Image src={s.image} alt={s.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 92vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/45 via-transparent to-transparent" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-serif text-xl font-semibold text-hope-deep">{s.title}</h3>
                <p className="text-sm leading-relaxed text-hope-muted">{s.beforeAfter}</p>
                <Button asChild variant="outline" className="w-full rounded-2xl">
                  <Link href={s.href}>Jump into long-form narrative</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {longStories.map((story, idx) => (
        <section key={story.anchor} id={story.anchor} className={`${idx % 2 === 0 ? "bg-white" : ""} scroll-mt-[84px]`}>
          <div className="mx-auto max-w-shell px-3 py-16 sm:px-5 lg:px-6 xl:px-10">
            <div
              className={`grid gap-10 lg:grid-cols-2 lg:items-start ${story.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative min-h-[340px] overflow-hidden rounded-[30px] ring-1 ring-hope/10">
                <Image src={story.image} alt={story.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-hope-deep/45 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur ring-1 ring-white/20">
                  Long-form immersion
                </div>
              </div>

              <SectionReveal delay={story.reverse ? 0.06 : 0}>
                <h2 className="font-serif text-[clamp(2.05rem,4vw,2.85rem)] font-semibold leading-tight tracking-tight text-hope-deep">
                  {story.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-hope-muted">{story.lede}</p>
                <div className="mt-7 space-y-5 text-base leading-relaxed text-hope-muted">
                  {story.body.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>

                <figure className="mt-10 rounded-[26px] bg-ivory p-6 ring-1 ring-hope/10">
                  <blockquote className="font-serif text-xl font-semibold text-hope-deep">{story.quote}</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-hope-muted">{story.attribution}</figcaption>
                </figure>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full">
                    <Link href={story.programHref}>Review connected program pillar</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={story.newsHref}>Adjacent dispatch</Link>
                  </Button>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      ))}

      <section id="news-ghana-wells" className="border-y border-hope/10 bg-white py-14">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <div className="max-w-5xl space-y-3 scroll-mt-[84px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Dispatch</div>
            <h2 className="font-serif text-3xl font-semibold text-hope-deep">Building New Wells in Northern Ghana</h2>
            <p className="text-base leading-relaxed text-hope-muted">
              Sensor choreography teams teenage auditors rewriting chlorine ledgers competitively—engineers applaud nerdy poetry politely.
            </p>
          </div>
        </div>
      </section>

      <section id="news-backtoschool" className="py-14">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <div className="max-w-5xl space-y-3 scroll-mt-[84px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Notebook</div>
            <h2 className="font-serif text-3xl font-semibold text-hope-deep">Back-to-School Initiative 2026</h2>
            <p className="text-base leading-relaxed text-hope-muted">
              Twelve thousand kits plus caregiver safeguarding lines broaden together—menstrual sovereignty budgets stay untouchably first.
            </p>
          </div>
        </div>
      </section>

      <section id="news-volunteer-spotlight" className="border-t border-hope/10 bg-white py-14">
        <div className="mx-auto max-w-shell px-3 sm:px-5 lg:px-6 xl:px-10">
          <div className="max-w-5xl space-y-3 scroll-mt-[84px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Volunteer prism</div>
            <h2 className="font-serif text-3xl font-semibold text-hope-deep">Volunteer Spotlight</h2>
            <p className="text-base leading-relaxed text-hope-muted">
              Remote UX squads prioritized accessibility before gradients debated Slack melodrama—caregiver hotlines inhaled dignity faster subsequently.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
