"use client";
import { 
  customImage, 
  districtImage, 
  haloImage, 
  orangeCollectionImage, 
  samuraiImage, 
  totemImage 
} from "@/utils";
import React, { useState, useEffect, useRef } from "react";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    href: "https://store.blaqsamurai.com/collections/custom-orders",
    imageSrc: samuraiImage,
    altText: "Samurai Collection"
  },
  {
    href: "https://store.blaqsamurai.com/collections/the-orange-collection",
    imageSrc: districtImage,
    altText: "District Collection"
  },
  {
    href: "https://store.blaqsamurai.com/collections/featured-collections",
    imageSrc: orangeCollectionImage,
    altText: "Orange Collection"
  },
  {
    href: "https://store.blaqsamurai.com/collections/totem-automobili",
    imageSrc: customImage,
    altText: "Custom Collection"
  },
  {
    href: "https://store.blaqsamurai.com/collections/totem-automobili",
    imageSrc: totemImage,
    altText: "Totem Collection"
  },
  {
    href: "https://store.blaqsamurai.com/collections/totem-automobili",
    imageSrc: haloImage,
    altText: "Halo Collection"
  }
];

const HomeCollections = () => {
  const [isClient, setIsClient] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Marquee effect
  useEffect(() => {
    if (!isClient || !marqueeRef.current || !containerRef.current) return;

    let animationFrame: number;
    let scrollAmount = 0;
    let isHovered = false;

    const marquee = marqueeRef.current;
    const container = containerRef.current;
    const speed = 1; // px per frame
    
    // Duplicate content without checking number of children
    const originalContent = container.innerHTML;
    container.innerHTML = originalContent + originalContent;

    const animate = () => {
      if (!isHovered) {
        scrollAmount += speed;
        
        // Reset when we've scrolled through the first set of items
        // This ensures we see all items before resetting
        const halfWidth = marquee.scrollWidth / 2;
        if (scrollAmount >= halfWidth) {
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
        style={{ whiteSpace: "nowrap", scrollBehavior: "auto", msOverflowStyle: "none",  scrollbarWidth: "none"}}
      >
        <div 
          ref={containerRef}
          className="flex flex-nowrap md:justify-between gap-4 md:gap-8 min-w-max lg:min-w-0"
        >
          {collections.map((collection, index) => (
            <CollectionCard 
              key={index}
              href={collection.href}
              imageSrc={collection.imageSrc}
              altText={collection.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;