import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="pt-24
        min-h-[80vh]
        flex items-center justify-center
        bg-linear-to-b from-(--lavander) to-background
        px-6
      "
    >
      <div
        className="
          max-w-xl w-full
          bg-white/80 backdrop-blur
          rounded-3xl
          p-10 md:p-14
          text-center
          shadow-[0_20px_50px_rgba(90,45,111,0.15)]
        "
      >
        {/* Big 404 */}
        <p className="text-(--emerald) text-6xl md:text-7xl font-semibold mb-4">
          404
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-(--purple)">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-8">
          Sorry, the page you’re looking for doesn’t seem to exist.
          <br />
          It may have been moved or the link could be incorrect.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-3xl
              bg-(--emerald)
              text-white text-lg font-medium
              border border-(--emerald)
              hover:bg-white hover:text-(--emerald)
              transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
