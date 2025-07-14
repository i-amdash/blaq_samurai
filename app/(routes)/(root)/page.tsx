"use client";

import {
  homeImage,
  homeImage2,
  aboutImage,
  aboutImage2,
  emblemImage,
} from "@/utils";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null);
  const emblemRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  // Carousel images
  const carouselImages = [homeImage, homeImage2, aboutImage, aboutImage2];

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, carouselImages.length]);

  // Handle manual slide change
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoScrolling(false);

    // Resume auto-scroll after 8 seconds of manual interaction
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 8000);
  };

  // Simple transition-in animation only
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          buttonRef.current,
          indicatorsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Create a simple timeline - transition in only
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate elements in sequence with smooth easing
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          indicatorsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(emblemRef.current, {
          scale: 0,
          rotation: 180,
          duration: 1.2,
          ease: "back.out(1.7)",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen flex flex-col relative overflow-x-hidden">
      {/* Image Carousel Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Carousel Images */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Home Image ${index + 1}`}
              fill
              className="object-cover object-top"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
          <div className="relative z-20 text-center text-white max-w-4xl px-4">
            <div ref={emblemRef} className="flex justify-center mb-8">
              <Image
                src={emblemImage}
                alt="Blaq Samurai Emblem"
                className="h-20 w-20 object-contain"
                priority
              />
            </div>
          </div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl max-w-3xl font-bold text-center mb-6 tracking-wider capitalize leading-tight"
          >
            BLAQ SAMURAI
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl font-light text-center max-w-2xl mb-10 text-gray-100 leading-relaxed"
          >
            Discover our exclusive collection of premium clothing designed for
            those who dare to stand out
          </p>
          <a
            ref={buttonRef}
            href="https://store.blaqsamurai.com/"
            className="group px-10 py-4 cursor-pointer border border-white/80 text-white text-lg font-light rounded-full transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm bg-white/10 hover:scale-105"
          >
            <span className="group-hover:tracking-wide transition-all duration-300">
              Shop Now
            </span>
          </a>
        </div>

        {/* Carousel Progress Indicators */}
        <div
          ref={indicatorsRef}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="flex space-x-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Progress bar background */}
                <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  {/* Active progress bar */}
                  <div
                    className={`h-full bg-white rounded-full transition-all duration-1000 ${
                      index === currentSlide ? "w-full shadow-lg" : "w-0"
                    }`}
                  />
                </div>

                {/* Hover indicator */}
                <div className="absolute -inset-3 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-110" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
