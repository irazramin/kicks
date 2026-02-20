"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function Navbar() {
  return (
    <header className="">
      <div className="container container-7xl mx-auto mt-8 flex items-center justify-between gap-6 rounded-[24px] bg-[#FAFAFA] p-8">
        <nav className="flex items-center gap-[40px]" aria-label="Main">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base text-foreground transition-colors hover:text-foreground/80 font-rubik font-semibold"
          >
            New Drops 🔥
          </Link>
          <button
            type="button"
            className="flex items-center gap-1 text-base text-foreground transition-colors hover:text-foreground/80 font-rubik font-semibold"
            aria-expanded={false}
            aria-haspopup="true"
          >
            Men
            <Image
              src={"/images/arrow-down.svg"}
              width={7}
              height={7}
              alt="Arrow Down"
            />
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-base text-foreground transition-colors hover:text-foreground/80 font-rubik font-semibold"
            aria-expanded={false}
            aria-haspopup="true"
          >
            Women
            <Image
              src={"/images/arrow-down.svg"}
              width={7}
              height={7}
              alt="Arrow Down"
            />
          </button>
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-tight text-foreground"
          aria-label="KICKS – Home"
        >
          <Image src="/images/logo.svg" alt="KICKS" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-[40px]">
          <button
            type="button"
            className="text-foreground transition-colors hover:text-foreground/80"
            aria-label="Search"
          >
            <Image src={"/images/search.svg"} width={20} height={20} alt="Search" />
          </button>
          <Link
            href="/profile"
            className="text-foreground transition-colors hover:text-foreground/80"
            aria-label="Profile"
          >
            <Image src={"/images/user.svg"} width={20} height={20} alt="User" />
          </Link>
          <Link
            href="/cart"
            className="relative text-foreground transition-colors hover:text-foreground/80"
            aria-label="Cart (0 items)"
          >
            <Image src={"/images/profile.svg"} width={32} height={32} alt="Cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}
