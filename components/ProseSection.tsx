export default function ProseSection({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {heading && (
          <h2 className="text-xl font-extrabold tracking-tight text-navy-900 sm:text-2xl">
            {heading}
          </h2>
        )}
        <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-700">{children}</div>
      </div>
    </section>
  );
}
