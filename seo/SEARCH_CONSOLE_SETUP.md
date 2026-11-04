# Google Search Console setup

The website source is prepared for Search Console, but AirNexa has not been verified or submitted. The production domain was not accessible during this audit, so no indexing status is claimed.

## Setup steps

1. Confirm the production canonical origin is `https://fly.airnexa.pro/` and the site serves HTTPS.
2. In Google Search Console, add a **Domain property** for `airnexa.pro` if you control DNS. This property covers subdomains including `fly.airnexa.pro` and protocols. Alternatively, add a URL-prefix property for `https://fly.airnexa.pro/`.
3. For a Domain property, copy Google's unique TXT verification value into the DNS zone for `airnexa.pro`. Do not invent or reuse a token. Leave it in place after verification.
4. For URL-prefix verification, use one of Google's offered methods, such as the HTML file or DNS record, and follow the displayed instructions.
5. After verification, open **Sitemaps** and submit `https://fly.airnexa.pro/sitemap.xml`.
6. Use **URL Inspection** on the homepage and representative service, legal, and disclosure pages. Request indexing only after checking the live canonical, status, rendered page, and robots directives.
7. Review Page indexing, HTTPS, Core Web Vitals, and enhancement reports over time. An accepted sitemap is a discovery hint, not a guarantee of indexing.

## Before submitting

- Check `https://fly.airnexa.pro/robots.txt` and `https://fly.airnexa.pro/sitemap.xml` on the live host.
- Ensure all sitemap URLs resolve directly to the intended HTTPS canonical page with HTTP 200.
- Confirm the old `/terms-of-service` route redirects to `/terms-and-conditions` and is absent from the sitemap.
- Confirm the hosting provider redirects HTTP and any alternate hostname directly to `https://fly.airnexa.pro`.
- Configure a verified support number and contact/privacy method if the business has them.

Google references: [Add a website property](https://support.google.com/webmasters/answer/34592), [Verify your site ownership](https://support.google.com/webmasters/answer/9008080), and [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
