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

export const metadata = pageMetadata({ title: 'When an Airline Cancels Your Flight', description: 'Understand general next steps after an airline cancellation and where to confirm rebooking or refund options for your ticket.', path: '/airline-canceled-flight' });

const FAQS: Faq[] = [
  {
    question: "The airline canceled my flight. Am I entitled to a refund?",
    answer:
      "The U.S. DOT says ticketed passengers are entitled to a prompt refund when an airline cancels a flight or makes a significant change and the passenger does not accept the alternative offered. Check the DOT guidance and ask the airline or ticket seller responsible for your booking about your situation.",
  },
  {
    question: "Should I take the airline's rebooking or ask for a refund?",
    answer:
      "The choice depends on your plans and the alternative offered. Ask the airline or ticket seller to explain rebooking and refund options before deciding. A participating provider may separately explain its own services and fees.",
  },
  {
    question: "Will the airline pay for a hotel or meals after a cancellation?",
    answer:
      "Airline commitments vary. The U.S. DOT's cancellation and delay dashboard summarizes certain commitments by U.S. airlines, including when a disruption is within the airline's control. Check the dashboard and confirm details with your airline.",
  },
  {
    question: "How long do refund timelines take?",
    answer:
      "Eligible refund timing depends on applicable rules and payment method. Confirm the expected timeline with the airline or ticket provider responsible for your booking.",
  },
];

export default function AirlineCanceledFlightPage() {
  return (
    <>
      <PageHero
crumbLabel="Airline Canceled Flight"
        eyebrow="Airline Cancellations"
        title="Airline Canceled Your Flight? Know Your Options."
        description="An airline cancellation may affect your travel plans and available options. Confirm refund or rebooking details with the airline or ticket seller responsible for your reservation."
      />

      <ProseSection heading="When the Airline Cancels on You">
        <p>
          If an airline cancels a flight or makes a significant change, the
          options depend on the alternative offered and the applicable rules.
          The U.S. DOT explains when ticketed passengers may choose a refund if
          they do not accept the alternative. Review the{" "}
          <a className="underline underline-offset-2" href="https://www.transportation.gov/individuals/aviation-consumer-protection/refunds">
            DOT refund guidance
          </a>{" "}
          and confirm your booking details with the airline or ticket seller.
        </p>
        <p>
          The right move depends on your circumstances. If you still need to
          reach your destination, the conversation is about the next available
          flights and any fare protections. If the cancellation defeated the
          purpose of the trip — a missed event, a canceled meeting — the
          conversation is about securing a proper refund and its timeline.
        </p>
        <p>
          If you contact a provider, have your booking reference available.
          The airline controls rebooking and refund decisions. A participating
          provider may discuss assistance options and any fees.
        </p>
      </ProseSection>

      <section aria-labelledby="canceled-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="canceled-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Flight Canceled? Let's Talk About Your Next Steps.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Review the airline&rsquo;s offer and confirm the options that apply
            to your ticket before deciding.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Rebooking & Refund Help" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/airline-canceled-flight" />

      <FinalCallToAction
        heading="Canceled? Take Back Control."
        subheading="Call to reach a participating provider to review your refund and rebooking choices after an airline cancellation."
      />
      <SEOScripts
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: SITE_URL },
          { name: "Airline Canceled Flight", url: `${SITE_URL}/airline-canceled-flight` },
        ] })}
      />
    </>
  );
}
