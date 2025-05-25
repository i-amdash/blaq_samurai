import type { Metadata } from "next";
import { Inter, Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

const nunito = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blaq Samurai",
  description: "A clothing store for the modern samurai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
