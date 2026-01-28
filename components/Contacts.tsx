import { Phone, Mail, Facebook, Clock, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contacts() {
  return (
    <section
      className="py-20 bg-linear-to-b from-background to-(--light-green)"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — contacts */}
          <div
            className="
            rounded-[36px]
            bg-linear-to-b from-[#F3FAF6] to-white
            p-10 md:p-14
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          "
          >
            <div className="space-y-10">
              {/* Phones */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-full bg-emerald-200 flex items-center justify-center">
                  <Phone className="text-(--emerald)" />
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
                <div className="min-w-11 h-11 rounded-full bg-emerald-200 flex items-center justify-center">
                  <Mail className="text-(--emerald)" />
                </div>
                <div>
                  <a
                    href="mailto:info@pahomecareservices.co.uk"
                    className="text-lg md:text-xl font-medium text-(--purple) hover:underline break-all"
                  >
                    p.ahomecareservices@outlook.com
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-full bg-emerald-200 flex items-center justify-center">
                  <Facebook className="text-(--emerald)" />
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
            rounded-[36px]
            bg-linear-to-b from-[#F3FAF6] to-white
            p-10 md:p-14
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          "
          >
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="text-(--emerald) mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Our area</h3>
                <p className="text-lg">Sheffield</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <Clock className="text-(--emerald) mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Working hours</h3>
                <p className="text-lg">7:00 – 22:00, every day</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Outside these hours, please leave us a message and we’ll get back
              to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
