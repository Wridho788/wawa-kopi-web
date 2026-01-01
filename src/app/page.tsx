import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import Menu from "@/components/sections/Menu";
import Atmosphere from "@/components/sections/Atmosphere";
import Location from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Menu />
        <Atmosphere />
        <Location />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

