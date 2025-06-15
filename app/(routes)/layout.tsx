import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HomeCollections from "@/components/HomeCollections";
import HomeProducts from "@/components/HomeProducts";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <HomeCollections />
      {/* <Marquee /> */}
      <AboutSection />
      <NewArrivals />
      <HomeProducts />
      <Footer />
    </>
  );
}
