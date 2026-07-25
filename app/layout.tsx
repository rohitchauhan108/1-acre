import type { Metadata } from "next";
import {
  Poppins,
  Cinzel,
  Playfair_Display,
  Outfit,
} from "next/font/google";

import "./globals.css";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title:
    "One Acres Infra Heights India Private Limited | Residential Plots & Villas Dehradun",
  description:
    "Official website for One Acres Infra Heights India Private Limited (OneAcres.com).",
    icons: {
      icon: "/fav-copy.png"
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${cinzel.variable} ${playfair.variable} ${outfit.variable}`}
    >
      <body
        className="bg-slate-50 text-slate-800 antialiased selection:bg-red-600 selection:text-white"
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}