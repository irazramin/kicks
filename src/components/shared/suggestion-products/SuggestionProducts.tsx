"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { ProductCard } from "@/components/new-drops";
import { SuggestionProductsHeader } from "./components/SuggestionProductsHeader";
import { useProducts } from "@/hooks";

const DESKTOP_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 1,
  slidesPerRow: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
  ],
};

const MOBILE_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  rows: 2,
  slidesPerRow: 1,
  responsive: undefined,
};

export function SuggestionProducts() {
  const sliderRef = useRef<Slider>(null);
  const { data: products } = useProducts({ categorySlug: "shoes" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sliderSettings = isMobile ? MOBILE_SETTINGS : DESKTOP_SETTINGS;

  return (
    <section>
      <div className="container container-7xl mx-auto px-4 lg:px-0">
        <SuggestionProductsHeader
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
        />
        <Slider ref={sliderRef} {...sliderSettings} key={isMobile ? "mobile" : "desktop"} className="suggestion-products-slider">
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
      </div>
    </section>
  );
}
