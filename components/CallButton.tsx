"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+447787996069"
      aria-label="Call us"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-(--emerald) hover:bg-emerald-800
        text-background
        rounded-full
        flex items-center justify-center
        shadow-2xl
        transition-all duration-300
        hover:scale-105
        focus:outline-none animate-call
      "
    >
      <Phone size={26} />
    </a>
  );
}
