import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function WhyChooseUs() {
  return (
    <section
      className="py-10 bg-linear-to-b from-background to-(--lavander)"
      id="why"
    >
      <div className="container">
        {/* Title */}
        <div className="max-w-5xl mx-auto mb-16">
          <SectionTitle>Why Choose Us</SectionTitle>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            Choosing the right home care provider is an important decision. We
            focus on trust, honesty and genuine understanding to provide care
            that feels safe, personal and dependable.
          </p>
        </div>

        {/* Item 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="relative w-full max-w-90 h-60 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-three.jpg"
              alt="Experience you can trust"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Experience you can trust
            </h3>
            <p className="text-lg leading-relaxed">
              We have over{" "}
              <span className="text-(--emerald-dark) font-medium">
                ten years
              </span>{" "}
              of experience in home care. This experience helps us understand
              individual needs, recognise what truly matters and provide support
              that feels reassuring, respectful and reliable from the very
              beginning.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              A transparent and flexible approach
            </h3>
            <p className="text-lg leading-relaxed">
              We believe care should be clear and straightforward. After your{" "}
              <span className="text-(--emerald-dark) font-medium">
                free consultation
              </span>
              , we explain care options, visit lengths and pricing in an honest
              and easy-to-understand way. Care packages are flexible and can be
              adjusted as needs change over time.
            </p>
          </div>

          <div className="relative w-full max-w-90 h-60 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-five.jpg"
              alt="Transparent and flexible care"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="relative w-full max-w-90 h-60 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-two.jpg"
              alt="Safety and professionalism"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Safety, professionalism and peace of mind
            </h3>
            <p className="text-lg leading-relaxed">
              Care is delivered responsibly and professionally, with appropriate
              checks in place, including{" "}
              <span className="text-(--emerald-dark) font-medium">
                DBS checks
              </span>
              . Families can feel confident knowing their loved ones are
              supported safely, reliably and with careful attention to
              wellbeing.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h3 className="text-center md:text-left text-2xl font-semibold mb-4">
              Care delivered with compassion
            </h3>
            <p className="text-lg leading-relaxed">
              At the heart of everything we do is genuine care. We treat every
              person with{" "}
              <span className="font-medium text-(--emerald-dark)">
                kindness, dignity and respect
              </span>
              , supporting independence while offering reassurance and
              understanding to both individuals and their families.
            </p>
          </div>

          <div className="relative w-full max-w-90 h-60 rounded-3xl overflow-hidden">
            <Image
              src="/img/why/why-four.jpg"
              alt="Care with compassion and respect"
              fill
              className="object-cover brightness-[0.95] saturate-[0.9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
