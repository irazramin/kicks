"use client";

import Image from "next/image";
import type { HeroCarouselSlide } from "../constants";

interface HeroCarouselThumbsProps {
  slides: HeroCarouselSlide[];
  activeSlideIndex: number;
  onSelectSlide: (index: number) => void;
}


export function HeroCarouselThumbs({
  slides,
  activeSlideIndex,
  onSelectSlide,
}: HeroCarouselThumbsProps) {
  return (
    <div className="absolute right-8 bottom-8 z-10 flex flex-col gap-4">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          type="button"
          aria-label={`View slide ${index + 1}`}
          aria-pressed={activeSlideIndex === index}
          onClick={() => onSelectSlide(index)}
          className={"relative h-[64px] w-[64px] lg:h-[160px] lg:w-[160px] cursor-pointer overflow-hidden md:rounded-[32px] rounded-[8px] bg-white/95 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"}
        >
          <Image
            src={slide.thumbnail}
            alt={slide.thumbnailAlt}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
