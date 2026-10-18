import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
        <li>
          <Link
            href="/"
            className="flex min-h-[44px] items-center rounded-full px-3 py-1.5 -ml-3 text-navy-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-navy-400" aria-hidden="true" />
        <li aria-current="page" className="px-1 text-sky-200">
          {label}
        </li>
      </ol>
    </nav>
  );
}
