import { PhoneCall, Repeat, Wallet, Headset, ClipboardList } from "lucide-react";

const BENEFITS = [
  {
    icon: PhoneCall,
    title: "Convenient phone-based assistance",
    description:
      "Get help with a simple phone call — no online forms, no account setup, no waiting for an email reply.",
  },
  {
    icon: Repeat,
    title: "Help understanding change options",
    description:
      "Our team walks you through what may be possible with your ticket, based on airline rules and fare conditions.",
  },
  {
    icon: Wallet,
    title: "Clear service-fee explanations",
    description:
      "Before you proceed, we explain any applicable service fees so you know exactly where you stand.",
  },
  {
    icon: Headset,
    title: "Easy access to customer support",
    description:
      "One phone number connects you with a real person who can talk through your travel situation.",
  },
  {
    icon: ClipboardList,
    title: "A straightforward process",
    description:
      "Call, explain what you need, and review the available options — a simple three-step process.",
  },
];

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="benefits-heading"
            className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl section-head"
          >
            Why Choose Our Service?
          </h2>
          <span
            className="mx-auto mt-3 block h-1 w-12 rounded-full bg-orange-500 sm:mx-0"
            aria-hidden="true"
          />
          <p className="mt-4 text-base leading-relaxed text-navy-600 max-w-xl mx-auto">
            Travel disruptions are stressful enough. We keep the process of
            getting help simple, honest, and phone-first.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="flex gap-4 rounded-3xl border border-navy-100 bg-slate-50 p-8 hover:border-orange-500/60 hover:shadow-xl transition-all duration-300"
            >
              <span className="mb-2 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-orange-600">
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="group">
                <h3 className="text-base font-bold text-navy-900 group-hover:text-orange-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
          <li className="flex flex-col items-start justify-center gap-4 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-8">
            <h3 className="text-lg font-bold text-white">Ready to talk through your options?</h3>
            <p className="text-sm leading-relaxed text-navy-100/90">
              Our team is one phone call away. We&rsquo;ll listen first, then
              walk you through what may be possible.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
