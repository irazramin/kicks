import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/types/category";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex lg:w-[690px] w-[358px] lg:h-[690px] h-[358px] shrink-0 flex-col overflow-hidden bg-[#f5f5f5]"
    >
      <div className="relative w-full overflow-hidden bg-[#e5e3e8]">
        <img
          src={category.image ? category.image : "https://placehold.co/300x300?text=Shoes"}
          alt={category.name || "Category Image"}
          className="lg:h-full h-auto lg:w-full w-auto object-cover object-center transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex items-end justify-between gap-3 lg:py-12 py-4 lg:px-[30px] px-4">
        <span className="font-rubik md:text-4xl text-2xl leading-[100%] font-semibold uppercase text-secondary">
          {category.name}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-white transition-colors group-hover:bg-[#333]">
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
