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
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Marquee effect
  useEffect(() => {
    if (!isClient || !marqueeRef.current || !containerRef.current) return;

    let animationFrame: number;
    let scrollAmount = 0;
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    const speed = 1; // px per frame
    
    // Duplicate content without checking number of children
    const originalContent = container.innerHTML;
    container.innerHTML = originalContent + originalContent;

    // Handle mouse/touch interaction start
    const handleInteractionStart = () => {
      isInteractingRef.current = true;
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };

    // Handle mouse/touch interaction end
    const handleInteractionEnd = () => {
      // Resume auto-scrolling after a short delay
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
        // Update scrollAmount to match current scroll position to prevent jumps
        scrollAmount = marquee.scrollLeft;
      }, 1500); // Wait 1.5s before resuming
    };

    // Handle manual scroll
    const handleScroll = () => {
      if (isInteractingRef.current) {
        // Update scrollAmount to current position
        scrollAmount = marquee.scrollLeft;
        
        // Handle wrap-around for seamless scrolling
        const halfWidth = marquee.scrollWidth / 2;
        if (scrollAmount >= halfWidth) {
          scrollAmount = 0;
          marquee.scrollLeft = 0;
        } else if (scrollAmount <= 0) {
          scrollAmount = halfWidth - 1;
          marquee.scrollLeft = scrollAmount;
        }
      }
    };

    const animate = () => {
      if (!isInteractingRef.current) {
        scrollAmount += speed;
        
        // Reset when we've scrolled through the first set of items
        const halfWidth = marquee.scrollWidth / 2;
        if (scrollAmount >= halfWidth) {
          scrollAmount = 0;
        }
        
        marquee.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Add event listeners for both mouse and touch
    marquee.addEventListener("mouseenter", handleInteractionStart);
    marquee.addEventListener("mouseleave", handleInteractionEnd);
    marquee.addEventListener("touchstart", handleInteractionStart, { passive: true });
    marquee.addEventListener("touchend", handleInteractionEnd);
    marquee.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      
      // Remove all event listeners
      marquee.removeEventListener("mouseenter", handleInteractionStart);
      marquee.removeEventListener("mouseleave", handleInteractionEnd);
      marquee.removeEventListener("touchstart", handleInteractionStart);
      marquee.removeEventListener("touchend", handleInteractionEnd);
      marquee.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section className="relative py-16 bg-white dark:bg-dark-bg dark:text-white flex flex-col items-start">
      <div className="flex justify-start items-start sm:px-12 px-8 pb-10">
        <h4 className="text-4xl font-[500]">Collections</h4>
      </div>
      <div
        ref={marqueeRef}
        className="w-full overflow-x-auto z-10 scrollbar-hide"
        style={{ 
          whiteSpace: "nowrap", 
          scrollBehavior: "auto", 
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch" // Improves mobile scrolling
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
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