import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehfil Cakes | Luxury Cake Studio & Café",
  description: "Experience the art of premium baking at Mehfil Cakes. From signature celebration cakes to a cozy café experience, we bring your sweet dreams to life.",
  keywords: ["bakery", "cakes", "luxury cakes", "cafe", "Mehfil Cakes", "celebration cakes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased bg-cream text-chocolate selection:bg-gold selection:text-cream">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

