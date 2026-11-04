export default function SEOScripts({
  breadcrumb,
}: {
  breadcrumb?: Record<string, unknown>;
}) {
  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
    </>
  );
}
