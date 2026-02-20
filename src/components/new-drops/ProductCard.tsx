import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  title: string;
  price: string;
  imageSrc?: string;
  href: string;
  isSelected?: boolean;
}

export function ProductCard({
  title,
  price,
  imageSrc,
  href,
  isSelected,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden transition-shadow",
      )}
    >
      <div className="relative flex-1 p-2 bg-white h-full rounded-[24px]">
        <div className="relative flex h-full items-center justify-center bg-[#f5f5f5] rounded-[24px]">
          <span className="inline-block absolute top-0 left-0 bg-[#4A69E2] px-4 py-3 text-xs font-semibold text-white rounded-tl-[24px] rounded-br-[24px]">
            New
          </span>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-contain rounded-[24px]"
            />
          ) : (
            <div className="h-32 w-32 rounded-full bg-gray-300" />
          )}
        </div>
      </div>
      <div className="text-start flex flex-col items-start lg:gap-4 gap-2 h-full mt-4">
        <h3 className="font-semibold text-[#232321] md:text-2xl text-base leading-[100%] font-rubik h-[57px]">
          {title}
        </h3>
        <button type="button" className="block w-full rounded-[8px] bg-[#232321] px-4 py-4 text-center md:text-sm text-xs font-medium text-white font-rubik">
          VIEW PRODUCT - <span className="text-[#FFA52F]">{price}</span>
        </button>
      </div>
    </Link>
  );
}
