"use client";
import { collection1Image, collection2Image, collection3Image, collection4Image, customImage, districtImage, haloImage, orangeCollectionImage, samuraiImage, totemImage } from "@/utils";
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
    <section className="relative py-16 bg-background-color dark:bg-dark-bg dark:text-white flex flex-col items-start">
      <div className="flex justify-start items-start sm:px-12 px-8 pb-10">
        <h4 className="text-4xl font-[500]">Collections</h4>
      </div>
      <div
        ref={marqueeRef}
        className="w-full overflow-x-auto z-10 scrollbar-hide"
        style={{ whiteSpace: "nowrap", scrollBehavior: "auto" }}
      >
        <div className="flex flex-nowrap md:justify-between gap-8 min-w-max lg:min-w-0">
          {/* First Card */}
          <a href="https://store.blaqsamurai.com/collections/custom-orders" className="cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={samuraiImage}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </a>
          {/* Second Card */}
          <a href="https://store.blaqsamurai.com/collections/the-orange-collection" className="cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={districtImage}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </a>
          {/* Third Card */}
          <a href="https://store.blaqsamurai.com/collections/featured-collections" className="cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={orangeCollectionImage}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </a>
          {/* Fourth Card */}
          <a href="https://store.blaqsamurai.com/collections/totem-automobili" className="cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={customImage}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </a>
          {/* Fifth Card */}
          <a href="https://store.blaqsamurai.com/collections/totem-automobili" className="cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={totemImage}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </a>
          {/* Sixth Card */}
          <a href="https://store.blaqsamurai.com/collections/totem-automobili" className="cursor-pointer flex-shrink-0 flex flex-col group overflow-hidden">
            <div className="h-[25vh] overflow-hidden">
              <Image
                src={haloImage}
                alt="collection image"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;