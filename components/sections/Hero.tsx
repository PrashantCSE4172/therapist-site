"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow text-white">
            Helping You Find Peace Within
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow text-white">
            Compassionate therapy services tailored to your journey.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}
