"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene3Checkpoints() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const checkpoints = gsap.utils.toArray(".checkpoint");
    
    checkpoints.forEach((checkpoint: any) => {
      gsap.fromTo(checkpoint, 
        { opacity: 0, scale: 0.95, filter: "blur(10px)" },
        { 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: checkpoint,
            start: "top 70%",
            end: "center center",
            scrub: true
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full bg-transparent py-32 space-y-[30vh]">
      
      {/* 2023 */}
      <div className="checkpoint relative w-full min-h-[50vh] flex flex-col items-center justify-center px-4">
        <div className="absolute text-[20vw] font-bold text-snow/[0.08] select-none -z-10 leading-none">
          2023
        </div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <h2 className="text-4xl md:text-7xl font-bold text-snow">The Foundation</h2>
          <div className="text-right text-snow/60 text-lg md:text-xl font-light max-w-sm">
            <p>Started B.Tech.</p>
            <p>Learned the fundamentals.</p>
            <p className="text-sunrise mt-2">Discovered the joy of building.</p>
          </div>
        </div>
      </div>

      {/* 2024 */}
      <div className="checkpoint relative w-full min-h-[50vh] flex flex-col items-center justify-center px-4">
        <div className="absolute text-[20vw] font-bold text-snow/[0.08] select-none -z-10 leading-none">
          2024
        </div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row-reverse justify-between items-center md:items-end gap-8">
          <h2 className="text-4xl md:text-7xl font-bold text-snow text-right">Leadership</h2>
          <div className="text-left text-snow/60 text-lg md:text-xl font-light max-w-sm">
            <p>Led broadcasting teams.</p>
            <p>Managed university events.</p>
            <p className="text-sunrise mt-2">Building isn&apos;t just products. It&apos;s people.</p>
          </div>
        </div>
      </div>

      {/* 2025 */}
      <div className="checkpoint relative w-full min-h-[50vh] flex flex-col items-center justify-center px-4">
        <div className="absolute text-[20vw] font-bold text-snow/[0.08] select-none -z-10 leading-none">
          2025
        </div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <h2 className="text-4xl md:text-7xl font-bold text-snow">Exploration</h2>
          <div className="text-right text-snow/60 text-lg md:text-xl font-light max-w-sm">
            <p>AI, ML, DevOps.</p>
            <p>Built projects. Made mistakes.</p>
            <p className="text-sunrise mt-2">Experimentation became obsession.</p>
          </div>
        </div>
      </div>

      {/* 2026 */}
      <div className="checkpoint relative w-full min-h-[50vh] flex flex-col items-center justify-center px-4">
        <div className="absolute text-[20vw] font-bold text-snow/[0.08] select-none -z-10 leading-none">
          2026
        </div>
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">
          <h2 className="text-5xl md:text-8xl font-bold text-snow tracking-tighter">SecSky</h2>
          <div className="text-snow/80 text-xl md:text-3xl font-light max-w-2xl mt-8">
            <p>A privacy-first cloud storage platform.</p>
            <p className="mt-8 text-sunrise">Your data should belong to you.</p>
            <p className="text-snow/50 text-lg mt-4">Not corporations. Not advertisers.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
