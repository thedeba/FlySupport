import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import { SITE_NAME } from "@/lib/brand";

export const metadata = pageMetadata({ title: 'Terms & Conditions', description: 'Terms for using AirNexa, an independent travel affiliate and lead-generation website that may connect visitors with third-party providers.', path: '/terms-and-conditions' });

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero crumbLabel="Terms & Conditions" eyebrow="Legal" title="Terms & Conditions" description="These terms describe the AirNexa website and your use of its information and referral links." />
      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: November 4, 2026</p>
        <h2 className="pt-4 text-xl font-extrabold text-navy-900">1. Independent website</h2>
        <p>{SITE_NAME} is an independently operated travel affiliate and lead-generation website. It is not an airline, travel agency, official airline website, airline customer-service department, or authorized representative of an airline. Airline names and marks belong to their respective owners and do not imply a relationship with AirNexa.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">2. Website information</h2>
        <p>Content is general information only. It is not an official airline statement, a booking confirmation, legal advice, or a guarantee of service, price, refund, or availability. Airline rules and provider terms can change. Confirm the terms that apply to your booking with the airline or provider responsible for it.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">3. Third-party providers and calls</h2>
        <p>AirNexa may refer visitors or connect calls to participating independent third-party service providers and may receive compensation for referrals or calls. Calls to a listed number may be routed or transferred to a provider or call center. AirNexa does not directly provide or control those providers' services unless expressly stated. Confirm the identity of the provider, whether it can assist, any further call routing, and all applicable fees with the person who answers.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">4. Provider fees and policies</h2>
        <p>Third-party providers set their own prices, service fees, availability, and terms. Airlines set the rules for tickets and flights. Ask the relevant provider to explain all charges, cancellation terms, and applicable airline conditions before agreeing to a service or payment. Nothing in these terms makes AirNexa the provider of a third party's services.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">5. External links</h2>
        <p>Links and call referrals may lead to services operated by others. AirNexa does not control or warrant third-party websites, services, or privacy practices. Your dealings with a third party are between you and that provider, subject to your rights under applicable law.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">6. Limitation of liability</h2>
        <p>To the extent permitted by applicable law, AirNexa is not responsible for a third party's acts, omissions, services, prices, availability, or policies, or for airline decisions and operational changes. Nothing in these terms excludes or limits liability or consumer rights that cannot lawfully be excluded or limited. Where permitted by law, AirNexa will not be liable for indirect or consequential losses arising from use of this informational website.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">7. Changes and contact</h2>
        <p>These terms may be updated as the website or business model changes. The revision date appears above. For questions, use the contact method listed on our <Link href="/contact" className="underline underline-offset-2">Contact page</Link>.</p>
      </ProseSection>
    </>
  );
}
