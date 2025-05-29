"use client";

import { logoWhiteImage } from "@/utils";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl w-full mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
          <a href="/" className="text-xl font-semibold md:text-2xl lg:text-3xl">
            <Image
              src={logoWhiteImage}
              alt="Blaq Samurai Logo"
              className="h-8 w-auto lg:h-10 md:h-9"
              priority
            />
          </a>

          <p className="text-center text-sm px-4 md:px-0 max-w-xs md:max-w-md">
            Follow us on social media for the latest updates and offers.
          </p>

          <div className="flex space-x-6 md:space-x-8">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
            >
              <FaFacebook className="inline-block mr-1" />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
            >
              <FaX className="inline-block mr-1" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
            >
              <FaInstagram className="inline-block mr-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
