import Link from "next/link";

export function ReviewsHeader() {
  return (
    <div className="container container-7xl mx-auto lg:px-0 px-4">
      <div className="lg:mb-8 mb-6 flex lg:h-[70px] lg:items-end items-center justify-between">
        <h2 className="font-rubik text-2xl font-semibold uppercase leading-[95%] tracking-tight text-[#232321] md:text-[72px]">
          Reviews
        </h2>
        <Link
          href="/reviews"
          className="flex h-10 shrink-0 items-center justify-center rounded-[8px] bg-[#4A69E2] px-5 text-sm font-medium uppercase tracking-[0.25px] text-white transition-colors hover:bg-[#4d6ae8] cursor-pointer"
        >
          See All
        </Link>
      </div>
    </div>
  );
}
