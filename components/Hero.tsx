import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero max-w-full h-210 lg:h-200">
      <div className="container relative z-10">
        <div className="w-full xl:w-[47%] pt-90 xl:pt-50">
          <h1 className="font-bold text-3xl md:text-5xl leading-[125%] mb-6 md:mb-10">
            Professional Home Care Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl leading-[160%] mb-12">
            <strong className="font-semibold">P.A. Home Care Services </strong>{" "}
            is a local, independently owned business based in Sheffield, run by
            people who really care. We provide person-centred care tailored to
            individual needs.{" "}
          </p>
          <Link
            href="#free"
            className="inline-flex items-center justify-center px-8 py-4
    bg-emerald-700 border border-emerald-700
    hover:bg-background
    transition-colors duration-300
    rounded-3xl
    text-background hover:text-emerald-700 text-xl font-medium
    shadow-xl hover:shadow-2xl"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
