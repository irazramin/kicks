"use client";

import { useRef } from "react";
import { CategoriesHeader, CategoryCard } from "./components";
import { useCategories } from "@/hooks";

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: categories } = useCategories();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#232321] py-16 md:pt-[90px] md:pb-0">
      <div className="">      
        <CategoriesHeader
          onScrollLeft={() => scroll("left")}
          onScrollRight={() => scroll("right")}
        />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-2 scroll-smooth scrollbar-none pl-[60px] rounded-tl-[64px]"
          style={{ scrollbarWidth: "none" }}
        >
          {categories?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
