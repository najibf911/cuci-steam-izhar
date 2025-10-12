import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuci Steam Izhar — Cuci Motor Cepat & Kinclong",
  description:
    "Cuci Steam Izhar: solusi cepat, bersih, dan terpercaya untuk motor kesayangan. Express, Salon, dan Detail untuk semua jenis motor.",
  openGraph: {
    title: "Cuci Steam Izhar",
    description: "Cuci Steam Izhar — Cuci motor cepat, bersih, dan terpercaya.",
  },
  icons: {
    icon: "/izhar-motowash2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
