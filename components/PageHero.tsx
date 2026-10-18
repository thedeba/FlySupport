import CallButton from "@/components/CallButton";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbLabel,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbLabel?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div className="blob blob-sky top-[-12%] left-[-10%] w-[35%] h-[35%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        {crumbLabel && <Breadcrumbs label={crumbLabel} />}
        {eyebrow && (
          <p className="mb-3 section-eyebrow">{eyebrow}</p>
        )}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl section-head">
          {title}
        </h1>
        <span
          className="mx-auto mt-4 block h-1 w-12 rounded-full bg-orange-500 sm:mx-0"
          aria-hidden="true"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200 section-subtitle">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <CallButton
            label="Call Now"
            variant="primary"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
