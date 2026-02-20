"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ProductCard } from "@/components/new-drops";
import { SuggestionProductsHeader } from "./components";
import { useProducts } from "@/hooks";

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

export function SuggestionProducts() {
  const sliderRef = useRef<Slider>(null);
  const { data: products } = useProducts({ categorySlug: "shoes" });

  return (
    <section>
      <div className="container container-7xl mx-auto px-4 lg:px-0">
        <SuggestionProductsHeader
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
        />
        <Slider ref={sliderRef} {...sliderSettings} className="suggestion-products-slider">
          {products?.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard
                title={product.title}
                price={`$${product.price}`}
                imageSrc={product.images?.[0]}
                href={`/products/${product.slug}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
