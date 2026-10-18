import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import FinalCallToAction from "@/components/FinalCallToAction";
import CallButton from "@/components/CallButton";
import { SERVICES } from "@/lib/services";
import { SEO_KEYWORDS } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import type { Faq } from "@/lib/faq-type";
import SEOScripts from "@/components/SEOScripts";
import { jsonLdOrganization, jsonLdBreadcrumb, jsonLdFAQ } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Flight Booking Assistance Phone Number | U.S. Flight Booking Help",
  description:
    "Need flight booking assistance? Call our U.S. flight booking assistance phone number to discuss routes, timing, and conditions before you book. Speak to a real person about last-minute and planned travel — no forms.",
  alternates: { canonical: "/flight-booking" },
  openGraph: {
    title: "Flight Booking Assistance Phone Number | FlySupport",
    description:
      "Call our U.S. flight booking assistance line to discuss routes, timing, conditions, and service fees before you book.",
    url: "/flight-booking",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Booking Assistance Phone Number | FlySupport",
    description:
      "U.S. flight booking help by phone — discuss routes, timing, and conditions before you book.",
  },
  keywords: SEO_KEYWORDS,
};

const FAQS: Faq[] = [
  {
    question: "Do you book flights directly on the website?",
    answer:
      "No. Our service is phone-based by design. Call our team, tell us about your trip, and we'll discuss available options, applicable conditions, and any service fees before you decide how to proceed.",
  },
  {
    question: "What trip details should I have ready before calling?",
    answer:
      "It helps to know your origin and destination airports, preferred travel dates, number of passengers, and whether your dates are flexible. If you're calling about an existing reservation, have your booking reference handy.",
  },
  {
    question: "Can you help with multi-city or international trips?",
    answer:
      "Yes. We can talk through options for one-way, round-trip, multi-city, and international itineraries. More complex trips simply mean more details to discuss on the call.",
  },
  {
    question: "Will you explain the fare rules before I commit?",
    answer:
      "Absolutely. Before you decide anything, our team will explain the fare conditions that matter — change rules, cancellation terms, and baggage basics — along with any service fees that would apply.",
  },
];

export default function FlightBookingPage() {
  return (
    <>
      <PageHero
crumbLabel="Flight Booking"
        eyebrow="Flight Booking"
        title="Flight Booking Assistance, One Phone Call Away"
        description="Whether you're planning ahead or booking on short notice, our team will walk you through the flight options that fit your travel needs — no forms, no guesswork."
      />

      <ProseSection heading="What We Help With">
        <p>
          Booking a flight involves more than picking a date. Fare rules,
          change policies, layovers, and baggage terms all vary by airline and
          ticket type — and they affect how flexible your plans can be later.
        </p>
        <p>
          When you call our team, we&rsquo;ll talk through your travel needs:
          where you&rsquo;re going, when you need to be there, and how firm
          your plans are. From there, we&rsquo;ll discuss the available flight
          options and explain the conditions attached to each, along with any
          service fees, so you can make an informed decision.
        </p>
        <p>
          This is a conversation, not a checkout page. You&rsquo;ll never be
          pushed into a booking — the goal is for you to understand your
          options clearly before anything is confirmed.
        </p>
      </ProseSection>

      <section aria-labelledby="booking-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="booking-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Ready to Discuss Your Trip?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Have your travel dates in mind and give us a call. We&rsquo;ll take
            it from there.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Flight Booking" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/flight-booking" />

      <FinalCallToAction
        heading="Let's Get Your Trip Sorted"
        subheading="Call our team to talk through flight options, conditions, and next steps for your upcoming travel."
      />

      <SEOScripts
        organization={jsonLdOrganization({
          name: "FlySupport",
          url: SITE_URL,
          phone: "+18885550100",
        })}
        breadcrumb={jsonLdBreadcrumb({
          items: [
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Flight Booking", url: `${SITE_URL}/flight-booking` },
          ],
        })}
        faqs={jsonLdFAQ({ faqs: FAQS })}
      />
    </>
  );
}
