"use client";
import { aboutImage, aboutImage2, aboutImage3, asapImage, burnaImage, odumoduImage, orangeImage } from "@/utils";
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
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-primary xl:text-7xl text-2xl uppercase">
          Best Collections
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-center max-w-7xl w-full gap-4 px-8 py-12 z-10">
        <div className="relative text-white p-8 shadow-lg lg:w-[32%] md:w-[48%] w-full h-[50vh] lg:h-[70vh] flex flex-col justify-center items-center group overflow-hidden">
          <Image
            src={burnaImage}
            alt="collection image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-center">
            <h3 className="xl:text-3xl text-xl font-bold uppercase mb-4">Custom Orders</h3>
            <div className="flex flex-row justify-center items-center">
              <div className="border border-1 rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-white hover:border-none transition-colors ">
                <p className="font-light text-sm">Discover more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-white p-8 shadow-lg lg:w-[32%] md:w-[48%] w-full h-[50vh] lg:h-[70vh]  flex flex-col justify-center items-center group overflow-hidden">
          <Image
            src={orangeImage}
            alt="collection image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-center">
            <h3 className="xl:text-3xl text-xl font-bold uppercase mb-4">The Orange Collection</h3>
            <div className="flex flex-row justify-center items-center">
              <div className="border border-1 rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-white hover:border-none transition-colors ">
                <p className="font-light text-sm">Discover more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-white p-8 shadow-lg lg:w-[32%] md:w-[48%] w-full h-[50vh] lg:h-[70vh]  flex flex-col justify-center items-center group overflow-hidden">
          <Image
            src={odumoduImage}
            alt="collection image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-center">
            <h3 className="xl:text-3xl text-xl font-bold uppercase mb-4">Featured Collections</h3>
            <div className="flex flex-row justify-center items-center">
              <div className="border border-1 rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-white hover:border-none transition-colors ">
                <p className="font-light text-sm">Discover more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-white p-8 shadow-lg lg:w-[32%] md:w-[48%] w-full h-[50vh] lg:h-[70vh]  flex flex-col justify-center items-center group overflow-hidden">
          <Image
            src={asapImage}
            alt="collection image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-center">
            <h3 className="xl:text-3xl text-xl font-bold uppercase mb-4">Totem Automobili</h3>
            <div className="flex flex-row justify-center items-center">
              <div className="border border-1 rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-white hover:border-none transition-colors ">
                <p className="font-light text-sm">Discover more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;
