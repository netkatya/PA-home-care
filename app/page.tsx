import About from "@/components/About";
import Contacts from "@/components/Contacts";
import FreeConsultation from "@/components/FreeConsultation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <Services />
      <WhyChooseUs />
      <About />
      <FreeConsultation />
      <Contacts />
    </main>
  );
}
