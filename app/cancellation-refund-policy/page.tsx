import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import Link from "next/link";

export const metadata = pageMetadata({ title: 'Cancellation & Refund Information', description: 'Understand how airline ticket rules and independent provider terms affect cancellations, refunds, credits, and service fees.', path: '/cancellation-refund-policy' });

export default function CancellationRefundPolicyPage() {
  return (
    <>
      <PageHero crumbLabel="Cancellation & Refund Information" eyebrow="Information" title="Cancellation & Refund Information" description="Airline tickets and third-party services follow separate rules." />
      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: November 4, 2026</p>
        <h2 className="pt-4 text-xl font-extrabold text-navy-900">Airline tickets</h2>
        <p>Refunds, credits, and cancellation options for an airline ticket are governed by the airline's fare rules, conditions of carriage, and applicable law. The result depends on the ticket and circumstances. AirNexa is not an airline and does not decide or guarantee airline refunds, credits, or rebooking.</p>
        <h2 className="pt-4 text-xl font-extrabold text-navy-900">Third-party services</h2>
        <p>If you choose a service from a provider reached through AirNexa, that provider sets its own service fees and cancellation or refund terms. Ask the provider to explain its terms, the amount charged, and who will process any refund before agreeing to a paid service.</p>
        <h2 className="pt-4 text-xl font-extrabold text-navy-900">Questions</h2>
        <p>For an airline ticket, contact the airline or ticket seller responsible for the booking. For a third-party service, contact that provider directly. For questions about AirNexa's referral website, see our <Link href="/contact" className="underline underline-offset-2">Contact page</Link>.</p>
      </ProseSection>
    </>
  );
}
