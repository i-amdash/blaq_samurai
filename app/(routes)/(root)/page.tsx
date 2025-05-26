"use client";

import { homeImage } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative overflow-x-hidden">
      {/* Primary background */}
      <div className="h-[32vh] bg-primary absolute top-0 w-full" />

      {/* Text section - positioned between background and image */}
      <div className="absolute w-full flex justify-center top-[29%] md:top-[28%] lg:top-[28%] xl:top-[20%] 2xl:top-[24%] z-10">
        <div className="flex flex-row w-full max-w-7xl justify-between items-center">
          <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            BLAQ
          </h1>
          <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            SAMURAI
          </h1>
        </div>
      </div>

      {/* Image section */}
      <div className="absolute bottom-0 h-[68vh] w-full">
        <div className="absolute inset-0 bg-black opacity-30" />
        <Image
          src={homeImage}
          alt="Home Image"
          className="h-full w-full object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}