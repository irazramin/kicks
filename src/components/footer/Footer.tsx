import { FooterCtaBanner, FooterCopyright, FooterLinks } from ".";

export function Footer() {
  return (
    <footer className="container container-7xl mx-auto px-4 lg:px-0">
      <div className="bg-primary lg:rounded-[48px] rounded-[24px] overflow-hidden">
        <FooterCtaBanner />
        <FooterLinks />
      </div>
      <FooterCopyright />
    </footer>
  );
}