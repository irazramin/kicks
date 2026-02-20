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
      <div className="lg:mb-8 mb-6 flex lg:h-[70px] items-center justify-between">
        <h2 className="font-rubik md:text-[72px] text-2xl leading-[95%] font-semibold uppercase tracking-tight text-white">
          Categories
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onScrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white text-[#232321] transition-colors cursor-pointer text-sm"
            aria-label="Previous categories"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden  />
          </button>
          <button
            type="button"
            onClick={onScrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white text-[#232321] transition-colors cursor-pointer text-sm"
            aria-label="Next categories"
          >
            <ChevronRight className="h-4 w-4" aria-hidden  />
          </button>
        </div>
      </div>
    </div>
  );
}
