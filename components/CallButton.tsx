import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

const styles = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 hover:bg-orange-600 min-h-[44px]",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-800 bg-white px-6 py-3.5 text-base font-semibold text-navy-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 hover:bg-navy-50 min-h-[44px]",
  light:
    "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white/20 min-h-[44px]",
  inline:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 hover:bg-orange-600 min-h-[44px]",
} as const;

type CallButtonProps = {
  label: string;
  variant?: keyof typeof styles;
  className?: string;
};

export default function CallButton({
  label,
  variant = "primary",
  className = "",
}: CallButtonProps) {
  if (!PHONE_CONFIGURED) {
    const content = (
      <span
        aria-disabled="true"
        className={`pointer-events-none inline-flex items-center justify-center gap-2 rounded-xl bg-gray-300 px-6 py-3.5 text-base font-semibold text-gray-600 ${styles[variant]} opacity-60 grayscale ${className}`}
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        {PRODUCTION_PLACEHOLDER}
      </span>
    );
    return (
      <span title="Configure NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY and NEXT_PUBLIC_SUPPORT_PHONE_TEL to enable call actions.">
        {content}
      </span>
    );
  }

  return (
    <Link
      href={`tel:${PHONE_TEL}`}
      className={`${styles[variant]} ${className}`}
      aria-label={`${label}: ${PHONE_DISPLAY}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
    </Link>
  );
}

export { PHONE_DISPLAY, PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER };
