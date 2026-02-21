"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { CategoriesHeader, CategoryCard } from ".";
import { useCategories } from "@/hooks";
import { getSliderNavState } from "@/lib/slider";
import {
  DESKTOP_SETTINGS,
  MOBILE_BREAKPOINT,
  MOBILE_SETTINGS,
} from "./constants";

export default function Categories() {
  const sliderRef = useRef<Slider>(null);
  const { data: categories, loading } = useCategories();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sliderSettings = isMobile ? MOBILE_SETTINGS : DESKTOP_SETTINGS;
  const slideCount = categories?.length ?? 0;
  const visibleCount = sliderSettings.slidesToShow ?? 1;
  const { prevDisabled, nextDisabled } = getSliderNavState(
    currentSlide,
    slideCount,
    visibleCount,
    loading
  );

  return (
    <section className="bg-secondary lg:py-16 py-6 lg:pt-[90px] pt-6 md:pb-0">
      <div className="">
        <CategoriesHeader
          onScrollLeft={() => sliderRef.current?.slickPrev()}
          onScrollRight={() => sliderRef.current?.slickNext()}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
        />
        <div className="lg:ml-[60px] ml-4 lg:mr-0 mr-4 overflow-hidden lg:rounded-tl-[64px] rounded-tl-[24px]">
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            afterChange={setCurrentSlide}
            key={isMobile ? "mobile" : "desktop"}
          >
            {categories?.map((category) => (
              <div key={category.id}>
                <CategoryCard category={category} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
