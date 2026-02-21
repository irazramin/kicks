"use client";

import { cn } from "@/lib/utils";
import type { ColorOption } from "../constants";

export interface ProductColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onSelectColor: (name: string) => void;
}

export function ProductColorSelector({
  colors,
  selectedColor,
  onSelectColor,
}: ProductColorSelectorProps) {
  return (
    <div className="w-full">
      <span className="block text-base leading-[100%] font-semibold uppercase text-secondary mb-4">
        Color
      </span>
      <div className="flex flex-wrap lg:gap-2 gap-4">
        {colors.map(({ name, hex }) => (
          <button
            key={name}
            type="button"
            onClick={() => onSelectColor(name)}
            className={cn(
              "lg:h-10 h-8 lg:w-10 w-8 rounded-full border-[3px] transition-shadow",
              selectedColor === name
                ? "ring-[3px] ring-offset-[3px] ring-secondary"
                : "hover:opacity-90"
            )}
            style={{ backgroundColor: hex, borderColor: selectedColor === name ? "var(--secondary)" : "transparent" }}
            aria-label={`Color ${name}`}
            title={name}
          />
        ))}
      </div>
    </div>
  );
}
