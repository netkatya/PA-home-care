"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, Facebook } from "lucide-react";
import { NavLink, MobileNavLink } from "./NavLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 z-50 w-full h-23
          bg-(--purple)
          border-b border-(--lavander)/40
          shadow-[0_6px_25px_rgba(230,223,240,0.85)] pt-1
        "
      >
        <div className="container flex items-center h-full">
          {/* Logo */}
          <Link
            href="/"
            className="w-25 h-25 flex items-center justify-center rounded-full overflow-hidden focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            <Image
              src="/img/logo1.png"
              alt="P.A. Home Care Services logo"
              width={120}
              height={120}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex gap-8 ml-auto">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#free">Free Consultation</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contacts">Contacts</NavLink>
          </nav>

          {/* Burger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="
              lg:hidden ml-auto text-background
              focus-visible:outline
              focus-visible:outline-white focus-visible:outline-offset-4
            "
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`
          fixed inset-0 z-50 bg-(--purple)
          transition-all duration-300 ease-out
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className={`
            container h-full flex flex-col
            transition-all duration-300
            ${open ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          {/* Top row */}
          <div className="flex items-center justify-end h-23">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="
                text-background focus-visible:outline-2
                focus-visible:outline-white focus-visible:outline-offset-4
              "
            >
              <X size={32} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-6 text-2xl text-background mt-16">
            <MobileNavLink href="#services" onClick={() => setOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#free" onClick={() => setOpen(false)}>
              Free Consultation
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#reviews" onClick={() => setOpen(false)}>
              Reviews
            </MobileNavLink>
            <MobileNavLink href="#contacts" onClick={() => setOpen(false)}>
              Contacts
            </MobileNavLink>
          </nav>

          {/* Contact icons */}
          <div className="mt-auto mb-10 flex justify-center gap-10 text-background">
            <Link
              href="tel:+447787996069"
              aria-label="Call P.A. Home Care Services"
              className="focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <Phone size={26} />
            </Link>

            <Link
              href="mailto:p.ahomecareservices@outlook.com"
              aria-label="Email P.A. Home Care Services"
              className="focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <Mail size={26} />
            </Link>

            <Link
              href="https://www.facebook.com/share/1Zy8aNRjae/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook (opens in new tab)"
              className="focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <Facebook size={26} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
