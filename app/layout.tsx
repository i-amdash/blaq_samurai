import type { Metadata } from "next";
import { Inter, Nunito, Quicksand, Montserrat, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

const aptos = localFont({
  src: [
    {
      path: '../public/fonts/Aptos/Aptos-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/Aptos/Aptos-Display.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aptos/Aptos-SemiBold.ttf',
      weight: '500',
      style: 'semibold',
    },
    {
      path: '../public/fonts/Aptos/Aptos-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
  variable: '--font-aptos',
});

const nunito = Jost({
// const nunito = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blaq Samurai",
  description: "A clothing store for the modern samurai",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
