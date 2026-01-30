import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section className="py-10" id="about">
      <div className="container flex flex-col-reverse xl:flex-row gap-10">
        <div className="min-w-[50%]">
          <ul className="flex gap-4 md:gap-8 justify-center">
            <li className="bg-(--purple) rounded-3xl p-4 w-full max-w-90 shadow-[0_8px_20px_rgba(90,45,111,0.75)]">
              <div className=" overflow-hidden rounded-3xl mb-3">
                <Image
                  src="/img/about/mark.png"
                  alt="Carer's photo"
                  width={80}
                  height={100}
                  className="w-full brightness-[0.95] saturate-[0.9]"
                ></Image>
              </div>

              <p className="text-background mb-3">Mark Foster</p>
              <p className="text-background italic ">
                “We believe that everyone deserves to feel safe, respected and
                cared for in their own home.”
              </p>
            </li>
            <li className="bg-(--purple) rounded-3xl p-4 w-full max-w-90 shadow-[0_8px_20px_rgba(90,45,111,0.75)]">
              <div className=" overflow-hidden rounded-3xl mb-3">
                <Image
                  src="/img/about/roz1.png"
                  alt="carer's photo"
                  width={80}
                  height={100}
                  className=" w-full w-full brightness-[0.95] saturate-[0.9]"
                ></Image>
              </div>

              <p className="text-background mb-3">Roz Hasa</p>
              <p className="text-background italic ">
                “For us, care is personal — it’s about building relationships,
                not just providing services.”
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <SectionTitle>About us</SectionTitle>
          <p className="mb-5 text-lg md:text-xl">
            <strong>P.A. Home Care Services</strong> was created by people who
            genuinely care about making a difference in the lives of
            others.{" "}
          </p>
          <p className="mb-5 text-lg md:text-xl">
            As the owners of the service, we are closely involved in both the
            day-to-day care and the support we offer to families. We take the
            time to listen, understand individual needs and provide care that
            feels reassuring, respectful and dependable.
          </p>{" "}
          <p className="mb-5 text-lg md:text-xl">
            Our aim is to help people remain comfortable and independent in
            their own homes, while offering families peace of mind knowing their
            loved ones are in safe and caring hands.
          </p>
        </div>
      </div>
    </section>
  );
}
