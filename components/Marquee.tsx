"use client";
import React, { useState, useEffect } from "react";

import { FaStarOfLife } from "react-icons/fa6";

const Marquee = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }
  return (
    <div className="relative flex overflow-x-hidden w-full justify-between items-center bg-primary text-white space-x-12">
      <div className="animate-marquee flex flex-row justify-between items-center whitespace-nowrap space-x-12 py-8">
        <span className="mx-4 text-5xl">Custom Orders</span>
        <FaStarOfLife className="text-5xl text-orange-300" />
        <span className="mx-4 text-5xl text-orange-300">
          The Orange Collection
        </span>
        <FaStarOfLife className="text-5xl" />
        <span className="mx-4 text-5xl">Featured Collections</span>
        <FaStarOfLife className="text-5xl text-orange-300" />
        <span className="mx-4 text-5xl text-orange-300">Totem Automobili</span>
        <FaStarOfLife className="text-5xl " />
      </div>

      <div className="absolute top-0 flex flex-row justify-between items-center animate-marquee2 whitespace-nowrap space-x-12 py-8">
        <span className="mx-4 text-5xl">Custom Orders</span>
        <FaStarOfLife className="text-5xl text-orange-300" />
        <span className="mx-4 text-5xl text-orange-300">
          The Orange Collection
        </span>
        <FaStarOfLife className="text-5xl" />
        <span className="mx-4 text-5xl ">Featured Collections</span>
        <FaStarOfLife className="text-5xl text-orange-300" />
        <span className="mx-4 text-5xl text-orange-300">Totem Automobili</span>
        <FaStarOfLife className="text-5xl" />
      </div>
    </div>
  );
};

export default Marquee;
