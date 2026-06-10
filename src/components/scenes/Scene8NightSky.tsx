"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene8NightSky() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-fade", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen flex flex-col justify-end items-center text-center pb-32 px-4 bg-night">
      
      {/* Subtle Starfield Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-screen pointer-events-none" />
      
      <div className="z-10 max-w-5xl mx-auto space-y-8 w-full">
        <h2 className="contact-fade text-3xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-snow/20 leading-none">
          THE SUMMIT WAS NEVER THE GOAL.
        </h2>
        <h3 className="contact-fade text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-snow leading-none">
          THE JOURNEY WAS.
        </h3>
        
        <p className="contact-fade text-lg md:text-xl text-sunrise font-light mt-24 mb-16">
          Let&apos;s build something meaningful together.
        </p>

        <div className="contact-fade flex flex-wrap gap-8 md:gap-16 justify-center">
          <a href="mailto:bhaskarsriram4321@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-snow/50 hover:text-snow transition-colors uppercase tracking-[0.3em]">Email</a>
          <a href="https://www.linkedin.com/in/ram-mamillapalli/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-snow/50 hover:text-snow transition-colors uppercase tracking-[0.3em]">LinkedIn</a>
          <a href="https://github.com/ramx03-sudo" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-snow/50 hover:text-snow transition-colors uppercase tracking-[0.3em]">GitHub</a>
          <a href="https://www.instagram.com/ramx20_/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-snow/50 hover:text-snow transition-colors uppercase tracking-[0.3em]">Instagram</a>
        </div>
      </div>
    </section>
  );
}
