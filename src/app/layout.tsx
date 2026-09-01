import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import LenisScroll from "../lib/lenisScroll";

const excon = localFont({
  src: [
    {
      path: "../../public/excon-font-family/Excon-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/excon-font-family/Excon-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/excon-font-family/Excon-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/excon-font-family/Excon-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/excon-font-family/Excon-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/excon-font-family/Excon-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-excon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pawfecta | Thoughtful Products for Happy Pets",
  description:
    "Shop thoughtfully selected pet essentials for grooming, comfort, play, travel, and everyday wellbeing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${excon.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          signInFallbackRedirectUrl="/shop"
          signUpFallbackRedirectUrl="/shop"
        >
          <LenisScroll />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
