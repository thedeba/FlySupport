import Link from "next/link";
import Logo from "@/components/Logo";

const YEAR = new Date().getFullYear();

const SERVICE_LINKS = [
  { href: "/flight-booking", label: "Flight Booking" },
  { href: "/flight-changes", label: "Flight Changes" },
  { href: "/flight-cancellation", label: "Flight Cancellation" },
  { href: "/missed-flight", label: "Missed Flight Assistance" },
  { href: "/last-minute-flights", label: "Last-Minute Flights" },
  { href: "/airline-canceled-flight", label: "Airline Canceled Flight" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About AirNexa" },
  { href: "/contact", label: "Contact Us" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/call-transfer-disclosure", label: "Call Transfer Disclosure" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/cancellation-refund-policy", label: "Cancellation & Refund Policy" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              AirNexa is an independently operated travel affiliate and lead
              generation website. We help travelers find participating
              independent providers for travel assistance.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company and legal">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company &amp; Legal
            </h2>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Disclaimer</h2>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-navy-300">
            AirNexa is an independent travel affiliate and lead-generation
            website, not an airline, travel agency, airline representative, or
            official customer-service department. We are not affiliated with,
            endorsed by, or sponsored by Delta Air Lines, Inc. or any other
            airline. Calls may be routed or transferred to independent
            providers, who handle their own services, fees, and policies.
            AirNexa may receive compensation for calls or referrals. Confirm
            provider details and charges before proceeding. Read the{" "}
            <Link href="/disclaimer" className="font-semibold text-navy-200 underline underline-offset-2 hover:text-white">
              full Legal Disclaimer
            </Link>
            .
          </p>
          <div className="mt-6 max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Affiliate &amp; Compensation Disclosure
            </h2>
            <div className="mt-3 space-y-3 text-xs leading-relaxed text-navy-300">
              <p>
                AirNexa participates in affiliate marketing and lead-generation
                programs. We may receive compensation when visitors call
                telephone numbers listed on this website, contact participating
                service providers, or are connected with third-party travel
                assistance providers.
              </p>
              <p>
                This compensation helps support the operation and maintenance
                of our website.
              </p>
              <p>
                Compensation arrangements may exist between AirNexa and
                participating providers. However, the availability, quality,
                pricing, and terms of services are determined independently by
                each provider.
              </p>
              <p>
                AirNexa does not control the services, fees, booking
                conditions, or policies of third-party providers. Verify
                relevant information directly with the provider before making
                a booking or purchasing decision. Read the full{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="font-semibold text-navy-200 underline underline-offset-2 hover:text-white"
                >
                  Affiliate Disclosure
                </Link>
                .
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-navy-400 align-center">
            &copy; {YEAR} AirNexa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
