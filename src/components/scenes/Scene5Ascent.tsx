"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const journals = [
  {
    num: "01",
    title: "SECSKY",
    subtitle: "Privacy-First Cloud Infrastructure",
    description: "The cloud was never designed around ownership.\n\nMost platforms ask users to trade privacy for convenience.\n\nSecSky is my attempt to challenge that assumption.\n\nBuilding a privacy-first cloud platform forced me to dive deep into system architecture, encryption, security, and product design.",
    status: "Actively Building",
    focus: ["Privacy", "Cloud Infrastructure", "Security"]
  },
  {
    num: "02",
    title: "JUTSU AR",
    subtitle: "Interactive Augmented Reality Experience",
    description: "An experimental AR web application that uses real-time hand tracking to recognize gestures and trigger interactive experiences inspired by anime worlds.\n\nThis project pushed me into computer vision, browser APIs, and immersive user experiences.",
    focus: ["AR", "Computer Vision", "Web Technology"]
  },
  {
    num: "03",
    title: "MA921",
    subtitle: "Trading Engine Simulation",
    description: "A full-stack trading simulation platform built around market behavior, execution logic, and strategy testing.\n\nDesigned to explore how trading systems operate under real-world constraints.",
    focus: ["TypeScript", "System Design", "Financial Technology"]
  },
  {
    num: "04",
    title: "FITT-X",
    subtitle: "Fitness Tracking Platform",
    description: "An exploration into personal analytics, user engagement, and health-focused digital experiences.\n\nBuilt around the idea that small improvements compound over time.",
    focus: ["Full Stack Development", "Analytics", "Product Thinking"]
  }
];

export default function Scene5Ascent() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const entries = gsap.utils.toArray(".journal-entry");
    
    entries.forEach((entry: any) => {
      gsap.fromTo(entry, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 80%",
          }
        }
      );
    });

    gsap.fromTo(".ascent-header", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".ascent-header", start: "top 80%" } }
    );
    
    gsap.fromTo(".ascent-footer", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".ascent-footer", start: "top 80%" } }
    );

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full bg-[#050505] py-24 md:py-48 px-4 md:px-12 text-snow">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-48">
        
        {/* Header section */}
        <div className="ascent-header max-w-4xl space-y-12">
          <h2 className="text-sm md:text-base font-bold text-sunrise uppercase tracking-[0.3em]">
            Things I&apos;ve Built Along The Way
          </h2>
          <div className="text-3xl md:text-6xl font-bold tracking-tighter text-snow leading-tight">
            <p>Not every climb ends at a summit.</p>
          </div>
          <div className="text-xl md:text-3xl text-snow/50 font-light space-y-4">
            <p>Some become experiments.</p>
            <p>Some become products.</p>
            <p className="text-sunrise">Some become the foundation for what comes next.</p>
          </div>
        </div>

        {/* Journals */}
        <div className="space-y-24 md:space-y-48">
          {journals.map((journal, index) => (
            <div key={journal.num} className="journal-entry relative flex flex-col md:flex-row items-center gap-16 md:gap-32 w-full">
              
              {/* Asymmetrical Layout Logic */}
              <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                {/* Massive Number */}
                <div className="text-[8rem] md:text-[20rem] font-bold text-snow/[0.02] leading-none absolute top-1/2 -translate-y-1/2 -left-4 md:-left-10 pointer-events-none select-none">
                  {journal.num}
                </div>
                
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter z-10">
                  {journal.title}
                </h3>
                <p className="text-xl md:text-2xl font-light text-sunrise mt-4 z-10">
                  {journal.subtitle}
                </p>
                
                <div className="space-y-6 z-10 font-light text-lg text-snow/70 mt-12 whitespace-pre-line leading-relaxed">
                  {journal.description}
                </div>
              </div>

              <div className={`w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                {/* Editorial Info Box */}
                <div className="aspect-auto md:aspect-[3/4] w-full md:w-3/4 bg-snow/5 relative p-6 md:p-12 flex flex-col justify-between border border-snow/10 backdrop-blur-sm">
                  <div className="mb-8 md:mb-0">
                    {journal.status && (
                      <div className="mb-12">
                        <h4 className="text-sunrise font-medium uppercase text-xs tracking-[0.2em] mb-4">Status</h4>
                        <p className="text-snow text-xl font-light">{journal.status}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sunrise font-medium uppercase text-xs tracking-[0.2em] mb-4">Focus</h4>
                      <ul className="space-y-2">
                        {journal.focus.map((item, i) => (
                          <li key={i} className="text-snow/80 text-lg font-light border-b border-snow/10 pb-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-snow/20 font-bold text-6xl text-right">
                    {journal.num}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer section */}
        <div className="ascent-footer pt-32 max-w-4xl border-t border-snow/10">
          <h3 className="text-sm md:text-base font-bold text-sunrise uppercase tracking-[0.3em] mb-12">
            Current Experiments
          </h3>
          <div className="text-2xl md:text-4xl text-snow font-light space-y-6 leading-relaxed">
            <p>Not every project deserves a landing page.</p>
            <p>Some exist to learn.</p>
            <p>Some exist to fail.</p>
            <p>Some eventually become something bigger.</p>
            <p className="pt-8 text-sunrise font-medium italic">The journey continues.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
