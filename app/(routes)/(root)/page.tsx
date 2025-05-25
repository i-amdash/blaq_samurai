"use client";

import { homeImage } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="h-[32vh] bg-primary absolute top-0 w-full"></div>
      <div className="flex flex-row absolute top-28 z-10 font-bold w-full justify-between space-x-8 items-center">
        <h1 className="text-white text-[16rem]"> BLAQ </h1>
        <h1 className="text-white text-[16rem]"> SAMURAI </h1>
      </div>
      <div className="h-[68vh] w-full absolute top-80 flex">
        <Image
          src={homeImage}
          alt="Home Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
