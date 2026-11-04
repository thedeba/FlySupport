# AirNexa technical SEO

## Canonical URL

- Production base URL defaults to `https://fly.airnexa.pro` in `lib/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` at build time only to the verified canonical origin. The code removes trailing slashes before building URLs.
- `lib/page-metadata.ts` supplies each indexable page with an absolute canonical, page-specific Open Graph URL, title, description, and Twitter summary metadata.
- Next.js uses its default no-trailing-slash URL behavior. The legacy `/terms-of-service` path permanently redirects to `/terms-and-conditions` and is not in the sitemap.
- Hosting-level HTTPS and hostname redirects cannot be configured safely without knowing the deployment provider. Configure one-hop permanent redirects to `https://fly.airnexa.pro` there and verify after deployment.

## Crawl files

- `app/robots.ts` allows public routes and points to `${SITE_URL}/sitemap.xml`.
- `app/sitemap.ts` lists canonical indexable pages only. It omits redirect and error routes and does not invent `lastmod` dates.
- Add a route to both sitemap and `seo/KEYWORD_MAPPING.md` when it becomes public and indexable. Keep private or noindex paths out.

## Metadata and rendering

- Public routes are Next.js App Router server-rendered pages. Page headings and main text are delivered in server HTML.
- Page metadata is unique and comes from `pageMetadata`; use descriptive titles and accurate descriptions when adding routes.
- The homepage contains a single Organization and WebSite JSON-LD graph. Service pages use BreadcrumbList JSON-LD. Do not add FAQPage markup to this general site or duplicate the homepage entity.
- There is no blog/article route today. Add Article/BlogPosting schema only for a real article with a visible author/date and matching content.

## Images and performance

- The homepage hero is a prioritized responsive `next/image` asset served from the configured Unsplash image host.
- Logo images use `next/image` and explicit dimensions to reduce layout shift.
- No Lighthouse, PageSpeed Insights, or field Core Web Vitals data was available in this work. Measure the deployed site on mobile before making performance claims.

## Tracking and affiliate links

- No analytics or advertising tags were found in application source.
- Current calls use environment-configured `tel:` links; no external affiliate URL or tracking parameter was found. Do not add `sponsored` to internal links or ordinary `tel:` actions.
- If actual affiliate links are added, preserve their tracking parameters and use appropriate `rel="sponsored"` (and `nofollow` if required by the relationship) on those outbound links only.

## Deployment verification

After deployment, check representative URLs and every sitemap URL for the expected status, canonical, robots meta, title, description, and server-rendered H1. Verify `/robots.txt`, `/sitemap.xml`, `/terms-of-service`, HTTP/HTTPS, root/non-root host, and slash variants from outside the build environment. Confirm that CSS, JavaScript, and image requests are not blocked.
