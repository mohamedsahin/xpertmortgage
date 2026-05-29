import type { Metadata, Viewport } from "next";
import { Archivo, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const display = Archivo({
  subsets: ["latin"], weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo", display: "swap",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta", display: "swap",
});
const serif = Playfair_Display({
  subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"],
  variable: "--font-playfair", display: "swap",
});

export const metadata: Metadata = {
  title: "Xperts Mortgage — Your Dream Home, Our Expertise",
  description:
    "Smart mortgage solutions tailored for you. Access to 20+ leading banks, expert guidance and quick approvals for residents, expats and investors in Dubai.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E3B2E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
