"use client";

import { aboutImage, aboutImage3, asapImage2, yellowImage } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeProducts = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([leftImageRef.current, rightImageRef.current, ctaTextRef.current], {
        opacity: 0,
        y: 60,
        scale: 0.95
      });

      // Create main timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Images animation with stagger
      tl.to(leftImageRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(rightImageRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      
      // CTA text animation
      .to(ctaTextRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");

      // Add hover animations for images
      const setupImageHover = (imageRef: React.RefObject<HTMLDivElement>) => {
        if (!imageRef.current) return;
        
        const img = imageRef.current.querySelector('img');
        if (img) {
          gsap.set(img, { scale: 1 });
          
          imageRef.current.addEventListener('mouseenter', () => {
            gsap.to(img, {
              scale: 1.08,
              duration: 0.6,
              ease: "power2.out"
            });
          });
          
          imageRef.current.addEventListener('mouseleave', () => {
            gsap.to(img, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
          });
        }
      };

      setupImageHover(leftImageRef);
      setupImageHover(rightImageRef);

      // CTA text hover animation
      if (ctaTextRef.current) {
        ctaTextRef.current.addEventListener('mouseenter', () => {
          gsap.to(ctaTextRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        ctaTextRef.current.addEventListener('mouseleave', () => {
          gsap.to(ctaTextRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }

      // Parallax effect for images
      gsap.to([leftImageRef.current, rightImageRef.current], {
        scrollTrigger: {
          trigger: imagesContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -20,
        ease: "none"
      });

      // Text letter animation
      const ctaText = ctaTextRef.current;
      if (ctaText) {
        const text = ctaText.textContent || '';
        const letters = text.split('').map(letter => 
          letter === ' ' ? '&nbsp;' : letter
        );
        ctaText.innerHTML = letters.map(letter => 
          `<span class="inline-block">${letter}</span>`
        ).join('');
        
        gsap.from(ctaText.querySelectorAll('span'), {
          scrollTrigger: {
            trigger: ctaText,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: "power3.out",
          delay: 0.5
        });
      }

    });

    return () => ctx.revert();
  }, [isClient]);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section ref={sectionRef} className="flex flex-col relative space-y-16 bg-white items-center px-8 py-16 text-white h-full overflow-hidden">
      <div className="absolute inset-0 bg-grain mix-blend-multiply" />
      <div className="w-full max-w-7xl 2xl:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center mb-8">
          Featured Products
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-primary text-center mb-12">
          Discover the unique craftsmanship and quality of Blaq Samurai products.
        </p>
        <div ref={imagesContainerRef} className="xl:h-[70vh] h-full flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-y-0 xl:space-x-6">
          <div ref={leftImageRef} className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl group cursor-pointer">
            <Image
              src={yellowImage}
              alt="Product Image"
              className="object-cover h-full w-full transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <a href="https://store.blaqsamurai.com/" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-light uppercase tracking-wider bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                View Products
              </span>
            </a>
          </div>
          
          <div ref={rightImageRef} className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl group cursor-pointer">
            <Image
              src={asapImage2}
              alt="Product Image"
              className="object-cover h-full w-full transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <a href="https://store.blaqsamurai.com/" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-light uppercase tracking-wider bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                View Products
              </span>
            </a>
          </div>
        </div>
      </div>
      
      <a href="https://store.blaqsamurai.com/" className="flex flex-row justify-center items-center">
        <p ref={ctaTextRef} className="uppercase font-light cursor-pointer text-xl xl:text-3xl text-primary hover:text-primary/80 transition-colors duration-300 tracking-wider">
          View all products
        </p>
      </a>
    </section>
  );
};

export default HomeProducts;