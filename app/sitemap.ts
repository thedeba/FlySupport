import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/flight-booking",
    "/flight-changes",
    "/flight-cancellation",
    "/missed-flight",
    "/last-minute-flights",
    "/airline-canceled-flight",
    "/about",
    "/contact",
    "/cancellation-refund-policy",
    "/affiliate-disclosure",
    "/call-transfer-disclosure",
    "/disclaimer",
    "/privacy-policy",
    "/terms-and-conditions",
    "/accessibility",
  ];
  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
  }));
}
