import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCallBar from "@/components/StickyMobileCallBar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const SITE_NAME = "FlySupport";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FlySupport | Flight Booking, Changes & Cancellation Assistance by Phone",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "U.S. flight assistance service for bookings, last-minute changes, cancellations, and missed flights. One phone call connects you with a real person.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
      </head>
      <body className="font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-base focus:font-semibold focus:text-navy-900 focus:shadow-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCallBar />
      </body>
    </html>
  );
}
