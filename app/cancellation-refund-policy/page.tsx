import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FinalCallToAction from "@/components/FinalCallToAction";
import { SITE_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "How FlySupport handles cancellations and refunds for the assistance services we provide, including airline-controlled policies and service-fee disclosures.",
  alternates: { canonical: "/cancellation-refund-policy" },
  robots: { index: false },
};

export default function CancellationRefundPolicyPage() {
  return (
    <>
      <PageHero
crumbLabel="Cancellation & Refund Policy"
        eyebrow="Legal"
        title="Cancellation & Refund Policy"
        description="This policy explains how cancellations and refunds work for our assistance services and the airline tickets involved."
      />

      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: October 18, 2026</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          1. Airline Tickets vs. Our Services
        </h2>
        <p>
          There are two distinct things to understand: the{" "}
          <strong>airline ticket</strong> and the{" "}
          <strong>assistance service</strong> we provide. Each can carry its own
          cancellation and refund terms.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          2. Airline Ticket Cancellations and Refunds
        </h2>
        <p>
          Airline tickets are governed by the airline&rsquo;s fare rules and
          conditions of carriage. Typically:
        </p>
        <ul className="list-disc pl-6">
          <li>Refundable fares may be canceled for a refund per the airline's rules</li>
          <li>Non-refundable fares may provide travel credit rather than cash refunds</li>
          <li>Basic economy fares are often the most restrictive</li>
          <li>Bookings to, from, or within the U.S. made at least 7 days before departure can generally be canceled within 24 hours of purchase for a full refund</li>
          <li>When an airline cancels your flight, you generally may choose a refund (if you decline the alternative offered) or a rebooking</li>
        </ul>
        <p>
          The airline&rsquo;s own terms control these outcomes. We will explain
          the rules that appear to apply to your ticket, but we do not
          guarantee refunds or credits — those decisions rest with the airline.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          3. Our Service Fees
        </h2>
        <p>
          Assistance fees, where applicable, are disclosed clearly before you
          commit to any paid service. If we are unable to provide an assistance
          service you have paid for, we will refund that service fee on
          reasonable terms explained at the time of the call. Service fees for
          assistance already rendered are generally not refundable.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          4. Refund Timelines
        </h2>
        <p>
          Airline refund timelines are set by the airline; U.S. rules generally
          require eligible airline refunds to be processed promptly, commonly
          within seven business days for credit card purchases. Our assistance
          fee refunds, where applicable, are typically processed to the original
          payment method within a comparable period.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          5. How To Request a Cancellation or Refund
        </h2>
        <p>
          Because our service is phone-based, all cancellation and refund
          requests start with a call to our customer support team. Have your
          booking reference ready so we can locate your details quickly.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          6. Questions
        </h2>
        <p>
          Questions about this policy? Call our team using the number displayed
          on our website.
        </p>
        <p className="text-sm text-navy-500">
          This policy is provided as a template for review. Have it reviewed by
          qualified counsel against the business&rsquo;s actual operations and
          applicable laws before launch.
        </p>
      </ProseSection>

      <FinalCallToAction
        heading="Need to Cancel or Request a Refund?"
        subheading="Call our team and we'll explain exactly what applies to your ticket and any assistance fees."
      />
    </>
  );
}
