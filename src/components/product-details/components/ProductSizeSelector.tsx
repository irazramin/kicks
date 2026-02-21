"use client";

import { cn } from "@/lib/utils";

export interface ProductSizeSelectorProps {
  sizes: number[];
  selectedSize: number | null;
  onSelectSize: (size: number) => void;
  unavailable?: number[];
}

export function ProductSizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
  unavailable = [],
}: ProductSizeSelectorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-base leading-[100%] font-semibold uppercase text-secondary">
          Size
        </span>
        <button
          type="button"
          className="text-sm leading-[100%] font-medium text-secondary underline hover:no-underline"
        >
          Size chart
        </button>
      </div>
      <div className="flex flex-wrap gap-1">
        {sizes.map((size) => {
          const isUnavailable = unavailable.includes(size);
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => !isUnavailable && onSelectSize(size)}
              disabled={isUnavailable}
              className={cn(
                "w-[50px] h-[48px] rounded-[8px] font-medium transition-colors",
                isSelected
                  ? "bg-secondary text-white hover:bg-[#3d3d3b]"
                  : isUnavailable
                    ? "bg-gray-400 cursor-not-allowed text-gray-600"
                    : "bg-white text-secondary "
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
