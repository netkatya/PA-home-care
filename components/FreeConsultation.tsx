import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function FreeConsultation() {
  return (
    <section className="py-14 bg-(--light-green)">
      <div className="container">
        <SectionTitle>Free Consultation</SectionTitle>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed mb-14">
          Our free consultation is a friendly, no-obligation visit designed to
          help us understand individual needs and discuss how we can best
          provide support. It’s an opportunity to get to know each other and
          ensure our care feels right from the very beginning.
        </p>

        {/* What’s included */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">What’s included</h3>

          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="text-lg leading-relaxed">
                Getting to know the individual who will be receiving care and
                building an initial relationship
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="text-lg leading-relaxed">
                Discussing daily routines, personal preferences and wishes
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="text-lg leading-relaxed">
                Assessing care needs, including personal care and medication
                support
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="text-lg leading-relaxed">
                Talking through any health-related considerations that may
                affect care
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="text-lg leading-relaxed">
                Gaining an understanding of the home environment to ensure safe
                and comfortable support
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="text-lg leading-relaxed">
                Explaining our services, how we work, and what to expect from us
              </span>
            </li>
          </ul>
        </div>

        {/* What happens next */}
        <div className="bg-background rounded-3xl p-10 md:p-12 shadow-xl mb-10">
          <h3 className="text-2xl font-semibold mb-4">What happens next</h3>

          <p className="text-xl mb-4">
            Following the consultation, we are able to recommend the most
            suitable type of care and discuss how often support may be needed
            and the length of each visit.
          </p>

          <p className="text-xl mb-4">
            We can also provide clear information about care options and costs,
            and create a personalised care plan tailored to individual needs.
          </p>

          <p className=" text-xl">
            There is no pressure or obligation — our aim is simply to ensure the
            right level of support, delivered in a way that feels comfortable
            and reassuring.
          </p>
        </div>
        <div className="flex justify-center">
          {" "}
          <Link
            href="#contacts"
            className="inline-flex items-center justify-center px-8 py-4
    bg-emerald-700 border border-emerald-700
    hover:bg-background
    transition-colors duration-300
    rounded-3xl
    text-background hover:text-emerald-700 text-xl font-medium
    shadow-xl hover:shadow-2xl"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
