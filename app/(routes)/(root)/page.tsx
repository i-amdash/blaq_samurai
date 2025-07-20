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

const carouselData = [
  {
    image: homeImage,
    title: "BLAQ SAMURAI",
    subtitle: "Discover our exclusive collection of premium clothing designed for those who dare to stand out",
    button: { text: "Shop Now", href: "https://store.blaqsamurai.com/" },
  },
  {
    image: homeImage2,
    title: "LIMITED EDITION",
    subtitle: "Experience the uniqueness of our limited edition pieces, crafted for true originals.",
    button: { text: "Explore Limited", href: "https://store.blaqsamurai.com/collections" },
  },
  {
    image: aboutImage,
    title: "CUSTOM ORDERS",
    subtitle: "Inspired by tradition, designed for the modern era. Elevate your wardrobe.",
    button: { text: "View Custom Orders", href: "https://store.blaqsamurai.com/collections/custom-orders" },
  },
  {
    image: aboutImage2,
    title: "JOIN THE MOVEMENT",
    subtitle: "Be part of a community that values boldness, creativity, and authenticity.",
    button: { text: "Join Us", href: "https://store.blaqsamurai.com/collections" },
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Handle manual slide change
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 8000);
  };

  // Animate text on slide change
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        tl.set([titleRef.current, subtitleRef.current, buttonRef.current], { y: 30 });
        tl.to([titleRef.current, subtitleRef.current, buttonRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });
  }, [currentSlide]);

  // Initial emblem animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(emblemRef.current, {
        scale: 0,
        rotation: 180,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    });
    return () => ctx.revert();
  }, []);

  const { image, title, subtitle, button } = carouselData[currentSlide];

  return (
    <div className="h-screen flex flex-col relative overflow-x-hidden">
      {/* Image Carousel Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Carousel Images */}
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
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
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl font-light text-center max-w-2xl mb-10 text-gray-100 leading-relaxed"
          >
            {subtitle}
          </p>
          <a
            ref={buttonRef}
            href={button.href}
            className="group px-10 py-4 cursor-pointer border border-white/80 text-white text-lg font-light rounded-full transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm bg-white/10 hover:scale-105"
          >
            <span className="group-hover:tracking-wide transition-all duration-300">
              {button.text}
            </span>
          </a>
        </div>

        {/* Carousel Progress Indicators */}
        <div
          ref={indicatorsRef}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="flex space-x-4">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-white rounded-full transition-all duration-1000 ${
                      index === currentSlide ? "w-full shadow-lg" : "w-0"
                    }`}
                  />
                </div>
                <div className="absolute -inset-3 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-110" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}