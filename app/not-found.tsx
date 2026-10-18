import Link from "next/link";
import { PhoneOff } from "lucide-react";
import CallButton from "@/components/CallButton";

export default function NotFound() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-white">
          <PhoneOff className="h-8 w-8" aria-hidden="true" />
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved. Head back to the homepage to explore our flight assistance
          services.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-navy-800 bg-white px-6 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-navy-50"
          >
            Back to Homepage
          </Link>
          <CallButton label="Call Flight Support" variant="primary" />
        </div>
      </div>
    </section>
  );
}
