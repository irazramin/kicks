import type { Metadata } from "next";
import { Rubik, Open_Sans } from "next/font/google";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/footer";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KICKS",
  description: "KICKS – Discover the latest drops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${openSans.variable} min-h-screen bg-background antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
