import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-23 hero flex items-end md:items-center max-w-full min-h-[85vh] sm:min-h-[80vh] md:min-h-[85vh]">
      <div className="container relative z-10 w-full">
        <div className="w-full md:w-1/2 flex flex-col pb-10 sm:pb-14 md:pb-0">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-[125%] mb-6 md:mb-10">
            Professional Home Care Services You Can Trust
          </h1>

          <p className="text-lg leading-[160%] mb-10 md:mb-12">
            <strong className="font-semibold">P.A. Home Care Services </strong>
            is a local, independently owned business based in Sheffield, run by
            people who really care. We provide person-centred care tailored to
            individual needs.
          </p>

          <Link
            href="#free"
            className="
              inline-flex w-fit items-center justify-center
              px-8 py-4
              rounded-3xl
              text-lg md:text-xl font-medium
              bg-(--emerald-dark) text-background
              border border-(--emerald-dark)
              hover:bg-white hover:text-(--emerald-dark)
              transition-all duration-300
              shadow-xl hover:shadow-2xl
            "
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
