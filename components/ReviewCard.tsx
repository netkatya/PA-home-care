"use client";

import { Star, ChevronDown } from "lucide-react";
import { useState } from "react";

type Review = {
  initial: string;
  name: string;
  short: string;
  full: string;
};

type ReviewProps = {
  review: Review;
  index: number;
};

export default function ReviewCard({ review, index }: ReviewProps) {
  const [open, setOpen] = useState(false);
  const contentId = `review-content-${index}`;

  return (
    <article
      className="
        rounded-[30px]
        bg-linear-to-b from-[#F3FAF6] to-white
        p-8 md:p-10
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        focus-within:ring-2 focus-within:ring-(--emerald-dark)
        focus-within:ring-offset-2
      "
    >
      {/* Header */}
      <header className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-full bg-(--light-emerald) flex items-center justify-center text-xl font-semibold text-(--emerald-dark)"
          aria-hidden="true"
        >
          {review.initial}
        </div>
        <div>
          <div
            className="flex gap-1 text-(--emerald-dark) mb-1"
            aria-label="5 out of 5 stars"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
          <p>{review.name}</p>
        </div>
      </header>

      {/* Short text */}
      <p className="text-base md:text-lg leading-relaxed">{review.short}</p>

      {/* Expandable content */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={`${contentId}-button`}
        className={
          "overflow-hidden transition-[max-height,opacity] duration-500 motion-reduce:transition-none " +
          (open ? "max-h-250 opacity-100 mt-4" : "max-h-0 opacity-0")
        }
      >
        <p className="text-base md:text-lg leading-relaxed">{review.full}</p>
      </div>

      {/* Toggle button */}
      <button
        id={`${contentId}-button`}
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen(!open)}
        className="
          mt-4 flex items-center gap-2
          text-(--purple) font-medium
          focus:outline-none focus-visible:ring-2 focus-visible:ring-(--purple)
          focus-visible:ring-offset-2 cursor-pointer
        "
      >
        {open ? "Show less" : "Read more"}
        <ChevronDown
          size={18}
          className={
            "transition-transform motion-reduce:transition-none " +
            (open ? "rotate-180" : "")
          }
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
