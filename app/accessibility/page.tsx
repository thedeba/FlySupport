import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import FinalCallToAction from "@/components/FinalCallToAction";

export const metadata = pageMetadata({ title: 'Accessibility', description: "Read about AirNexa's website accessibility features and how to report an accessibility issue.", path: '/accessibility' });

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
crumbLabel="Accessibility"
        eyebrow="Accessibility"
        title="Our Commitment to Accessibility"
        description="We want every traveler — including travelers with disabilities — to be able to use this website and access the available contact options."
      />

      <ProseSection heading="Accessibility Features of This Website">
        <ul className="list-disc pl-6">
          <li>Semantic HTML with a clear heading structure and landmark regions</li>
          <li>Keyboard navigation throughout, with visible focus indicators</li>
          <li>Sufficient color contrast between text and backgrounds</li>
          <li>Descriptive labels on all buttons and links, including call buttons</li>
          <li>Reduced-motion support for visitors sensitive to animation</li>
          <li>Large touch targets sized for comfortable mobile use</li>
        </ul>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          Phone-Based Assistance
        </h2>
        <p>
          AirNexa is an informational referral website. If you find any part
          of this website difficult to use, contact the site owner using the
          method on our Contact page. Calls to the displayed number may connect
          to an independent provider. If you use a teletypewriter (TTY) or need to connect via a
          relay service, dial 711 in the United States to reach a
          telecommunications relay operator who can place the call for you.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          Ongoing Effort
        </h2>
        <p>
          We aim to follow the <em>Web Content Accessibility Guidelines
          (WCAG) 2.1 Level AA</em> as our working standard, and we treat
          accessibility as an ongoing practice rather than a one-time task.
        </p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">
          Reporting an Accessibility Issue
        </h2>
        <p>
          If you encounter anything on this website that is hard to use,
          please use the contact method listed on the Contact page and describe
          the issue. The owner should provide a verified contact method before
          launch.
        </p>
      </ProseSection>

      <FinalCallToAction
        heading="Need Assistance? Just Call."
        subheading="Calls may connect you with participating independent providers. The provider's services and availability vary."
      />
    </>
  );
}
