"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks";

export function NewDropsSection() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const { data: products } = useProducts({ categorySlug: "shoes" });

  return (
    <section className="mt-[90px] mb-[128px]">
      <div className="container container-7xl mx-auto lg:px-0 px-4">

        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-[589px] md:text-[74px] text-6 font-semibold leading-[95%] tracking-tight text-[#232321] md:text-3xl">
              DON&apos;T MISS OUT
              NEW DROPS
            </h2>
          </div>
          <Link
            href="/new-drops"
            className="shrink-0 rounded-[10px] bg-[#4A69E2] px-8 py-4 text-sm font-medium uppercase tracking-[.25px] text-white transition-colors hover:bg-[#4d6ae8]"
          >
           Shop New Drops
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
