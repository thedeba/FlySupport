import type { LucideIcon } from "lucide-react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
}: ServiceCardProps) {
  const enabled = PHONE_CONFIGURED;
  return (
    <article className="card-group relative flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-8 shadow-sm hover:border-orange-500/60 hover:shadow-xl">
      <div className="relative mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy-900 transition-all duration-300 group-hover:scale-110 group-hover:bg-navy-900 group-hover:text-white">
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
        <Icon className="h-7 w-7 relative z-10" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-navy-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
        {description}
      </p>
      <div className="mt-auto">
        {enabled ? (
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            aria-label={ctaLabel}
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {ctaLabel}
          </a>
        ) : (
          <span
            aria-disabled="true"
            title="Configure the support phone number to enable call actions."
            className="inline-flex min-h-[50px] cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-gray-300 px-5 py-3 text-sm font-bold text-gray-600 opacity-70 grayscale"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {PRODUCTION_PLACEHOLDER}
          </span>
        )}
      </div>
    </article>
  );
}
