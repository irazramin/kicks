import Link from "next/link";

export function CartBanner() {
  return (
    <div className="border-b border-[#e8e8e8] py-8">
      <div className="container container-7xl mx-auto lg:px-0 px-4">
        <h2 className="font-rubik lg:text-[32px] text-2xl font-semibold text-[#232321] leading-[100%]">
          Saving to celebrate
        </h2>
        <p className="mt-2 text-[#232321]/90 font-open-sans text-sm leading-[150%]">
          Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
        </p>
        <p className="text-[#232321] font-open-sans text-sm leading-[150%] pt-2 font-semibold">
          <Link href="/join" className="underline hover:no-underline">
            Join us
          </Link>
          {" "}
          <Link href="/sign-in" className="underline hover:no-underline">
            Sign-in
          </Link>
        </p>
      </div>
    </div>
  );
}
