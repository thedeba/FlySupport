import Link from "next/link";

export type RelatedService = {
  href: string;
  title: string;
  description: string;
};

export default function RelatedServices({
  services,
  excludeHref,
}: {
  services: { href: string; title: string; description: string }[];
  excludeHref?: string;
}) {
  const items = services.filter((service) => service.href !== excludeHref);
  return (
    <section aria-labelledby="related-services-heading" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="related-services-heading"
          className="text-xl font-extrabold tracking-tight text-navy-900 sm:text-2xl"
        >
          Related Services
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-600">
          Every situation is different. Explore our other flight assistance
          services, or call us and we&rsquo;ll point you in the right direction.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-200 hover:bg-white hover:shadow-md"
              >
                <span className="text-base font-bold text-navy-900 group-hover:text-navy-700">
                  {service.title}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
                <span className="mt-1.5 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
