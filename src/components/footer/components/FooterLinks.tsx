import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Music2,
} from "lucide-react";

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
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "TikTok", href: "#", icon: Music2 },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-rubik text-sm font-semibold uppercase tracking-wide text-[#FFD43B] md:text-base">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function FooterLinks() {
  return (
    <div className="container container-7xl mx-auto px-4 lg:px-0">
      <div className="relative bg-[#212121] px-6 py-12 md:px-8 md:py-16 lg:px-12 rounded-[48px]">
        <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="About us">
            <p className="font-open-sans text-sm leading-relaxed text-white/90 md:max-w-[260px]">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </FooterColumn>
          <FooterColumn title="Categories">
            <ul className="flex flex-col gap-2">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-open-sans text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
          <FooterColumn title="Company">
            <ul className="flex flex-col gap-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-open-sans text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
          <FooterColumn title="Follow us">
            <ul className="flex gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="text-white/90 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 right-0 opacity-[0.06]"
          aria-hidden
        >
          <span className="font-rubik text-[180px] font-bold leading-none text-white md:text-[240px]">
            KICKS
          </span>
        </div>
      </div>
    </div>
  );
}
