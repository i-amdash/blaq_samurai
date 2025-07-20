"use client";

import { emblemImage, logoWhiteImage } from "@/utils";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl w-full mx-auto py-8 px-8 xl:px-32">
        <div className="flex flex-wrap md:flex-row md:items-center justify-between space-y-16 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="text-xl font-semibold md:text-2xl lg:text-3xl"
            >
              <Image
                src={emblemImage}
                alt="Blaq Samurai Logo"
                className=" w-auto h-48"
                priority
              />
            </a>
            <p className="text-5xl text-center uppercase">
              Blaq <br />
              Samurai
            </p>
          </div>
            <div className="flex flex-col space-y-8">
              <h4 className="text-xl">Quick links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.blaqsamurai.com/"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/brand"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    Brands
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.blaqsamurai.com/collections/custom-orders"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    Custom Orders
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-8">
              <h4 className="text-xl">Collections</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://store.blaqsamurai.com/collections/totem-automobili"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    Totem Automobili
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.blaqsamurai.com/collections/the-orange-collection"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    The Orange Collection
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.blaqsamurai.com/collections/featured-collections"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    District
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.blaqsamurai.com/collections/featured-collections"
                    className="text-md md:text-base text-white hover:text-gray-300 transition-colors"
                  >
                    Halo
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-8">
              <h4 className="text-lg">Follow us on socials</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="inline-block mr-1" />{" "}
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaX className="inline-block mr-1" /> <span>Twitter</span>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="inline-block mr-1" />{" "}
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="inline-block mr-1" />{" "}
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
