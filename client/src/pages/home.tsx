import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import ServiceAreas from "@/components/service-areas";
import OnlineTherapy from "@/components/online-therapy";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsapp />
      <main className="pt-20">
        <Hero />
        <About />
        <ServiceAreas />
        <OnlineTherapy />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
