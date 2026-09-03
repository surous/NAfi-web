import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/LenisProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nafisolutions.com"),
  title: {
    default: "NAFI Solutions — Smart Digital Solutions for Modern Businesses",
    template: "%s | NAFI Solutions",
  },
  description:
    "NAFI Solutions builds custom websites, mobile apps, and enterprise software that help businesses in Ethiopia grow, operate efficiently, and embrace digital transformation.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nafisolutions.com",
    siteName: "NAFI Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NAFI Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
