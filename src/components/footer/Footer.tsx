import { FooterCtaBanner, FooterLinks, FooterCopyright } from "./components";

export function Footer() {
  return (
    <footer className="bg-[#4A69E2] container container-7xl mx-auto px-4 lg:px-0 rounded-[48px] overflow-hidden">
      <FooterCtaBanner />
      <FooterLinks />
      <FooterCopyright />
    </footer>
  );
}