"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene1Mountains() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: () => window.innerWidth < 768 ? "+=50%" : "bottom top",
        scrub: 1,
        pin: true,
      }
    });

    // Parallax layers (animate the containers)
    tl.to(".layer-bg", { y: "20%", ease: "none" }, 0)
      .to(".layer-mid", { y: "40%", ease: "none" }, 0)
      .to(".layer-fg", { y: "60%", ease: "none" }, 0)
      .to(".title-1-wrap", { y: "-100%", opacity: 0, ease: "none" }, 0)
      .to(".title-3-wrap", { y: "-60%", opacity: 0, ease: "none" }, 0);
      
    // Initial fade in (animate the inner text)
    gsap.from(".reveal", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* Background Layer: Sky/Distant Peaks */}
      <div className="layer-bg absolute inset-0 z-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]">
        {/* Distant SVG Mountains */}
        <svg className="absolute bottom-0 w-full h-auto opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0f172a" d="M0,224L60,192C120,160,240,96,360,101.3C480,107,600,181,720,208C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      {/* Text Layer 1 */}
      <div className="title-1-wrap absolute top-[20%] left-[5%] md:left-[10%] z-10 w-full text-left">
        <h1 className="reveal text-4xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-snow opacity-90 drop-shadow-xl max-w-[90vw]">
          Building Systems.
        </h1>
      </div>

      {/* Midground Layer */}
      <div className="layer-mid absolute inset-0 z-20 pointer-events-none">
        <svg className="absolute bottom-0 w-full h-auto drop-shadow-2xl" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#020617" d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Text Layer 3 */}
      <div className="title-3-wrap absolute bottom-[20%] right-[5%] md:right-[10%] z-30 w-full text-right pointer-events-none">
        <h1 className="reveal text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-sunrise drop-shadow-2xl max-w-[90vw] ml-auto">
          Chasing Summits.
        </h1>
      </div>

      {/* Foreground Layer */}
      <div className="layer-fg absolute inset-0 z-40 pointer-events-none flex items-end">
        <div className="w-full h-1/3 bg-gradient-to-t from-night to-transparent" />
      </div>
      
      {/* Fog Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </section>
  );
}
