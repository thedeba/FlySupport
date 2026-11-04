import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import FinalCallToAction from "@/components/FinalCallToAction";
import CallButton from "@/components/CallButton";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import type { Faq } from "@/lib/faq-type";
import SEOScripts from "@/components/SEOScripts";
import { jsonLdBreadcrumb } from "@/lib/seo";

export const metadata = pageMetadata({ title: 'Flight Booking Assistance', description: 'Learn how AirNexa may connect visitors with independent providers to discuss flight options. Providers set their own prices, availability, services, and terms.', path: '/flight-booking' });

const FAQS: Faq[] = [
  {
    question: "Do you book flights directly on the website?",
    answer:
      "No. AirNexa does not book flights directly on this website. A call may connect you with a participating provider; ask that provider about options, conditions, and fees before proceeding.",
  },
  {
    question: "What trip details should I have ready before calling?",
    answer:
      "It helps to know your origin and destination airports, preferred travel dates, number of passengers, and whether your dates are flexible. If you're calling about an existing reservation, have your booking reference handy.",
  },
  {
    question: "Can you help with multi-city or international trips?",
    answer:
      "A participating provider may discuss one-way, round-trip, multi-city, and international itineraries. Confirm the provider's services and any fees before proceeding.",
  },
  {
    question: "Will you explain the fare rules before I commit?",
    answer:
      "Absolutely. Before you decide anything, a participating provider may explain the fare conditions that matter — change rules, cancellation terms, and baggage basics — along with any service fees that would apply.",
  },
];

export default function FlightBookingPage() {
  return (
    <>
      <PageHero
crumbLabel="Flight Booking"
        eyebrow="Flight Booking"
        title="Flight Booking Assistance, One Phone Call Away"
        description="Whether you're planning ahead or booking on short notice, a participating provider may walk you through the flight options that fit your travel needs — no forms, no guesswork."
      />

      <ProseSection heading="Flight Booking Information">
        <p>
          Booking a flight involves more than picking a date. Fare rules,
          change policies, layovers, and baggage terms all vary by airline and
          ticket type — and they affect how flexible your plans can be later.
        </p>
        <p>
          A participating provider may ask about your travel needs:
          where you&rsquo;re going, when you need to be there, and how firm
          your plans are. The provider may discuss available flight options
          and their conditions, along with any fees, so you can make an
          informed decision.
        </p>
        <p>
          Ask the provider to explain the terms before you make a booking
          decision. AirNexa does not control the provider's sales process.
        </p>
      </ProseSection>

      <section aria-labelledby="booking-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="booking-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Ready to Discuss Your Trip?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Have your travel dates in mind. A call may connect you with an independent provider.
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
        subheading="Call to reach a participating provider to talk through flight options, conditions, and next steps for your upcoming travel."
      />

      <SEOScripts
        breadcrumb={jsonLdBreadcrumb({
          items: [
            { name: "Home", url: SITE_URL },
            { name: "Flight Booking", url: `${SITE_URL}/flight-booking` },
          ],
        })}
      />
    </>
  );
}
