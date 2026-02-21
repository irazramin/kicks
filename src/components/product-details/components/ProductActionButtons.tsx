"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";
import type { Product } from "@/types/product";

export function ProductActionButtons({product}: {product: Product}) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const item = {
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      category: product.category.name,
      color: "Enamel Blue/ University White",
      size: product.category.image,
    }
    dispatch(addToCart([item]));
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleAddToCart()}
          className="flex-1 rounded-md bg-[#232321] px-6 py-4 text-sm font-medium tracking-[.25px] uppercase text-white transition-colors hover:bg-[#3d3d3b]"
        >
          Add to cart
        </button>
        <button
          type="button"
          className="flex w-12 py-4 shrink-0 items-center justify-center rounded-md bg-[#232321] text-white transition-colors hover:bg-[#3d3d3b]"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      <button
        type="button"
        className="w-full rounded-md bg-[#4A69E2] px-6 py-4 text-sm font-medium tracking-[.25px] uppercase text-white transition-colors hover:bg-[#2563eb]"
      >
        Buy it now
      </button>
    </div>
  );
}
