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

export const metadata = pageMetadata({ title: 'Missed Flight Next Steps', description: 'General information about what to do after a missed flight, including contacting the airline or ticket provider promptly to discuss your booking.', path: '/missed-flight' });

const FAQS: Faq[] = [
  {
    question: "I missed my flight. What should I do first?",
    answer:
      "Contact the airline or ticket seller promptly and ask what options apply to your ticket. Same-day rebooking policies and deadlines vary; do not assume a particular policy is available.",
  },
  {
    question: "Will I lose the value of my ticket if I miss my flight?",
    answer:
      "It depends on the ticket rules and airline policy. Ask the airline or ticket seller whether any value remains and whether other segments of your itinerary are affected.",
  },
  {
    question: "I missed a connecting flight because my first flight was late. What are my options?",
    answer:
      "Options depend on the itinerary, airline, and cause of the delay. Contact the operating airline or ticket seller promptly to confirm what assistance or rebooking is available.",
  },
  {
    question: "Can the no-show rule affect my return flight?",
    answer:
      "Some ticket rules may affect later segments after a missed flight. Contact the airline or ticket seller promptly and ask whether the rest of your itinerary remains active.",
  },
];

export default function MissedFlightPage() {
  return (
    <>
      <PageHero
crumbLabel="Missed Flight Assistance"
        eyebrow="Missed Flights"
        title="Missed Your Flight? Let's Talk Next Steps."
        description="It happens to even the most careful travelers — traffic, long security lines, a late connection. Call to reach a participating provider as soon as possible to discuss what options are still open for your ticket."
      />

      <ProseSection heading="What To Do If You Miss Your Flight">
        <p>
          Airline and ticket-seller policies differ after a missed flight.
          Contact the company responsible for your booking promptly to ask
          whether rebooking, remaining ticket value, or later itinerary
          segments are affected.
        </p>
        <p>
          If you choose to contact a provider, have your booking reference
          available and explain where you were supposed to be and when. The
          provider may discuss applicable policies, possible rebooking, and
          its fees. Confirm all details before proceeding.
        </p>
        <p>
          If you missed a connecting flight on a single reservation because the
          first leg was late, tell the airline or ticket seller. The available
          assistance depends on the itinerary and the circumstances.
        </p>
      </ProseSection>

      <section aria-labelledby="missed-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="missed-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Confirm Your Next Steps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Options depend on your itinerary and ticket terms. Contact the airline
            or ticket seller promptly; a participating provider may also explain
            its own services and fees.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Travel Assistance" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/missed-flight" />

      <FinalCallToAction
        heading="Missed Flight? There May Still Be Time."
        subheading="A call may connect you with a participating provider to discuss possible next steps. Contact the airline or ticket provider promptly about your booking."
      />
      <SEOScripts
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: SITE_URL },
          { name: "Missed Flight", url: `${SITE_URL}/missed-flight` },
        ] })}
      />
    </>
  );
}
