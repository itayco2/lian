import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Neighborhoods } from "@/components/neighborhoods";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Values } from "@/components/values";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Neighborhoods />
        <About />
        <Services />
        <Values />
        <Testimonials />
        <FAQ />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
