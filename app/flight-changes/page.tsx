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
  title: "Emergency Flight Change Assistance Phone | Same-Day Flight Change",
  description:
    "Need emergency flight change assistance? Call our flight change assistance phone line to discuss same-day change options, fare rules, and availability for your ticket — speak to a real person, no forms.",
  alternates: { canonical: "/flight-changes" },
  openGraph: {
    title: "Emergency Flight Change Assistance Phone | FlySupport",
    description:
      "Plans changed suddenly? Call our team to discuss available change options for your ticket before they close.",
    url: "/flight-changes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Flight Change Assistance Phone | FlySupport",
    description:
      "Emergency same-day flight change help by phone — discuss fare rules and availability for your ticket.",
  },
  keywords: SEO_KEYWORDS,
};

const FAQS: Faq[] = [
  {
    question: "How late can I change my flight?",
    answer:
      "It depends on the airline and your fare rules. Many airlines allow changes up to a few hours before departure, but availability shrinks as departure approaches. If you need a change, calling as early as possible improves the options available to you.",
  },
  {
    question: "Will I have to pay a change fee?",
    answer:
      "Change fees and fare differences vary widely. Some airlines have eliminated change fees on standard fares (differences in fare still often apply), while basic economy and some international tickets remain restrictive. We'll explain what applies to your ticket during the call.",
  },
  {
    question: "Can I change the name on a ticket or transfer it to someone else?",
    answer:
      "Most airlines do not allow full name changes or transfers between passengers, though minor name corrections are often possible. Call us and we'll explain what your airline typically permits.",
  },
  {
    question: "What if the new flight costs more?",
    answer:
      "If the new fare is higher, you'll typically be responsible for the fare difference. We'll walk you through the pricing and any service fees before you confirm anything.",
  },
];

export default function FlightChangesPage() {
  return (
    <>
      <PageHero
crumbLabel="Flight Changes"
        eyebrow="Flight Changes"
        title="Emergency Flight Change Assistance"
        description="Meetings move, family plans shift, weather happens. If you need to change your flight at the last minute, call our team to discuss the options available for your ticket."
      />

      <ProseSection heading="How We Help With Flight Changes">
        <p>
          Flight changes are time-sensitive. Airlines set cutoffs for changes,
          and the pool of available seats on alternative flights shrinks as
          departure gets closer. That makes a fast phone call the smartest
          first move.
        </p>
        <p>
          When you call, have your booking reference ready. Our team will
          review the change rules attached to your fare — including any change
          fees, fare differences, and cutoff times — and explain what
          alternative flights may be possible. You&rsquo;ll hear the full
          picture, including any applicable service fees, before you decide
          whether to proceed.
        </p>
        <p>
          We can help regardless of where the change comes from: a shifted
          meeting, a family emergency, a weather concern, or simply a change of
          heart about your dates.
        </p>
      </ProseSection>

      <section aria-labelledby="changes-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="changes-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Need to Change Your Flight Today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            The sooner you call, the more options are typically available.
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
        subheading="Call our team to review the change options for your ticket and get clarity on next steps."
      />
      <SEOScripts
        organization={jsonLdOrganization({ name: "FlySupport", url: SITE_URL, phone: "+18885550100" })}
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Flight Changes", url: `${SITE_URL}/flight-changes` },
        ] })}
        faqs={jsonLdFAQ({ faqs: FAQS })}
      />
    </>
  );
}
