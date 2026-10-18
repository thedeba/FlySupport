"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-navy-50"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-0 z-50 flex h-full flex-col bg-white shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-navy-100 px-4 py-3">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-navy-50"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
          </div>

          <NavLinks mobile />

          <div className="border-t border-navy-100 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href={PHONE_CONFIGURED ? `tel:${PHONE_TEL}` : undefined}
              aria-disabled={!PHONE_CONFIGURED}
              aria-label={PHONE_CONFIGURED ? `Call Flight Support: ${PHONE_DISPLAY}` : undefined}
              className={`flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-4 text-base font-bold text-white shadow-sm transition-colors ${
                PHONE_CONFIGURED ? "hover:bg-orange-600 active:bg-orange-700" : "pointer-events-none opacity-60 grayscale"
              }`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {PHONE_CONFIGURED ? PHONE_DISPLAY : PRODUCTION_PLACEHOLDER}
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
