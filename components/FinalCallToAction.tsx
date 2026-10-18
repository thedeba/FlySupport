import { Phone } from "lucide-react";
import CallButton from "@/components/CallButton";
import { PHONE_DISPLAY, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export default function FinalCallToAction({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden border-t border-navy-200 bg-navy-900 py-16 sm:py-20"
    >
      <div className="blob blob-orange top-[-10%] right-[-8%] w-[35%] h-[35%] translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      <div className="blob blob-sky bottom-[-10%] left-[-8%] w-[40%] h-[40%] translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id="final-cta-heading"
          className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-200">
          {subheading}
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <CallButton label="Call Now" variant="primary" className="w-full sm:w-auto" />
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 rounded-full border border-orange-500/50 bg-orange-500/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-orange-400" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                Customer support
              </p>
              <p className="text-base font-bold text-white">
                {PHONE_CONFIGURED ? PHONE_DISPLAY : PRODUCTION_PLACEHOLDER}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
