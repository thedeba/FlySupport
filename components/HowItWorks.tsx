import { PhoneCall, ClipboardList, CheckCircle2 } from "lucide-react";
import { PHONE_TEL, PHONE_CONFIGURED, PRODUCTION_PLACEHOLDER } from "@/lib/phone";

const STEPS = [
  {
    icon: PhoneCall,
    step: "Step 1",
    title: "Call Our Team",
    description:
      "Call the customer support number displayed on our website.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "Explain Your Travel Needs",
    description:
      "Tell the representative what kind of flight assistance you need.",
  },
  {
    icon: CheckCircle2,
    step: "Step 3",
    title: "Discuss Available Options",
    description:
      "Review the available options, applicable conditions, and any service fees before proceeding.",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative isolate bg-navy-50/60 py-16 sm:py-20 overflow-hidden"
    >
      <div className="blob blob-orange top-[-10%] right-[-12%] w-[35%] h-[35%] translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl section-head"
          >
            How It Works
          </h2>
          <span
            className="mx-auto mt-3 block h-1 w-12 rounded-full bg-orange-500 sm:mx-0"
            aria-hidden="true"
          />
          <p className="mt-4 text-base leading-relaxed text-navy-600 max-w-xl mx-auto">
            Getting assistance is a simple phone conversation. No forms, no
            waiting on email — just call and talk through your situation.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="relative flex flex-col items-center rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-sm card-group">
                <div className="mb-5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                  {step.step}
                </p>
                <h3 className="mt-2 text-lg font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {step.description}
                </p>
                {PHONE_CONFIGURED ? (
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-6 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600"
                    aria-label={`Call ${step.title.toLowerCase()}`}
                  >
                    Call Now
                  </a>
                ) : (
                  <span
                    className="mt-6 inline-flex min-h-[50px] cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-gray-300 px-5 py-3 text-sm font-bold text-gray-600 opacity-70 grayscale"
                  >
                    {PRODUCTION_PLACEHOLDER}
                  </span>
                )}
              </div>
              <span className="absolute left-1/2 -top-28 hidden h-5 w-5 shrink-0 rounded-full border-4 border-orange-500 bg-white sm:block" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-navy-500">
          Outcomes depend on airline rules, ticket conditions, and seat
          availability. Our team will clearly explain any applicable conditions
          and service fees before you decide how to proceed.
        </p>
      </div>
    </section>
  );
}
