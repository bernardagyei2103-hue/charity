import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE.name} | Delivering Trusted Humanitarian Programs`,
  description: SITE.description,
  pathname: "/",
});

export default function Page() {
  return <HomePage />;
}
