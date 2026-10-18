import Link from "next/link";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="FlySupport — go to homepage"
    >
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded-xl p-1.5 ${
          variant === "light" ? "bg-white" : "bg-navy-50"
        }`}
      >
        <img
          src="/images/logo.jpeg"
          alt=""
          width={32}
          height={32}
          loading="eager"
          decoding="async"
          className="h-8 w-8 max-w-none object-cover"
        />
      </span>
      <span
        className={`text-lg font-extrabold tracking-tight sm:text-xl ${
          variant === "light" ? "text-white" : "text-navy-900"
        }`}
      >
        FlySupport
      </span>
    </Link>
  );
}
