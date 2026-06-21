"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/assets-icons";
import { Button } from "@/components/ui/button";

const services = [
  "Event Production",
  "Decor & Styling",
  "Staffing",
  "Event Operations",
  "Logistics",
];

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

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-center gap-[32px] mt-16 flex-wrap">
        {services.map((service, i) => {
          const bgVariants = [
            "bg-secondary border border-[#800080] text-[#800080]",
            "bg-[#FFD700] border border-[#800080] text-[#800080]",
            "bg-[#800080] text-secondary",
            "bg-secondary border border-[#800080] text-[#800080]",
            "bg-[#800080] text-secondary",
          ];
          const delayVariants = ["100ms", "200ms", "300ms", "400ms", "500ms"];
          const dirVariants = [
            "-translate-x-12",
            "-translate-y-12",
            "translate-y-12",
            "translate-x-12",
            "translate-x-0 -translate-y-12",
          ];

          return (
            <div
              key={service}
              className={cn(
                "flex items-center justify-center rounded-[16px] w-[220px] h-[120px] font-openSans font-[600] text-[22px] leading-[30px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                bgVariants[i],
                inView ? "translate-x-0 translate-y-0 opacity-100" : `${dirVariants[i]} opacity-0`,
              )}
              style={{ transitionDelay: delayVariants[i] }}
            >
              {service}
            </div>
          );
        })}
      </div>

      {/* Tablet layout */}
      <div className="hidden md:flex lg:hidden flex-col items-center gap-[16px] mt-12">
        <div className="flex flex-wrap justify-center gap-[16px]">
          {services.map((service, i) => {
            const bgVariants = [
              "bg-secondary border border-[#800080] text-[#800080]",
              "bg-[#FFD700] border border-[#800080] text-[#800080]",
              "bg-[#800080] text-secondary",
              "bg-secondary border border-[#800080] text-[#800080]",
              "bg-[#800080] text-secondary",
            ];

            return (
              <div
                key={service}
                className={cn(
                  "flex items-center justify-center rounded-[16px] w-[200px] h-[100px] font-openSans font-[600] text-[20px] leading-[28px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  bgVariants[i],
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${100 + i * 80}ms` }}
              >
                {service}
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Link href="/services">
            <Button variant="secondary" className="w-[200px]">
              Explore Services
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col space-y-[12px] mt-[16px] lg:hidden md:hidden">
        {services.map((service, i) => {
          const bgVariants = [
            "bg-[#800080] text-secondary",
            "bg-[#FFD700] border border-[#800080] text-[#800080]",
            "bg-secondary border border-[#800080] text-[#800080]",
            "bg-[#800080] text-secondary",
            "bg-[#FFD700] border border-[#800080] text-[#800080]",
          ];
          const dirVariants = [
            "-translate-x-8",
            "translate-x-8",
            "-translate-x-8",
            "translate-x-8",
            "-translate-x-8",
          ];

          return (
            <div
              key={service}
              className={cn(
                "flex items-center justify-center rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] leading-[25px] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                bgVariants[i],
                inView ? "translate-x-0 opacity-100" : `${dirVariants[i]} opacity-0`,
              )}
              style={{ transitionDelay: `${50 + i * 60}ms` }}
            >
              {service}
            </div>
          );
        })}

        <div className="flex items-center justify-center mt-4">
          <Link href="/services">
            <Button variant="secondary" className="w-[200px]">
              Explore Services
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
