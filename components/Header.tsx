import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-(--purple) w-full h-20">
      <div className="container">
        <div className="flex items-center">
          <div className="w-36 h-36 overflow-hidden flex items-center gap-2 ">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={160}
              height={140}
            ></Image>
          </div>
          <p className="text-background text-xl md:text-3xl">
            P.A. Home Care Services
          </p>
        </div>
      </div>
    </header>
  );
}
