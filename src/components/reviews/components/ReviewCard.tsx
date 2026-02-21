import { Star } from "lucide-react";
import { getAvatarUrl, type Review } from "../constants";
import Image from "next/image";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-[#f7f7f5]">
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-8">
        <div className="flex gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-rubik lg:text-2xl text-xl font-semibold text-secondary md:text-2xl">
              {review.headline}
            </h3>
            <p className="mt-2 lg:text-base text-sm text-secondary/90 md:text-base font-open-sans">
              {review.text}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lg:h-6 lg:w-6 h-5 w-5 fill-[#FFA52F] text-[#FFA52F]"
                    aria-hidden
                  />
                ))}
              </div>
              <span className="font-open-sans text-sm font-semibold text-secondary">
                {review.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <Image
            src={getAvatarUrl(review.name)}
            alt=""
            className="lg:w-16 lg:h-16 w-12 h-12 shrink-0 rounded-full object-cover"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="lg:min-h-[325px] min-h-[229px] lg:max-h-[325px] max-h-[229px] overflow-hidden rounded-b-3xl">
        <Image
          src={review.image ? review.image : "/images/review-placeholder.png"}
          alt={review.imageAlt}
          width={400}
          height={325}
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  );
}
