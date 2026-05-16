import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact · Reach The Bridge Builders Guild",
  description:
    "Reach Guild programmatic desks, safeguarding hotlines equivalents via email introductions, partnerships office, volunteer coordination—all with humane response windows.",
  pathname: "/contact/",
});

export default function ContactPage() {
  return (
    <main className="bg-ivory">
      <section className="border-b border-hope/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Contact</div>
            <h1 className="font-serif text-[clamp(2.35rem,5vw,3.55rem)] font-semibold leading-[1.02] tracking-tight text-hope-deep">
              Humans answer—no scripted chatbots gaslighting compassion
            </h1>
            <p className="text-lg leading-relaxed text-hope-muted">
              Safeguarding sensitive? Subject lines may stay abstract—we triage ethically without demanding trauma performance theatrically. Partnership decks? Compress gently—finance leads savor narrative plus spreadsheets simultaneously charitably calmly.
            </p>
            <div className="text-sm leading-relaxed text-hope-muted">
              <div>
                <span className="font-semibold text-hope-deep">Programs desk:</span> {SITE.email}
              </div>
              <div className="mt-2">
                <span className="font-semibold text-hope-deep">Phone:</span> {SITE.telephone}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8">
        <ContactForm />

        <SectionReveal delay={0.05} className="space-y-6">
          <div className="rounded-[34px] bg-white p-6 shadow-soft ring-1 ring-hope/10 sm:p-10">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Headquarters map</div>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-hope-deep">Visit intentionally—coordinate first</h2>
            <p className="mt-4 text-sm leading-relaxed text-hope-muted">
              Embed your preferred map provider (Mapbox, Google Maps iframe, static SVG). This block is intentionally blank
              for static export—you can paste coordinates and privacy-safe defaults on deploy.
            </p>
            <div
              role="img"
              aria-label="Map placeholder illustrating Guild headquarters location pending integration"
              className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[26px] bg-gradient-to-br from-hope-deep via-hope to-growth opacity-95 ring-1 ring-hope/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.22),transparent_62%)]" />
              <div className="absolute bottom-8 left-8 rounded-[22px] bg-white/92 px-4 py-3 text-xs font-semibold text-hope-deep shadow-soft backdrop-blur">
                Latitude / longitude placeholders
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-hope-deep p-8 text-white ring-1 ring-white/15">
            <div className="font-serif text-xl font-semibold">Safeguarding-sensitive routing</div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Annotate safeguarding-sensitive emails discreetly in the subject line. We escalate to independent reviewers within
              the SLA published in our annual safeguarding annex.
            </p>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
