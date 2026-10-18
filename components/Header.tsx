import { Phone } from "lucide-react";
import MobileNavigation from "@/components/MobileNavigation";
import NavLinks from "@/components/NavLinks";
import Logo from "@/components/Logo";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={PHONE_CONFIGURED ? `tel:${PHONE_TEL}` : undefined}
            aria-disabled={!PHONE_CONFIGURED}
            aria-label={PHONE_CONFIGURED ? `Call us at ${PHONE_DISPLAY}` : undefined}
            className={`hidden h-11 items-center gap-2 rounded-full px-4 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-50 xl:flex ${
              PHONE_CONFIGURED ? "" : "pointer-events-none opacity-60 grayscale"
            }`}
          >
            <Phone className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
            <span className="whitespace-nowrap">
              {PHONE_CONFIGURED ? PHONE_DISPLAY : PRODUCTION_PLACEHOLDER}
            </span>
          </a>

          <a
            href={PHONE_CONFIGURED ? `tel:${PHONE_TEL}` : undefined}
            aria-disabled={!PHONE_CONFIGURED}
            aria-label={PHONE_CONFIGURED ? `Call Now at ${PHONE_DISPLAY}` : undefined}
            className={`hidden h-11 items-center gap-2 whitespace-nowrap rounded-full bg-orange-500 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow md:flex lg:px-4 ${
              PHONE_CONFIGURED ? "" : "pointer-events-none opacity-60 grayscale"
            }`}
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden lg:inline">Call Now</span>
            <span className="lg:hidden">Call</span>
          </a>

          <a
            href={PHONE_CONFIGURED ? `tel:${PHONE_TEL}` : undefined}
            aria-disabled={!PHONE_CONFIGURED}
            aria-label={PHONE_CONFIGURED ? `Call Now at ${PHONE_DISPLAY}` : undefined}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm transition-colors md:hidden ${
              PHONE_CONFIGURED ? "hover:bg-orange-600 active:bg-orange-700" : "pointer-events-none opacity-60 grayscale"
            }`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
