"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/assets-icons";
import { Button } from "@/components/ui/button";

const OurExpertise = () => {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        className={cn(
          "flex items-center justify-center gap-[32px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <div className="w-full max-w-[252px] h-[2px] bg-[#FFD700]" />
        <h1 className="font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em]">
          Our Expertise
        </h1>
        <div className="w-full max-w-[252px] h-[2px] bg-[#FFD700]" />
      </div>

      <div className="hidden lg:flex items-start justify-center gap-[45px] mt-20">
        <div className="flex flex-col space-y-[24px]">
          <div
            className={cn(
              "flex items-center justify-center bg-secondary rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#800080] leading-[39px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Cooperate Retreats
          </div>
          <div
            className={cn(
              "flex items-center justify-center bg-[#FFD700] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#800080] leading-[39px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Product Launches
          </div>
          <div
            className={cn(
              "flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-secondary leading-[39px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            )}
            style={{ transitionDelay: "300ms" }}
          >
            Seminars
          </div>
        </div>

        <div className="flex flex-col items-center space-y-[20px]">
          <div
            className={cn(
              "flex items-center justify-center bg-secondary rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#800080] leading-[39px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Corporate Gifting
          </div>
          <div
            className={cn(
              "flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-secondary leading-[39px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            style={{ transitionDelay: "350ms" }}
          >
            Conferences
          </div>
          <div className="h-[132px] w-full flex items-center justify-center">
            <Link href="services">
              <Button variant="secondary" className="w-[185px]">
                Explore Services
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-[24px]">
          <div
            className={cn(
              "flex items-center justify-center bg-secondary rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#800080] leading-[39px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Team Building Events
          </div>
          <div
            className={cn(
              "flex items-center justify-center bg-[#FFD700] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#800080] leading-[39px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Destination Management
          </div>
          <div
            className={cn(
              "flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-secondary leading-[39px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
            )}
            style={{ transitionDelay: "300ms" }}
          >
            Social Events
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col space-y-[12px] mt-[16px] lg:hidden">
        <div
          className={cn(
            "flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-secondary leading-[25px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "50ms" }}
        >
          Conferences & Seminars
        </div>
        <div
          className={cn(
            "flex items-center justify-center bg-[#FFD700] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#800080] leading-[25px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "100ms" }}
        >
          Product Launches
        </div>
        <div
          className={cn(
            "flex items-center justify-center bg-secondary rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#800080] leading-[25px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "150ms" }}
        >
          Corporate Retreats
        </div>
        <div
          className={cn(
            "flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-secondary leading-[25px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "200ms" }}
        >
          Corporate Gifting
        </div>
        <div
          className={cn(
            "flex items-center justify-center bg-secondary rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#800080] leading-[25px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "250ms" }}
        >
          Team Building
        </div>
        <div
          className={cn(
            "flex items-center justify-center bg-[#FFD700] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#800080] leading-[25px] tracking-[-0.02em] border border-[#800080] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "300ms" }}
        >
          Destination Management
        </div>
        <div
          className={cn(
            "flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-secondary leading-[25px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
          )}
          style={{ transitionDelay: "350ms" }}
        >
          Social Events
        </div>

        <div className="flex items-center justify-center">
          <Button variant="secondary" className="w-[185px] mt-4">
            Explore Services
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
