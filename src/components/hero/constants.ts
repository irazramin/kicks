export interface HeroCarouselSlide {
  id: string;
  image: string;
  thumbnail: string;
  thumbnailAlt: string;
}

export const HERO_CAROUSEL_SLIDES: HeroCarouselSlide[] = [
  {
    id: "2",
    image: "/images/carousel-2.avif",
    thumbnail: "/images/carousel-btn.png",
    thumbnailAlt: "Nike Air Max - variation 2",
  },
  {
    id: "3",
    image: "/images/carousel-3.avif",
    thumbnail: "/images/carousel-btn-2.png",
    thumbnailAlt: "Nike Air Max - variation 3",
  },
];
