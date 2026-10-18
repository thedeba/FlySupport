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
  title: "Last-Minute Flight Booking Assistance Phone | Urgent Travel Help",
  description:
    "Need to fly on short notice? Call our last-minute flight booking assistance phone line to discuss available flights, fares, and conditions for your urgent travel plans — speak to a real person, no forms.",
  alternates: { canonical: "/last-minute-flights" },
  openGraph: {
    title: "Last-Minute Flight Booking Assistance Phone | FlySupport",
    description:
      "Flying soon? Call our team to discuss available last-minute flight options, conditions, and any service fees.",
    url: "/last-minute-flights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Last-Minute Flight Booking Assistance Phone | FlySupport",
    description:
      "Last-minute flight booking help by phone — discuss available flights, fares, and conditions.",
  },
  keywords: SEO_KEYWORDS,
};

const FAQS: Faq[] = [
  {
    question: "Is it possible to book a flight for today or tomorrow?",
    answer:
      "Often, yes. Same-day and next-day bookings are frequently possible, though availability and fares can change quickly. Calling early in the process gives you the widest view of what's available.",
  },
  {
    question: "Why are last-minute fares sometimes so expensive?",
    answer:
      "Airlines price seats dynamically — as a flight fills up, remaining seats often cost more. That said, Occasional last-minute deals exist on less-full flights. We'll discuss the fares we find with you transparently before anything is confirmed.",
  },
  {
    question: "How fast can a last-minute booking be confirmed?",
    answer:
      "Once you've chosen an option and any payment details are settled over the phone with our team, confirmation is typically immediate. We'll walk you through the timeline on the call.",
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
        description="Family emergency, urgent work trip, or a sudden change of plans? Call our team to discuss the flight options available for last-minute travel."
      />

      <ProseSection heading="Booking a Flight on Short Notice">
        <p>
          Last-minute travel compresses every decision. Seat availability
          changes hour by hour, fares move quickly, and airports and connection
          times matter more than ever when you have little room for error.
        </p>
        <p>
          Our team helps you cut through the noise. Tell us where you need to
          be and when, and we&rsquo;ll discuss the flights that could work —
          including direct options that reduce connection risk, realistic
          arrival times, and fare conditions attached to each choice. Any
          service fees are explained before you confirm, so you always know
          where you stand.
        </p>
        <p>
          If your travel is urgent because of an emergency, let us know. It
          helps us prioritize options that get you there soonest, and it
          matters for how we discuss conditions with you.
        </p>
      </ProseSection>

      <section aria-labelledby="lastmin-cta" className="bg-navy-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="lastmin-cta" className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Need To Be Somewhere Soon?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy-600">
            Every minute counts with last-minute travel. Call now.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton label="Call for Last-Minute Booking Help" variant="primary" />
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <RelatedServices services={SERVICES} excludeHref="/last-minute-flights" />

      <FinalCallToAction
        heading="Urgent Trip? Let's Find You a Flight."
        subheading="Call our team to discuss available last-minute options before they're gone."
      />
      <SEOScripts
        organization={jsonLdOrganization({ name: "FlySupport", url: SITE_URL, phone: "+18885550100" })}
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Last-Minute Flights", url: `${SITE_URL}/last-minute-flights` },
        ] })}
        faqs={jsonLdFAQ({ faqs: FAQS })}
      />
    </>
  );
}
