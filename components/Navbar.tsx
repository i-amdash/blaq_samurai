"use client";

import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }
  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="h-10 bg-primary text-white  flex flex-row  justify-center py-16 px-8 items-center text-3xl">
        <div className="flex flex-row items-center justify-between max-w-7xl w-full space-x-8">
          <div className="flex flex-row justify-center items-center space-x-8 uppercase text-sm font-light">
            <h5> Shop </h5>
            <h5> Collections </h5>
            <h5> Brand </h5>
          </div>
          <h1 className="text-3xl font-semibold">Blaq Samurai</h1>
          <div className="flex flex-row justify-center items-center space-x-8 uppercase text-sm font-light">
            <h5> Account </h5>
            <FaMagnifyingGlass className="" />
            <HiOutlineHeart className="text-lg" />
            <FaCartShopping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
