import type { Metadata } from "next";
import { Phone, Clock, MapPin, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCallToAction from "@/components/FinalCallToAction";
import { SERVICES } from "@/lib/services";
import RelatedServices from "@/components/RelatedServices";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";
import { SEO_KEYWORDS } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import SEOScripts from "@/components/SEOScripts";
import { jsonLdOrganization, jsonLdBreadcrumb, jsonLdFAQ } from "@/lib/seo";
import { SUPPORT_HOURS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact FlySupport Phone | Flight Assistance Customer Service",
  description:
    "Contact FlySupport by phone for flight booking, change, cancellation, and missed flight assistance. No forms — call our U.S. customer support team directly for travel help.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact FlySupport Phone | FlySupport",
    description:
      "Call our customer support team for flight assistance. Phone-based service, no forms required.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FlySupport Phone | FlySupport",
    description:
      "U.S. travel assistance by phone — flight booking, change, cancellation, and missed flight help.",
  },
  keywords: SEO_KEYWORDS,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
crumbLabel="Contact"
        eyebrow="Contact"
        title="Get In Touch — By Phone"
        description="FlySupport is a phone-first service. No forms, no ticket queues — just a direct line to a team member who can help with your flight situation."
      />

      <section aria-labelledby="contact-details" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 id="contact-details" className="text-2xl font-extrabold text-navy-900">
            Customer Support
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy-900">Phone</h3>
              {PHONE_CONFIGURED ? (
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-1 block text-lg font-bold text-orange-600 hover:text-orange-700"
                  aria-label={`Call FlySupport at ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              ) : (
                <p className="mt-1 text-base font-bold text-navy-500">
                  {PRODUCTION_PLACEHOLDER}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                Tap the number on mobile to start a call. Our team can help
                with bookings, changes, cancellations, and missed flights.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy-900">
                Customer Support Hours
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">
                {SUPPORT_HOURS}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                Travel issues don&rsquo;t keep office hours — we recommend
                calling as soon as a problem arises, since options are often
                time-sensitive.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy-900">
                Our Services
              </h3>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-navy-600">
                <li>Flight booking assistance</li>
                <li>Emergency flight changes</li>
                <li>Flight cancellation help</li>
                <li>Missed flight support</li>
                <li>Last-minute travel assistance</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy-900">
                Where We Help
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                U.S.-focused travel assistance. See our verified business
                details below.
              </p>
            </div>
          </div>

        </div>
      </section>

      <RelatedServices services={SERVICES} excludeHref="/contact" />

      <FinalCallToAction
        heading="Ready When You Are"
        subheading="Skip the forms and talk to a real person. One call and we'll start working through your travel situation together."
      />
      <SEOScripts
        organization={jsonLdOrganization({ name: "FlySupport", url: SITE_URL, phone: "+18885550100" })}
        breadcrumb={jsonLdBreadcrumb({ items: [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ] })}
        faqs={jsonLdFAQ({ faqs: [] })}
      />
    </>
  );
}
