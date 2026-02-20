"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";

export function FooterCtaBanner() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative overflow-hidden lg:px-[72px] px-4 pt-4 pb-[60px] lg:pt-[64px] lg:pb-[40px] grid lg:grid-cols-2 grid-cols-1">
      <div className="max-w-xl">
        <h2 className="font-rubik lg:text-[48px] text-[32px] font-semibold uppercase leading-[100%] text-white">
          Join our KicksPlus Club & get{" "}
          <span className="lg:text-[48px] text-[32px] font-semibold">
            15% off
          </span>
        </h2>
        <p className="mt-4 font-open-sans lg:text-xl text-base font-semibold text-[#E7E7E3]">
          Sign up for free! Join the community.
        </p>
        <form
          className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="lg:w-[342px] w-full rounded-[8px] px-4 py-3.5 font-open-sans text-base text-white border border-white placeholder:text-[#E7E7E3]"
            />
          </div>
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-[#212121] px-6 py-4 font-rubik text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#333]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="relative mt-8 flex justify-center items-center lg:mt-0 lg:shrink-0">
        <div className="relative">
          <Image
            src="/images/logo-2.svg"
            alt="KICKS"
            width={200}
            height={80}
            className="h-16 w-auto object-contain object-right md:h-24 lg:h-28"
          />
        </div>
      </div>
    </div>
  );
}
