"use client";

import { useState } from "react";
import { HeroBannerImage, HeroCarouselThumbs, HeroHeading, HeroProductInfo } from ".";
import { HERO_CAROUSEL_SLIDES } from "./constants";
export function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = HERO_CAROUSEL_SLIDES[activeSlideIndex];

  return (
    <section>
      <HeroHeading />
      <div className="container container-7xl mx-auto lg:px-0 px-4">
        <div className="relative md:rounded-[64px] rounded-[24px] border border-[#C4B5D0]/60 overflow-hidden bg-white">
          <div className="absolute left-0 md:top-[160px] top-[100px] z-10 -ml-1">
            <div
              className="bg-[#232321] md:rounded-b-[16px] rounded-b-[8px] md:p-6 p-2 -rotate-90 origin-center flex items-center justify-center absolute md:left-[-85px] left-[-65.5px]"
              style={{ transformOrigin: "center center" }}
            >
              <span className="text-white md:text-base text-xs font-semibold tracking-wide whitespace-nowrap font-rubik">
                Nike product of the year
              </span>
            </div>
          </div>

          <div className="relative min-h-[382px] md:rounded-[64px] rounded-[24px] lg:min-h-[750px]">
            <HeroBannerImage imageUrl={activeSlide.image} />
            <div
              className="pointer-events-none absolute inset-0 z-1 rounded-[64px] bg-linear-to-t from-black/70 via-black/20 to-transparent"
              aria-hidden
            />

            <div className="absolute inset-0 z-10">
              <HeroCarouselThumbs
                slides={HERO_CAROUSEL_SLIDES}
                activeSlideIndex={activeSlideIndex}
                onSelectSlide={setActiveSlideIndex}
              />
              <HeroProductInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
