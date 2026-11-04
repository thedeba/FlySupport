import { pageMetadata } from "@/lib/page-metadata";
import { Plane, Repeat, CalendarX, PlaneLanding } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import FinalCallToAction from "@/components/FinalCallToAction";
import CallButton from "@/components/CallButton";
import { PHONE_DISPLAY, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";
import { HOME_FAQS } from "@/lib/faqs";
import { jsonLdSiteGraph } from "@/lib/seo";

export const metadata = pageMetadata({ title: 'Independent Flight Assistance', description: 'AirNexa is an independent travel affiliate and lead-generation website. Visitors may find general flight information and connect with participating third-party travel assistance providers.', path: '/' });

const SERVICE_CARDS = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Need help exploring flight options for your next trip? Call to reach a participating provider to discuss your travel needs.",
    ctaLabel: "Call for Flight Booking",
    detailsHref: "/flight-booking",
  },
  {
    icon: Repeat,
    title: "Emergency Flight Changes",
    description:
      "Need to change your flight at the last minute? Call to discuss the available options for your ticket.",
    ctaLabel: "Call for Flight Changes",
    detailsHref: "/flight-changes",
  },
  {
    icon: CalendarX,
    title: "Flight Cancellation Assistance",
    description:
      "Need help understanding cancellation rules, possible refunds, or your next steps? Speak with a participating provider.",
    ctaLabel: "Call for Cancellation Help",
    detailsHref: "/flight-cancellation",
  },
  {
    icon: PlaneLanding,
    title: "Missed or Canceled Flight",
    description:
      "Missed your flight or had your flight canceled? A participating provider may discuss possible next steps.",
    ctaLabel: "Call for Travel Assistance",
    detailsHref: "/missed-flight",
  },
  {
    icon: Plane,
    title: "Last-Minute Flights",
    description:
      "Need to travel soon? Ask a participating provider about current options, availability, and any applicable fees.",
    ctaLabel: "Call About Last-Minute Travel",
    detailsHref: "/last-minute-flights",
  },
  {
    icon: CalendarX,
    title: "Airline-Canceled Flight",
    description:
      "Review general next steps and confirm refund or rebooking options with the airline or ticket provider.",
    ctaLabel: "Call About a Canceled Flight",
    detailsHref: "/airline-canceled-flight",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />

      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="services-heading"
              className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
            >
              Travel Plans Changed? We&rsquo;re Here to Help.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              Whatever your travel situation, you can review our information
              pages or call to ask a participating provider about its services.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                ctaLabel={card.ctaLabel}
                detailsHref={card.detailsHref}
              />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <CTABanner
        heading="Need to Change Your Flight Today?"
        subheading="Airline rules and seat availability can change quickly. Call to reach a participating provider to discuss the options for your ticket while they're still open."
      />

      <BenefitsSection />

      <CTABanner
        heading="Flight Canceled? Let's Talk About Your Next Steps."
        subheading="An airline cancellation can throw your whole trip into question. A provider may help you understand your rebooking and refund choices so you can decide with confidence."
      />

      <section aria-labelledby="planning-heading" className="bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="planning-heading"
              className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
            >
              Planning a Last-Minute Trip?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              Need to be somewhere soon? A call may connect you with a
              participating provider to discuss available options, conditions,
              and any applicable fees.
            </p>
            <div className="mt-7 flex justify-center">
              <CallButton
                label="Call for Flight Booking Assistance"
                variant="primary"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={HOME_FAQS} />

      <FinalCallToAction
        heading="One Call Can Clear Things Up"
        subheading="Flight issues are time-sensitive. A participating provider is ready to listen to your situation and explain the options that may be available to you."
      />

      <section aria-labelledby="travel-resources-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 id="travel-resources-heading" className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Check Official Travel Information
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-600">
            Airline and ticket-specific options depend on your booking and the rules that apply. Confirm current details with the airline or ticket seller. These U.S. Department of Transportation resources explain passenger refund and cancellation information.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-base text-navy-700">
            <li><a className="underline underline-offset-2 hover:text-orange-700" href="https://www.transportation.gov/individuals/aviation-consumer-protection/refunds">U.S. DOT: Airline refunds</a></li>
            <li><a className="underline underline-offset-2 hover:text-orange-700" href="https://www.transportation.gov/airconsumer/airline-cancellation-delay-dashboard">U.S. DOT: Airline cancellation and delay dashboard</a></li>
            <li><a className="underline underline-offset-2 hover:text-orange-700" href="/cancellation-refund-policy">AirNexa cancellation and refund information</a></li>
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSiteGraph()) }}
      />

    </>
  );
}
