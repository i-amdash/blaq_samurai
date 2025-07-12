"use client";
import { collection1Image, collection2Image, collection3Image, collection4Image } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const HomeCollections = () => {
  const [isClient, setIsClient] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Marquee effect
  useEffect(() => {
    if (!isClient || !marqueeRef.current) return;

    let animationFrame: number;
    let scrollAmount = 0;
    let isHovered = false;

    const marquee = marqueeRef.current;
    const speed = 1; // px per frame

    // Duplicate the content for seamless looping
    if (marquee.children.length === 4) {
      marquee.innerHTML += marquee.innerHTML;
    }

    const animate = () => {
      if (!isHovered) {
        scrollAmount += speed;
        if (scrollAmount >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Pause on hover
    marquee.addEventListener("mouseenter", () => { isHovered = true; });
    marquee.addEventListener("mouseleave", () => { isHovered = false; });

    return () => {
      cancelAnimationFrame(animationFrame);
      marquee.removeEventListener("mouseenter", () => { isHovered = true; });
      marquee.removeEventListener("mouseleave", () => { isHovered = false; });
    };
  }, [isClient]);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section className="relative h-full py-16 bg-white flex flex-col items-center">
      <div className="absolute inset-0 bg-grain mix-blend-multiply" />
      <div
        ref={marqueeRef}
        className="w-full overflow-x-auto z-10 scrollbar-hide"
        style={{ whiteSpace: "nowrap", scrollBehavior: "auto" }}
      >
        <div className="flex flex-nowrap gap-4 min-w-max lg:min-w-0">
          {/* First Card */}
          <a href="https://store.blaqsamurai.com/collections/custom-orders" className="w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={collection1Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">Custom Orders</h3>
            </div>
          </a>
          {/* Second Card */}
          <a href="https://store.blaqsamurai.com/collections/the-orange-collection" className="w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={collection2Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">The Orange Collection</h3>
            </div>
          </a>
          {/* Third Card */}
          <a href="https://store.blaqsamurai.com/collections/featured-collections" className="w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={collection3Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">Featured Collections</h3>
            </div>
          </a>
          {/* Fourth Card */}
          <a href="https://store.blaqsamurai.com/collections/totem-automobili" className="w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[23%] cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={collection4Image}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="xl:text-3xl text-xl font-normal">Totem Automobili</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;