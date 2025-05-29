"use client";

import { homeImage, homeImage2 } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative overflow-x-hidden">
      {/* Primary background */}
      {/* <div className="h-[32vh] bg-primary absolute top-0 w-full" /> */}

      {/* Text section - positioned between background and image */}
      {/* <div className="absolute w-full flex justify-center top-[29%] md:top-[28%] lg:top-[28%] xl:top-[20%] 2xl:top-[24%] z-10">
        <div className="flex flex-row w-full max-w-7xl justify-between items-center">
          <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            BLAQ
          </h1>
          <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            SAMURAI
          </h1>
        </div>
      </div> */}

      {/* Image section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <Image
          src={homeImage2}
          alt="Home Image"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-3xl font-bold text-center mb-4">
            Embodying excellence through fashion.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-center max-w-2xl mb-8 text-gray-200">
            Discover our exclusive collection of premium clothing designed for those who dare to stand out
          </p>
          <button className="px-8 py-2 border border-1 hover:border-none text-white text-lg font-light rounded-full hover:bg-primary transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}