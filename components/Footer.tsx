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
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
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
              FlySupport is an independent travel assistance service. We help
              travelers understand their flight booking, change, and
              cancellation options over the phone.
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
              Company
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
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Disclaimer
          </h2>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-navy-300">
            FlySupport is an independent travel assistance service and is not
            an airline. We are not affiliated with, endorsed by, or sponsored
            by any airline, nor do we claim to hold any official airline
            partnership. Airline rules, fare conditions, availability, and any
            applicable fees determine the options discussed during your call;
            no refund, rebooking, or price is guaranteed. For full details,
            see our{" "}
            <Link
              href="/cancellation-refund-policy"
              className="font-semibold text-navy-200 underline underline-offset-2 transition-colors hover:text-white"
            >
              Cancellation &amp; Refund Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-of-service"
              className="font-semibold text-navy-200 underline underline-offset-2 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-navy-400 align-center">
            &copy; {YEAR} FlySupport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
