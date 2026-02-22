import Link from "next/link";

export function HeroProductInfo() {
  return (
    <div className="absolute bottom-0 left-0 right-0 lg:p-10 p-4">
      <h2 className="text-2xl font-semibold uppercase tracking-tight text-white md:text-[74px]">
        NIKE AIR MAX
      </h2>
      <p className="md:mb-6 mb-2 md:max-w-[490px] max-w-[197px] font-open-sans text-sm font-semibold leading-relaxed text-white/95 md:text-2xl">
        Nike introducing the new air max for everyone&apos;s comfort
      </p>
      <button
        className="font-rubik inline-flex items-center justify-center md:rounded-[8px] rounded-[4px] bg-primary md:px-8 md:py-[15.5px] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3d3de6]"
      >
        SHOP NOW
      </button>
    </div>
  );
}
