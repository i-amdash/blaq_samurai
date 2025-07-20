"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeProducts = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(videoContainerRef.current, {
        opacity: 0,
        scale: 0.95
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

      // Video animation
      tl.to(videoContainerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          // Play video when animation completes
          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      });
    });

    return () => ctx.revert();
  }, [isClient]);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section 
      ref={sectionRef} 
      className="flex items-center justify-center relative bg-white dark:bg-dark-bg px-0 py-0 overflow-hidden"
    >
      {/* Video Container */}
      <div 
        ref={videoContainerRef} 
        className="w-full h-full"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="auto"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeProducts;