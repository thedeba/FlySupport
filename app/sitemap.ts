import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "flight-booking",
    "flight-changes",
    "flight-cancellation",
    "missed-flight",
    "last-minute-flights",
    "airline-canceled-flight",
    "contact",
    "privacy-policy",
    "terms-of-service",
    "cancellation-refund-policy",
    "accessibility",
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
