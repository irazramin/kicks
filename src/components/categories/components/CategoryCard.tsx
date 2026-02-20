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
      className="group relative flex w-[690px] h-[690px] shrink-0 flex-col overflow-hidden bg-[#f5f5f5] transition-shadow hover:shadow-lg"
    >
      <div className="relative w-full overflow-hidden bg-[#e5e3e8]">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex items-end justify-between gap-3 p-5">
        <span className="font-rubik text-lg font-semibold uppercase tracking-tight text-[#232321]">
          {category.name}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#232321] text-white transition-colors group-hover:bg-[#333]">
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
