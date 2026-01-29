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
        rounded-3xl border border-purple-200/60
        bg-white/70 backdrop-blur
        px-6 py-6
        transition-colors duration-200
        hover:bg-background
      "
    >
      <div className="flex items-center gap-4">
        <div className=" rounded-2xl bg-[#E6DFF0] grid place-items-center">
          <Image src={src} alt="Service icon" width={100} height={100} />
        </div>
        <div>
          <p className="font-semibold text-lg xl:text-xl text-(--purple) leading-snug">
            {title}
          </p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
