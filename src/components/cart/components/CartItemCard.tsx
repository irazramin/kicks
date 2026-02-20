"use client";

import Image from "next/image";

export interface CartItemCardProps {
  image: string;
  name: string;
  category: string;
  color: string;
  price: number;
  size: string;
  quantity: number;
  onSizeChange?: (size: string) => void;
  onQuantityChange?: (qty: number) => void;
  onWishlist?: () => void;
  onRemove?: () => void;
}

export function CartItemCard({
  image,
  name,
  category,
  color,
  price,
  size,
  quantity,
  onWishlist,
  onRemove,
}: CartItemCardProps) {
  return (
    <div className="flex lg:gap-6 gap-4 rounded-[16px] bg-white">
      <div className="relative lg:w-[207px] w-[160px] lg:h-[225px] h-[216px] shrink-0 overflow-hidden rounded-xl md:h-32 md:w-32">
        <Image
          src={image}
          alt={name}
          className="object-cover lg:rounded-[16px] rounded-[12px] w-full h-full"
          width={207}
          height={225}
        />
      </div>
      <div className="min-w-0 flex flex-1 flex-col justify-between items-start">
        <div className="w-full flex-1">
          <div className="flex items-start justify-between gap-3 w-full">
            <h3 className="font-rubik lg:text-2xl text-base font-semibold uppercase leading-[120%] text-[#232321]">
              {name}
            </h3>
            <span className="font-rubik lg:inline-block hidden lg:text-2xl text-xl font-semibold leading-[120%] text-[#4A69E2] shrink-0">
              ${price.toFixed(2)}
            </span>
          </div>
          <p className="mt-2 lg:text-xl text-sm text-[#232321]/85 font-open-sans leading-[120%] font-semibold">
            {category}
          </p>
          <p className="lg:text-xl text-sm text-[#232321]/85 font-open-sans leading-[120%] font-semibold mt-2">
            {color}
          </p>
          <div className="lg:mt-5 mt-2 flex flex-row  items-center lg:gap-[40px] gap-4">
            <div className="flex items-center gap-6">
              <span className="font-open-sans lg:text-xl text-base font-semibold leading-[120%] text-[#232321]/80">Size</span>
              <Image className="lg:block hidden" src={"/images/arrow-down-2.svg"} width={24} height={24} alt="Size" />
            </div>
            <div className="flex items-center gap-6">
              <span className="font-open-sans lg:text-xl text-base font-semibold leading-[120%] text-[#232321]/80">Quantity</span>
              <Image className="lg:block hidden" src={"/images/arrow-down-2.svg"} width={24} height={24} alt="Quantity" />
            </div>
          </div>
          <span className="font-rubik lg:hidden inline-block lg:text-2xl text-xl font-semibold leading-[120%] text-[#4A69E2] shrink-0 mt-2">
              ${price.toFixed(2)}
            </span>
        </div>

        <div className="flex gap-6">
          <button
            type="button"
            onClick={onWishlist}
            className="rounded-lg text-[#6b7280] hover:bg-[#f5f5f5]"
            aria-label="Save for later"
          >
           <Image className="lg:w-[32px] w-[24px] lg:h-[32px] h-[24px]" src={"/images/fav.svg"} width={32} height={32} alt="Heart" />
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="rounded-lg text-[#6b7280] hover:bg-[#f5f5f5]"
            aria-label="Remove from bag"
          >
            <Image className="lg:w-[32px] w-[24px] lg:h-[32px] h-[24px]" src={"/images/delete.svg"} width={32} height={32} alt="Trash" />
          </button>
        </div>
      </div>
    </div>
  );
}
