export interface Review {
  id: string;
  headline: string;
  text: string;
  rating: number;
  name: string;
  avatar: string;
  image: string;
  imageAlt: string;
}

export const REVIEWS: Review[] = [
  {
    id: "1",
    headline: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    name: "Alex Morgan",
    image: "/images/reviews/review-product-1.png",
    avatar: "/images/reviews/review-1.png",
    imageAlt: "Nike Air Jordan 1 sneakers",
  },
  {
    id: "2",
    headline: "Great Experience",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    name: "Jordan Lee",
    image: "/images/reviews/review-product-2.png",
    avatar: "/images/reviews/review-2.png",
    imageAlt: "Colorful sneakers",
  },
  {
    id: "3",
    headline: "Fast Delivery",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    name: "Sam Davis",
    image: "/images/reviews/review-product-3.png",
    avatar: "/images/reviews/review-3.png",
    imageAlt: "Adidas sneakers",
  },
];
