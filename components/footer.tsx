"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Explore",
    links: NAV_LINKS,
  },
  {
    title: "Priorities",
    links: [
      { label: "Education", href: "/programs/#education" },
      { label: "Healthcare", href: "/programs/#health" },
      { label: "Clean Water", href: "/programs/#water" },
      { label: "Community Development", href: "/programs/#community" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Transparency", href: "/impact/#transparency" },
      { label: "Annual Report", href: "/impact/#reports" },
      { label: "Stories", href: "/stories/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hope/10 bg-hope-deep text-ivory">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-28 h-[420px] w-[420px] rounded-full bg-sunrise/12 blur-[90px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-56 right-[-80px] h-[520px] w-[520px] rounded-full bg-growth/10 blur-[110px]" aria-hidden />

      <div className="relative mx-auto max-w-shell px-2 py-14 sm:px-4 lg:px-6 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-serif text-3xl font-semibold tracking-tight">{SITE.name}</div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  {SITE.tagline} We build programs with local leaders, measure outcomes with care, and publish
                  how every gift is used.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-white/75 sm:flex-row sm:items-center">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-sunrise-soft" aria-hidden />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.telephone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-sunrise-soft" aria-hidden />
                {SITE.telephone}
              </a>
            </div>

            <div className="mt-10">
              <div className="font-serif text-xl font-semibold">Stay connected</div>
              <p className="mt-2 text-sm text-white/65">
                Field notes, milestones, and ways to plug in — no filler, just impact.
              </p>
              <form
                className="mt-4 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  className={cn(
                    "h-12 w-full rounded-full bg-white/5 px-5 text-sm text-white placeholder:text-white/40",
                    "ring-1 ring-white/15 outline-none transition focus:ring-2 focus:ring-sunrise-soft/70",
                  )}
                />
                <Button type="submit" variant="secondary" className="h-12 rounded-full px-7">
                  Subscribe
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-95" aria-hidden />
                </Button>
              </form>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="font-serif text-lg font-semibold">{section.title}</div>
                <ul className="mt-4 space-y-3">
                  {section.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div className="text-xs text-white/55">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.{" "}
            <span className="opacity-85">Serving communities with dignity and accountable stewardship.</span>
          </div>
          <div className="flex flex-wrap gap-5 text-xs font-semibold text-white/70">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-1 transition hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                {s.label}
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
