import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Header />
      <div className="pt-20"> {/* Offset for sticky header */}
        <Hero />
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
      </div>
    </main>
  );
}
