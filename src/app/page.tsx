import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothAnchors from "@/components/SmoothAnchors";
import RevealOnScroll from "@/components/RevealOnScroll";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothAnchors />
      <RevealOnScroll />
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
