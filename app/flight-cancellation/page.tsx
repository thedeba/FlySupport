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
import SEOScripts from "@/components/SEOScripts";
import { jsonLdOrganization, jsonLdBreadcrumb, jsonLdFAQ } from "@/lib/seo";
import type { Faq } from "@/lib/faq-type";

export const metadata: Metadata = {
  title: "Flight Cancellation Help Phone | Refund & Next Steps",
  description:
    "Need flight cancellation help? Call our cancellation assistance phone line to understand cancellation rules, possible refunds, travel credits, and your next steps — speak to a real person, no forms.",
  alternates: { canonical: "/flight-cancellation" },
  openGraph: {
    title: "Flight Cancellation Help Phone | FlySupport",
    description:
      "Understand cancellation rules, possible refunds, and next steps for your ticket. Call our team to discuss your options.",
    url: "/flight-cancellation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Cancellation Help Phone | FlySupport",
    description:
      "Flight cancellation refund help by phone — understand rules and next steps for your ticket.",
  },
  keywords: SEO_KEYWORDS,
};

const FAQS: Faq[] = [
  {
    question: "Can I get a refund if I cancel my flight?",
    answer:
      "It depends on your fare type. Refundable fares can generally be canceled for a refund. Non-refundable fares usually result in a travel credit rather than cash back, and basic economy fares are often the most restrictive of all. Call us to review what applies to your ticket.",
  },
  {
    question: "What is the 24-hour cancellation rule?",
    answer:
      "For flights to, from, or within the United States, airlines generally must allow you to cancel a booking within 24 hours of purchase for a full refund, as long as the booking was made at least seven days before departure. There are some exceptions, so it's worth confirming your specific situation.",
  },
  {
    question: "What happens to my miles or travel credit if I cancel?",
    answer:
      "If your ticket converts to a travel credit, airlines will often preserve associated benefits like seat selections or miles for eligible tickets. The details depend on the airline and fare, and we can help you understand the likely outcome during your call.",
  },
  {
    question: "Is it better to cancel or simply not show up?",
    answer:
      "Canceling is almost always better. A no-show can void the ticket's remaining value and sometimes affect connecting segments. If you can't make your flight, call before departure to discuss your options.",
  },
];

export default function FlightCancellationPage() {
  return (
    <>
      <PageHero
crumbLabel="Flight Cancellation"
        eyebrow="Flight Cancellation"
        title="Flight Cancellation Help"
        description="Canceling a flight can be confusing — fare rules, refund eligibility, and airline policies all interact. Call our team to understand your cancellation rules, possible refunds, and next steps."
      />

      <ProseSection heading="Understanding Your Cancellation Options">
        <p>
          Not all tickets are created equal. Refundable fares offer the most
          flexibility, non-refundable fares typically convert to travel
          credits, and basic economy fares often carry the tightest
          restrictions. On top of that, specific situations — like the U.S.
          24-hour booking rule — give travelers additional rights in some
          cases.
        </p>
        <p>
          When you call our team, we&rsquo;ll review the fare conditions
          attached to your booking and explain what canceling would mean in
          practice: whether a refund, a credit, or something else is likely,
          what deadlines apply, and any service fees involved. No jargon, no
          surprises — just a clear explanation so you can decide what to do.
        </p>
        <p>
          If you&rsquo;re canceling because of an emergency, mention that on
          the call. Some airlines have policies for documented emergencies, and
          timing can affect what&rsquo;s possible.
        </p>
      </ProseSection>

      <section aria-labelledby="cancel-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="cancel-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Thinking About Canceling?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Talk to our team first so you know exactly what cancellation means
            for your ticket.
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
        subheading="One call is all it takes to understand the refund, credit, and deadline rules that apply to your booking."
      />
      <SEOScripts
        organization={jsonLdOrganization({ name: "FlySupport", url: SITE_URL, phone: "+18885550100" })}
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Flight Cancellation", url: `${SITE_URL}/flight-cancellation` },
        ] })}
        faqs={jsonLdFAQ({ faqs: FAQS })}
      />
    </>
  );
}
