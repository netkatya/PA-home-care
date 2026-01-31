import { Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--purple) w-full py-6">
      <div className="container flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="w-36 h-36 overflow-hidden flex items-center gap-2 "
          >
            <Image
              src="/img/logo1.png"
              alt="P.A. Home Care Services logo"
              width={160}
              height={140}
            ></Image>
          </Link>
          <p className="text-background text-xl md:text-3xl">
            P.A. Home Care Services
          </p>
        </div>
        <nav className="flex flex-col gap-4 items-center">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#free">Free Consultation</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#contacts">Contacts</NavLink>
        </nav>
        <div
          className={`
              mt-auto mb-10 flex justify-center gap-5 text-background
              transition-all duration-300}
            `}
        >
          <Link
            href="tel:+447787996069"
            aria-label="Call P.A. Home Care Services"
            className="hover:text-white/70 transition duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            <Phone size={26} />
          </Link>
          <Link
            href="mailto:p.ahomecareservices@outlook.com"
            aria-label="Email P.A. Home Care Services"
            className="hover:text-white/70 transition duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            <Mail size={26} />
          </Link>
          <Link
            href="https://www.facebook.com/share/1Zy8aNRjae/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Facebook (opens in new tab)"
            className="hover:text-white/70 transition duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            <Facebook size={26} />
          </Link>
        </div>
      </div>
      <div className="h-px bg-background my-6"></div>
      <div className="flex items-center justify-center gap-8">
        <p className="text-background">
          &copy; {currentYear} P.A. Home Care Services
        </p>
        <p className="text-background">
          Business Insurance Number CE2018029052
        </p>
      </div>
    </footer>
  );
}
