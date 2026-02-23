"use client";

import Link from "next/link";
import { ProductsList } from ".";

export function NewDropsSection() {
  return (
    <section className="lg:mt-[90px] mt-6 lg:mb-[128px] mb-4">
      <div className="container container-7xl mx-auto lg:px-0 px-4">
        <div className="lg:mb-8 mb-6 flex flex-row items-end justify-between">
          <div>
            <h2 className="max-w-[589px] md:text-[74px] text-2xl font-semibold lg:leading-[95%] leading-[100%] tracking-tight text-secondary md:text-3xl">
              DON&apos;T MISS OUT
              NEW DROPS
            </h2>
          </div>
          <div
            className="shrink-0 rounded-[10px] bg-primary lg:px-8 px-4 lg:py-4 py-2.5 text-sm font-medium uppercase tracking-[.25px] text-white transition-colors hover:bg-[#4d6ae8]"
          >
           Shop New Drops
          </div>
        </div>  
        <ProductsList />
      </div>
    </section>
  );
}
