import type { Metadata } from "next";
import { Plane, Repeat, CalendarX, PlaneLanding } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import FinalCallToAction from "@/components/FinalCallToAction";
import CallButton from "@/components/CallButton";
import { PHONE_DISPLAY, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";
import { HOME_FAQS } from "@/lib/faqs";
import { SEO_KEYWORDS, jsonLdBreadcrumb, jsonLdFAQ, jsonLdOrganization } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flight Booking Assistance Phone Number | Emergency Flight Change Help",
  description:
    "Need flight booking assistance, emergency flight change help, or flight cancellation support? Call our U.S. travel assistance phone number. Rebooking, missed flights, and last-minute booking help — speak to a real person, no forms.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Flight Booking Assistance Phone Number | FlySupport",
    description:
      "Call our U.S. flight assistance line for booking, emergency changes, cancellations, missed flights, and rebooking help. Travel assistance by phone.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Booking Assistance Phone Number | FlySupport",
    description:
      "U.S. travel assistance by phone — flight booking, emergency changes, cancellations, missed flights, and rebooking help.",
  },
  keywords: SEO_KEYWORDS,
  other: {
    "business:contact_data": JSON.stringify({
      contact_point: [{ telephone: "+18885550100", contact_type: "customer service", area_served: "US" }],
    }),
  },
};

const SERVICE_CARDS = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Need help exploring flight options for your next trip? Call our team to discuss your travel needs.",
    ctaLabel: "Call for Flight Booking",
  },
  {
    icon: Repeat,
    title: "Emergency Flight Changes",
    description:
      "Need to change your flight at the last minute? Call to discuss the available options for your ticket.",
    ctaLabel: "Call for Flight Changes",
  },
  {
    icon: CalendarX,
    title: "Flight Cancellation Assistance",
    description:
      "Need help understanding cancellation rules, possible refunds, or your next steps? Speak with our team.",
    ctaLabel: "Call for Cancellation Help",
  },
  {
    icon: PlaneLanding,
    title: "Missed or Canceled Flight",
    description:
      "Missed your flight or had your flight canceled? Contact our team to discuss possible next steps.",
    ctaLabel: "Call for Travel Assistance",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />

      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="services-heading"
              className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
            >
              Travel Plans Changed? We&rsquo;re Here to Help.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              Whatever your travel situation looks like right now, the fastest
              way to get clarity is a short phone call with our team.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_CARDS.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                ctaLabel={card.ctaLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <CTABanner
        heading="Need to Change Your Flight Today?"
        subheading="Airline rules and seat availability can change quickly. Call our team to discuss the options for your ticket while they're still open."
      />

      <BenefitsSection />

      <CTABanner
        heading="Flight Canceled? Let's Talk About Your Next Steps."
        subheading="An airline cancellation can throw your whole trip into question. We'll help you understand your rebooking and refund choices so you can decide with confidence."
      />

      <section aria-labelledby="planning-heading" className="bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="planning-heading"
              className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
            >
              Planning a Last-Minute Trip?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              Need to be somewhere soon? Speak with our team about flight
              booking assistance — we'll walk you through the available options,
              conditions, and any service fees before you commit to anything.
            </p>
            <div className="mt-7 flex justify-center">
              <CallButton
                label="Speak With Our Team About Flight Booking Assistance"
                variant="primary"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={HOME_FAQS} />

      <FinalCallToAction
        heading="One Call Can Clear Things Up"
        subheading="Flight issues are time-sensitive. Our team is ready to listen to your situation and explain the options that may be available to you."
      />

      <section aria-labelledby="us-flight-assistance-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="us-flight-assistance-heading"
              className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
            >
              U.S. Flight Assistance Services
            </h2>
            <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-orange-500 sm:mx-0" aria-hidden="true" />
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              We help travelers across the United States with flight booking,
              emergency flight changes, flight cancellation help, missed flight
              assistance, last-minute flight booking, and airline-canceled
              flight rebooking. Whether you need a flight booking assistance
              phone number, same-day flight change support, or guidance after
              an airline cancels your flight, our team is ready to help by
              phone.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_KEYWORDS.map((keyword) => (
              <li key={keyword} className="rounded-xl border border-navy-100 bg-navy-50 p-4">
                <a
                  href="#services"
                  className="block text-sm font-medium text-navy-700 hover:text-orange-700 hover:bg-navy-50 rounded-lg p-2 transition-colors"
                >
                  {keyword}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FlySupport",
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo.jpeg`,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+18885550100",
                contactType: "customer service",
                availableLanguage: ["English"],
                areaServed: "US",
              },
            ],
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Flight Assistance Services",
                item: `${SITE_URL}/`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFAQ({ faqs: HOME_FAQS })),
        }}
      />
    </>
  );
}
