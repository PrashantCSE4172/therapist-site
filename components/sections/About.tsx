"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#FFFDF5] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            With over a decade of experience, Dr. Serena Blake helps individuals and couples
            navigate challenges and build emotional resilience. Her compassionate,
            evidence-based approach fosters healing and meaningful change.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Image
            src="/images/about.jpg"
            alt="Dr. Serena Blake"
            width={300}
            height={300}
            className="rounded-xl shadow-lg w-auto h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
