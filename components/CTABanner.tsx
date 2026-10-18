import Link from "next/link";
import CallButton from "@/components/CallButton";

export default function CTABanner({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  return (
    <section
      aria-labelledby="cta-banner-heading"
      className="relative isolate overflow-hidden border-t border-navy-200 bg-white py-16 sm:py-20"
    >
      <div className="blob blob-orange top-[-8%] right-[-12%] w-[30%] h-[30%] translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      <div className="blob blob-sky bottom-[-8%] left-[-12%] w-[35%] h-[35%] translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id="cta-banner-heading"
          className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-600">
          {subheading}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CallButton label="Call Now" variant="primary" className="w-full sm:w-auto" />
          <Link
            href="/"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border-2 border-navy-100 bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900 sm:w-auto"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
