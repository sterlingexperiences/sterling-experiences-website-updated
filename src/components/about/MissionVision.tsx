"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MissionVision = () => {
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

  const items = [
    {
      title: "Our Mission",
      tagline:
        "To set the standard for how Africa gathers through experiences that are designed with precision, executed without compromise, and felt long after they end.",
    },
    {
      title: "Our Vision",
      tagline:
        "A world where every significant gathering is a well-crafted experience delivered at the highest possible standard and powered by an African company built to lead globally.",
    },
    {
      title: "Brand Purpose",
      tagline: "Experiences that move people.",
      body: "At our core, we exist to move people. Not just emotionally, though that matters. But forward. An event is a catalyst. It accelerates relationships, decisions, and momentum. Our purpose is to make that acceleration happen smoothly, memorably, and without the organisers having to sacrifice their sanity.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 2xl:px-0">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            Mission &amp; Vision
          </h2>
          <div
            className={cn(
              "h-[3px] w-[80px] md:w-[120px] bg-brand-gold mx-auto mt-4 rounded-full transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
            )}
          />
        </div>

        {/* Mission, Vision, Purpose cards */}
        <div className="space-y-8 md:space-y-12">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded-[16px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                index % 2 === 0
                  ? "bg-brand-purple/5 border border-brand-purple/10"
                  : "bg-brand-gold/10 border border-brand-gold/20",
              )}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Left column — title + tagline */}
              <div
                className={cn(
                  "shrink-0",
                  item.body ? "md:w-[35%]" : "w-full max-w-[800px] mx-auto text-center",
                )}
              >
                <h3
                  className={cn(
                    "font-ebGaramond text-[28px] md:text-[36px] font-[600] tracking-[-0.03em] leading-[1.2]",
                    index % 2 === 0 ? "text-brand-purple" : "text-neutral-800",
                  )}
                >
                  {item.title}
                </h3>
                <p className="mt-3 font-ebGaramond text-[18px] md:text-[22px] text-neutral-600 italic leading-[1.3]">
                  &ldquo;{item.tagline}&rdquo;
                </p>
              </div>

              {/* Right column — body only for Brand Purpose */}
              {item.body && (
                <div className="flex-1 space-y-5">
                  <p className="font-openSans text-[14px] md:text-[16px] lg:text-[17px] text-neutral-700 leading-[1.7] tracking-[-0.01em]">
                    {item.body}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
