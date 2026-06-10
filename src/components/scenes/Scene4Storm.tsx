"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene4Storm() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Darken environment
    tl.to(container.current, { backgroundColor: "#000000", duration: 1 })
      .to(".storm-text", { filter: "blur(0px)", opacity: 1, scale: 1, duration: 2, ease: "power2.out" })
      .to(".noise-layer", { opacity: 0.15, duration: 1 }, "<");

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen flex flex-col items-center justify-center bg-night px-4 overflow-hidden">
      
      {/* Noise/Wind Layer */}
      <div className="noise-layer absolute inset-0 z-0 opacity-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 z-0 bg-black/50 pointer-events-none" />

      <div className="z-10 max-w-6xl w-full text-center">
        <h2 className="storm-text opacity-0 scale-110 blur-xl text-5xl md:text-7xl lg:text-9xl font-bold text-snow uppercase tracking-tighter leading-none mb-12 mix-blend-difference">
          The Cloud Was Never Built For Privacy.
        </h2>
        
        <p className="storm-text opacity-0 text-2xl md:text-4xl text-sunrise font-light italic mt-16">
          So I Started Building My Own.
        </p>

        <div className="storm-text opacity-0 mt-24 max-w-2xl mx-auto text-lg md:text-xl text-snow/50 font-light text-left border-l-2 border-snow/20 pl-8">
          Most cloud platforms promise convenience. Few promise ownership. Even fewer deliver it.
          <br/><br/>
          Building a privacy-first platform forced me to learn system design, encryption, security, product thinking, and persistence.
        </div>
      </div>
    </section>
  );
}
