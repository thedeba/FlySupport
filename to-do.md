# Build a Premium Mobile-First USA Flight Assistance Website — Call-Only Model

Act as an expert UI/UX designer, senior frontend developer, conversion rate optimization specialist, and travel industry website designer.

Build a modern, professional, visually appealing, mobile-first website for a USA-focused flight booking and emergency travel assistance service.

The website will primarily target customers in the United States who need assistance with flight bookings, cancellations, emergency flight changes, missed flights, last-minute travel, and rebooking.

## CRITICAL BUSINESS REQUIREMENT

This is a CALL-ONLY website.

**Do not create any forms anywhere on the website.**

Do not include:
- Booking inquiry forms
- Contact forms
- Flight search forms
- Departure or destination input fields
- Date pickers
- Email submission forms
- Request callback forms
- Chatbots that collect booking details
- Any other form-based interaction

The primary conversion goal is to get visitors to call the company's customer support phone number.

Every major section should encourage users to call for assistance.

## 1. Design Direction

Create a premium, trustworthy, modern American travel assistance website.

Visual style:
- Deep navy blue as the primary color
- White and light blue-gray backgrounds
- Sky blue as a secondary color
- Orange accent for important call-to-action buttons
- Modern typography such as Inter or Manrope
- Clean layouts with generous spacing
- Professional airport and airplane photography
- Subtle animations and polished hover effects
- Rounded cards and clear visual hierarchy
- High contrast and excellent mobile readability

The design should feel credible and established, not like a cheap template or a cluttered advertising page.

Avoid excessive gradients, flashing elements, intrusive popups, fake urgency, and unnecessary animations.

## 2. Mobile-First Experience

Most visitors will access this website from their smartphones.

Prioritize mobile usability before desktop design.

Requirements:
- Fully responsive mobile, tablet, and desktop layouts
- Large, thumb-friendly buttons
- Minimum 44px touch targets
- Fast page loading
- Optimized images
- Readable text without zooming
- No horizontal scrolling
- Accessible navigation
- Smooth but lightweight transitions
- Prominent clickable phone numbers
- Sticky bottom call-to-action bar on mobile
- No obstructive overlays

The phone number and primary call button must be visible immediately when the visitor opens the homepage.

## 3. Header

Create a professional header featuring:
- Company logo and brand name
- Home
- Flight Booking
- Flight Changes
- Cancellations
- Missed Flights
- Contact

Include a prominent phone number and a contrasting “Call Now” button.

On mobile, use a compact hamburger menu and keep the call action easy to access.

The logo and company name should link to the homepage.

## 4. Homepage Hero Section

Create a compelling hero section with an attractive airport or airplane image.

Suggested headline:

“Need Help With Your Flight? We're Just a Call Away.”

Suggested supporting copy:

“Looking for a flight, need to change your travel plans, or dealing with a cancellation? Call our team to discuss your available options.”

Primary CTA:
“Call Now for Flight Assistance”

Secondary CTA:
“Explore Our Services”

Display the configured customer support phone number prominently next to the main CTA.

Use a real, configurable business phone number. Never invent a phone number or use an unverified number belonging to another business.

The primary CTA must use a proper telephone link:

<a href="tel:+1YOURCONFIGUREDNUMBER">Call Now</a>

Replace the placeholder with the actual authorized business number before deployment.

On mobile, tapping the button should open the device's calling interface.

On desktop, clicking the telephone link should invoke the system's configured calling application where supported.

Do not imply that a call has been placed automatically.

## 5. Emergency Flight Assistance Section

Create a visually prominent section titled:

“Travel Plans Changed? We're Here to Help.”

Display four attractive service cards:

### Flight Booking
“Need help exploring flight options for your next trip? Call our team to discuss your travel needs.”

CTA: “Call for Flight Booking”

### Emergency Flight Changes
“Need to change your flight at the last minute? Call to discuss the available options for your ticket.”

CTA: “Call for Flight Changes”

### Flight Cancellation Assistance
“Need help understanding cancellation rules, possible refunds, or your next steps? Speak with our team.”

CTA: “Call for Cancellation Help”

### Missed or Canceled Flight
“Missed your flight or had your flight canceled? Contact our team to discuss possible next steps.”

CTA: “Call for Travel Assistance”

Every card must have a working phone CTA linked to the configured business number.

Use relevant icons and subtle hover animations.

## 6. How It Works

Create a simple three-step section without any forms.

Step 1 — Call Our Team

“Call the customer support number displayed on our website.”

Step 2 — Explain Your Travel Needs

“Tell the representative what kind of flight assistance you need.”

Step 3 — Discuss Available Options

“Review the available options, applicable conditions, and any service fees before proceeding.”

Use clean icons, a horizontal layout on desktop, and a vertical layout on mobile.

Do not claim that every request can be resolved or that a replacement flight is guaranteed.

## 7. Why Choose Our Service?

Build a professional benefits section using honest and supportable statements.

Potential benefits:
- Convenient phone-based assistance
- Help understanding flight change and cancellation options
- Clear explanations of applicable service fees
- Easy access to customer support
- A straightforward process for discussing travel needs

Only claim benefits that the actual business can deliver.

Do not invent:
- Customer reviews
- Five-star ratings
- Awards
- Airline partnerships
- Accreditations
- Number of customers served
- Guaranteed lowest prices
- Guaranteed refunds
- Guaranteed same-day bookings

## 8. Strong Call-to-Action Sections

Add multiple strategically placed call-to-action sections throughout the homepage.

Examples:

“Need to Change Your Flight Today?”

“Call Our Team to Discuss Your Options.”

“Flight Canceled? Let's Talk About Your Next Steps.”

“Planning a Last-Minute Trip?”

“Speak With Our Team About Flight Booking Assistance.”

Each CTA should include the same configured phone number and a clearly labeled call button.

Do not use fake countdown timers or misleading urgency messages.

## 9. Dedicated Service Pages

Build separate, useful, SEO-friendly pages:

- /flight-booking
- /flight-changes
- /flight-cancellation
- /missed-flight
- /last-minute-flights
- /airline-canceled-flight
- /contact

Every page must include:
- A relevant headline
- Helpful explanatory content
- Common customer questions
- A prominent phone number
- Multiple “Call Now” buttons
- A related-services section
- A clear footer

Do not duplicate the same paragraph across all pages. Write unique and relevant content for each service.

The contact page must display phone-based contact information and any verified business details. It must not contain a contact form.

## 10. FAQ Section

Create an accessible accordion FAQ with questions such as:

- Can I change my flight on the same day?
- What should I do if I miss my flight?
- Can I cancel my flight and request a refund?
- What happens if an airline cancels my flight?
- Can you help with last-minute flight booking?
- Are there service fees for flight assistance?
- What information should I have ready before calling?
- Are you an airline or an independent travel assistance service?
- What are your customer support hours?

Keep answers accurate and concise. Explain that outcomes depend on airline rules, ticket conditions, availability, and the specific booking.

Include a final CTA below the FAQ:

“Still Have Questions? Call Our Team.”

## 11. Sticky Mobile Call Bar

This is one of the most important features.

Implement a fixed bottom call bar on mobile with:
- A phone icon
- “Call Flight Support”
- The configured phone number or a concise phone label

Requirements:
- Use a real tel: link
- Make the full button easy to tap
- Respect mobile safe-area insets
- Ensure the bar does not cover important page content
- Add enough bottom padding to the main page
- Hide or adjust the bar when it would interfere with critical accessibility controls

On desktop, use a normal prominent header CTA and contextual call buttons rather than an oversized fixed bottom bar.

## 12. Phone Number Configuration

Make the support number easy to change from a single configuration source.

Use an environment variable or centralized application configuration, such as:

NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY
NEXT_PUBLIC_SUPPORT_PHONE_TEL

The display variable should contain the formatted phone number shown to visitors.

The telephone variable should contain the international-format number used by the tel: link.

Do not hardcode the number in multiple components.

If the number is missing:
- Display a clear development placeholder only in development mode.
- Do not render a fake phone number in production.
- Hide or disable phone-dependent actions until a verified number is configured.
- Document the required environment variables.

## 13. Technology Stack

Use:
- Next.js with App Router
- TypeScript
- Tailwind CSS
- Reusable React components
- Lucide icons
- Optimized Next.js images
- Semantic HTML
- Accessible accordion components

Inspect the existing repository before modifying files. Preserve existing working code and follow the existing project's architecture where appropriate.

Create reusable components such as:
- Header
- MobileNavigation
- CallButton
- StickyMobileCallBar
- HeroSection
- ServiceCard
- HowItWorks
- BenefitsSection
- FAQAccordion
- FinalCallToAction
- Footer

Every call button should reuse the centralized phone configuration.

## 14. SEO for US Customers

Optimize each page for relevant search intent, including:
- flight booking assistance phone number
- emergency flight change assistance
- flight cancellation help
- missed flight assistance
- last-minute flight booking assistance
- airline canceled my flight help
- flight rebooking assistance phone

Write natural American English.

Implement:
- Unique title and meta description for each page
- Canonical URLs
- Open Graph metadata
- XML sitemap
- robots.txt
- Semantic heading hierarchy
- Internal links between related service pages
- Fast-loading images
- Appropriate structured data only when the underlying business information is verified

Do not create location pages for places the business does not serve.

## 15. Trust, Privacy, and Legal Transparency

Clearly identify the business as an independent travel agency or travel assistance service when applicable.

Do not claim to be an airline or an official airline partner unless authorized and verified.

Add:
- Privacy Policy
- Terms of Service
- Cancellation and Refund Policy
- Accessibility information
- Business contact details
- Customer support hours
- Applicable service-fee disclosures

Do not invent company registration details, legal credentials, or customer testimonials.

Policy content should be reviewed for the business's actual operations and applicable laws before launch.

## 16. Performance and Accessibility

Target excellent Core Web Vitals and mobile usability.

Implement:
- Responsive image sizing
- Lazy loading for below-the-fold images
- Proper image alt text
- Keyboard-accessible navigation
- Visible focus indicators
- Accessible color contrast
- Reduced-motion support
- Descriptive link labels
- Appropriate ARIA attributes
- Clean, maintainable TypeScript

Ensure every telephone link works and every navigation link leads to the correct page.

## 17. Final Implementation Workflow

First inspect the repository and existing dependencies.

Then:
1. Present a brief implementation plan.
2. Establish the visual design system.
3. Build the mobile-first homepage.
4. Implement the service pages.
5. Implement centralized phone configuration.
6. Add reusable call buttons and the mobile sticky call bar.
7. Write unique page content and FAQs.
8. Add SEO, accessibility, and privacy pages.
9. Test every navigation link and telephone link.
10. Run linting, tests, and the production build.
11. Fix implementation errors.
12. Document setup, environment variables, and deployment.

Do not stop at a static mockup. Build a working website with functional navigation and call actions.

Do not add any forms, booking widgets, email capture, chat widgets, or callback requests.

## Final Objective

Deliver a polished, mobile-first US flight assistance website designed around one primary conversion: getting visitors to call the business.

The website must be visually compelling, trustworthy, accessible, responsive, SEO-friendly, and easy to use under stressful travel situations.

**Remember: No forms anywhere. Every primary customer journey should lead to a real, clearly displayed, configurable phone number.**