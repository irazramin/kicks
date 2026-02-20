"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

export interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

const MOBILE_BREAKPOINT = 768;

export function ProductImageGallery({
  images,
  title,
}: ProductImageGalleryProps) {
  const [isMobile, setIsMobile] = useState(false);
  const displayImages = images.length ? images : ["https://picsum.photos/600/600"];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    const mobileSettings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: (index: number) => (
        <a className="!w-[64px] !h-[64px] !rounded-[8px]">
          <Image
            src={displayImages[index]}
            alt=""
            width={64}
            height={64}
            className="object-cover w-[64px] h-[64px] rounded-[8px]"
          />
        </a>
      ),
    };

    return (
      <div className="flex-1 slider-container">
        <Slider {...mobileSettings} className="product-image-gallery-slider">
          {displayImages.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-[273px] w-full overflow-hidden bg-[#f5f5f5] rounded-[16px]">
              <Image
                src={image}
                alt={`${title} - ${index + 1}`}
                fill
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className="flex-1 hidden md:block">
      <div className="grid grid-cols-2 gap-4">
        {displayImages.map((image, index) => (
          <div key={`${image}-${index}`} className="relative aspect-square overflow-hidden rounded-xl bg-[#f5f5f5]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
