"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fffaf5] shadow-md" : "bg-[#fffaf5]/70 backdrop-blur"
      }`}
      style={{ height: "80px" }} // Total navbar height
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <span className="text-2xl font-serif font-bold text-[#7c6f64]">
          Dr. Serena Blake
        </span>

        {/* Nav links */}
        <div className="flex items-center h-full">
          <nav className="flex items-center gap-10 text-base font-medium text-[#5e534d]">
            <a href="#about" className="hover:text-[#9a7b6f] transition">About</a>
            <a href="#services" className="hover:text-[#9a7b6f] transition">Services</a>
            <a href="#faq" className="hover:text-[#9a7b6f] transition">FAQ</a>
            <a href="#contact" className="hover:text-[#9a7b6f] transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
