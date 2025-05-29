"use client";

import {
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logoWhiteImage } from "@/utils";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Reserve the space so layout doesn't shift while mounting
    return <div className="h-16" />;
  }

  return (
    <header className="fixed top-0 lg:top-10 left-0 z-20 w-full text-white shadow-md lg:shadow-none">
      {/* Main bar */}
      <nav className="mx-auto flex h-16 max-w-7xl lg:max-w-fit items-center justify-between px-4 md:px-6 lg:px-16 lg:rounded-full lg:border-primary/20 lg:border lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:justify-center overflow-x-hidden lg:space-x-8" style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(114,85,60, 0.45)",
        }}>
        {/* Mobile – hamburger */}
        <button
          className="flex items-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <FaXmark className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

       

        {/* Desktop links */}
        <a href="/" className="text-xl font-semibold md:text-2xl lg:text-3xl">
          <Image 
          src={logoWhiteImage}
          alt="Blaq Samurai Logo"
          className="h-8 w-auto lg:h-10 md:h-9"
          priority
          />
        </a>
        <ul className="hidden lg:flex lg:items-center lg:space-x-8 uppercase text-sm font-light">
          <li className="cursor-pointer transition hover:text-gray-300"><a href="/">Home</a></li>
          <li className="cursor-pointer transition hover:text-gray-300"><a href="/shop">Shop</a></li>
          <li className="cursor-pointer transition hover:text-gray-300">Brand</li>
          <li className="cursor-pointer transition hover:text-gray-300">Customize</li>
        </ul>

         {/* Brand */}

        {/* Desktop icons */}
        {/* <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <span className="cursor-pointer uppercase text-sm transition hover:text-gray-300">
            Account
          </span>
          <FaMagnifyingGlass className="cursor-pointer transition hover:text-gray-300" />
          <HiOutlineHeart className="cursor-pointer text-lg transition hover:text-gray-300" />
          <FaCartShopping className="cursor-pointer transition hover:text-gray-300" />
        </div> */}
      </nav>

      {/* Mobile slide-down menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="space-y-4 border-t border-white/20 px-4 py-6 backdrop-blur-lg uppercase text-sm font-light"
          style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(114,85,60, 0.45)",
        }}>
            <li className="cursor-pointer"><a href="/">Home</a></li>
            <li className="cursor-pointer"><a href="/shop">Shop</a></li>
            <li className="cursor-pointer">Brand</li>
            <li className="cursor-pointer">Customize</li>
            {/* <li className="mt-4 cursor-pointer border-t border-white/10 pt-4">Account</li>
            <li className="flex items-center space-x-6 pt-2 text-xl">
              <FaMagnifyingGlass className="cursor-pointer" />
              <HiOutlineHeart className="cursor-pointer" />
              <FaCartShopping className="cursor-pointer" />
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;