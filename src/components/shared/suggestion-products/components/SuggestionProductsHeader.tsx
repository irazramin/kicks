import { ChevronLeft, ChevronRight } from "lucide-react";

interface SuggestionProductsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export function SuggestionProductsHeader({
  onPrev,
  onNext,
}: SuggestionProductsHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between md:mb-8">
        <h2 className="font-rubik lg:text-5xl text-2xl font-semibold uppercase leading-[95%] tracking-tight text-secondary md:text-[72px]">
          You may also like
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrev}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-secondary text-[#E8E8E8] transition-colors hover:bg-[#333]"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-secondary text-[#E8E8E8] transition-colors hover:bg-[#333]"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
    </div>
  );
}
