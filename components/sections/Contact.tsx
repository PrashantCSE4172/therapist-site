"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#fdfaf6]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#7c6f64]">
          Contact
        </h2>
        <p className="text-lg text-[#7c6f64] mb-8">
          Ready to take the next step? Reach out today to schedule a consultation.
        </p>
        <a
          href="mailto:serena@example.com"
          className="text-[#9a7b6f] hover:underline text-lg font-medium"
        >
          serena@example.com
        </a>
      </div>
    </section>
  );
}
