"use client";

import { aboutImage, aboutImage3 } from "@/utils";
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
    <section className="flex flex-col space-y-16 bg-primary items-center px-8 py-8 text-white h-screen">
      <div className="w-full max-w-7xl">
        <div className="h-[70vh] flex flex-row justify-center items-center  space-x-4">
          <Image
            src={aboutImage}
            alt="Product Image"
            className="object-cover h-full w-full"
          />
          <Image
            src={aboutImage3}
            alt="Product Image"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="uppercase font-light cursor-pointer text-3xl">
          View all products
        </p>
      </div>
    </section>
  );
};

export default HomeProducts;
