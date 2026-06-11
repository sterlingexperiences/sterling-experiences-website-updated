"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { StarIcon, SmallStarIcon } from "@/components/ui/assets-icons";

const StorySection = () => {
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
    <section
      ref={sectionRef}
      className="relative py-[60px] md:py-[100px] overflow-hidden"
    >
      {/* === Cosmic glow underneath background === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-[30%] left-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tl from-brand-gold/15 to-transparent blur-2xl" />
        <div className="absolute bottom-[20%] right-[15%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-brand-purple/10 blur-xl" />

        {/* Floating stars in background */}
        <span
          className="absolute top-[15%] right-[20%] animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          <SmallStarIcon color="#FFD700" />
        </span>
        <span className="absolute bottom-[30%] left-[8%] opacity-15 pointer-events-none">
          <StarIcon color="#800080" />
        </span>
        <span className="absolute top-[40%] right-[8%] opacity-15 pointer-events-none">
          <SmallStarIcon color="#800080" />
        </span>
      </div>

      {/* === Animated Gold Divider Title === */}
      <div className="flex items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16 relative z-10">
        {/* Left divider — grows from right with glow */}
        <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
              inView
                ? "w-full bg-[#FFD700]"
                : "w-0 bg-[#FFD700]/50",
            )}
            style={{ transformOrigin: "right center" }}
          />
        </div>

        <h1
          className={cn(
            "font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[24px] md:text-[56px] text-[#800080] leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          )}
        >
          Company Story &<br className="md:hidden" /> Founder Biography
        </h1>

        {/* Right divider — grows from left with glow */}
        <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
              inView
                ? "w-full bg-[#FFD700]"
                : "w-0 bg-[#FFD700]/50",
            )}
            style={{ transformOrigin: "left center" }}
          />
        </div>
      </div>

      {/* === Full-width text with cosmic glow background === */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 2xl:px-0 relative z-10">
        {/* Left — Text content (full width) */}
        <div className="w-full relative">
          {/* Corner decorations — top-left, top-right, bottom-right */}
          {/* Top-left corner */}
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
          {/* Top-right corner */}
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
          {/* Bottom-right corner */}
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

          {/* Inner padding so text does not overlap corner marks */}
          <div className="md:px-6 space-y-6">
            {/* Subtitle — slide down */}
            <h2
              className={cn(
                "font-ebGaramond text-[28px] md:text-[38px] text-brand-purple leading-[1.3] tracking-[-0.02em] text-center md:text-center max-w-[800px] mx-auto transition-all duration-700 delay-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              We believe every event is an argument for something
            </h2>

            {/* Body text — slide up with staggered delays */}
            <div className="max-w-[800px] mx-auto">
              <div
                className={cn(
                  "space-y-6 font-openSans text-[15px] md:text-[17px] lg:text-[19px] text-neutral-700 leading-[1.75] tracking-[-0.01em] text-center transition-all duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0",
                )}
              >
                <p>
                  An argument that this organisation matters. That these people
                  are worth gathering. That this moment deserves to be done
                  well. Sterling Experiences was founded to make that argument,
                  beautifully and without fail, for every client we work with.
                </p>
                <p>
                  That understanding became Sterling Experiences. With over six
                  years of project management experience and a portfolio that
                  spans tech summits, startup competitions, product launches,
                  and social celebrations, Joy built a company around a standard
                  she refuses to lower: that the quality of an event reflects
                  the value an organisation places on the people it is
                  gathering.
                </p>
                <p>
                  Today, Sterling Experiences operates across five service
                  pillars &mdash; production, decor and styling, staffing,
                  operations, and logistics &mdash; serving corporate
                  organisations, government bodies, and private clients who
                  expect more than a well-managed event. They expect an
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Quote Section === */}
      <div
        className={cn(
          "max-w-[800px] mx-auto mt-16 md:mt-24 px-4 md:px-6 text-center transition-all duration-700 delay-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-10",
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        )}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto mb-6 text-brand-gold"
        >
          <path
            d="M3 21C3 21 4 12 9 9V6C5 6.5 3 10 3 16V21ZM14 21C14 21 15 12 20 9V6C16 6.5 14 10 14 16V21Z"
            fill="currentColor"
          />
        </svg>
        <p className="font-ebGaramond italic text-[22px] md:text-[30px] text-neutral-700 leading-[1.45] tracking-[-0.01em] max-w-[650px] mx-auto">
          &ldquo;Every event is an argument that this moment matters. We are
          here to make it beautifully.&rdquo;
        </p>
        <p className="mt-6 font-openSans text-[15px] md:text-[16px] text-neutral-500 tracking-[-0.01em]">
          <span className="font-semibold text-brand-purple uppercase tracking-[0.06em]">
            JOY STEER OMORO
          </span>
          <span className="text-neutral-400"> &middot; </span>
          <span className="italic">Founder, Sterling Experiences</span>
        </p>
      </div>
    </section>
  );
};

export default StorySection;
