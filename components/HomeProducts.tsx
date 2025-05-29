"use client";

import { aboutImage, aboutImage3, asapImage2, yellowImage } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HomeProducts = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }
  return (
    <section className="flex flex-col relative space-y-16 bg-primary items-center px-8 py-8 text-white h-full">
      <div className="w-full max-w-7xl">
        <div className="xl:h-[70vh] h-full flex flex-col xl:flex-row justify-center items-center space-y-4 xl:space-y-0 xl:space-x-4">
          <Image
            src={yellowImage}
            alt="Product Image"
            className="object-cover h-full w-full"
          />
          <Image
            src={asapImage2}
            alt="Product Image"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="uppercase font-light cursor-pointer text-xl xl:text-3xl">
          View all products
        </p>
      </div>
    </section>
  );
};

export default HomeProducts;
