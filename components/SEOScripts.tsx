import { jsonLdOrganization, jsonLdBreadcrumb, jsonLdFAQ } from "@/lib/seo";

export default function SEOScripts({
  organization,
  breadcrumb,
  faqs,
}: {
  organization?: Record<string, unknown>;
  breadcrumb?: Record<string, unknown>;
  faqs?: Record<string, unknown>;
}) {
  return (
    <>
      {organization && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      )}
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      {faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
        />
      )}
    </>
  );
}
