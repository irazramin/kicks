"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { useProduct } from "@/hooks";
import { ProductImageGallery } from "./components/ProductImageGallery";
import { ProductHeader } from "./components/ProductHeader";
import { ProductColorSelector } from "./components/ProductColorSelector";
import type { ColorOption } from "./components/ProductColorSelector";
import { ProductSizeSelector } from "./components/ProductSizeSelector";
import { ProductActionButtons } from "./components/ProductActionButtons";
import { ProductDescription } from "./components/ProductDescription";
import { SuggestionProducts } from "@/components/shared/suggestion-products";

const DEFAULT_COLORS: ColorOption[] = [
  { name: "Shadow Navy", hex: "#1e3a5f" },
  { name: "Army Green", hex: "#4a5d23" },
];

const DEFAULT_SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export interface ProductDetailsProps {
  productId: number;
  badge?: string;
  colors?: ColorOption[];
  sizes?: number[];
  unavailableSizes?: number[];
  aboutBullets?: string[];
}

export default function ProductDetails({
  productId,
  badge = "New Release",
  colors = DEFAULT_COLORS,
  sizes = DEFAULT_SIZES,
  unavailableSizes = [],
  aboutBullets,
}: ProductDetailsProps) {
  const { data: product, loading, error } = useProduct(productId);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState<number | null>(40);

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="container container-7xl mx-auto px-4 py-12">
          <div className="animate-pulse grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#e5e5e5] aspect-square min-h-[400px]" />
            <div className="space-y-4">
              <div className="h-8 bg-[#e5e5e5] rounded w-1/3" />
              <div className="h-10 bg-[#e5e5e5] rounded w-2/3" />
              <div className="h-8 bg-[#e5e5e5] rounded w-1/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) notFound();

  const images = product.images?.length ? product.images : [];

  return (
    <div className="min-h-screen">
      <div className="container container-7xl mx-auto lg:px-0 px-4 lg:pt-8 pt-6">
        <div className="flex lg:gap-4 gap-6 lg:flex-row flex-col">
          <ProductImageGallery images={images} title={product.title} />
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
            <ProductDescription
              description={product.description}
            />
          </div>
        </div>
      </div>
      <div className="lg:pb-[60px] pb-[40px] lg:pt-[128px] pt-[24px]">
      <SuggestionProducts />
      </div>
    </div>
  );
}
