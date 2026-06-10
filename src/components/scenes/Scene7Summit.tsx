"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene7Summit() {
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

    // Fade back to night
    tl.to(document.body, { backgroundColor: "#020617", color: "#F8FAFC", duration: 1 })
      .to(container.current, { backgroundColor: "#020617", color: "#F8FAFC", duration: 1 }, "<")
      .from(".summit-text", { y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power2.out" });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen py-24 md:py-48 px-4 md:px-12 flex flex-col justify-center items-center text-center transition-colors duration-1000">
      <div className="max-w-5xl mx-auto">
        <h2 className="summit-text text-sm md:text-base font-bold text-sunrise uppercase tracking-[0.5em] mb-16">
          Beyond The Summit
        </h2>
        
        <div className="summit-text space-y-6 text-3xl md:text-6xl lg:text-7xl text-snow font-bold tracking-tighter leading-none">
          <p>Data Engineering.</p>
          <p>Artificial Intelligence.</p>
          <p>Privacy-first Systems.</p>
          <p>Large-scale Infrastructure.</p>
        </div>

        <div className="summit-text mt-32 text-xl md:text-3xl text-snow/60 font-light leading-relaxed">
          <p>Building technology that matters.</p>
          <p>Building technology that lasts.</p>
        </div>
      </div>
    </section>
  );
}
