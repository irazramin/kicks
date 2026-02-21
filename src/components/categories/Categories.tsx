"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { CategoriesHeader, CategoryCard } from ".";
import { useCategories } from "@/hooks";
import {
  DESKTOP_SETTINGS,
  MOBILE_BREAKPOINT,
  MOBILE_SETTINGS,
} from "./constants";

export default function Categories() {
  const sliderRef = useRef<Slider>(null);
  const { data: categories } = useCategories();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sliderSettings = isMobile ? MOBILE_SETTINGS : DESKTOP_SETTINGS;

  return (
    <section className="bg-[#232321] lg:py-16 py-6 lg:pt-[90px] pt-6 md:pb-0">
      <div className="">
        <CategoriesHeader
          onScrollLeft={() => sliderRef.current?.slickPrev()}
          onScrollRight={() => sliderRef.current?.slickNext()}
        />
        <div className="lg:ml-[60px] ml-4 lg:mr-0 mr-4 overflow-hidden lg:rounded-tl-[64px] rounded-tl-[24px]">
          <Slider ref={sliderRef} {...sliderSettings} key={isMobile ? "mobile" : "desktop"}>
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
