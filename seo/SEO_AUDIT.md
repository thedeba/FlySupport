# AirNexa SEO audit

**Audit date:** November 4, 2026  
**Scope:** Source code and configuration in this repository. The production host could not be fetched during this audit, so this is not a live crawl or Search Console inspection.

## Project and business model

- Next.js 16 App Router site with statically defined service and disclosure pages.
- Site URL defaults to `https://fly.airnexa.pro`; the homepage describes a U.S.-focused independent travel affiliate and lead-generation website.
- Visitors can call a configured phone number. Calls may reach independent providers. The app does not contain a booking engine, account system, contact form, or provider-specific affiliate URLs.
- No GA4, Tag Manager, advertising pixel, or conversion event integration was found in the application source. Phone numbers are configured through environment variables; their values were not inspected for this audit.

## Findings and implementation

| Area | Finding | Change or current status |
| --- | --- | --- |
| Crawlability | Public routes are rendered with Next.js server components; the FAQ accordion also renders its text in the HTML. | Public route access preserved. No private/admin routes were found. |
| Sitemap | The prior sitemap omitted several live pages, listed the legacy terms URL, and assigned the current build time as every page's `lastmod`. | Sitemap now lists canonical public routes only and omits unsupported modification dates. |
| Robots | Crawling was allowed but the sitemap was not referenced. | Robots metadata now includes the canonical sitemap URL and continues to allow public pages. |
| Canonicals | Most pages had canonical metadata, but output was inconsistent and social metadata could inherit the homepage URL. | A shared page metadata helper now emits an absolute canonical, unique Open Graph URL, and matching Twitter metadata per route. |
| URL management | `/terms-of-service` redirected temporarily while the canonical page is `/terms-and-conditions`. | Legacy path now uses a permanent redirect; it is excluded from the sitemap. HTTPS and host redirects remain a deployment configuration to verify. |
| Titles and descriptions | Page titles and descriptions existed but were inconsistent and several titles were overly long or repeated the brand. | Each indexable route now has a concise unique title and description through the shared metadata helper. |
| On-page content | The homepage displayed a list of exact-match phrases that all linked to the same section. | Removed the keyword list and added useful U.S. DOT consumer resources plus internal refund information. |
| Internal links | Homepage service cards initiated calls but did not link to their related information pages. | All six service cards now link to the matching service page as well as retaining their configured call action. Footer navigation continues to link company and legal pages. |
| Structured data | Organization and FAQ JSON-LD were emitted repeatedly across routes. The FAQ schema offers no regular Google FAQ rich result for a general affiliate site. | One Organization and WebSite graph is emitted on the homepage. Commercial pages retain BreadcrumbList data. No address, phone, ratings, reviews, or social profiles are invented. |
| Images | The hero uses a remote airplane image through `next/image`; the brand logo used a plain `<img>`. | Logo now uses `next/image` with intrinsic dimensions. Hero image remains prioritized and responsive. |
| Affiliate transparency | Affiliate, call routing, legal, privacy, and terms pages are available; footer includes compensation disclosure. | These pages remain linked. No provider, airline affiliation, or service guarantee was added. |
| Contact and trust | No verified postal address, privacy email, author, or company credentials are present. | No contact identity or credentials were fabricated. Owner should add a working privacy/contact channel before launch. |
| Analytics | No tracking implementation was found in the source. | No measurement ID or event was invented. Add tracking only after choosing the provider and confirming privacy requirements. |
| Performance | The project uses `next/font`, a prioritized remote hero image, and a small client FAQ accordion. No Lighthouse/PageSpeed run was available. | No performance score or Core Web Vitals result is claimed. |
| Production checks | Production domain, redirect behavior, HTTP statuses, and deployed metadata could not be fetched from this environment. | Verify these in hosting and Google Search Console after deployment. |

## Remaining risks and owner actions

1. Confirm the production site is deployed at `https://fly.airnexa.pro/`, uses HTTPS, and redirects alternate host/protocol variants directly to that hostname.
2. Configure a verified phone number in production before enabling calls.
3. Add a genuine business/privacy contact route if one is available; the current project has no verified email or mailing address.
4. Confirm the actual provider relationship and call behavior continue to match the site disclosures.
5. Run a live mobile and Core Web Vitals review after deployment; source inspection cannot establish field performance.
6. Review cancellation/refund content against current official guidance before adding more airline-policy detail.

Search intent and competition assessments are documented separately in [KEYWORD_MAPPING.md](KEYWORD_MAPPING.md). Search volume and keyword difficulty are intentionally unreported because no licensed keyword data source was configured or available.
