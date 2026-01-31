import { Phone, Mail, Facebook, Clock, MapPin, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contacts() {
  return (
    <section
      className="pt-10 pb-20 bg-linear-to-b from-background to-(--light-green)"
      id="contacts"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10">
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-lg md:text-xl leading-relaxed">
            We’re happy to answer questions and discuss how we can support you
            or your loved ones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
          {/* LEFT — contacts */}
          <div
            className="
            rounded-[30px]
            bg-linear-to-b from-[#F3FAF6] to-white
            p-10 md:p-14
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            min-h-95
          "
          >
            <div className="space-y-10">
              {/* Phones */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-full bg-(--light-emerald) flex items-center justify-center">
                  <Phone className="text-(--emerald-dark)" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-1 items-baseline">
                    <a
                      href="tel:+447787996069"
                      className="block text-lg md:text-xl font-medium text-(--purple) hover:underline"
                    >
                      +44 7787 996 069
                    </a>
                    <p className="text-lg tracking-wide mb-1">- Roz</p>
                  </div>
                  <div className="flex flex-wrap gap-1 items-baseline">
                    <a
                      href="tel:+447395077653"
                      className="block text-lg md:text-xl font-medium text-(--purple) hover:underline"
                    >
                      +44 7395 077 653
                    </a>
                    <p className="text-lg tracking-wide mb-1">- Mark</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="min-w-11 h-11 rounded-full bg-(--light-emerald) flex items-center justify-center">
                  <Mail className="text-(--emerald-dark)" />
                </div>
                <div>
                  <a
                    href="mailto:p.ahomecareservices@outlook.com"
                    className="text-lg md:text-xl font-medium text-(--purple) hover:underline break-all"
                  >
                    p.ahomecareservices@outlook.com
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-full bg-(--light-emerald) flex items-center justify-center">
                  <Facebook className="text-(--emerald-dark)" />
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/share/1Zy8aNRjae/?mibextid=wwXIfr"
                    target="_blank"
                    className="text-lg md:text-xl font-medium text-(--purple) hover:underline"
                  >
                    Visit us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — highlight block */}
          <div
            className="
            rounded-[30px]
            bg-linear-to-b from-[#F3FAF6] to-white
            p-10 md:p-14
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            min-h-95
          "
          >
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="text-(--emerald-dark) mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Our area</h3>
                <p className="text-lg">Sheffield - S2, S7, S8, S10, S11, S14</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <Clock className="text-(--emerald-dark) mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Working hours</h3>
                <p className="text-lg">6:15 – 22:00, every day</p>
              </div>
            </div>

            <p>
              Outside these hours, please leave us a message and we’ll get back
              to you as soon as possible.
            </p>
          </div>
        </div>
        <div
          className="
            rounded-[30px]
            bg-linear-to-b from-[#F3FAF6] to-white
            p-10 md:p-14
            shadow-[0_20px_50px_rgba(0,0,0,0.12)] max-w-150 m-auto
          "
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-(--light-emerald) flex items-center justify-center shrink-0">
              <Users className="text-(--emerald-dark)" />
            </div>

            <p className="text-xl leading-relaxed">
              We are{" "}
              <span className="text-(--emerald-dark) font-semibold">
                hiring{" "}
              </span>
              people to join our team. If you are caring and reliable, we’d love
              to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
