"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import Image from "next/image";
import { arrivalsGif } from "@/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const NewArrivals = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([marqueeRef.current, marquee2Ref.current], {
        opacity: 0,
        y: -50
      });

      gsap.set(imageContainerRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50
      });

      // Create timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Marquee animations - staggered entrance
      tl.to(marqueeRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(marquee2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")
      
      // Image container animation
      .to(imageContainerRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.5");

      // Animate individual marquee items with stagger
      const marqueeItems = marqueeRef.current?.children;
      const marquee2Items = marquee2Ref.current?.children;

      if (marqueeItems) {
        gsap.from(marqueeItems, {
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        });
      }

      if (marquee2Items) {
        gsap.from(marquee2Items, {
          scrollTrigger: {
            trigger: marquee2Ref.current,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5
        });
      }

      // Image hover animation
      if (imageContainerRef.current) {
        imageContainerRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.6,
            ease: "power2.out"
          });
          gsap.to(imageContainerRef.current, {
            y: -10,
            duration: 0.6,
            ease: "power2.out"
          });
        });
        
        imageContainerRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          });
          gsap.to(imageContainerRef.current, {
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        });
      }

      // Enhanced marquee scroll animations
      gsap.to(marqueeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        x: -100,
        ease: "none"
      });

      gsap.to(marquee2Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        x: 100,
        ease: "none"
      });

      // Star icons rotation animation
      const stars = sectionRef.current?.querySelectorAll('svg');
      if (stars) {
        stars.forEach((star, index) => {
          gsap.to(star, {
            rotation: 360,
            duration: 8 + (index * 2),
            ease: "none",
            repeat: -1,
            delay: index * 0.5
          });
        });
      }

      // Parallax effect for the image
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        },
        y: -30,
        ease: "none"
      });

    });

    return () => ctx.revert();
  }, [isClient]);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section ref={sectionRef} className="bg-primary text-white h-screen flex flex-col items-center overflow-hidden">
      <div className="relative flex overflow-x-hidden uppercase w-full justify-between items-center space-x-12">
        <div ref={marqueeRef} className="animate-marquee font-bold flex flex-row justify-between items-center whitespace-nowrap space-x-12 py-8">
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
        </div>

        <div ref={marquee2Ref} className="absolute top-0 flex font-bold flex-row justify-between items-center animate-marquee2 whitespace-nowrap space-x-12 py-8">
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
          <span className="mx-4 md:text-3xl text-lg">New Arrivals</span>
          <FaStarOfLife className="md:text-3xl text-lg" />
        </div>
      </div>
      
      <div ref={imageContainerRef} className="flex-1 max-w-7xl py-8 w-full relative cursor-pointer group">
        <Image
          ref={imageRef}
          src={arrivalsGif}
          alt="New Arrivals Animation"
          fill
          className="object-cover px-8 py-8 rounded-lg transition-all duration-500"
          priority
        />
        {/* Hover overlay */}
        {/* <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg m-8 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white text-lg font-light uppercase tracking-wider bg-black/30 backdrop-blur-sm px-8 py-4 rounded-full">
            Explore Collection
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default NewArrivals;