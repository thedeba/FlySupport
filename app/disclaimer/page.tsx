import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";

export const metadata = pageMetadata({ title: 'Legal Disclaimer', description: "Important information about AirNexa's independent website, participating third-party services, compensation, fees, and airline references.", path: '/disclaimer' });

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        crumbLabel="Disclaimer"
        eyebrow="Legal"
        title="Legal Disclaimer"
        description="Important information about AirNexa, participating travel providers, and airline references."
      />
      <ProseSection>
        <p className="text-sm text-navy-500">Last Updated: November 4, 2026</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">1. Independent Website Status</h2>
        <p>AirNexa is an independently operated travel affiliate and lead-generation website. We are not an airline, travel agency, airline representative, or official customer service department.</p>
        <p>We are not affiliated with, endorsed by, sponsored by, or otherwise connected to Delta Air Lines, Inc. or any other airline.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">2. Third-Party Services</h2>
        <p>When you call a telephone number listed on this website, your call may be routed or transferred to a participating third-party service provider or call center.</p>
        <p>These providers operate independently of AirNexa and may offer assistance with flight bookings, reservation changes, cancellations, and other travel-related requests.</p>
        <p>Any booking, reservation, or travel-related service is performed by the applicable third-party provider, not by AirNexa.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">3. Affiliate and Lead-Generation Relationships</h2>
        <p>AirNexa participates in affiliate marketing and lead-generation programs and may receive compensation when visitors call a listed telephone number, contact a participating provider, or are connected with a third-party service provider.</p>
        <p>These commercial relationships help support our website operations. Participating providers independently determine their services, pricing, availability, and applicable policies.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">4. Service Fees and Charges</h2>
        <p>Third-party service providers may charge service fees for assistance with bookings, reservation changes, cancellations, or other travel-related services.</p>
        <p>Such fees may be separate from airline fares, taxes, penalties, or other charges imposed by airlines.</p>
        <p>Before proceeding with any service, callers should confirm all applicable fees, payment requirements, and service conditions directly with the provider.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">5. Airline Trademarks and References</h2>
        <p>All airline names, logos, trademarks, and service marks appearing on this website are the property of their respective owners.</p>
        <p>Any references to Delta Air Lines, Inc. or other airlines are made solely for identification and descriptive purposes. Such references do not imply any partnership, authorization, endorsement, or official relationship.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">6. Third-Party Terms and Policies</h2>
        <p>Any booking, reservation, cancellation, or other service obtained through a participating provider is subject to the applicable provider's terms, conditions, and policies, as well as the relevant airline's rules and requirements.</p>
        <p>AirNexa does not control third-party operations and is not responsible for independent providers' service decisions, pricing, availability, or policies.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">7. Contact and Verification</h2>
        <p>Visitors are encouraged to verify provider identity, service details, applicable charges, and booking conditions before sharing payment information or proceeding with any transaction.</p>
        <p>By using this website or contacting a participating provider through a listed telephone number, you acknowledge that you may be interacting with an independent third-party service provider rather than an airline or its official customer service department.</p>
      </ProseSection>
    </>
  );
}
