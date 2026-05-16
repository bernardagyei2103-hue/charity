import {
  BookOpen,
  Droplets,
  HeartPulse,
  Sprout,
} from "lucide-react";

import type { MetricItem } from "@/components/metrics-counter";
import type { FAQItem } from "@/components/faq-accordion";
import type { ImpactArea } from "@/components/impact-card";
import type { Story } from "@/components/story-card";
import type { Testimonial } from "@/components/testimonials-carousel";

export const IMPACT_AREAS: ImpactArea[] = [
  {
    title: "Education",
    description:
      "Scholarships, supplies, literacy circles, and safe learning spaces restore possibilities for families who believed school was out of reach.",
    metric: "142 schools supported",
    ctaHref: "/programs/#education",
    ctaLabel: "See education programs",
    icon: BookOpen,
    accent: "hope",
  },
  {
    title: "Healthcare",
    description:
      "Mobile clinics, essential medicine, maternal care, and community health workers bridge the distance between urgency and dignity.",
    metric: "470k+ consultations",
    ctaHref: "/programs/#health",
    ctaLabel: "See healthcare work",
    icon: HeartPulse,
    accent: "sunrise",
  },
  {
    title: "Clean Water",
    description:
      "Wells, filtration, and training turn hours of walking into minutes—freeing children to learn and families to thrive.",
    metric: "250 wells built",
    ctaHref: "/programs/#water",
    ctaLabel: "Explore water access",
    icon: Droplets,
    accent: "growth",
  },
  {
    title: "Community Development",
    description:
      "Savings groups, skills training, and cooperative agriculture help communities build income that endures after we leave.",
    metric: "3,260 livelihood grants",
    ctaHref: "/programs/#community",
    ctaLabel: "Empower locally",
    icon: Sprout,
    accent: "hope",
  },
];

export const IMPACT_BIG_STATS = [
  {
    label: "Children educated",
    value: 18400,
    suffix: "",
    supporting:
      "Girls-first enrollment targets, menstrual health support, and teacher coaching keep learning consistent year after year.",
  },
  {
    label: "Wells constructed",
    value: 250,
    suffix: "",
    supporting: "Each site receives maintenance training, spare parts budgeting, and a local governance committee.",
  },
  {
    label: "Health outreach initiatives",
    value: 70,
    suffix: "",
    supporting: "Vaccinations, screenings, maternal care, and mental health referrals—guided by clinicians from the regions we serve.",
  },
  {
    label: "Families supported",
    value: 12000,
    suffix: "",
    supporting: "Holistic bundles pair emergency relief with long-term livelihood coaching and child protection monitoring.",
  },
] as const satisfies readonly MetricItem[];

export const FEATURED_STORIES: Story[] = [
  {
    title: "How Access to Education Changed Ama’s Life",
    beforeAfter:
      "Before the Guild, Ama skipped class to haul water across unsafe roads at dawn. Today she leads a literacy circle for younger girls—with plans to train as a teacher.",
    href: "/stories/#story-ama",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student smiling while reading outdoors with classmates",
  },
  {
    title: "A Well at the Heart of Three Villages",
    beforeAfter:
      "Families once rationed muddy water collected miles away. Filtration paired with sanitation training lowered illness rates and reopened school doors within one season.",
    href: "/stories/#story-water",
    image: "/programs/water-for-life.png",
    imageAlt: "Fresh river flowing over rocks beside a forested shoreline",
  },
  {
    title: "The Clinic Tent That Stayed—and Grew",
    beforeAfter:
      "What began as weekly outreach tents is now a permanent clinic staffed by local nurses, anchored by maternal health rotations from partner hospitals.",
    href: "/stories/#story-clinic",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Healthcare worker comforting a mother and newborn",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The Guild doesn’t just deliver aid—they create lasting transformation rooted in dignity.",
    name: "Jordan Ellis",
    role: "Chief Impact Officer, Meridian Logistics",
    type: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1529778873920-7daa28ca522c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of a partnering executive smiling",
  },
  {
    quote: "I saw exactly where every dollar landed. That clarity made this the easiest recurring gift I've ever chosen.",
    name: "Maria Chen",
    role: "Monthly donor since 2021",
    type: "Donor",
    imageSrc:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of a donor outdoors in neutral tones",
  },
  {
    quote: "Volunteering remotely on curriculum translations connected me to real classrooms—with feedback within days.",
    name: "Kwame Mensah",
    role: "Remote volunteer educator",
    type: "Volunteer",
    imageSrc:
      "https://images.unsplash.com/photo-1542190891-6793ecad8164?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Portrait of a volunteer facilitator",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "How are donations used?",
    a: "Roughly eight in ten dollars reach direct programs—from classroom materials and clinician hours to filtration hardware and livelihood seed funding. Operations cover lean coordination, safeguarding, audits, and local hiring. Outreach supports storytelling so donors stay close to outcomes.",
  },
  {
    q: "Is my donation tax deductible?",
    a: "The Bridge Builders Guild is structured as a tax-exempt public charity where applicable. Receipts issue automatically via email; consult your accountant for eligibility in your jurisdiction.",
  },
  {
    q: "Can I volunteer remotely?",
    a: "Yes. Translators, researchers, fundraisers, UX helpers, and skills coaches support teams worldwide. Assignments ship with onboarding, safeguarding training, and a human point-of-contact—not a ticketing black hole.",
  },
  {
    q: "How can companies partner?",
    a: "We build multi-year coalitions spanning employee volunteering, grants, cause marketing guardrails, and transparent impact reporting tailored to CSR requirements. Reach our partnerships desk to blueprint something durable.",
  },
];

export const NEWS_ITEMS = [
  {
    title: "Building New Wells in Northern Ghana",
    excerpt:
      "Three districts now have protected water committees, trained mechanics, and child-friendly hygiene clubs meeting weekly.",
    date: "Mar 2026",
    href: "/stories/#news-ghana-wells",
  },
  {
    title: "Back-to-School Initiative 2026",
    excerpt:
      "12,000 kits—notebooks, safe transport stipends, and uniforms—paired with safeguarding workshops for caregivers.",
    date: "Jan 2026",
    href: "/stories/#news-backtoschool",
  },
  {
    title: "Volunteer Spotlight",
    excerpt:
      "Meet the remote designers who revamped our caregiver hotline—in 72 hours—with accessibility baked in.",
    date: "Dec 2025",
    href: "/stories/#news-volunteer-spotlight",
  },
];

export const DONATION_TIERS = [
  { amount: "$25", description: "School supplies for a learner for a semester" },
  { amount: "$50", description: "Essential medicines for a clinic outreach week" },
  { amount: "$100", description: "Clean-water access reinforcement for households" },
] as const;

export const PROGRAM_ROWS = [
  {
    eyebrow: "Program 01",
    title: "Hope for Education",
    copy:
      "We co-design classrooms with parent councils, prioritize girls’ safety en route to school, and train teachers using localized curricula—not imported playbooks dumped from afar.",
    statLabel: "New scholarships (2026)",
    statValue: "2,840",
    ctaHref: "/programs/#education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    alt: "Students raising hands in a sunlit classroom",
  },
  {
    eyebrow: "Program 02",
    title: "Water for Life",
    copy:
      "Hydrology surveys first. Then infrastructure, watershed education, and community financing so systems survive political seasons and climate shocks alike.",
    statLabel: "Liters/day secured (est.)",
    statValue: "3.9M",
    ctaHref: "/programs/#water",
    image: "/programs/water-for-life.png",
    alt: "Mountain river rushing over rocks beside a forested shoreline",
    reverse: true,
  },
  {
    eyebrow: "Program 03",
    title: "Health Access Initiative",
    copy:
      "Rotating specialties, maternal continuity, pharmacy supply chains tracked in shared dashboards—we treat health as infrastructure, not a one-off brigade.",
    statLabel: "Mobile clinic days/year",
    statValue: "186",
    ctaHref: "/programs/#health",
    image: "/programs/health-access.png",
    alt: "Doctor playfully examining a young child held by their mother during a wellness visit",
  },
  {
    eyebrow: "Program 04",
    title: "Women Empowerment Project",
    copy:
      "Finance circles merged with mentorship, digital literacy, and market access—we invest in caregivers who ripple strength through entire neighborhoods.",
    statLabel: "Women-led ventures funded",
    statValue: "1,085",
    ctaHref: "/programs/#women",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    alt: "Women collaborating over ledgers during a cooperative meeting",
    reverse: true,
  },
] as const satisfies ReadonlyArray<{
  eyebrow: string;
  title: string;
  copy: string;
  statLabel: string;
  statValue: string;
  ctaHref: string;
  image: string;
  alt: string;
  reverse?: boolean;
}>;
