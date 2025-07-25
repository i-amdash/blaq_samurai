"use client";

import { emblemImage, logoWhiteImage } from "@/utils";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl w-full mx-auto py-8 px-8 xl:px-32">
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-start md:justify-between md:space-x-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-start h-[200px] md:h-auto md:w-auto">
            <a href="/" className="mb-2">
              <Image
                src={emblemImage}
                alt="Blaq Samurai Logo"
                className="w-auto h-24 md:h-40"
                priority
              />
            </a>
            <p className="text-2xl md:text-4xl lg:text-5xl text-center uppercase leading-tight">
              Blaq <br />
              Samurai
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col h-[200px] md:h-auto md:w-auto">
            <h4 className="text-lg md:text-xl font-[500] mb-4">Quick links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://store.blaqsamurai.com/"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/brand"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="https://store.blaqsamurai.com/collections/custom-orders"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Collections Section */}
          <div className="flex flex-col h-[200px] md:h-auto md:w-auto">
            <h4 className="text-lg md:text-xl font-[500] mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://store.blaqsamurai.com/collections/totem-automobili"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Totem Automobili
                </a>
              </li>
              <li>
                <a
                  href="https://store.blaqsamurai.com/collections/the-orange-collection"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  The Orange Collection
                </a>
              </li>
              <li>
                <a
                  href="https://store.blaqsamurai.com/collections/featured-collections"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  District
                </a>
              </li>
              <li>
                <a
                  href="https://store.blaqsamurai.com/collections/featured-collections"
                  className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Halo
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col h-[200px] md:h-auto md:w-auto">
            <h4 className="text-lg md:text-xl font-[500] mb-4">Follow us on socials</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
              >
                <FaFacebook className="inline-block mr-2" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
              >
                <FaX className="inline-block mr-2" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
              >
                <FaInstagram className="inline-block mr-2" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white hover:text-gray-300 transition-colors"
              >
                <FaWhatsapp className="inline-block mr-2" />
                <span>Whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto py-4 px-4 md:px-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Blaq Samurai. Powered by d4rkcyber.
          Built by{" "}
          <a href="https://doyin.netlify.app" className="underline">
            Doyin
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
