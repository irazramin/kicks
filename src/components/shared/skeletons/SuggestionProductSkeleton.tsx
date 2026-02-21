import { Skeleton } from '@/components/ui/skeleton';

function SuggestionProductSkeleton() {
    return (
      <div className="flex flex-col overflow-hidden px-2 lg:pb-0 pb-6">
        <div className="relative flex-1 p-2 bg-white h-full lg:rounded-[24px] rounded-[16px]">
          <div className="relative flex h-full items-center justify-center bg-[#f5f5f5] lg:rounded-[24px] rounded-[16px]">
            <Skeleton className="h-full w-full min-h-[200px] lg:min-h-[280px] lg:rounded-[24px] rounded-[12px]" />
          </div>
        </div>
        <div className="text-start flex flex-col items-start lg:gap-4 gap-2 h-full mt-4">
          <Skeleton className="h-[57px] w-3/4 rounded-md" />
          <Skeleton className="h-12 w-full rounded-[8px]" />
        </div>
      </div>
    );
  }

export default SuggestionProductSkeleton