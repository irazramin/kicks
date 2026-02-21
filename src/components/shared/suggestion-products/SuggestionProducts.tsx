"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { ProductCard } from "@/components/new-drops";
import { SuggestionProductsHeader } from ".";
import { useProducts } from "@/hooks";
import {
  DESKTOP_SETTINGS,
  MOBILE_BREAKPOINT,
  MOBILE_SETTINGS,
} from "./constants";

export function SuggestionProducts() {
  const sliderRef = useRef<Slider>(null);
  const { data: products } = useProducts({ categorySlug: "shoes" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
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
