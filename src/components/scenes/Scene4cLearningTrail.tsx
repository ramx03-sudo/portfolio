"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const checkpoints = [
  {
    num: "01",
    title: "BACKEND ENGINEERING",
    badge: "8+ Certifications",
    description: "Building scalable systems and understanding how modern applications operate behind the scenes.",
    skills: ["Spring Framework", "Spring Boot", "REST APIs", "Microservices", "JPA", "Database Systems"]
  },
  {
    num: "02",
    title: "FRONTEND DEVELOPMENT",
    badge: "4+ Certifications",
    description: "Creating user experiences that feel intuitive, responsive, and purposeful.",
    skills: ["React", "JavaScript", "Modern UI Development", "CSS"]
  },
  {
    num: "03",
    title: "CLOUD & DEVOPS",
    badge: "3+ Certifications",
    description: "Learning how software moves from an idea into production.",
    skills: ["Jenkins", "CI/CD", "Git", "Automation"]
  },
  {
    num: "04",
    title: "DATA ENGINEERING",
    badge: "2+ Certifications",
    description: "Understanding how information flows, scales, and creates value.",
    skills: ["ETL", "Data Pipelines", "Data Warehousing", "Machine Learning Foundations"]
  },
  {
    num: "05",
    title: "NETWORKING",
    badge: "Google Certified",
    description: "Exploring the invisible systems that connect the digital world.",
    skills: ["TCP/IP", "DNS", "Routing", "Internet Infrastructure"]
  },
  {
    num: "06",
    title: "COMMUNICATION",
    badge: "B2 Professional English",
    description: "Technology matters only when ideas can be communicated clearly.",
    skills: ["Cambridge Linguaskill"]
  }
];

export default function Scene4cLearningTrail() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      }
    });

    // Draw the continuous trail line
    tl.fromTo(".trail-line", 
      { height: "0%" }, 
      { height: "100%", duration: 1, ease: "none" }
    );

    // Stagger in the checkpoints
    const points = gsap.utils.toArray(".trail-checkpoint");
    points.forEach((point: any, i) => {
      gsap.fromTo(point, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: point,
            start: "top 80%",
          }
        }
      );
    });

    gsap.fromTo(".learning-intro", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".learning-intro", start: "top 80%" } }
    );

    gsap.fromTo(".learning-outro", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".learning-outro", start: "top 80%" } }
    );

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen bg-[#050505] py-24 md:py-48 px-4 md:px-12 text-snow overflow-hidden">
      
      {/* Subtle Mountain Contour Lines (Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: "radial-gradient(circle at 50% 50%, transparent 20%, #050505 80%), repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 20px, #ffffff 21px, transparent 22px)" }} 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Intro */}
        <div className="learning-intro max-w-3xl space-y-12 mb-32">
          <h2 className="text-sm md:text-base font-bold text-sunrise uppercase tracking-[0.3em]">
            The Learning Trail
          </h2>
          <div className="text-3xl md:text-5xl font-bold tracking-tighter text-snow leading-tight">
            <p>Every mountain teaches something different.</p>
          </div>
          <div className="text-lg md:text-2xl text-snow/60 font-light space-y-6 leading-relaxed">
            <p>Some lessons came from experience.</p>
            <p>Others came from studying the systems that power modern technology.</p>
            <p>Over the years, I explored backend engineering, cloud infrastructure, data engineering, networking, DevOps, and modern web development.</p>
            <p className="text-sunrise italic">Each certification became another step forward.</p>
          </div>
        </div>

        {/* Trail Map Container */}
        <div className="relative py-12">
          
          {/* Continuous Trail Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-snow/10 -translate-x-1/2">
            <div className="trail-line w-full bg-gradient-to-b from-sunrise to-snow/50 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
          </div>

          {/* Checkpoints */}
          <div className="space-y-16 md:space-y-32">
            {checkpoints.map((cp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={cp.num} className="trail-checkpoint relative flex items-center md:justify-center w-full group">
                  
                  {/* The dot on the trail */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-sunrise rounded-full -translate-x-1/2 z-20 group-hover:bg-sunrise transition-colors duration-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />

                  {/* Desktop Layout: alternating left/right */}
                  <div className={`hidden md:flex w-full ${isEven ? 'justify-end pr-[50%] text-right' : 'justify-start pl-[50%] text-left'}`}>
                    <div className={`w-full max-w-md ${isEven ? 'pr-16' : 'pl-16'}`}>
                      <div className="space-y-4">
                        <div className={`flex items-center gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sunrise font-mono text-sm tracking-widest uppercase">Checkpoint {cp.num}</span>
                          <span className="text-xs font-bold px-3 py-1 bg-snow/5 text-snow/70 uppercase tracking-widest border border-snow/10 rounded-sm">
                            {cp.badge}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-snow">{cp.title}</h3>
                        <p className="text-snow/50 font-light leading-relaxed text-lg">{cp.description}</p>
                        
                        <div className={`flex flex-wrap gap-2 pt-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          {cp.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="text-xs font-medium px-3 py-1.5 bg-snow/5 text-snow border border-snow/10 rounded-sm whitespace-nowrap">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout: left aligned with line */}
                  <div className="flex md:hidden w-full pl-12 pr-4 py-4">
                    <div className="w-full space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sunrise font-mono text-xs tracking-widest uppercase">CP {cp.num}</span>
                        <span className="text-[10px] font-bold px-2 py-1 bg-snow/5 text-snow/70 uppercase tracking-widest border border-snow/10 rounded-sm">
                          {cp.badge}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold tracking-tighter text-snow">{cp.title}</h3>
                      <p className="text-snow/50 font-light leading-relaxed text-base">{cp.description}</p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {cp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-medium px-2 py-1 bg-snow/5 text-snow border border-snow/10 rounded-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Outro */}
        <div className="learning-outro mt-32 pt-16 border-t border-snow/10 text-center">
          <h3 className="text-5xl md:text-7xl font-bold text-snow tracking-tighter mb-4">19+</h3>
          <p className="text-sunrise uppercase tracking-[0.3em] font-medium text-sm md:text-base mb-12">Professional Certifications</p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-snow/40 font-bold uppercase tracking-widest text-xs md:text-sm">
            <span>Google</span>
            <span className="w-1 h-1 bg-snow/20 rounded-full" />
            <span>IBM</span>
            <span className="w-1 h-1 bg-snow/20 rounded-full" />
            <span>Cisco</span>
            <span className="w-1 h-1 bg-snow/20 rounded-full" />
            <span>Cambridge</span>
            <span className="w-1 h-1 bg-snow/20 rounded-full" />
            <span>LearnQuest</span>
            <span className="w-1 h-1 bg-snow/20 rounded-full" />
            <span>HackerRank</span>
          </div>
        </div>

      </div>
    </section>
  );
}
