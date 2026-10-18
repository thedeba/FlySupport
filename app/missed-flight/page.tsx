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
  title: "Missed Flight Assistance Phone | Rebooking Help",
  description:
    "Missed your flight? Call our missed flight assistance phone line as soon as possible to discuss rebooking options and next steps for your ticket — speak to a real person, no forms.",
  alternates: { canonical: "/missed-flight" },
  openGraph: {
    title: "Missed Flight Assistance Phone | FlySupport",
    description:
      "Missed your flight? Call our team right away to discuss the rebooking options that may still be available.",
    url: "/missed-flight",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missed Flight Assistance Phone | FlySupport",
    description:
      "Missed flight rebooking help by phone — discuss next steps for your ticket right away.",
  },
  keywords: SEO_KEYWORDS,
};

const FAQS: Faq[] = [
  {
    question: "I missed my flight. What should I do first?",
    answer:
      "Call as soon as you realize. Some airlines offer a same-day rebooking policy (sometimes called a \"flat tire\" rule) for passengers who arrive within a short window after departure, but these policies often require quick action. The sooner you call, the better your chances.",
  },
  {
    question: "Will I lose the value of my ticket if I miss my flight?",
    answer:
      "It depends. Many non-refundable tickets lose their value after a no-show, though some airlines let you apply residual value with a fee if you contact them in time. This is exactly why calling immediately matters.",
  },
  {
    question: "I missed a connecting flight because my first flight was late. What are my options?",
    answer:
      "When a delay within the same reservation causes a missed connection, airlines typically rebook you on the next available flight at no extra cost. Call our team and we'll help you understand what to expect and next steps.",
  },
  {
    question: "Can the no-show rule affect my return flight?",
    answer:
      "Yes — on some tickets, missing the outbound segment without notice can cause the airline to cancel the return leg. If you miss a flight, call before the remaining segments depart to protect the rest of your itinerary.",
  },
];

export default function MissedFlightPage() {
  return (
    <>
      <PageHero
crumbLabel="Missed Flight Assistance"
        eyebrow="Missed Flights"
        title="Missed Your Flight? Let's Talk Next Steps."
        description="It happens to even the most careful travelers — traffic, long security lines, a late connection. Call our team as soon as possible to discuss what options are still open for your ticket."
      />

      <ProseSection heading="What To Do If You Miss Your Flight">
        <p>
          The single most important factor after a missed flight is time.
          Airlines handle no-shows differently: some offer same-day rebooking
          for a fee or free of charge, some apply the ticket&rsquo;s residual
          value toward a new flight, and others consider the ticket forfeited.
          There is often a real difference between calling thirty minutes after
          departure versus the next day.
        </p>
        <p>
          When you call our team, have your booking reference ready and tell us
          the situation plainly — where you were supposed to be and when. We
          will walk you through the policies that likely apply to your fare,
          what rebooking may be possible, and any fees before you commit to
          anything.
        </p>
        <p>
          If you missed a connecting flight on a single reservation because the
          first leg was late, say so — missed connections caused by airline
          delays are usually handled quite differently from missed departures
          caused by the traveler.
        </p>
      </ProseSection>

      <section aria-labelledby="missed-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="missed-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Deal With It Now, Not Tomorrow
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Missed flight options are often time-limited. Call our team right
            away.
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
        subheading="Call our team now to discuss rebooking options and protect the value left in your ticket."
      />
      <SEOScripts
        organization={jsonLdOrganization({ name: "FlySupport", url: SITE_URL, phone: "+18885550100" })}
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Missed Flight", url: `${SITE_URL}/missed-flight` },
        ] })}
        faqs={jsonLdFAQ({ faqs: FAQS })}
      />
    </>
  );
}
