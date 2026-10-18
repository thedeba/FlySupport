/**
 * High-value US flight-assistance keywords.
 * Used in page titles, descriptions, headings, and body copy so the site
 * ranks for the searches travelers actually make during stressful situations.
 */

export const SEO_KEYWORDS = [
  "flight booking assistance phone number",
  "emergency flight change assistance",
  "flight cancellation help refund",
  "missed flight assistance rebooking",
  "last minute flight booking help",
  "airline canceled my flight refund",
  "flight rebooking assistance phone",
  "same day flight change assistance",
  "flight customer service phone number",
  "travel assistance by phone USA",
];

export type SEOPage = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
};

export function jsonLdOrganization({
  name = "FlySupport",
  url = "https://www.flysupport.example.com",
  phone,
  logo = "/images/logo.jpeg",
}: {
  name?: string;
  url?: string;
  phone?: string;
  logo?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    contactPoint: phone
      ? [
          {
            "@type": "ContactPoint",
            telephone: phone,
            contactType: "customer service",
            availableLanguage: ["English"],
            areaServed: "US",
          },
        ]
      : undefined,
    sameAs: [],
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

export function jsonLdFAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
