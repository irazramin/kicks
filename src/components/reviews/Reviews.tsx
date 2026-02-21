import { ReviewCard, ReviewsHeader } from ".";
import { REVIEWS } from "./constants";

export function Reviews() {
  return (
    <section className="py-6 lg:py-[128px]">
      <div className="container container-7xl mx-auto px-4 lg:px-0">
        <ReviewsHeader />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
