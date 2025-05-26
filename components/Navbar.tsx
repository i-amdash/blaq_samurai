"use client";

import {
  FaCartShopping,
  FaMagnifyingGlass,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi";
import React, { useState, useEffect } from "react";

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
    <header className="fixed top-0 left-0 z-20 w-full bg-primary text-white shadow-md lg:shadow-none">
      {/* Main bar */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
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
        <ul className="hidden lg:flex lg:items-center lg:space-x-8 uppercase text-sm font-light">
          <li className="cursor-pointer transition hover:text-gray-300">Shop</li>
          <li className="cursor-pointer transition hover:text-gray-300">Collections</li>
          <li className="cursor-pointer transition hover:text-gray-300">Brand</li>
        </ul>

         {/* Brand */}
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Blaq Samurai
        </h1>

        {/* Desktop icons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <span className="cursor-pointer uppercase text-sm transition hover:text-gray-300">
            Account
          </span>
          <FaMagnifyingGlass className="cursor-pointer transition hover:text-gray-300" />
          <HiOutlineHeart className="cursor-pointer text-lg transition hover:text-gray-300" />
          <FaCartShopping className="cursor-pointer transition hover:text-gray-300" />
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="space-y-4 border-t border-white/20 bg-primary/95 px-4 py-6 backdrop-blur-lg uppercase text-sm font-light">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">Brand</li>
            <li className="mt-4 cursor-pointer border-t border-white/10 pt-4">Account</li>
            <li className="flex items-center space-x-6 pt-2 text-xl">
              <FaMagnifyingGlass className="cursor-pointer" />
              <HiOutlineHeart className="cursor-pointer" />
              <FaCartShopping className="cursor-pointer" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;