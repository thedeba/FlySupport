import { Sparkle } from "lucide-react";

const MESSAGES = [
  "Flight Booking Assistance",
  "Emergency Flight Changes",
  "Flight Cancellation Help",
  "Missed Flight Support",
  "Last-Minute Travel Help",
  "Talk to a Real Person",
  "No Forms — Just Call",
];

const ITEMS = [...MESSAGES, ...MESSAGES];

export default function Marquee() {
  return (
    <div
      className="group relative overflow-hidden border-y border-navy-100 bg-white py-3.5"
      role="marquee"
      aria-label="Our services"
    >
      <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
        {ITEMS.map((message, index) => (
          <span
            key={`item-${index}`}
            className="flex shrink-0 items-center gap-8"
          >
            <span className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-navy-800">
              {message}
            </span>
            <Sparkle
              className="h-4 w-4 shrink-0 text-orange-500"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
