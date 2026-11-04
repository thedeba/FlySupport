import { SITE_NAME } from "@/lib/brand";
import { SITE_URL } from "@/lib/site";

export function jsonLdSiteGraph() {
  const siteUrl = SITE_URL;
  const organizationId = `${siteUrl}#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: siteUrl,
        logo: `${SITE_URL}/images/logo.jpeg`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: SITE_NAME,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
    ],
  };
}

export function jsonLdBreadcrumb({ items }: { items: { name: string; url: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
