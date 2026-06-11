"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FunfairStarIcon, SmallStarIcon, StarIcon } from "@/components/ui/assets-icons";
import Calender from "@/components/CalEmbed";

const Hero = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="justify-between items-center py-[70px] hidden md:flex">
        <div className="font-openSans relative ml-[10%] max-w-[480px]">
          <img
            src="/assets/images/crown.png"
            className="absolute bottom-[65%] right-[70%] hover:rotate-[15deg] transition-all duration-1000 ease-in-out"
            alt=""
          />
          <span className="absolute bottom-[120%] left-[80%] hover:left-[100%] hover:scale-150 transition-all duration-1000 ease-in-out">
            <StarIcon color="#FFD700" />
          </span>
          <h1
            className={cn(
              "font-[600] text-[48px] text-[#800080] leading-[65px] tracking-[-0.04em] font-ebGaramond transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Experiences that move people
          </h1>
          <p
            className={cn(
              "mt-[10px] font-[400] text-[24px] text-[#0E0E12] leading-[33px] tracking-[-0.02em] transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Precision-built event experiences for brands, institutions, startups, and individuals who understand that details shape perception.
          </p>
          <div
            className={cn(
              "transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <Calender title="Schedule free consultation" variant="primary" className="mt-4" />
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-800 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
          )}
        >
          <img src="/assets/images/hero-image.png" alt="Hero Image" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col justify-between items-center py-[70px] md:hidden">
        <div className="font-openSans relative flex flex-col items-center">
          <img
            src="/assets/images/small-crown.png"
            className="absolute bottom-[75%] right-[73%] hover:rotate-[15deg] transition-all duration-1000 ease-in-out"
            alt=""
          />
          <span className="absolute top-[40%] left-[100%] hover:left-[100%] hover:scale-150 transition-all duration-1000 ease-in-out">
            <SmallStarIcon color="#FFD700" />
          </span>
          <span className="absolute top-[90%] left-[120%] hover:left-[100%] hover:scale-150 transition-all duration-1000 ease-in-out">
            <FunfairStarIcon />
          </span>
          <h1
            className={cn(
              "font-[600] text-[36px] text-center text-[#800080] leading-[43px] tracking-[-0.04em] font-ebGaramond max-w-[250px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Experiences that move people
          </h1>
          <p
            className={cn(
              "mt-[8px] font-[400] text-[14px] text-[#0E0E12] leading-[20px] tracking-[-0.02em] text-center max-w-[320px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Precision-built event experiences for brands, institutions, startups, and individuals who understand that details shape perception.
          </p>
          <div
            className={cn(
              "transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <Calender title="Schedule free consultation" variant="primary" className="mt-4" />
          </div>
        </div>

        <div
          className={cn(
            "mt-[24px] transition-all duration-800 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
          )}
        >
          <img src="/assets/images/hero-image.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
