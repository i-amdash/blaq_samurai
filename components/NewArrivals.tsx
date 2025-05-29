"use client";

import React, { useState, useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import Image from "next/image";
import { arrivalsGif } from "@/utils";

const NewArrivals = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }
  return (
    <section className="bg-primary text-white h-screen flex flex-col items-center">
      <div className="relative flex overflow-x-hidden uppercase w-full justify-between items-center space-x-12">
        <div className="animate-marquee font-bold flex flex-row justify-between items-center whitespace-nowrap space-x-12 py-8">
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl  " />
        </div>

        <div className="absolute top-0 flex font-bold flex-row justify-between items-center animate-marquee2 whitespace-nowrap space-x-12 py-8">
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
          <span className="mx-4 md:text-5xl text-2xl  ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
          <span className="mx-4 md:text-5xl text-2xl ">New Arrivals</span>
          <FaStarOfLife className="md:text-5xl text-2xl " />
        </div>
      </div>
      <div className="flex-1 max-w-7xl py-8 w-full relative">
        <Image
          src={arrivalsGif}
          alt="New Arrivals Animation"
          fill
          className="object-cover px-8 py-8"
          priority
        />
      </div>
    </section>
  );
};

export default NewArrivals;
