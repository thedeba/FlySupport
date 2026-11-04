import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import FinalCallToAction from "@/components/FinalCallToAction";
import CallButton from "@/components/CallButton";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import SEOScripts from "@/components/SEOScripts";
import { jsonLdBreadcrumb } from "@/lib/seo";
import type { Faq } from "@/lib/faq-type";

export const metadata = pageMetadata({ title: 'Last-Minute Flight Options', description: 'Learn what to check when arranging last-minute travel. A call may connect you with an independent provider; confirm current availability, fares, and fees directly.', path: '/last-minute-flights' });

const FAQS: Faq[] = [
  {
    question: "Is it possible to book a flight for today or tomorrow?",
    answer:
      "It may be possible, depending on current schedules, seat availability, and the seller's booking deadlines. Confirm the itinerary, total price, and terms before paying.",
  },
  {
    question: "Why are last-minute fares sometimes so expensive?",
    answer:
      "Airfares and availability can change quickly. Confirm the current price and ticket conditions with the airline or provider before booking.",
  },
  {
    question: "How fast can a last-minute booking be confirmed?",
    answer:
      "Confirmation timing depends on the provider and airline. Ask the provider when a booking becomes final and how payment is processed.",
  },
  {
    question: "What should I have ready to speed things up?",
    answer:
      "Know your departure and destination airports, your target dates or time windows, the number of passengers, and each traveler's name as it appears on their government ID. That makes the call much faster.",
  },
];

export default function LastMinuteFlightsPage() {
  return (
    <>
      <PageHero
crumbLabel="Last-Minute Flights"
        eyebrow="Last-Minute Flights"
        title="Last-Minute Flight Booking Assistance"
        description="Family emergency, urgent work trip, or a sudden change of plans? Call to reach a participating provider to discuss the flight options available for last-minute travel."
      />

      <ProseSection heading="Booking a Flight on Short Notice">
        <p>
          Last-minute travel compresses every decision. Seat availability
          changes hour by hour, fares move quickly, and airports and connection
          times matter more than ever when you have little room for error.
        </p>
        <p>
          A call may connect you with a participating independent provider.
          That provider may discuss possible routes, arrival times, fare
          conditions, and its own fees. Confirm availability and terms before
          booking.
        </p>
        <p>
          If you speak with a provider, explain your timing needs. The provider
          determines what options and service it can offer.
        </p>
      </ProseSection>

      <section aria-labelledby="lastmin-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="lastmin-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Need To Be Somewhere Soon?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Ask about current availability, total price, and booking conditions.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Last-Minute Booking Help" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/last-minute-flights" />

      <FinalCallToAction
        heading="Need to Travel Soon? Review Your Options."
        subheading="A call may connect you with a participating provider. Confirm current availability, prices, terms, and fees directly before proceeding."
      />
      <SEOScripts
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: SITE_URL },
          { name: "Last-Minute Flights", url: `${SITE_URL}/last-minute-flights` },
        ] })}
      />
    </>
  );
}
