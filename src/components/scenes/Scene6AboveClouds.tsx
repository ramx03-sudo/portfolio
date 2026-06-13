"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const kedarnathImages = [
  "/media/kedarnath/IMG_6874.jpg",
  "/media/kedarnath/IMG_6770.jpg",
  "/media/kedarnath/IMG_6806.jpg"
];

const summitImages = [
  "/media/summit/IMG_7210.jpg",
  "/media/summit/IMG_7273.jpg",
  "/media/summit/IMG_7290.jpg"
];

const himalayasImages = [
  "/media/himalayas/IMG_6867.jpg",
  "/media/himalayas/IMG_6936.jpg",
  "/media/himalayas/IMG_6939.jpg"
];

export default function Scene6AboveClouds() {
  const container = useRef<HTMLDivElement>(null);
  const [kedarnathIdx, setKedarnathIdx] = useState(0);
  const [summitIdx, setSummitIdx] = useState(0);
  const [himalayasIdx, setHimalayasIdx] = useState(0);

  useEffect(() => {
    const kedarnathTimer = setInterval(() => {
      setKedarnathIdx((prev) => (prev + 1) % kedarnathImages.length);
    }, 8000);

    // Offset the second timer so they don't fade at the exact same time
    const summitTimer = setTimeout(() => {
      setInterval(() => {
        setSummitIdx((prev) => (prev + 1) % summitImages.length);
      }, 8000);
    }, 2500);

    const himalayasTimer = setTimeout(() => {
      setInterval(() => {
        setHimalayasIdx((prev) => (prev + 1) % himalayasImages.length);
      }, 8000);
    }, 5000);

    return () => {
      clearInterval(kedarnathTimer);
      clearTimeout(summitTimer);
      clearTimeout(himalayasTimer);
    };
  }, []);

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
          <div className="relative w-full h-[70vh] bg-transparent overflow-hidden">
            {himalayasImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                className={`photo-parallax absolute inset-0 w-full h-[140%] object-cover ${idx === himalayasIdx ? 'opacity-90' : 'opacity-0'}`}
                style={{
                  transition: 'opacity 2s ease-in-out, object-position 8s linear',
                  objectPosition: idx === himalayasIdx ? 'center bottom' : 'center top'
                }}
                alt="The Himalayas"
              />
            ))}
            <div className="absolute bottom-8 left-8 bg-snow px-6 py-2 shadow-2xl">
              <span className="text-night tracking-widest text-sm uppercase font-bold">The Himalayas</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            <div className="w-full md:w-1/3 relative h-[50vh] bg-transparent overflow-hidden mt-0 md:mt-32">
              {summitImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  className={`photo-parallax absolute inset-0 w-full h-[140%] object-cover ${idx === summitIdx ? 'opacity-90' : 'opacity-0'}`}
                  style={{
                    transition: 'opacity 2s ease-in-out, object-position 8s linear',
                    objectPosition: idx === summitIdx ? 'center bottom' : 'center top'
                  }}
                  alt="Solo Journeys"
                />
              ))}
              <div className="absolute bottom-8 left-8 bg-snow px-6 py-2 shadow-2xl">
                <span className="text-night tracking-widest text-sm uppercase font-bold">Solo Journeys</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 relative h-[80vh] bg-transparent overflow-hidden">
              {kedarnathImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  className={`photo-parallax absolute inset-0 w-full h-[140%] object-cover ${idx === kedarnathIdx ? 'opacity-90' : 'opacity-0'}`}
                  style={{
                    transition: 'opacity 2s ease-in-out, object-position 8s linear',
                    objectPosition: idx === kedarnathIdx ? 'center bottom' : 'center top'
                  }}
                  alt="Kedarnath Temple"
                />
              ))}
              <div className="absolute bottom-8 left-8 bg-snow px-6 py-2 shadow-2xl">
                <span className="text-night tracking-widest text-sm uppercase font-bold">Kedarnath</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 flex justify-center w-full">
          <a
            href="https://www.instagram.com/ramsrandomclicks/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 text-lg md:text-xl font-light text-night py-4 px-2 overflow-hidden"
          >
            <span className="relative z-10">Explore more on Instagram @ramsrandomclicks</span>

            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-night/20 group-hover:border-night group-hover:bg-transparent transition-all duration-500 ease-out">
              <svg
                className="w-5 h-5 text-night group-hover:text-snow transition-colors duration-500 ease-out transform group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <span className="absolute bottom-2 left-2 w-0 h-[1px] bg-transparent group-hover:w-[calc(100%-4rem)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
