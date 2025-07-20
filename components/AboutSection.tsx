"use client";

import { aboutImage, aboutImage2, aboutImage3, emblemImage } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { GiBloodySword } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false);

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const leftBadgeRef = useRef<HTMLDivElement>(null);
  const centerColumnRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const rightBadgeRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          mainImageRef.current,
          leftBadgeRef.current,
          titleRef.current,
          paragraphRef.current,
          topImageRef.current,
          rightBadgeRef.current,
          bottomImageRef.current,
        ],
        {
          opacity: 0,
        }
      );

      // Create timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Left column animations
      tl.to(mainImageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          leftBadgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )

        // Center column animations
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          paragraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )

        // Right column animations (staggered)
        .to(
          topImageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          rightBadgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          bottomImageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Add hover animations for images
      const images = [
        mainImageRef.current,
        topImageRef.current,
        bottomImageRef.current,
      ];
      images.forEach((image) => {
        if (!image) return;

        const img = image.querySelector("img");
        if (img) {
          gsap.set(img, { scale: 1 });

          image.addEventListener("mouseenter", () => {
            gsap.to(img, {
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
            });
          });

          image.addEventListener("mouseleave", () => {
            gsap.to(img, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        }
      });

      // Parallax effect for background grain
      const bgElement = sectionRef.current?.querySelector(".bg-grain");
      if (bgElement) {
        gsap.to(bgElement, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          ease: "none",
        });
      }

      // Text reveal animation for title
      const titleText = titleRef.current;
      if (titleText) {
        const words = titleText.textContent?.split(" ") || [];
        titleText.innerHTML = words
          .map((word) => `<span class="inline-block">${word}</span>`)
          .join(" ");

        gsap.from(titleText.querySelectorAll("span"), {
          scrollTrigger: {
            trigger: titleText,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.3,
        });
      }
    });

    return () => ctx.revert();
  }, [isClient]);

  if (!isClient) {
    return <div className="h-screen" />; // Loading state
  }

  return (
    <section ref={sectionRef} className="relative bg-background-color dark:bg-dark-bg dark:text-white ">
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl md:space-x-4 md:justify-between space-y-8 md:space-y-0 px-8 pb-16 mx-auto">
        {/* Left Column */}
        <div ref={leftColumnRef} className="flex flex-col w-full md:w-[33%]">
          <div
            ref={mainImageRef}
            className="h-full w-full flex overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={aboutImage}
              alt="About Image"
              className="h-full w-full object-cover transition-transform duration-500"
            />
          </div>
        </div>

        {/* Center Column */}
        <div
          ref={centerColumnRef}
          className="flex flex-col justify-start items-start md:px-8 w-full md:w-[34%]"
        >
          <h1
            ref={titleRef}
            className="text-2xl py-4 font-[500] text-slate-950 dark:text-white leading-tight"
          >
            Fela Tribute T-shirt
          </h1>
          <p
            ref={paragraphRef}
            className="text-sm text-justify font-light text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Celebrate a legend. Wear the movement.
          </p>
          <p
            ref={paragraphRef}
            className="text-sm mt-2 text-justify font-light text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Step into the rythm of Afrobeat and the spirit of resistance with our Fela Tribute T-shirt.
            This piece isn't just clothing - it's a statement. Designed to honor the iconic Fela Anikulapo
            Kuti, this shirt pays homage to his fealess activism, musical genius and cultural legacy.
          </p>

          <div className="flex">
            <div
              ref={topImageRef}
              className="h-[35vh] w-full flex overflow-hidden rounded-lg"
            >
              <Image
                src={aboutImage2}
                alt="About Image"
                className="h-full w-full object-contain transition-transform duration-500"
              />
            </div>
            <div
              ref={bottomImageRef}
              className="h-[35vh] w-full flex overflow-hidden rounded-lg"
            >
              <Image
                src={aboutImage3}
                alt="About Image"
                className="h-full w-full object-contain transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          ref={rightColumnRef}
          className="md:flex hidden flex-col w-[33%]"
        >
          <div
            ref={mainImageRef}
            className="h-full w-full flex overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={aboutImage}
              alt="About Image"
              className="h-full w-full object-cover transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
