import type { Metadata } from "next";

import { SITE } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  pathname: string;
};

export function buildPageMetadata(input: BuildMetadataInput): Metadata {
  const canonical = `${SITE.url}${input.pathname}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
          width: 1600,
          height: 900,
          alt: "Volunteers collaborating with HopeRise Foundation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
