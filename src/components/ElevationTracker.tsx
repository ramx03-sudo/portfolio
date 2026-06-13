"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ElevationTracker() {
  const [elevation, setElevation] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We use a small timeout to ensure the DOM is fully calculated
    const timer = setTimeout(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Interpolate elevation from 8848 down to 0
          const currentElevation = Math.round((1 - self.progress) * 8848);
          setElevation(currentElevation);
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Determine stage based on elevation
  const getStage = () => {
    if (elevation < 1000) return "Basecamp";
    if (elevation < 3000) return "The Trail";
    if (elevation < 5000) return "The Ascent";
    if (elevation < 7000) return "Above Clouds";
    if (elevation < 8500) return "Final Push";
    return "The Summit";
  };

  return (
    <div 
      ref={container} 
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end pointer-events-none mix-blend-difference text-white"
    >
      <div className="flex items-center gap-4">
        {/* Stage Name */}
        <div className="hidden md:block uppercase tracking-[0.3em] text-[10px] opacity-70 font-bold origin-right -rotate-90 translate-x-4 w-32 text-right">
          {getStage()}
        </div>
        
        {/* Elevation Bar & Value */}
        <div className="flex flex-col items-center gap-2">
          {/* Vertical progress bar background */}
          <div className="w-[2px] h-32 md:h-64 bg-white/20 relative">
            {/* The active fill */}
            <div 
              className="absolute bottom-0 left-0 w-full bg-white transition-all duration-75"
              style={{ height: `${(elevation / 8848) * 100}%` }}
            />
            {/* Markers */}
            <div className="absolute top-1/4 left-0 w-2 h-[1px] bg-white/40 -translate-x-1" />
            <div className="absolute top-1/2 left-0 w-3 h-[1px] bg-white/40 -translate-x-1" />
            <div className="absolute top-3/4 left-0 w-2 h-[1px] bg-white/40 -translate-x-1" />
          </div>
          
          <div className="flex flex-col items-center font-mono mt-2">
            <span className="text-sm md:text-base font-bold">{elevation.toLocaleString()}</span>
            <span className="text-[10px] uppercase opacity-70">m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
