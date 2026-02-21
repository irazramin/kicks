"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from ".";
import { useProducts } from "@/hooks";

export function NewDropsSection() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const { data: products } = useProducts({ categorySlug: "shoes" });

  return (
    <section className="lg:mt-[90px] mt-6 lg:mb-[128px] mb-4">
      <div className="container container-7xl mx-auto lg:px-0 px-4">

        <div className="lg:mb-8 mb-6 flex flex-row items-end justify-between">
          <div>
            <h2 className="max-w-[589px] md:text-[74px] text-2xl font-semibold lg:leading-[95%] leading-[100%] tracking-tight text-[#232321] md:text-3xl">
              DON&apos;T MISS OUT
              NEW DROPS
            </h2>
          </div>
          <Link
            href="/new-drops"
            className="shrink-0 rounded-[10px] bg-[#4A69E2] lg:px-8 px-4 lg:py-4 py-2.5 text-sm font-medium uppercase tracking-[.25px] text-white transition-colors hover:bg-[#4d6ae8]"
          >
           Shop New Drops
          </Link>
        </div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {products?.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setSelectedIndex(index)}
              onFocus={() => setSelectedIndex(index)}
            >
              <ProductCard
                title={product.title}
                price={`$${product.price}`}
                imageSrc={product.images?.[0]}
                href={`/products/${product.id}`}
                isSelected={selectedIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
