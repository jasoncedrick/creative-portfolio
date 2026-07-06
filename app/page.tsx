import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Stack } from "@/components/Stack";
import { Languages } from "@/components/Languages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Stack />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
