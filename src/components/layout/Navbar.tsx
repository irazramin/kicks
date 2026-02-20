"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container container-7xl mx-auto lg:px-0 px-4">
      <div className="mt-8 flex items-center justify-between gap-6 lg:rounded-[24px] rounded-[12px] bg-[#FAFAFA] lg:p-8 p-4">
        <nav className="items-center gap-[40px] lg:flex hidden" aria-label="Main">
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
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
          className="lg:hidden block"
        >
          <Image src={"/images/bar.svg"} width={20} height={20} alt="Menu" />
        </button>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-tight text-foreground"
          aria-label="KICKS – Home"
        >
          <Image src="/images/logo.svg" alt="KICKS" width={100} height={100} />
        </Link>
        <div className="flex items-center lg:gap-[40px] gap-2.5">
          <button
            type="button"
            className="text-foreground transition-colors hover:text-foreground/80 lg:block hidden"
            aria-label="Search"
          >
            <Image src={"/images/search.svg"} width={20} height={20} alt="Search" />
          </button>
          <Link
            href="/profile"
            className="text-foreground transition-colors hover:text-foreground/80"
            aria-label="Profile"
          >
            <Image className="lg:w-5 w-4 lg:h-5 h-4" src={"/images/user.svg"} width={20} height={20} alt="User" />
          </Link>
          <Link
            href="/cart"
            className="relative text-foreground transition-colors hover:text-foreground/80"
            aria-label="Cart (0 items)"
          >
            <Image className="lg:w-8 w-5 lg:h-8 h-5" src={"/images/profile.svg"} width={32} height={32} alt="Cart" />
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          aria-label="Close menu"
        />
      )}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-[280px] max-w-[85vw] rounded-r-[12px] bg-[#FAFAFA] shadow-xl lg:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ transition: "transform 300ms ease-out" }}
      >
        <div className="flex flex-col gap-4 p-6 pt-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base text-foreground transition-colors hover:text-foreground/80 font-rubik font-semibold"
          >
            New Drops 🔥
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base text-foreground transition-colors hover:text-foreground/80 font-rubik font-semibold"
          >
            Men
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base text-foreground transition-colors hover:text-foreground/80 font-rubik font-semibold"
          >
            Women
          </Link>
        </div>
      </div>
    </header>
  );
}
