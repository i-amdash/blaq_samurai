"use client";

import { aboutImage, aboutImage2, aboutImage3 } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GiBloodySword } from "react-icons/gi";

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section className="relative h-full">
      <div className="absolute inset-0 bg-grain mix-blend-multiply" />
      {/* <section className='flex flex-row h-screen bg-gradient-to-br from-primary via-white to-white'> */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl md:space-x-4 space-y-8 px-8 py-16 mx-auto">
        <div className="flex flex-col w-full md:w-[33%]">
          <div className="md:h-[70vh] h-full w-full flex">
            <Image
              src={aboutImage}
              alt="About Image"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="mt-6 flex items-center space-x-2">
            <GiBloodySword className="md:text-3xl text-xl text-primary" />
            <span className="md:text-xl text-lg font-medium uppercase text-slate-950">
              Best Selling Brand
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center md:px-8 md:space-y-8 space-y-4 w-full md:w-[42%]">
          <h1 className="lg:text-6xl text-2xl md:text-4xl font-bold text-primary uppercase">
            the best choice for those
            who appreciate true quality, meticulous attention to detail.
          </h1>
          <p className="text-sm mt-4 text-justify font-light text-gray-700">
            Welcome to BLAQ SAMURAI, where tradition meets innovation. Our
            passion for crafting exceptional shirts is rooted in a deep
            respect for the art of creation. Each piece we offer is a testament
            to our commitment to quality and craftsmanship. We believe in creating more than just clothing; we are crafting experiences
            and stories that resonate with our customers. Our designs blend contemporary
            style with timeless elegance, ensuring that each shirt becomes a cherished
            part of your wardrobe.
          </p>
          {/* <p className="text-sm mt-4 text-justify font-light text-gray-700">
            
          </p>
          <p className="text-sm mt-4 text-justify font-light text-gray-700">
            From premium materials to meticulous attention to detail, every BLAQ SAMURAI
            shirt embodies our dedication to excellence. Join us in celebrating the art
            of refined fashion and discover why we're the preferred choice for those
            who appreciate true quality.
          </p> */}
        </div>
        <div className="md:flex hidden flex-col justify-start items-center space-y-8 w-[25%]">
            <div className="h-[35vh] w-full flex">
            <Image
              src={aboutImage2}
              alt="About Image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <GiBloodySword className="text-3xl text-primary" />
            <span className="text-xl font-medium uppercase text-slate-950">
              International brand
            </span>
          </div>
          <div className="h-[35vh] w-full flex">
            <Image
              src={aboutImage3}
              alt="About Image"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
