# FlySupport

A premium, mobile-first flight assistance website for U.S. travelers, built around a
single conversion goal: getting visitors to call the support line. **No forms anywhere.**

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3** with a custom navy/sky/orange brand palette
- **lucide-react** icons
- Static prerendering for all pages (excellent Core Web Vitals)

## Getting Started

```bash
npm install
npm run dev        # development at http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Phone Number Configuration (required)

All call buttons across the site share one configuration source. Set these
environment variables (see `.env.example`):

```bash
NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY="+1 (888) 555-0100"   # formatted number shown to visitors
NEXT_PUBLIC_SUPPORT_PHONE_TEL="+18885550100"            # international format for tel: links
```

- Defined once in `lib/phone.ts` — never hardcode the number in components.
- `NEXT_PUBLIC_SITE_URL` (optional): canonical/OG base URL, e.g. `https://www.yourdomain.com`.
- **If the number is missing:** development shows a neutral placeholder so the layout
  can be reviewed; production renders no phone number and disables call actions
  (no fake numbers are ever shown).

### Placeholders to replace before launch

- `lib/site.ts` — set the real domain (or `NEXT_PUBLIC_SITE_URL`)
- `lib/business.ts` — support hours and verified business details
- All `[phone:email:address]` placeholders (contact page, legal pages)

## Replacing the Development Phone Number

The `.env.local` file contains a placeholder number for local preview.
Replace it with the **real, authorized business number** before launch:

## Project Structure

```
app/                        # App Router pages (all statically prerendered)
  page.tsx                  # Homepage: hero, services, how-it-works, benefits, FAQ, CTAs
  flight-booking/           # Service pages with unique content + FAQs
  flight-changes/
  flight-cancellation/
  missed-flight/
  last-minute-flights/
  airline-canceled-flight/
  contact/                  # Phone-only contact page (no form)
  privacy-policy/  terms-of-service/  cancellation-refund-policy/  accessibility/
  sitemap.ts  robots.ts     # SEO infrastructure
components/                 # Reusable components (Header, CallButton, StickyMobileCallBar…)
lib/                        # phone config, FAQs, services, business details, site URL
public/images/              # logo and static assets
```

## Compliance Notes Before Launch

1. Replace the placeholder support number with a verified business number.
2. Have the legal pages (privacy, terms, refund policy) reviewed against the
   actual business operations and applicable law — they ship as honest templates.
3. Structured data was intentionally omitted until business details are verified.
4. All claims on the site are supportable: no invented reviews, ratings,
   airline partnerships, or guarantees.

## Key Components

| Component | Purpose |
|---|---|
| `CallButton` | The single call-CTA used everywhere (variants: primary/light/inline) |
| `StickyMobileCallBar` | Fixed bottom call bar on mobile with safe-area support |
| `Header` / `MobileNavigation` | Desktop nav + accessible mobile hamburger menu |
| `FAQAccordion` | Accessible accordion (ARIA expanded/controls) |
| `FinalCallToAction` / `CTABanner` | Reusable conversion sections |
