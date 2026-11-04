import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";

export const metadata = pageMetadata({ title: 'Call Routing Disclosure', description: 'Learn how calls made through AirNexa may connect with independent travel service providers and what to confirm before proceeding.', path: '/call-transfer-disclosure' });

export default function CallTransferDisclosurePage() {
  return (
    <>
      <PageHero
        crumbLabel="Call Transfer Disclosure"
        eyebrow="Legal"
        title="Call Transfer Disclosure"
        description="Understand who may handle your call and what to confirm before using a third-party service."
      />
      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: November 4, 2026</p>
        <p>When you call a telephone number displayed on AirNexa, your call may be routed or transferred to a participating third-party service provider or call center.</p>
        <p>These providers operate independently of AirNexa and are responsible for the services they offer, which may include flight bookings, reservation changes, cancellations, and other travel-related assistance. AirNexa does not directly provide airline booking, ticketing, reservation management, or customer service unless explicitly stated otherwise.</p>
        <p>Services, availability, fees, payment requirements, and service conditions are determined by the provider. Before proceeding, ask the provider to identify its business and confirm relevant details, including all fees and applicable terms.</p>
        <p>AirNexa may receive compensation when visitors call or are connected with participating providers. See our <Link href="/affiliate-disclosure" className="underline underline-offset-2">Affiliate Disclosure</Link>.</p>
      </ProseSection>
    </>
  );
}
