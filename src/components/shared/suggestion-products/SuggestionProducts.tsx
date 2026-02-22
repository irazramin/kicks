"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { ProductCard } from "@/components/new-drops";
import { SuggestionProductsHeader } from ".";
import { useProducts } from "@/hooks";
import { getSliderNavState } from "@/lib/slider";
import { NotFound } from "@/components/shared/NotFound";
import {
  DESKTOP_SETTINGS,
  MOBILE_BREAKPOINT,
  MOBILE_SETTINGS,
} from "./constants";
import { SuggestionProductSkeleton } from "../skeletons";

export function SuggestionProducts() {
  const sliderRef = useRef<Slider>(null);
  const { data: products, loading } = useProducts({ categorySlug: "shoes" });
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sliderSettings = isMobile ? MOBILE_SETTINGS : DESKTOP_SETTINGS;
  const slideCount = products?.length ?? 0;
  const visibleCount = sliderSettings.slidesToShow ?? 1;
  const { prevDisabled, nextDisabled } = getSliderNavState(
    currentSlide,
    slideCount,
    visibleCount,
    loading
  );

  return (
    <section>
      <div className="container container-7xl mx-auto px-4 lg:px-0">
        <SuggestionProductsHeader
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
        />
        {loading ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <SuggestionProductSkeleton key={i} />
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            afterChange={setCurrentSlide}
            key={isMobile ? "mobile" : "desktop"}
            className="suggestion-products-slider"
          >
            {products?.map((product) => (
              <div key={product.id} className="px-2 lg:pb-0 pb-6">
                <ProductCard
                  title={product.title}
                  price={`$${product.price}`}
                  imageSrc={product.images?.[0]}
                  href={`/products/${product.id}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <NotFound message="No products found" className="min-h-[200px]" />
        )}
      </div>
    </section>
  );
}
