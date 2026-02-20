import Link from "next/link";
import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CATEGORY_LINKS = [
  { label: "Runners", href: "/categories/runners" },
  { label: "Sneakers", href: "/categories/sneakers" },
  { label: "Basketball", href: "/categories/basketball" },
  { label: "Outdoor", href: "/categories/outdoor" },
  { label: "Golf", href: "/categories/golf" },
  { label: "Hiking", href: "/categories/hiking" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", url: "/images/facebook.svg" },
  { label: "Instagram", href: "#", url: "/images/instagram.svg" },
  { label: "Twitter", href: "#", url: "/images/twitter.svg" },
  { label: "TikTok", href: "#", url: "/images/tiktok.svg" },
];

function FooterColumn({
  title,
  children,
  titleClassName,
  childrenClassName,
}: {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  childrenClassName?: string;
}) {
  return (
    <div>
      <h3
        className={cn(
          "font-rubik text-xl font-semibold tracking-wide text-[#FFA52F] md:text-2xl",
          titleClassName,
        )}
      >
        {title}
      </h3>
      <div className={cn("mt-4", childrenClassName)}>{children}</div>
    </div>
  );
}

export function FooterLinks() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative bg-[#212121] px-4 pt-6 md:pt-[40px] lg:px-12 lg:rounded-[48px] rounded-[24px]">
        <div className="relative z-10 flex items-start lg:gap-[122px] gap-10 lg:flex-row flex-col">
          <FooterColumn
            title="About us"
            titleClassName="lg:text-[36px] text-[24px] font-semibold leading-[100%]"
            childrenClassName="lg:mt-4 mt-1"
          >
            <p className="font-open-sans text-base lg:text-xl leading-relaxed font-semibold text-[#E7E7E3] md:max-w-[446px]">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </FooterColumn>
          <div className="w-full flex lg:gap-8 gap-6 justify-evenly flex-1 lg:flex-row flex-col">
            <FooterColumn title="Categories">
              <ul className="flex flex-col lg:gap-2 gap-1">
                {CATEGORY_LINKS.map((link) => (
                  <li key={link.href} className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Link
                      href={link.href}
                      className="font-open-sans text-base lg:text-xl leading-relaxed font-semibold text-[#E7E7E3] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
            <FooterColumn title="Company">
              <ul className="flex flex-col lg:gap-2 gap-1">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href} className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Link
                      href={link.href}
                      className="font-open-sans text-base lg:text-xl leading-relaxed font-semibold text-[#E7E7E3] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
            <FooterColumn title="Follow us">
              <ul className="flex gap-4">
                {SOCIAL_LINKS.map(({ label, href, url }) => (
                  <li key={label} className="hover:rotate-180 transition-transform duration-300 cursor-pointer">
                    <Image src={url} alt={label} width={24} height={24} />
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className=" w-full lg:mt-[97px] mt-[45px]">
          <Image
            className="w-full h-full object-cover"
            src="/images/logo-bg.svg"
            alt="Footer Background"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
