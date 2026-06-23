"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Operational Precision",
    description:
      "We build frameworks that allow events to run smoothly long before guests arrive.",
  },
  {
    title: "Guest-Centered Thinking",
    description:
      "Every decision is made from the attendee experience outward.",
  },
  {
    title: "Calm Execution",
    description:
      "We solve problems before they become visible.",
  },
  {
    title: "Integrated Delivery",
    description:
      "Production, staffing, logistics, and operations working together as one coordinated system.",
  },
];

const WhatWeBelieve = () => {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-[60px] space-y-[60px]">
      {/* What We Believe */}
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[100px] justify-between items-center">
        <img
          src="/assets/images/funfair-image.png"
          alt="Event decoration and setup"
          className={cn(
            "w-full max-w-[400px] md:max-w-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
          )}
        />

        <div
          className={cn(
            "font-openSans md:px-[30px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
          )}
        >
          <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-brand-purple leading-[43px] md:leading-[57px] tracking-[-0.04em] text-center md:text-left">
            What We Believe
          </h1>
          <div className="mt-[12px] font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em] space-y-3">
            <p>
              Exceptional events are not built on improvisation. They are built on systems,
              intention, and attention to detail.
            </p>
            <p>
              Sterling Experiences exists to raise the standard for how events are designed,
              managed, and remembered across Africa.
            </p>
          </div>
          <div className="mt-[32px] flex justify-center md:justify-start">
            <Link href="/about">
              <Button variant="secondary" className="w-full md:w-[180px]">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div
        className={cn(
          "transition-all duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        )}
      >
        <div className="text-center mb-10">
          <h2 className="font-ebGaramond font-[500] md:font-[600] text-[28px] md:text-[40px] text-brand-purple leading-[1.2] tracking-[-0.04em]">
            Built on systems. Remembered for experiences.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[32px]">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={cn(
                "bg-white rounded-[16px] px-6 py-8 border border-brand-purple/10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_24px_rgba(128,0,128,0.08)]",
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="w-[32px] h-[2px] bg-brand-gold mb-4" />
              <h3 className="font-ebGaramond text-[20px] md:text-[24px] font-[500] text-brand-purple leading-[1.3] tracking-[-0.02em]">
                {pillar.title}
              </h3>
              <p className="mt-2 font-openSans text-[14px] md:text-[15px] text-neutral-600 leading-[1.6]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
