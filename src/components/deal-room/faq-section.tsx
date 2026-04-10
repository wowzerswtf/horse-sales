"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How does the buying process work?",
    a: "Start by submitting an inquiry through the Deal Room. We'll respond within 24 hours with additional information and schedule a video call or in-person visit. If you'd like to proceed, we can arrange a Pre-Purchase Exam (PPE) for $1,000. Once you're satisfied, we handle all paperwork and coordinate shipping.",
  },
  {
    q: "What is a Pre-Purchase Exam (PPE)?",
    a: "A PPE is a veterinary examination performed before purchase. It includes a physical exam, lameness evaluation, flexion tests, and any X-rays you want. The cost is $1,000 and we strongly recommend it on every horse. All sales are final, so the PPE is your protection.",
  },
  {
    q: "Can I try the horse before buying?",
    a: "Yes. We encourage buyers to ride every horse before purchasing. We can schedule a visit to the horse's current location or arrange for the horse to be available at a convenient facility. For out-of-state buyers, we can set up a video call showing the horse being ridden.",
  },
  {
    q: "How does shipping work?",
    a: "We work with licensed, insured commercial haulers across the US. Shipping costs vary by distance — typically $1-3 per loaded mile. We coordinate everything and the horse is insured during transit. Most deliveries happen within 1-2 weeks of purchase.",
  },
  {
    q: "Are all sales final?",
    a: "Yes, all sales are final. This is why we strongly recommend a Pre-Purchase Exam before every purchase and encourage you to ride the horse in person. We are fully transparent about every horse's history, health, and training — the Deal Room shows you everything.",
  },
  {
    q: "Why should I buy through a broker instead of direct?",
    a: "We vet every horse before listing — checking training, soundness, temperament, and history. We handle negotiations, paperwork, and shipping logistics. Our reputation is on the line with every sale, which means we only list horses we believe in. You also get access to horses that aren't publicly listed yet through our First Look email list.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="rounded-lg border border-brand-tan/20 bg-white"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <span className="pr-4 text-sm font-semibold text-brand-dark">
              {faq.q}
            </span>
            <span className="shrink-0 text-brand-dark/40">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="border-t border-brand-tan/10 px-4 pb-4 pt-3">
              <p className="text-sm leading-relaxed text-brand-dark/70">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
