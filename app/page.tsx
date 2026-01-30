import About from "@/components/About";
import Contacts from "@/components/Contacts";
import FreeConsultation from "@/components/FreeConsultation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FreeConsultation />
      <About />
      <Contacts />
    </>
  );
}
