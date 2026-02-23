import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ProductCardProps {
  title: string;
  price: string;
  imageSrc?: string;
  href: string;
}

export function ProductCard({
  title,
  price,
  imageSrc,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden transition-shadow",
      )}
    >
      <div className="relative flex-1 p-2 bg-white h-full lg:rounded-[24px] rounded-[16px]">
        <div className="relative flex h-full items-center justify-center bg-[#f5f5f5] lg:rounded-[24px] rounded-[16px]">
          <span className="inline-block absolute top-0 left-0 bg-primary lg:px-4 px-2 lg:py-3 py-1 text-xs font-semibold text-white lg:rounded-tl-[24px] lg:rounded-br-[24px] rounded-tl-[12px] rounded-br-[12px]">
            New
          </span>
          {imageSrc ? (
            <Image
              width={300}
              height={350}
              src={imageSrc}
              alt={title}
              unoptimized={true}
              className=" w-full object-cover lg:rounded-[24px] rounded-[12px] lg:h-[350px] h-[180px]"
            />
          ) : (
            <div className="h-32 w-32 rounded-full bg-gray-300" />
          )}
        </div>
      </div>
      <div className="text-start flex flex-col items-start lg:gap-4 gap-2 h-full mt-4">
        <h3 className="font-semibold text-secondary md:text-2xl text-base leading-[100%] font-rubik lg:h-[57px] h-[40px]">
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </h3>
        <button type="button" className="block w-full rounded-[8px] bg-secondary px-4 py-4 text-center md:text-sm text-xs font-medium text-white font-rubik">
          VIEW PRODUCT - <span className="text-[#FFA52F]">{price}</span>
        </button>
      </div>
    </Link>
  );
}
