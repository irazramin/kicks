"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { useProduct } from "@/hooks";
import {
  ProductActionButtons,
  ProductColorSelector,
  ProductDescription,
  ProductHeader,
  ProductImageGallery,
  ProductSizeSelector,
} from ".";
import { ProductDetailsSkeleton } from "@/components/shared/skeletons";
import { SuggestionProducts } from "@/components/shared/suggestion-products";
import {
  DEFAULT_BADGE,
  DEFAULT_COLORS,
  DEFAULT_SIZES,
  type ColorOption,
} from "./constants";

export interface ProductDetailsProps {
  productId: number;
  badge?: string;
  colors?: ColorOption[];
  sizes?: number[];
  unavailableSizes?: number[];
}

export default function ProductDetails({
  productId,
  badge = DEFAULT_BADGE,
  colors = DEFAULT_COLORS,
  sizes = DEFAULT_SIZES,
  unavailableSizes = [],
}: ProductDetailsProps) {
  const { data: product, loading, error } = useProduct(productId);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState<number | null>(
    sizes.find((s) => !unavailableSizes.includes(s)) ?? null
  );

  if (loading) return <div className="container container-7xl mx-auto lg:px-0 px-4 mt-8"><ProductDetailsSkeleton /></div>;
  if (error || !product) return notFound();

  return (
    <div className="min-h-screen">
      <div className="container container-7xl mx-auto lg:px-0 px-4 lg:pt-8 pt-6">
        <div className="flex lg:gap-4 gap-6 lg:flex-row flex-col">
          <ProductImageGallery images={product.images} title={product.title} />
          <div className="flex flex-col lg:w-[440px] w-full">
            <ProductHeader
              badge={badge}
              title={product.title}
              price={product.price}
            />
            <div className="mt-6 space-y-8">
              <ProductColorSelector
                colors={colors}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
              />
              <ProductSizeSelector
                sizes={sizes}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
                unavailable={unavailableSizes}
              />
              <ProductActionButtons product={product} />
            </div>
            <ProductDescription description={product.description} />
          </div>
        </div>
      </div>
    </div>
  );
}