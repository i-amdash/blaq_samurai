"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnalyticsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [materials, setMaterials] = useState(30);
  const [checks, setChecks] = useState(10);
  const [countries, setCountries] = useState(8);
  const [deliveries, setDeliveries] = useState(300);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
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
          gsap.to(
            { val: 0 },
            {
              val: 18,
              duration: 1.5,
              ease: "power3.out",
              onUpdate: function () {
                setCountries(Math.round(this.targets()[0].val));
              },
            }
          );

          gsap.to(
            { val: 0 },
            {
              val: 2000,
              duration: 5,
              ease: "power3.out",
              onUpdate: function () {
                setDeliveries(Math.round(this.targets()[0].val));
              },
            }
          );
        },
      });
    });
    return () => ctx.revert();
  }, []);

  function formatNumber(num: number) {
    if (num >= 1000) {
      return `${Math.round(num / 1000)}k`;
    }
    return num;
  }

  return (
    <div
      ref={sectionRef}
      className="w-full bg-primary py-12 px-8 flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl w-full flex flex-wrap justify-between gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{materials}%</div>
          <div className="text-white mt-2">Premium Materials</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{checks}</div>
          <div className="text-white mt-2">Quality Checks</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">{countries}+</div>
          <div className="text-white mt-2">Countries Served</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">
            {formatNumber(deliveries)}+
          </div>
          <div className="text-white mt-2">Deliveries</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
