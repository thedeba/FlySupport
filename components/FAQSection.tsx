import FAQAccordion from "@/components/FAQAccordion";
import CallButton from "@/components/CallButton";
import type { Faq } from "@/lib/faq-type";

export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section aria-labelledby="faq-heading" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-600">
            Quick answers to the questions we hear most often. If your question
            isn&rsquo;t covered here, just give us a call.
          </p>
        </div>
        <div className="mt-10">
          <FAQAccordion faqs={faqs} />
        </div>
        <div className="mt-10 text-center">
          <CallButton
            label="Still Have Questions? Call Our Team."
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
