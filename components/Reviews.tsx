"use client";

import { Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { reviews } from "@/constants/reviews";

type Review = {
  initial: string;
  short: string;
  full: string;
};

type ReviewProps = {
  review: Review;
  index: number;
};

function ReviewCard({ review, index }: ReviewProps) {
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
        <div
          className="flex gap-1 text-(--emerald-dark)"
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

export default function Reviews() {
  return (
    <section
      className="pt-20 pb-20 bg-linear-to-b from-background to-(--light-green)"
      aria-labelledby="reviews-title"
      id="reviews"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <SectionTitle>Reviews</SectionTitle>
          <p className="text-lg md:text-xl leading-relaxed">
            What families say about their experience with us
          </p>
        </div>

        {/* Reviews grid */}
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" role="list">
          {reviews.map((review, i) => (
            <li key={i} role="listitem">
              <ReviewCard review={review} index={i} />
            </li>
          ))}
        </ul>

        {/* Google link */}
        <div className="text-center">
          <Link
            href="https://share.google/ElnHkxEeaUlSE1MVD"
            target="_blank"
            className="inline-block text-lg md:text-xl text-(--purple) hover:underline transition-all duration-300"
          >
            Read more reviews on Google →
          </Link>
        </div>
      </div>
    </section>
  );
}
