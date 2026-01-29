"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, Facebook } from "lucide-react";
import { MobileNavLink, NavLink } from "./NavLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          bg-(--purple) w-full h-23 fixed top-0 left-0 z-50
          border-b border-(--lavander)/40
          shadow-[0_6px_25px_rgba(230,223,240,0.85)]
        "
      >
        <div className="container">
          <div className="flex items-center">
            {/* Logo */}
            <div className="w-25 h-25 flex items-center justify-center rounded-full overflow-hidden">
              <Link href="/" className=" flex items-center justify-center">
                <Image
                  src="/img/logo1.png"
                  alt="P.A. Home Care Services logo"
                  width={120}
                  height={120}
                  className=""
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-8 ml-auto">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#free">Free Consultation</NavLink>
              <NavLink href="#contacts">Contacts</NavLink>
            </nav>

            {/* Burger button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden ml-auto text-background"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`
          fixed inset-0 z-50 bg-(--purple)
          transition-all duration-300 ease-out
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div
          className={`
            container h-full flex flex-col
            transition-all duration-300 delay-100
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {/* Top row */}
          <div className="flex justify-between items-center h-23">
            <div className="w-25 h-25 flex items-center justify-center rounded-full overflow-hidden">
              <Link href="/" className=" flex items-center justify-center">
                <Image
                  src="/img/logo1.png"
                  alt="P.A. Home Care Services logo"
                  width={120}
                  height={120}
                  className=""
                />
              </Link>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-background"
            >
              <X size={32} />
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`
              flex flex-col items-center gap-6 text-2xl text-background mt-16 mb-16
              transition-all duration-300 delay-150
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <MobileNavLink href="#about" onClick={() => setOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#free" onClick={() => setOpen(false)}>
              Free Consultation
            </MobileNavLink>
            <MobileNavLink href="#contacts" onClick={() => setOpen(false)}>
              Contacts
            </MobileNavLink>
          </nav>

          {/* Contact icons */}
          <div
            className={`
              mt-auto mb-10 flex justify-center gap-10 text-background
              transition-all duration-300 delay-200
              ${open ? "opacity-100" : "opacity-0"}
            `}
          >
            <Link href="tel:+441234567890" aria-label="Phone">
              <Phone size={26} />
            </Link>
            <Link
              href="mailto:info@pahomecareservices.co.uk"
              aria-label="Email"
            >
              <Mail size={26} />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook size={26} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
