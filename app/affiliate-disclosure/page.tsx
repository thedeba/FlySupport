import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";

export const metadata = pageMetadata({ title: 'Affiliate & Compensation Disclosure', description: "How AirNexa's affiliate and lead-generation relationships may result in compensation when visitors contact or are connected with participating providers.", path: '/affiliate-disclosure' });

export default function AffiliateDisclosurePage() {
  return (
    <>
      <PageHero crumbLabel="Affiliate Disclosure" eyebrow="Legal" title="Affiliate and Compensation Disclosure" description="How AirNexa’s affiliate and lead-generation model works." />
      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: November 4, 2026</p>
        <p>AirNexa participates in affiliate marketing and lead-generation programs. We may receive compensation when visitors call telephone numbers listed on this website, contact participating service providers, or are connected with third-party travel assistance providers.</p>
        <p>This compensation helps support the operation and maintenance of our website.</p>
        <p>Compensation arrangements may exist between AirNexa and participating providers. However, the availability, quality, pricing, and terms of services are determined independently by each provider.</p>
        <p>AirNexa does not control the services, fees, booking conditions, or policies of third-party providers. We encourage visitors to verify all relevant information directly with the provider before making any booking or purchasing decision.</p>
      </ProseSection>
    </>
  );
}
