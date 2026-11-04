# SEO changelog

## November 4, 2026

- Added shared page metadata with absolute route canonicals and unique Open Graph and Twitter metadata.
- Normalized the configured site origin and kept the production default at `https://fly.airnexa.pro`.
- Added About, affiliate, call routing, disclaimer, and terms pages to the sitemap; removed the redirecting legacy terms URL and false generated `lastmod` values.
- Added the sitemap URL to robots metadata.
- Changed `/terms-of-service` to a permanent redirect to `/terms-and-conditions`.
- Replaced the homepage exact-match keyword list with U.S. DOT consumer information and an internal cancellation/refund link.
- Added internal information links on the homepage service cards.
- Consolidated Organization and WebSite schema on the homepage, retained service page breadcrumbs, and removed repeated Organization and FAQ rich-result schema output.
- Replaced unsupported or overly certain flight cancellation, missed flight, flight change, and urgent-call claims with conditional copy and links to official DOT sources.
- Switched the logo to Next.js image optimization with explicit dimensions.
- Added audit, keyword mapping, content strategy, technical SEO, and Search Console setup documentation.

## Limitations

- No search volume, keyword difficulty, rankings, traffic, or performance score is claimed.
- Production DNS verification, live HTTP status/redirect checks, Search Console property setup, and indexing are external manual tasks.
- The repository has no configured ESLint tool or lint configuration. Build and TypeScript checks are run separately; see the completion report for their results.
