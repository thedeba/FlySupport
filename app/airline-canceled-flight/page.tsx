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
  title: "Airline Canceled My Flight Help | Rebooking & Refund Phone",
  description:
    "Airline canceled your flight? Call our assistance phone line to understand your rebooking and refund choices, including U.S. DOT refund protections where they apply — speak to a real person, no forms.",
  alternates: { canonical: "/airline-canceled-flight" },
  openGraph: {
    title: "Airline Canceled My Flight Help | FlySupport",
    description:
      "Airline canceled on you? Call our team to review your rebooking and refund options so you can decide with confidence.",
    url: "/airline-canceled-flight",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airline Canceled My Flight Help | FlySupport",
    description:
      "Airline canceled flight rebooking and refund help by phone — review your options.",
  },
  keywords: SEO_KEYWORDS,
};

const FAQS: Faq[] = [
  {
    question: "The airline canceled my flight. Am I entitled to a refund?",
    answer:
      "In many cases, yes. For flights to, from, or within the United States, when an airline cancels a flight for which you have a confirmed reservation and you choose not to accept the alternative offered, you're generally entitled to a refund of the ticket price. The specifics depend on your circumstances and ticket.",
  },
  {
    question: "Should I take the airline's rebooking or ask for a refund?",
    answer:
      "It depends on your plans. If you still need to travel, a rebooking on the next available flight may be the fastest path. If the cancellation destroyed the purpose of your trip, a refund may make more sense. We can help you weigh both options on a call.",
  },
  {
    question: "Will the airline pay for a hotel or meals after a cancellation?",
    answer:
      "U.S. airlines are not federally required to provide these, though some do for certain delay or cancellation causes — these commitments typically apply to cancellations or delays within the airline's control. Whether it applies to you depends on the airline and the reason for the cancellation.",
  },
  {
    question: "How long do refund timelines take?",
    answer:
      "U.S. regulations generally require airlines to process eligible refunds promptly — commonly within seven business days for credit card purchases. We can discuss the expected timeline for your situation during the call.",
  },
];

export default function AirlineCanceledFlightPage() {
  return (
    <>
      <PageHero
crumbLabel="Airline Canceled Flight"
        eyebrow="Airline Cancellations"
        title="Airline Canceled Your Flight? Know Your Options."
        description="When the airline cancels on you, you have choices — a refund or a rebooking. Call our team to understand what applies to your reservation and decide your next steps with confidence."
      />

      <ProseSection heading="When the Airline Cancels on You">
        <p>
          An airline cancellation flips the situation: rather than you changing
          plans, the carrier has failed to deliver the flight you paid for.
          U.S. rules generally entitle you to choose how to move forward —
          typically a refund of the unused ticket, or a rebooking onto another
          flight if you still need to travel.
        </p>
        <p>
          The right move depends on your circumstances. If you still need to
          reach your destination, the conversation is about the next available
          flights and any fare protections. If the cancellation defeated the
          purpose of the trip — a missed event, a canceled meeting — the
          conversation is about securing a proper refund and its timeline.
        </p>
        <p>
          Call our team with your booking reference in hand. We&rsquo;ll walk
          you through what the cancellation likely entitles you to, what the
          airline is expected to offer, and what to ask for — before you commit
          to a course of action with the airline.
        </p>
      </ProseSection>

      <section aria-labelledby="canceled-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="canceled-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Flight Canceled? Let's Talk About Your Next Steps.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Don&rsquo;t settle for the first offer. Understand your full range
            of options first.
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
        subheading="Call our team to review your refund and rebooking choices after an airline cancellation."
      />
      <SEOScripts
        organization={jsonLdOrganization({ name: "FlySupport", url: SITE_URL, phone: "+18885550100" })}
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Airline Canceled Flight", url: `${SITE_URL}/airline-canceled-flight` },
        ] })}
        faqs={jsonLdFAQ({ faqs: FAQS })}
      />
    </>
  );
}
