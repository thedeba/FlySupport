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

export const metadata = pageMetadata({ title: 'Flight Change Information', description: 'Review general information about flight changes and ticket conditions. Contact the airline or ticket provider responsible for your booking to confirm options and fees.', path: '/flight-changes' });

const FAQS: Faq[] = [
  {
    question: "How late can I change my flight?",
    answer:
      "Change deadlines and options depend on the airline, ticket seller, and fare rules. Check your booking terms and contact the responsible company as soon as you know your plans may change.",
  },
  {
    question: "Will I have to pay a change fee?",
    answer:
      "Change fees and fare differences depend on the airline and ticket. Confirm the terms with the airline or ticket provider. A participating provider may discuss assistance options and its own fees.",
  },
  {
    question: "Can I change the name on a ticket or transfer it to someone else?",
    answer:
      "Name corrections and passenger transfers are subject to the airline's rules and the ticket terms. Ask the airline or ticket seller what changes, if any, are allowed for your booking.",
  },
  {
    question: "What if the new flight costs more?",
    answer:
      "The airline or ticket provider determines any fare difference. Ask the provider who handles your request to explain its prices and fees before you agree.",
  },
];

export default function FlightChangesPage() {
  return (
    <>
      <PageHero
crumbLabel="Flight Changes"
        eyebrow="Flight Changes"
        title="Emergency Flight Change Assistance"
        description="Meetings move, family plans shift, weather happens. If you need to change your flight at the last minute, call to reach a participating provider to discuss the options available for your ticket."
      />

      <ProseSection heading="Flight Change Information">
        <p>
          Airlines and ticket sellers set the change deadlines that apply to
          each booking. Review the ticket terms and contact the responsible
          company promptly to confirm current availability and any charges.
        </p>
        <p>
          If you choose to call a provider, have your booking reference ready.
          The provider may review the change rules attached to your fare —
          including change fees, fare differences, and cutoff times — and
          explain possible alternatives. Ask about provider fees before
          deciding whether to proceed.
        </p>
        <p>
          If you contact a participating provider, ask whether it handles the
          type of change you need and what fees or conditions apply.
        </p>
      </ProseSection>

      <section aria-labelledby="changes-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="changes-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Need to Change Your Flight Today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Ask the airline or ticket seller which change options and fees apply to your ticket.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Flight Changes" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/flight-changes" />

      <FinalCallToAction
        heading="Plans Changed? Let's Fix That."
        subheading="Call to reach a participating provider to review the change options for your ticket and get clarity on next steps."
      />
      <SEOScripts
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: SITE_URL },
          { name: "Flight Changes", url: `${SITE_URL}/flight-changes` },
        ] })}
      />
    </>
  );
}
