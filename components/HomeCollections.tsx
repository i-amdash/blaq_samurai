"use client";
import { collection1Image, collection2Image, collection3Image, collection4Image } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HomeCollections = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section className="relative h-full py-16 flex flex-col items-center">
      <div className="absolute inset-0 bg-grain mix-blend-multiply" />
      
      <div className="w-full overflow-x-auto z-10 scrollbar-hide">
        <div className="flex flex-nowrap gap-4 min-w-max lg:min-w-0">
          {/* First Card */}
          <a href="https://store.blaqsamurai.com/collections/custom-orders" className=" w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[45vh] overflow-hidden">
              <Image
                src={collection1Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">Custom Orders</h3>
            </div>
          </a>

          {/* Second Card */}
          <a href="https://store.blaqsamurai.com/collections/the-orange-collection" className=" w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[45vh] overflow-hidden">
              <Image
                src={collection2Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">The Orange Collection</h3>
            </div>
          </a>

          {/* Third Card */}
          <a href="https://store.blaqsamurai.com/collections/featured-collections" className=" w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[45vh] overflow-hidden">
              <Image
                src={collection3Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">Featured Collections</h3>
            </div>
          </a>

          {/* Fourth Card */}
          <a href="https://store.blaqsamurai.com/collections/totem-automobili" className="w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[45vh] overflow-hidden">
              <Image
                src={collection4Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">Totem Automobili</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;