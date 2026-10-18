import Image from "next/image";
import { Phone, Plane } from "lucide-react";
import CallButton from "@/components/CallButton";
import { HERO_IMAGE } from "@/lib/helpers";
import { PHONE_DISPLAY, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src={HERO_IMAGE}
        alt="Commercial airplane flying above the clouds at sunrise"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/90" aria-hidden="true" />
      <div className="blob blob-orange top-[-10%] left-[-10%] w-[40%] h-[40%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="blob blob-sky bottom-[-15%] right-[-10%] w-[45%] h-[45%] translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="max-w-2xl">
          <p className="mb-3 section-eyebrow">U.S.-focused flight assistance</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl section-head">
            Need Help With Your Flight?<br />
            <span className="text-orange-400">We&rsquo;re Just a Call Away.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 section-subtitle">
            Looking for a flight, need to change your travel plans, or dealing
            with a cancellation? Call our team to discuss your available
            options.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center">
            <CallButton
              label="Call Now for Flight Assistance"
              variant="primary"
              className="w-full sm:w-auto"
            />
            <a
              href="#services"
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <Plane className="h-5 w-5 shrink-0" aria-hidden="true" />
              Explore Our Services
            </a>
          </div>
          <div className="mt-9 flex items-center justify-center gap-3 text-base font-semibold text-white sm:justify-start sm:ml-0">
            <div className="relative h-10 w-10 shrink-0 rounded-full border border-orange-500/50 bg-orange-500/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-orange-400" aria-hidden="true" />
            </div>
            <span>
              {PHONE_CONFIGURED ? (
                <>
                  Customer support:<br />
                  <span className="block font-bold text-orange-300">{PHONE_DISPLAY}</span>
                </>
              ) : (
                <span className="text-navy-200">{PRODUCTION_PLACEHOLDER}</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
