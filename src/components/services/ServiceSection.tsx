"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ServiceSectionProps = {
  id: string;
  title: string;
  headline: string;
  body: string;
  subtitle?: string;
};

const ServiceSection = ({
  id,
  title,
  headline,
  body,
  subtitle,
}: ServiceSectionProps) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } },
      { threshold: 0.15 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-[60px] md:py-[100px] overflow-hidden scroll-mt-24"
    >
      {/* Cosmic glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-[30%] left-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tl from-brand-gold/15 to-transparent blur-2xl" />
        <div className="absolute bottom-[20%] right-[15%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-brand-purple/10 blur-xl" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-6 2xl:px-0">
        {/* Animated Gold Divider Title */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16">
          <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
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
              "font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[24px] md:text-[56px] text-[#800080] leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            {title}
          </h1>

          <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
            <div
              className={cn(
                "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
                inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
              )}
              style={{ transformOrigin: "left center" }}
            />
          </div>
        </div>

        {/* Content area with corner decorations */}
        <div className="max-w-[1100px] mx-auto">
          <div className="w-full relative">
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

            <div className="md:px-8 space-y-8">
              {/* Headline — slide down */}
              <h2
                className={cn(
                  "font-ebGaramond text-[28px] md:text-[36px] text-brand-purple leading-[1.3] tracking-[-0.02em] text-center md:text-center max-w-[800px] mx-auto transition-all duration-700 delay-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
              >
                &ldquo;{headline}&rdquo;
              </h2>

              {/* Body text — slide up */}
              <div className="max-w-[800px] mx-auto">
                <p
                  className={cn(
                    "font-openSans text-[15px] md:text-[17px] lg:text-[18px] text-neutral-700 leading-[1.75] tracking-[-0.01em] text-center transition-all duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  )}
                >
                  {body}
                </p>
              </div>

              {/* Subtitle tag */}
              {subtitle && (
                <div
                  className={cn(
                    "text-center transition-all duration-700 delay-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                    inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                  )}
                >
                  <span className="inline-block font-ebGaramond text-[16px] md:text-[20px] text-brand-purple/60 font-[500] tracking-[-0.01em] border border-brand-purple/20 rounded-full px-6 py-2">
                    {subtitle}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
