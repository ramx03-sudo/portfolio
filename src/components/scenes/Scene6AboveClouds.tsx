"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene6AboveClouds() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      }
    });

    // Dramatic atmosphere shift to bright snow
    tl.to(document.body, { backgroundColor: "#f8fafc", color: "#020617", duration: 1 })
      .to(container.current, { backgroundColor: "#f8fafc", color: "#020617", duration: 1 }, "<");
      
    // Parallax images
    gsap.to(".photo-parallax", {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen py-24 md:py-48 px-4 md:px-12 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-32 max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-night">
            Through My Lens
          </h2>
          <div className="mt-16 text-2xl md:text-4xl text-night/70 font-light space-y-6 leading-tight">
            <p>The mountains are where I think clearly.</p>
            <p>Where noise disappears. Where perspective returns.</p>
            <p className="mt-12 text-lg md:text-2xl italic">Some of my favorite moments weren&apos;t built with code.</p>
          </div>
        </div>

        {/* Editorial Full Bleed & Asymmetrical Images */}
        <div className="space-y-16 md:space-y-32">
          {/* Full bleed */}
          <div className="relative w-full h-[70vh] bg-gray-200 overflow-hidden">
            <div className="photo-parallax absolute inset-0 w-full h-[140%] bg-gray-300" />
            <div className="absolute bottom-8 left-8 bg-snow px-6 py-2">
              <span className="text-night tracking-widest text-sm uppercase font-bold">Kedarnath</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            <div className="w-full md:w-1/3 relative h-[50vh] bg-gray-200 overflow-hidden mt-0 md:mt-32">
              <div className="photo-parallax absolute inset-0 w-full h-[140%] bg-gray-300" />
              <div className="absolute bottom-8 left-8 bg-snow px-6 py-2">
                <span className="text-night tracking-widest text-sm uppercase font-bold">Solo Journeys</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 relative h-[80vh] bg-gray-200 overflow-hidden">
              <div className="photo-parallax absolute inset-0 w-full h-[140%] bg-gray-400" />
              <div className="absolute bottom-8 left-8 bg-snow px-6 py-2">
                <span className="text-night tracking-widest text-sm uppercase font-bold">The Himalayas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
