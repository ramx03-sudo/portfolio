"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene2Trail() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: () => window.innerWidth < 768 ? "+=80%" : "+=150%",
        scrub: 1,
        pin: true,
      }
    });

    // Animate the text blocks sequentially like walking past them
    tl.fromTo(".trail-text-1", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 })
      .to(".trail-text-1", { opacity: 0, x: 100, duration: 1 }, "+=0.5")
      
      .fromTo(".trail-text-2", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
      .to(".trail-text-2", { opacity: 0, scale: 1.2, duration: 1 }, "+=0.5")
      
      .fromTo(".trail-text-3", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
      .to(".trail-text-3", { opacity: 0, y: -100, duration: 1 }, "+=0.5")
      
      .fromTo(".trail-text-4", { opacity: 0 }, { opacity: 1, duration: 2 });
      
    // Fog movement
    gsap.to(".fog-layer", {
      x: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen overflow-hidden bg-night flex items-center justify-center">
      
      {/* Animated Fog */}
      <div className="fog-layer absolute inset-0 w-[200%] h-full opacity-10 blur-3xl bg-gradient-to-r from-transparent via-snow to-transparent pointer-events-none" />

      {/* Cinematic Text Blocks appearing and disappearing */}
      <div className="absolute inset-0 flex items-center p-4 md:p-8 lg:p-24">
        
        <div className="trail-text-1 absolute top-1/3 left-4 md:left-10 lg:left-32 max-w-[90vw] md:max-w-2xl opacity-0">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-snow leading-tight tracking-tighter">
            I&apos;m Ram Mamillapalli.
          </p>
        </div>

        <div className="trail-text-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 w-full px-4">
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-snow/90 tracking-tighter">
            Founder of SecSky.
          </p>
        </div>

        <div className="trail-text-3 absolute bottom-1/4 right-4 md:right-10 lg:right-32 max-w-[90vw] md:max-w-xl text-right opacity-0">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-sunrise leading-tight">
            Engineer. Designer. Explorer.
          </p>
        </div>

        <div className="trail-text-4 absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 bg-night z-10 px-4">
          <p className="text-2xl md:text-4xl lg:text-7xl font-bold text-snow tracking-tighter">The mountains taught me persistence.</p>
          <p className="text-xl md:text-3xl lg:text-5xl font-light text-sunrise mt-4 md:mt-8">Technology gave it purpose.</p>
        </div>

      </div>
    </section>
  );
}
