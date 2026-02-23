import { Skeleton } from "@/components/ui/skeleton";

export function CategoryCardSkeleton() {
  return (
    <div
      className="flex lg:w-[690px] w-[358px] lg:h-[690px] h-[358px] shrink-0 flex-col overflow-hidden bg-[#f5f5f5]"
      aria-hidden
    >
      <div className="relative w-full flex-1 overflow-hidden bg-[#e5e3e8]">
        <Skeleton className="h-full w-full rounded-none" />
      </div>
      <div className="flex items-end justify-between gap-3 lg:py-12 py-4 lg:px-[30px] px-4">
        <Skeleton className="h-8 w-[30%]  rounded-md bg-gray-300" />
        <Skeleton className="h-10 w-10 shrink-0 rounded-lg bg-gray-300 border border-gray-300" />
      </div>
    </div>
  );
}
