import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export default function StickyMobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_20px_rgba(11,37,69,0.12)] backdrop-blur md:hidden relative isolate overflow-hidden">
      <div className="blob blob-orange -top-[80%] -right-[20%] w-[60%] h-[60%] translate-x-1/2" aria-hidden="true" />
      <a
        href={PHONE_CONFIGURED ? `tel:${PHONE_TEL}` : undefined}
        aria-disabled={!PHONE_CONFIGURED}
        aria-label={
          PHONE_CONFIGURED
            ? `Call Flight Support: ${PHONE_DISPLAY}`
            : "Phone number not configured"
        }
        className={`relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-4 text-base font-bold text-white shadow-xl transition-all active:scale-[0.98] min-h-[56px] max-w-2xl mx-auto ${
          PHONE_CONFIGURED ? "hover:from-orange-600 hover:to-orange-700" : "pointer-events-none opacity-70 grayscale"
        }`}
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="flex flex-col items-start leading-tight">
          <span>Call Flight Support</span>
          <span className="text-sm font-semibold text-orange-100">
            {PHONE_CONFIGURED ? PHONE_DISPLAY : PRODUCTION_PLACEHOLDER}
          </span>
        </span>
      </a>
    </div>
  );
}

export { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER };
