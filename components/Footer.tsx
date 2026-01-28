import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-(--purple) w-full py-6">
      <div className="container">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="w-36 h-36 overflow-hidden flex items-center gap-2 "
          >
            <Image
              src="/img/logo.png"
              alt="logo"
              width={160}
              height={140}
            ></Image>
          </Link>
          <p className="text-background text-xl md:text-3xl">
            P.A. Home Care Services
          </p>
        </div>
      </div>
    </section>
  );
}
