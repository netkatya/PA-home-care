import Image from "next/image";

export type ServiceProps = {
  title: string;
  src: string;
  text: string;
};

export default function ServiceCard({ title, src, text }: ServiceProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-3xl border border-purple-200/60
        bg-white/70 backdrop-blur
        px-6 py-6
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-200/40
      "
    >
      {/* shimmer */}
      <span
        className="
    pointer-events-none
    absolute inset-0
    -translate-x-full
    bg-linear-to-r
    from-transparent
    to-transparent
    mix-blend-overlay blur-sm
    transition-transform duration-700 ease-out
    group-hover:translate-x-full
  "
      />

      <div className="relative z-10 flex items-center gap-4">
        <div
          className="
            rounded-2xl bg-[#E6DFF0]
            grid place-items-center
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          <Image src={src} alt="" aria-hidden width={100} height={100} />
        </div>

        <div>
          <h3 className="font-semibold text-lg xl:text-xl text-(--purple)">
            {title}
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
