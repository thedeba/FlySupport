import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FinalCallToAction from "@/components/FinalCallToAction";
import { SITE_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FlySupport handles information shared during phone-based travel assistance, including call information, website analytics, and your privacy choices.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
crumbLabel="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains what information we collect through this website and our phone-based service, and how we use it."
      />

      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: October 18, 2026</p>
        <h2 className="pt-4 text-xl font-extrabold text-navy-900">1. Who We Are</h2>
        <p>
          {SITE_NAME} is an independent travel assistance service. We provide
          phone-based assistance with flight bookings, changes, cancellations,
          and related travel issues. This website contains no forms — our
          primary interaction with you is a phone call.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          2. Information We Collect
        </h2>
        <p>
          <strong>Information you provide by phone.</strong> When you call us,
          we collect the information needed to assist you, such as your name,
          booking reference, travel dates, and airline information. Please do
          not share full payment card numbers, passwords, or sensitive
          identifiers unless they are specifically required for the assistance
          you requested.
        </p>
        <p>
          <strong>Website usage data.</strong> Like most websites, we may
          collect standard technical information automatically (for example,
          browser type, pages visited, and approximate location derived from IP
          address) to operate and improve the site.
        </p>
        <p>
          <strong>Cookies.</strong> We may use limited cookies or similar
          technologies for essential site functions and aggregate analytics. We
          do not use cookies for advertising cross-tracking without notice.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          3. How We Use Information
        </h2>
        <ul className="list-disc pl-6">
          <li>To provide the travel assistance you request by phone</li>
          <li>To communicate with airlines or travel providers on your request where applicable</li>
          <li>To explain applicable fees and confirmations</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell your personal information. We may share information
          with airlines or travel providers as needed to fulfill your request,
          with service providers who support our operations under contract, and
          with authorities where required by law.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          5. Data Retention
        </h2>
        <p>
          We retain call-related records only as long as needed to provide
          services, meet legal requirements, and resolve disputes, after which
          they are securely deleted or anonymized.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          6. Your Rights
        </h2>
        <p>
          Depending on your state or country, you may have rights to access,
          correct, or delete personal information we hold about you, and to
          object to certain processing. Because our service is phone-based,
          you can exercise these rights by calling us during support hours.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          7. Security
        </h2>
        <p>
          We use reasonable administrative and technical safeguards to protect
          the information we handle. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this policy from time to time. The &ldquo;last
          updated&rdquo; date above reflects the current version.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          9. Contact
        </h2>
        <p>
          Questions about this policy? Call our customer support team using the
          number displayed on our website.
        </p>
        <p className="text-sm text-navy-500">
          This policy is provided as a template for review. Have it reviewed by
          qualified counsel against the business&rsquo;s actual operations and
          applicable laws before launch.
        </p>
      </ProseSection>

      <FinalCallToAction
        heading="Privacy Questions? Ask Us Directly."
        subheading="Call our team during support hours and we'll answer your privacy questions by phone."
      />
    </>
  );
}
