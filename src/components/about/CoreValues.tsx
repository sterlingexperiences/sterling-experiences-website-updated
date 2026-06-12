"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ValueCard = {
  title: string;
  description: string;
  icon: string;
};

const coreValues: ValueCard[] = [
  {
    title: "Excellence",
    description:
      "We do not aim to satisfy. We aim to impress. Every detail, from the linens to the lighting, meets a standard we would stake our reputation on. Excellence is not a goal reserved for big events. It is the baseline for every project we touch.",
    icon: "★",
  },
  {
    title: "Service",
    description:
      "We are in the business of making our clients look good. That means anticipating needs before they are voiced, communicating clearly under pressure, and treating every stakeholder with the respect their time and investment deserve.",
    icon: "✦",
  },
  {
    title: "Professionalism",
    description:
      "We show up on time. We dress the part. We speak and write with care. We respect confidentiality. Professionalism is the price of entry, not a differentiator. But we practice it with a consistency that makes it invisible to clients and obvious to everyone else.",
    icon: "◆",
  },
  {
    title: "Precision",
    description:
      "An event has no second take. Every cue, every transition, every delivery window must be exact. We build timelines that account for the unexpected and rehearsals that eliminate the guesswork. Precision is how we turn a plan into a performance.",
    icon: "◈",
  },
  {
    title: "Reliability",
    description:
      "When we say it will be done, it will be done. Our clients operate in environments where a failed handover or a missing cable is not a minor inconvenience. It is a reputational risk. We take that seriously.",
    icon: "⬟",
  },
  {
    title: "Continuous Improvement",
    description:
      "After every event, we ask: what worked, what did not, and what will we change? We document, we discuss, and we update our playbooks. Each project makes the next one stronger. This is how we stay ahead of an industry that does not stand still.",
    icon: "⟳",
  },
];

const CoreValues = () => {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section
      ref={sectionRef}
      className="relative py-[60px] md:py-[100px] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-purple/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-brand-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-4 md:px-6 2xl:px-0">
        {/* Section title */}
        <div className="text-center mb-8 md:mb-10">
          <h2
            className={cn(
              "font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            Core Values
          </h2>
          <div
            className={cn(
              "h-[3px] w-[80px] md:w-[120px] bg-brand-gold mx-auto mt-4 rounded-full transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
            )}
          />
        </div>

        {/* WebGUI-style cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "group relative p-6 md:p-8 rounded-[16px] border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-default",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0",
                hoveredIndex === index
                  ? "border-brand-purple/40 shadow-[0_8px_30px_rgba(128,0,128,0.12)] -translate-y-2"
                  : "border-neutral-200/80 shadow-sm hover:shadow-[0_4px_20px_rgba(128,0,128,0.08)]",
              )}
              style={{
                transitionDelay: `${(index % 6) * 100}ms`,
                background:
                  hoveredIndex === index
                    ? "linear-gradient(135deg, rgba(128,0,128,0.04), rgba(255,215,0,0.03))"
                    : "#ffffff",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative corner accent */}
              <div
                className={cn(
                  "absolute top-0 right-0 w-[60px] h-[60px] rounded-bl-[16px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none",
                  hoveredIndex === index
                    ? "bg-brand-purple/10"
                    : "bg-transparent",
                )}
              />

              {/* Icon */}
              <div
                className={cn(
                  "inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-[10px] text-[20px] md:text-[24px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  hoveredIndex === index
                    ? "bg-brand-purple text-white scale-110 shadow-[0_4px_12px_rgba(128,0,128,0.3)]"
                    : "bg-brand-purple/10 text-brand-purple",
                )}
              >
                {value.icon}
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "mt-5 font-ebGaramond text-[22px] md:text-[26px] font-[600] tracking-[-0.02em] transition-colors duration-300",
                  hoveredIndex === index
                    ? "text-brand-purple"
                    : "text-neutral-800",
                )}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-3 font-openSans text-[13px] md:text-[15px] text-neutral-600 leading-[1.65]">
                {value.description}
              </p>

              {/* Bottom bar accent */}
              <div
                className={cn(
                  "mt-6 h-[3px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  hoveredIndex === index
                    ? "w-full bg-gradient-to-r from-brand-purple to-brand-gold"
                    : "w-0 bg-brand-purple/30",
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
