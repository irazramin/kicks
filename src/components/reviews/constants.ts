export interface Review {
  id: string;
  headline: string;
  text: string;
  rating: number;
  name: string;
  image: string;
  imageAlt: string;
}

export function getAvatarUrl(name: string, size = 48): string {
  const params = new URLSearchParams({
    name: name.replace(/\s+/g, "+"),
    size: String(size * 2),
    background: "e5e3e8",
    color: "232321",
  });
  return `https://ui-avatars.com/api/?${params.toString()}`;
}

export const REVIEWS: Review[] = [
  {
    id: "1",
    headline: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    name: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600",
    imageAlt: "Nike Air Jordan 1 sneakers",
  },
  {
    id: "2",
    headline: "Great Experience",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    name: "Jordan Lee",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    imageAlt: "Colorful sneakers",
  },
  {
    id: "3",
    headline: "Fast Delivery",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    name: "Sam Davis",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
    imageAlt: "Adidas sneakers",
  },
];
