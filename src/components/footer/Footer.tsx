import { FooterCtaBanner } from "./components/FooterCtaBanner";
import { FooterCopyright } from "./components/FooterCopyright";
import { FooterLinks } from "./components/FooterLinks";

export function Footer() {
  return (
    <footer className="container container-7xl mx-auto px-4 lg:px-0">
      <div className="bg-[#4A69E2] lg:rounded-[48px] rounded-[24px] overflow-hidden">
        <FooterCtaBanner />
        <FooterLinks />
      </div>
      <FooterCopyright />
    </footer>
  );
}