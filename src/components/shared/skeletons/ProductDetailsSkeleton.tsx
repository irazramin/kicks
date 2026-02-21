import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailsSkeleton() {
  return (
    <div className="flex lg:gap-4 gap-6 lg:flex-row flex-col">
      <div className="flex-1 min-w-0">
        <Skeleton className="aspect-square w-full min-h-[400px] rounded-2xl" />
      </div>
      <div className="flex flex-col lg:w-[440px] w-full">
        <Skeleton className="h-8 w-24 rounded-[8px] mb-2 lg:mb-4" />
        <Skeleton className="h-8 w-full rounded-md mb-2 lg:mb-4" />
        <Skeleton className="h-8 w-3/4 rounded-md mb-2" />
        <Skeleton className="h-9 w-20 rounded-md" />

        <div className="mt-6 space-y-8">
          <div className="w-full">
            <Skeleton className="h-4 w-16 rounded mb-4" />
            <div className="flex flex-wrap lg:gap-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-10 rounded-full" />
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <Skeleton className="h-4 w-12 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>
            <div className="flex flex-wrap gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-12 w-[50px] rounded-[8px]" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="flex-1 h-12 rounded-md" />
              <Skeleton className="h-12 w-12 shrink-0 rounded-md" />
            </div>
            <Skeleton className="w-full h-12 rounded-md" />
          </div>
        </div>
        <div className="lg:mt-8 mt-6 space-y-3">
          <Skeleton className="h-4 w-40 rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-2/3 rounded" />
        </div>
      </div>
    </div>
  );
}
