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

export const metadata = pageMetadata({ title: 'Flight Cancellation Information', description: 'Learn what can affect flight cancellation options, refunds, and credits. Airline rules and ticket terms apply; confirm details with your airline or ticket provider.', path: '/flight-cancellation' });

const FAQS: Faq[] = [
  {
    question: "Can I get a refund if I cancel my flight?",
    answer:
      "It depends on the fare rules and applicable law. Contact the airline or ticket provider responsible for your booking to confirm your options. A participating provider may discuss assistance options.",
  },
  {
    question: "What is the 24-hour cancellation rule?",
    answer:
      "For tickets bought directly from an airline at least seven days before departure, federal rules require the airline to offer either a 24-hour hold or a full refund when you cancel within 24 hours. The rule does not apply in the same way to tickets bought through travel agents or online travel agencies. Check with the seller and review the U.S. DOT refund guidance.",
  },
  {
    question: "What happens to my miles or travel credit if I cancel?",
    answer:
      "Whether a ticket has residual value or a credit, and whether other benefits remain, depends on the airline and ticket terms. Ask the airline or ticket seller what applies to your reservation before canceling.",
  },
  {
    question: "Is it better to cancel or simply not show up?",
    answer:
      "Do not assume a no-show has the same result as canceling. Ticket value and remaining itinerary segments may be affected by the fare terms. Contact the airline or ticket seller before departure and ask how each option affects your booking.",
  },
];

export default function FlightCancellationPage() {
  return (
    <>
      <PageHero
crumbLabel="Flight Cancellation"
        eyebrow="Flight Cancellation"
        title="Flight Cancellation Help"
        description="Canceling a flight can be confusing — fare rules, refund eligibility, and airline policies all interact. Call to reach a participating provider to understand your cancellation rules, possible refunds, and next steps."
      />

      <ProseSection heading="Understanding Your Cancellation Options">
        <p>
          Refunds, credits, and cancellation terms depend on the ticket, seller,
          and applicable rules. For some tickets bought directly from an
          airline, federal rules require a 24-hour hold or refund option when
          purchased at least seven days before departure. See the{" "}
          <a className="underline underline-offset-2" href="https://www.transportation.gov/individuals/aviation-consumer-protection/refunds">
            U.S. DOT refund guidance
          </a>{" "}
          and confirm the terms with the airline or ticket seller.
        </p>
        <p>
          The airline or ticket provider controls the fare conditions attached
          to your booking. A participating provider may discuss possible
          outcomes and deadlines. Ask it to explain its own fees before you
          decide whether to proceed.
        </p>
        <p>
          If special circumstances affect your plans, ask the airline or ticket
          seller whether its policies provide an exception. Do not assume an
          exception or refund applies until the responsible company confirms it.
        </p>
      </ProseSection>

      <section aria-labelledby="cancel-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="cancel-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Thinking About Canceling?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Confirm directly with the airline or ticket provider what
            cancellation means for your ticket.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Cancellation Help" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/flight-cancellation" />

      <FinalCallToAction
        heading="Get Clear on Your Cancellation Options"
        subheading="Confirm the rules for your ticket with the airline or ticket seller. A participating provider may also explain its own services and fees."
      />
      <SEOScripts
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: SITE_URL },
          { name: "Flight Cancellation", url: `${SITE_URL}/flight-cancellation` },
        ] })}
      />
    </>
  );
}
