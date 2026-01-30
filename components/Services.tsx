import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

export default function Services() {
  return (
    <section
      className="pt-20 pb-10 bg-linear-to-b from-(--lavander) to-background"
      id="services"
    >
      <div className="container">
        <SectionTitle>Our Services</SectionTitle>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
