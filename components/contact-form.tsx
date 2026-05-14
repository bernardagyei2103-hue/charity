"use client";

import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/layout/SectionReveal";

export function ContactForm() {
  return (
    <SectionReveal className="rounded-[34px] bg-white p-6 shadow-soft ring-1 ring-hope/10 sm:p-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-hope-muted">Contact</div>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-hope-deep sm:text-3xl">
            Send us a note
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-hope-muted">
            Hosting a fundraiser? Need partnership guardrails drafted? Reporting a safeguarding concern? Humans read
            every inbox—responses land within three business days.
          </p>
        </div>
      </div>

      <form
        className="mt-10 grid gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="sm:col-span-2 rounded-3xl bg-ivory p-5 text-sm leading-relaxed text-hope-muted ring-1 ring-hope/10">
          This static demo does not transmit form data anywhere. Wire your API route or form provider when deploying.
        </div>

        <div>
          <label className="text-xs font-semibold text-hope-deep" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Ada Mensah"
            className="mt-2 h-12 w-full rounded-2xl border border-hope/10 bg-white px-4 text-sm outline-none ring-0 transition focus:border-sunrise/55 focus:ring-4 focus:ring-sunrise/15"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-hope-deep" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@organization.org"
            className="mt-2 h-12 w-full rounded-2xl border border-hope/10 bg-white px-4 text-sm outline-none ring-0 transition focus:border-sunrise/55 focus:ring-4 focus:ring-sunrise/15"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-hope-deep" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Partnership proposal / Volunteer interest / Press"
            className="mt-2 h-12 w-full rounded-2xl border border-hope/10 bg-white px-4 text-sm outline-none ring-0 transition focus:border-sunrise/55 focus:ring-4 focus:ring-sunrise/15"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-hope-deep" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what you’d like to build together..."
            rows={6}
            className="mt-2 w-full resize-y rounded-2xl border border-hope/10 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-sunrise/55 focus:ring-4 focus:ring-sunrise/15"
          />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="xl" className="w-full rounded-2xl sm:w-auto">
            Submit message
          </Button>
          <p className="text-xs text-hope-muted">
            Prefer urgent safeguarding reports? Use the anonymized whistleblower inbox shared in-country program
            desks—always encrypted.
          </p>
        </div>
      </form>
    </SectionReveal>
  );
}
