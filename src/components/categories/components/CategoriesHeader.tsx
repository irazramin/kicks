import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoriesHeaderProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export function CategoriesHeader({
  onScrollLeft,
  onScrollRight,
}: CategoriesHeaderProps) {
  return (
    <div className="container container-7xl mx-auto lg:px-0 px-4">
      <div className="mb-8 flex h-[70px] items-center justify-between">
        <h2 className="font-rubik md:text-[72px] text-2xl leading-[95%] font-semibold uppercase tracking-tight text-white">
          Categories
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onScrollLeft}
            className="flex h-10 w-12 items-center justify-center rounded-lg bg-[#333] text-gray-300 transition-colors hover:bg-[#444] hover:text-white"
            aria-label="Previous categories"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={onScrollRight}
            className="flex h-10 w-12 items-center justify-center rounded-lg bg-[#333] text-gray-300 transition-colors hover:bg-[#444] hover:text-white"
            aria-label="Next categories"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
