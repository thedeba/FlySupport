import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { Phone, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCallToAction from "@/components/FinalCallToAction";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export const metadata = pageMetadata({ title: 'Contact', description: 'Contact AirNexa about this independent travel affiliate and lead-generation website, or review our provider and privacy disclosures.', path: '/contact' });

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbLabel="Contact"
        eyebrow="Contact"
        title="Contact AirNexa"
        description="AirNexa is an independent travel affiliate and lead-generation website. Use the configured call link to reach the number shown, or review our disclosures and privacy information."
      />

      <section aria-labelledby="contact-details" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 id="contact-details" className="text-2xl font-extrabold text-navy-900">Contact information</h2>
          <div className="mt-8 rounded-2xl border border-navy-100 bg-slate-50 p-6 sm:p-8">
            <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-navy-900">Phone</h3>
            {PHONE_CONFIGURED ? (
              <a href={`tel:${PHONE_TEL}`} className="mt-1 inline-block text-lg font-bold text-orange-600 hover:text-orange-700" aria-label={`Call the configured number ${PHONE_DISPLAY}`}>
                {PHONE_DISPLAY}
              </a>
            ) : (
              <p className="mt-1 text-base font-bold text-navy-500">{PRODUCTION_PLACEHOLDER}</p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-navy-600">Calls to this configured number may be routed or transferred to a participating independent provider or call center. Ask the person who answers to identify the provider and explain any fees before proceeding.</p>
            <p className="mt-3 text-xs leading-relaxed text-navy-500">AirNexa may receive compensation when visitors call or are connected with participating providers. Read the <Link href="/affiliate-disclosure" className="underline underline-offset-2">Affiliate Disclosure</Link>.</p>
          </div>
          <div className="mt-6 flex gap-3 rounded-xl bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
            <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>Owner configuration needed: no verified email address, business mailing address, or dedicated privacy contact is present in this project. Add a working contact method before launch. AirNexa does not publish a physical address until one is verified.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/affiliate-disclosure" className="font-semibold text-navy-800 underline underline-offset-2">Affiliate Disclosure</Link>
            <Link href="/call-transfer-disclosure" className="font-semibold text-navy-800 underline underline-offset-2">Call &amp; Routing Disclosure</Link>
            <Link href="/privacy-policy" className="font-semibold text-navy-800 underline underline-offset-2">Privacy Policy</Link>
          </div>
        </div>
      </section>

      <FinalCallToAction
        heading="Need Travel Assistance?"
        subheading="AirNexa may connect visitors with participating independent providers. Review the provider's identity, services, and any fees before proceeding."
      />
    </>
  );
}
