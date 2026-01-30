import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function FreeConsultation() {
  return (
    <section
      className="pt-20 pb-10 bg-linear-to-b from-(--light-green) to-background"
      id="free"
    >
      <div className="container">
        {/* Title */}
        <div className=" mb-14">
          <SectionTitle>Free Consultation</SectionTitle>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            Our free consultation is a friendly, no-obligation visit where we
            take the time to understand individual needs and discuss the most
            suitable care options.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* What's included */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">What’s included</h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-(--emerald) font-bold">✓</span>
                <span className="text-lg leading-relaxed">
                  Getting to know the individual receiving care
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-(--emerald) font-bold">✓</span>
                <span className="text-lg leading-relaxed">
                  Discussing daily routines, preferences and wishes
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-(--emerald) font-bold">✓</span>
                <span className="text-lg leading-relaxed">
                  Assessing care needs, including personal care and medication
                  support
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-(--emerald) font-bold">✓</span>
                <span className="text-lg leading-relaxed">
                  Understanding the home environment and any health
                  considerations
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-(--emerald) font-bold">✓</span>
                <span className="text-lg leading-relaxed">
                  Explaining our services and answering any questions
                </span>
              </li>
            </ul>
          </div>

          {/* What happens next */}
          <div className="bg-background rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <h3 className="text-2xl font-semibold mb-4">What happens next</h3>

            <p className="text-lg md:text-xl mb-4">
              After the consultation, we can recommend the most suitable type of
              care, how often support may be needed and the length of each
              visit.
            </p>

            <p className="text-lg md:text-xl">
              We also provide clear information about care options and costs,
              with no pressure or obligation — simply guidance to help you make
              the right decision.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="#contacts"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              bg-(--emerald) border border-(--emerald)
              hover:bg-background
              transition-colors duration-300
              rounded-3xl
              text-background hover:text-(--emerald-dark)
              text-xl font-medium
              shadow-xl hover:shadow-2xl
            "
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
