"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  aboutImage,
  aboutImage2,
  aboutImage3,
  emblemImage,
  homeImage, // Add this to your utils if not already there
} from "@/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BrandPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const valueCardsRef = useRef<HTMLDivElement>(null);
  const craftsmanshipRef = useRef<HTMLDivElement>(null);
  const craftsmanshipImageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const materialsRef = useRef<HTMLDivElement>(null);
  const checksRef = useRef<HTMLDivElement>(null);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [materials, setMaterials] = useState(0);
  const [checks, setChecks] = useState(0);

  // Carousel images
  const carouselImages = [
    aboutImage,
    aboutImage2,
    aboutImage3,
    homeImage, // Make sure this exists in your utils
  ];

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      tl.from(emblemRef.current, {
        scale: 0,
        rotation: 180,
        duration: 1.2,
        ease: "back.out(1.7)",
      })
        .from(
          titleRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Story section animations
      gsap.from(storyRef.current?.children || [], {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(storyImageRef.current, {
        scrollTrigger: {
          trigger: storyImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Values section animations
      gsap.from(valuesRef.current?.children || [], {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(valueCardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: valueCardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Craftsmanship section animations
      gsap.from(craftsmanshipImageRef.current, {
        scrollTrigger: {
          trigger: craftsmanshipImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(craftsmanshipRef.current?.children || [], {
        scrollTrigger: {
          trigger: craftsmanshipRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // CTA section animations
      gsap.from(ctaRef.current?.children || [], {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Parallax effect for hero background
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: craftsmanshipRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(
            { val: 0 },
            {
              val: 100,
              duration: 3,
              ease: "power3.out",
              onUpdate: function () {
                setMaterials(Math.round(this.targets()[0].val));
              },
            }
          );
          gsap.to(
            { val: 0 },
            {
              val: 24,
              duration: 2,
              ease: "power3.out",
              onUpdate: function () {
                setChecks(Math.round(this.targets()[0].val));
              },
            }
          );
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section with Carousel */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Carousel Images */}
          <div ref={heroRef} className="absolute inset-0">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Brand Hero ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-20 text-center text-white max-w-4xl px-4">
            <div ref={emblemRef} className="flex justify-center mb-8">
              <Image
                src={emblemImage}
                alt="Blaq Samurai Emblem"
                className="h-20 w-20 object-contain"
                priority
              />
            </div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-wider"
            >
              BLAQ SAMURAI
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
            >
              Where ancient warrior spirit meets contemporary fashion excellence
            </p>
          </div>

          {/* Carousel Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {/* Progress bar background */}
                  <div className="w-12 h-1 bg-white/30 rounded-full overflow-hidden">
                    {/* Active progress bar */}
                    <div
                      className={`h-full bg-white rounded-full transition-all duration-1000 ${
                        index === currentSlide ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute -inset-2 rounded-full border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of your existing sections remain the same */}
        {/* Brand Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div ref={storyRef} className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Born from the fusion of ancient samurai philosophy and
                    modern streetwear culture, Blaq Samurai represents more than
                    just clothing — its a way of life.
                  </p>
                  <p>
                    Every piece we create embodies the discipline, honor, and
                    artistic excellence that defined the legendary warriors of
                    feudal Japan, reimagined for the contemporary world.
                  </p>
                  <p>
                    Our commitment to quality, attention to detail, and respect
                    for craftsmanship ensures that each garment tells a story of
                    heritage and innovation.
                  </p>
                </div>
              </div>
              <div
                ref={storyImageRef}
                className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={aboutImage2}
                  alt="Brand Story"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={valuesRef} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision, every design, and
                every stitch
              </p>
            </div>

            <div
              ref={valueCardsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {/* Honor */}
              <div className="text-center group">
                <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-3xl font-bold text-primary">義</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Honor</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity in every aspect of our business, from sourcing
                  materials to customer service.
                </p>
              </div>

              {/* Excellence */}
              <div className="text-center group">
                <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-3xl font-bold text-primary">優</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Uncompromising quality in design, materials, and craftsmanship
                  that stands the test of time.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center group">
                <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-3xl font-bold text-primary">新</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pushing boundaries while respecting tradition, creating fresh
                  perspectives on timeless style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                ref={craftsmanshipImageRef}
                className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={aboutImage3}
                  alt="Craftsmanship"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div ref={craftsmanshipRef} className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Craftsmanship
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Each Blaq Samurai piece is meticulously crafted by skilled
                    artisans who understand that true quality cannot be rushed.
                  </p>
                  <p>
                    From the initial design concept to the final stitch, we
                    employ traditional techniques enhanced by modern innovation
                    to create garments that are both beautiful and durable.
                  </p>
                  <p>
                    Our commitment to sustainable practices ensures that our
                    craftsmanship respects both people and planet.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center">
                    <div
                      ref={materialsRef}
                      className="text-3xl font-bold text-primary"
                    >
                      {materials}%
                    </div>
                    <div className="text-gray-600">Premium Materials</div>
                  </div>
                  <div className="text-center">
                    <div
                      ref={checksRef}
                      className="text-3xl font-bold text-primary"
                    >
                      {checks}
                    </div>
                    <div className="text-gray-600">Quality Checks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div
            ref={ctaRef}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join the Brotherhood
            </h2>
            <p className="text-xl mb-12 leading-relaxed">
              Become part of a community that values quality, honor, and
              authentic style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/shop"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Collection
              </a>
              <a
                href="/customize"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Create Custom Piece
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BrandPage;
