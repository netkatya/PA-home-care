import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 bg-linear-to-b from-background to-(--lavander)"
      id="why"
    >
      <div className="container ">
        {/* Title */}
        <div className="max-w-5xl mx-auto mb-16">
          <SectionTitle>Why Choose Us</SectionTitle>
          <p className="text-lg md:text-xl leading-relaxed">
            We believe good care is built on trust, consistency and a genuine
            understanding of individual needs.
          </p>
        </div>

        {/* Item 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="relative w-full max-w-75 h-50 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-five.jpg"
              alt="Calm home environment"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Small and independent
            </h3>
            <p className="text-lg leading-relaxed">
              We are a small, locally owned home care service, allowing us to
              provide truly personal and consistent care rather than a
              one-size-fits-all approach.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Person-centred and flexible care
            </h3>
            <p className="text-lg leading-relaxed">
              Every care package is tailored to individual routines, preferences
              and needs. We adapt our support to fit around people’s lives — not
              the other way around.
            </p>
          </div>

          <div className="relative w-full max-w-75 h-50 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-one.jpg"
              alt="Flexible home care support"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="relative w-full max-w-75 h-50 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-two.jpg"
              alt="Clear communication and planning"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Clear communication with families
            </h3>
            <p className="text-lg leading-relaxed">
              We value open and honest communication. Families are kept
              informed, questions are always welcome, and everything is
              explained clearly and calmly.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Reliable and consistent support
            </h3>
            <p className="text-lg leading-relaxed">
              Consistency matters in care. We focus on reliability, routine and
              continuity to help people feel safe and comfortable in their own
              homes.
            </p>
          </div>

          <div className="relative w-full max-w-75 h-50 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-three.jpg"
              alt="Reliable daily support"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="relative w-full max-w-75 h-50 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-four.jpg"
              alt="Care delivered with dignity and respect"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Care delivered with dignity and respect
            </h3>
            <p className="text-lg leading-relaxed">
              We treat every person with dignity, kindness and respect,
              supporting independence while offering reassurance and
              understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
