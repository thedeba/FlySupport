import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FinalCallToAction from "@/components/FinalCallToAction";
import { SITE_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the FlySupport website and phone-based travel assistance service.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
crumbLabel="Terms of Service"
        eyebrow="Legal"
        title="Terms of Service"
        description="These terms govern your use of this website and our phone-based travel assistance service."
      />

      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: October 18, 2026</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          1. About These Terms
        </h2>
        <p>
          These terms form an agreement between you and {SITE_NAME} regarding
          your use of this website and our phone-based travel assistance
          service. By using the website or calling our support line, you accept
          these terms.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          2. Who We Are
        </h2>
        <p>
          {SITE_NAME} is an independent travel assistance service. We are not
          an airline, and we are not affiliated with, endorsed by, or sponsored
          by any airline. Airline rules, fare conditions, seat availability,
          and any applicable fees determine the options we discuss with you.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          3. Nature of Our Service
        </h2>
        <p>
          Our service consists of discussing your travel situation and the
          options that may be available — bookings, changes, cancellations,
          rebookings, and related matters. Outcomes depend on airline rules,
          ticket conditions, availability, and the specific booking. We do not
          guarantee any particular outcome, refund, replacement flight, or
          price.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          4. Service Fees
        </h2>
        <p>
          Fees may apply to certain assistance requests. Any applicable service
          fee will be clearly explained before you commit to a paid service. By
          proceeding after a fee disclosure, you agree to pay the stated fee.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          5. Acceptable Use
        </h2>
        <ul className="list-disc pl-6">
          <li>Provide accurate information about yourself and your bookings</li>
          <li>Do not use the service for unlawful, fraudulent, or abusive purposes</li>
          <li>Do not attempt to disrupt or misuse this website</li>
        </ul>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          6. Bookings and Third-Party Providers
        </h2>
        <p>
          Flights are operated by airlines and governed by their terms,
          conditions of carriage, and fare rules. Those rules — including
          change, cancellation, and refund policies — are set by the airline,
          not by us. We will explain these as clearly as we can, but the
          airline&rsquo;s own terms control your ticket.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          7. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, {SITE_NAME} is not liable for
          indirect, incidental, or consequential damages, nor for airline
          actions such as schedule changes, delays, cancellations, or fare
          changes. Our liability for direct damages relating to our service is
          limited to the service fees you actually paid to us for the
          assistance in question.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          8. Intellectual Property
        </h2>
        <p>
          The content, design, and branding of this website belong to{" "}
          {SITE_NAME} or its licensors and may not be copied or reused without
          permission.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          9. Changes to These Terms
        </h2>
        <p>
          We may update these terms from time to time. The &ldquo;last
          updated&rdquo; date above reflects the current version. Continued use
          of the service after changes constitutes acceptance.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          10. Contact
        </h2>
        <p>
          Questions about these terms? Call our customer support team using the
          number displayed on our website.
        </p>
        <p className="text-sm text-navy-500">
          These terms are provided as a template for review. Have them reviewed
          by qualified counsel against the business&rsquo;s actual operations
          and applicable laws before launch.
        </p>
      </ProseSection>

      <FinalCallToAction
        heading="Questions About Our Terms?"
        subheading="Call our team during support hours and we'll explain how these terms apply to the assistance you need."
      />
    </>
  );
}
