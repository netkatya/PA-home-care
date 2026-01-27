import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

export default function Services() {
  return (
    <section
      className="pb-20 bg-linear-to-b from-(--lavander) to-background"
      id="services"
    >
      <div className="bg-white w-full h-0.5 mb-20"></div>
      <div className="container">
        <SectionTitle>Our Services</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
