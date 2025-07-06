"use client";

import { useState } from "react";

const faqs = [
  { q: "Do you accept insurance?", a: "No, but a superbill is provided for self-submission." },
  { q: "Do you offer virtual sessions?", a: "Yes, teletherapy is available for all residents of California." },
  { q: "What is your cancellation policy?", a: "Cancellations require 24-hour notice to avoid charges." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#fdfaf6]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12 text-[#7c6f64]">
          FAQs
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left flex justify-between items-center group focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-semibold text-[#7c6f64] group-hover:text-[#9a7b6f] transition-all">
                    {faq.q}
                  </span>
                  <span
                    className={`text-2xl text-[#9a7b6f] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`mt-3 text-gray-700 text-base transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
