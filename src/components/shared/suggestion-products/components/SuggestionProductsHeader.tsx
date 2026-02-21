import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuggestionProductsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

export function SuggestionProductsHeader({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
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
            disabled={prevDisabled}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-[8px] bg-secondary text-[#E8E8E8] transition-colors hover:bg-[#333] disabled:pointer-events-none disabled:opacity-50"
            )}
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-[8px] bg-secondary text-[#E8E8E8] transition-colors hover:bg-[#333] disabled:pointer-events-none disabled:opacity-50"
            )}
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
    </div>
  );
}
