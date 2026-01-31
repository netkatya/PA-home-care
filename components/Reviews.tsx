"use client";

import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { reviews } from "@/constants/reviews";
import ReviewCard from "./ReviewCard";

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
            href="https://www.google.com/search?client=safari&hs=rbGp&sca_esv=37b29cacd6547f1e&hl=en-gb&sxsrf=ANbL-n7AFeHZXVgm5Y2mLjPEm2GtAfusVA:1769879971895&kgmid=/g/11wbtgwh_3&q=P.A.+homecare+services&shem=bdsle,ptotple,shrtsdl&shndl=30&source=sh/x/loc/act/m1/3&kgs=13e2b7779ed41d30&utm_source=bdsle,ptotple,shrtsdl,sh/x/loc/act/m1/3#cobssid=s"
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
