"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/flight-booking", label: "Flight Booking" },
  { href: "/flight-changes", label: "Flight Changes" },
  { href: "/flight-cancellation", label: "Cancellations" },
  { href: "/missed-flight", label: "Missed Flights" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <ul className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-[48px] items-center rounded-xl px-4 py-3 text-base transition-colors ${
                  active
                    ? "bg-navy-50 font-bold text-navy-900"
                    : "font-medium text-navy-700 hover:bg-navy-50"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    className="ml-auto h-2.5 w-2.5 rounded-full bg-orange-500"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-0.5">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex h-9 items-center whitespace-nowrap rounded-full px-3 text-[13px] font-semibold transition-colors xl:px-3.5 xl:text-sm ${
                active
                  ? "bg-navy-900 text-white"
                  : "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
