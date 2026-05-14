export const SITE = {
  name: "HopeRise Foundation",
  tagline: "Restoring Hope. Changing Lives. Building Futures.",
  url: "https://hoperise.example.org",
  description:
    "HopeRise Foundation empowers vulnerable communities through education, healthcare, clean water, and sustainable development—with transparency donors can trust.",
  email: "hello@hoperise.org",
  donateUrl: "https://example.com/donate",
  telephone: "+1 (800) 555-0199",
};

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Programs", href: "/programs/" },
  { label: "Impact", href: "/impact/" },
  { label: "Stories", href: "/stories/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "Contact", href: "/contact/" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://twitter.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];

export const HERO_STATS = [
  { value: 120000, suffix: "+", label: "Lives Impacted" },
  { value: 35, suffix: "", label: "Communities Served" },
  { value: 500, suffix: "+", label: "Volunteers" },
  { value: 14, suffix: "", label: "Countries Reached" },
] as const;

export const WORLD_MARKERS = [
  { country: "Ghana", cx: "48%", cy: "46%" },
  { country: "Kenya", cx: "55%", cy: "43%" },
  { country: "India", cx: "66%", cy: "41%" },
  { country: "Bangladesh", cx: "70%", cy: "38%" },
  { country: "Honduras", cx: "31%", cy: "42%" },
  { country: "Colombia", cx: "32%", cy: "52%" },
  { country: "Nepal", cx: "69%", cy: "39%" },
  { country: "Senegal", cx: "43%", cy: "43%" },
] as const;
