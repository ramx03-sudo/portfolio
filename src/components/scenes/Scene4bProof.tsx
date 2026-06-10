"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const repos = [
  { name: "SecSky", desc: "Privacy-first cloud platform architecture" },
  { name: "Jutsu AR", desc: "Augmented reality exploration" },
  { name: "Trading Engine", desc: "High-performance matching and execution" },
  { name: "Fitt-X", desc: "Fitness tracking and analytics" },
];

const metrics = [
  { label: "Contributions", value: "230+" },
  { label: "Repositories", value: "6" },
  { label: "Projects", value: "Full-Stack" },
  { label: "Role", value: "Founder" },
];

export default function Scene4bProof() {
  const container = useRef<HTMLDivElement>(null);

  // Generate a random GitHub-like contribution grid
  // 52 columns (weeks) x 7 rows (days)
  const generateEmptyGrid = () => Array(52).fill(Array(7).fill(0));
  
  const generateRandomGrid = () => {
    const grid = [];
    for (let c = 0; c < 52; c++) {
      const col = [];
      for (let r = 0; r < 7; r++) {
        const rand = Math.random();
        let intensity = 0;
        if (rand > 0.9) intensity = 3;
        else if (rand > 0.7) intensity = 2;
        else if (rand > 0.4) intensity = 1;
        col.push(intensity);
      }
      grid.push(col);
    }
    return grid;
  };

  const [activityGrid, setActivityGrid] = useState<number[][]>(generateEmptyGrid());

  useEffect(() => {
    setActivityGrid(generateRandomGrid());
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "center center",
        scrub: 1,
      }
    });

    // Animate text reveal
    tl.fromTo(".proof-text", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
    );

    // Animate the GitHub grid squares staggered
    gsap.fromTo(".activity-square", 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: {
          each: 0.005,
          from: "random"
        },
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".activity-grid",
          start: "top 80%",
        }
      }
    );

    // Animate repo cards
    gsap.fromTo(".repo-card",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".repos-container",
          start: "top 80%",
        }
      }
    );

  }, { scope: container });

  const getIntensityClass = (level: number) => {
    switch(level) {
      case 3: return "bg-sunrise shadow-[0_0_10px_rgba(245,158,11,0.5)]";
      case 2: return "bg-snow/60";
      case 1: return "bg-snow/30";
      default: return "bg-snow/5";
    }
  };

  return (
    <section ref={container} className="relative w-full min-h-screen bg-[#020202] py-24 md:py-48 px-4 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* Left Column: Story & Metrics */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <h2 className="proof-text text-sm md:text-base font-bold text-sunrise uppercase tracking-[0.3em]">
              Proof Of The Climb
            </h2>
            <div className="proof-text text-4xl md:text-6xl font-bold tracking-tighter text-snow leading-tight">
              <p>The mountains taught persistence.</p>
              <p className="text-snow/50">GitHub taught consistency.</p>
            </div>
          </div>

          <div className="proof-text grid grid-cols-2 gap-8 pt-8 border-t border-snow/10">
            {metrics.map((m, i) => (
              <div key={i} className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-snow">{m.value}</p>
                <p className="text-xs tracking-widest uppercase text-sunrise font-medium">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="proof-text text-snow/60 font-light text-lg leading-relaxed">
            <p>Code is the physical evidence of execution. Every commit, every failure, and every shipped feature forms a trail of persistence. The repositories below are milestones of my engineering journey.</p>
          </div>
        </div>

        {/* Right Column: Visualizations & Repos */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-16">
          
          {/* Custom Activity Graph */}
          <div className="proof-text w-full overflow-hidden">
            <p className="text-xs tracking-widest uppercase text-snow/40 mb-6 flex justify-between">
              <span>Contribution History</span>
              <span>2023 — Present</span>
            </p>
            <div className="w-full overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
              <div className="activity-grid flex gap-1 md:gap-2 min-w-max">
                {activityGrid.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-1 md:gap-2">
                    {col.map((intensity, rIdx) => (
                    <div 
                      key={`${cIdx}-${rIdx}`} 
                      className={`activity-square w-2 h-2 md:w-3 md:h-3 rounded-sm ${getIntensityClass(intensity)}`}
                    />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Repositories */}
          <div className="repos-container grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {repos.map((repo, i) => (
              <div key={i} className="repo-card p-8 border border-snow/10 bg-snow/[0.02] hover:bg-snow/[0.05] transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-snow">{repo.name}</h3>
                  <svg className="w-5 h-5 text-snow/30 group-hover:text-sunrise transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-snow/60 text-sm font-light leading-relaxed">{repo.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
