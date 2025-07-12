"use client";

import {
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logoWhiteImage } from "@/utils";
import { useLoading } from "@/components/LoadingContext";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const { startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    // Don't navigate if already on the same page
    if (pathname === href) return;
    
    setOpen(false); // Close mobile menu
    startLoading();
    
    setTimeout(() => {
      router.push(href);
      
      // Only auto-stop loading for non-customize pages
      if (href !== '/customize') {
        setTimeout(() => {
          stopLoading();
        }, 800);
      }
      // For customize page, let the canvas loading handle stopping the loader
    }, 200);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stop loading when pathname changes (backup)
  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, stopLoading]);

  if (!mounted) {
    return <div className="h-16" />;
  }

  return (
    <header className="fixed top-0 lg:top-10 left-0 z-20 w-full text-white shadow-md lg:shadow-none">
      <nav className="mx-auto flex h-16 max-w-7xl lg:max-w-fit items-center justify-between px-4 md:px-6 lg:px-16 lg:rounded-full lg:border-primary/20 lg:border lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:justify-center overflow-x-hidden lg:space-x-8" style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(6,80,96, 0.25)",
        }}>
        
        {/* Mobile hamburger */}
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

        {/* Logo */}
        <button onClick={() => handleNavigation('/')} className="text-xl font-semibold md:text-2xl lg:text-3xl">
          <Image 
            src={logoWhiteImage}
            alt="Blaq Samurai Logo"
            className="h-8 w-auto lg:h-10 md:h-9"
            priority
          />
        </button>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-8 text-sm font-light">
          <li className="cursor-pointer transition hover:text-gray-300">
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li className="cursor-pointer transition hover:text-gray-300">
            <a href="https://store.blaqsamurai.com/">Shop</a>
          </li>
          <li className="cursor-pointer transition hover:text-gray-300">
            <button onClick={() => handleNavigation('/brand')}>Brand</button>
          </li>
          <li className="cursor-pointer transition hover:text-gray-300">
            <button onClick={() => handleNavigation('/customize')}>Customize</button>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="space-y-4 border-t border-white/20 px-4 py-6 backdrop-blur-lg text-sm font-light"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(6,80,96, 0.45)",
            }}>
            <li className="cursor-pointer">
              <button onClick={() => handleNavigation('/')}>Home</button>
            </li>
            <li className="cursor-pointer">
              <a href="https://store.blaqsamurai.com/">Shop</a>
            </li>
            <li className="cursor-pointer">
              <button onClick={() => handleNavigation('/brand')}>Brand</button>
            </li>
            <li className="cursor-pointer">
              <button onClick={() => handleNavigation('/customize')}>Customize</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;