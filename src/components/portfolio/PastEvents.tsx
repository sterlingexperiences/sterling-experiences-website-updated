"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { portfolioEvents } from "@/data/portfolio";
import { ArrowRight } from "@/components/ui/assets-icons";

const PastEvents = () => {
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
      {/* === Cosmic glow background === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-[60%] right-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tl from-brand-gold/15 to-transparent blur-2xl" />
      </div>

      {/* === Section Title with Gold Dividers === */}
      <div className="flex items-center justify-center gap-4 md:gap-8 mb-10 md:mb-14">
        <div className="w-full max-w-[120px] md:max-w-[180px] h-[2px] overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
              inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
            )}
            style={{ transformOrigin: "right center" }}
          />
        </div>

        <h1
          className={cn(
            "font-ebGaramond font-[500] md:font-[600] text-[28px] md:text-[48px] lg:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          Our Past Events
        </h1>

        <div className="w-full max-w-[120px] md:max-w-[180px] h-[2px] overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
              inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
            )}
            style={{ transformOrigin: "left center" }}
          />
        </div>
      </div>

      {/* === Event Cards Grid === */}
      <div className="relative">
        {/* Corner decorations */}
        <div
          className={cn(
            "hidden md:block absolute -top-3 -left-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-4 -translate-y-4",
          )}
        >
          <div className="absolute top-0 left-0 w-[20px] h-[2px] bg-brand-gold" />
          <div className="absolute top-0 left-0 w-[2px] h-[20px] bg-brand-gold" />
        </div>
        <div
          className={cn(
            "hidden md:block absolute -top-3 -right-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 delay-100 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-4 -translate-y-4",
          )}
        >
          <div className="absolute top-0 right-0 w-[20px] h-[2px] bg-brand-gold" />
          <div className="absolute top-0 right-0 w-[2px] h-[20px] bg-brand-gold" />
        </div>
        <div
          className={cn(
            "hidden md:block absolute -bottom-3 -right-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-4 translate-y-4",
          )}
        >
          <div className="absolute bottom-0 right-0 w-[20px] h-[2px] bg-brand-gold" />
          <div className="absolute bottom-0 right-0 w-[2px] h-[20px] bg-brand-gold" />
        </div>

        <div className="md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioEvents.map((event, i) => (
              <Link
                key={event.slug}
                href={`/portfolio/${event.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-[12px] border border-neutral-200/80 bg-white shadow-sm hover:shadow-[0_8px_30px_rgba(128,0,128,0.15)] transition-all duration-500 hover:-translate-y-2",
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0",
                )}
                style={{
                  transitionDelay: inView ? `${300 + i * 100}ms` : "0ms",
                  transitionDuration: "700ms",
                  transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <span className="flex items-center gap-2 font-openSans text-[15px] font-semibold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    View Details
                    <ArrowRight />
                  </span>
                </div>

                {/* Bottom info bar */}
                <div className="p-4 md:p-5">
                  <h3 className="font-ebGaramond text-[18px] md:text-[20px] font-[600] text-brand-purple leading-[1.3]">
                    {event.name}
                  </h3>
                  <div className="mt-2 w-8 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-12" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
