import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { SITE_NAME } from "@/lib/brand";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonical,
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
