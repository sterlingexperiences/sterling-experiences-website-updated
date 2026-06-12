"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowRight } from "lucide-react";

type AccordionBlock = {
  title: string;
  items: string[];
};

type WorkSectionProps = {
  id: string;
  title: string;
  headline: string;
  body: string[];
  accordionBlocks: AccordionBlock[];
  cta?: {
    label: string;
    href: string;
  };
  hideAccordionToggle?: boolean;
  accordionCentered?: boolean;
};

const WorkSection = ({
  id,
  title,
  headline,
  body,
  accordionBlocks,
  cta,
  hideAccordionToggle = false,
  accordionCentered = false,
}: WorkSectionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(hideAccordionToggle);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const [accordionHeight, setAccordionHeight] = useState(0);

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

  useEffect(() => {
    if (accordionOpen && accordionContentRef.current) {
      setAccordionHeight(accordionContentRef.current.scrollHeight);
    } else {
      setAccordionHeight(0);
    }
  }, [accordionOpen]);

  const toggleAccordion = () => setAccordionOpen((prev) => !prev);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-[60px] md:py-[100px] overflow-hidden scroll-mt-24"
    >
      {/* Cosmic glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-transparent blur-3xl animate-pulse motion-reduce:animate-none"
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
                inView ? "w-full bg-brand-gold" : "w-0 bg-brand-gold/50",
              )}
              style={{ transformOrigin: "right center" }}
            />
          </div>

          <h1
            className={cn(
              "font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[24px] md:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            {title}
          </h1>

          <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
            <div
              className={cn(
                "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
                inView ? "w-full bg-brand-gold" : "w-0 bg-brand-gold/50",
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
                "hidden md:block absolute -top-3 -left-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0",
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
              {/* Headline */}
              <h2
                className={cn(
                  "font-ebGaramond text-[28px] md:text-[36px] text-brand-purple leading-[1.3] tracking-[-0.02em] text-center md:text-center max-w-[800px] mx-auto transition-all duration-700 delay-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
              >
                &ldquo;{headline}&rdquo;
              </h2>

              {/* Body text */}
              <div className="max-w-[800px] mx-auto">
                <div
                  className={cn(
                    "space-y-5 font-openSans text-[15px] md:text-[17px] lg:text-[18px] text-neutral-700 leading-[1.75] tracking-[-0.01em] text-center transition-all duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
                    inView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0",
                  )}
                >
                  {body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              {!hideAccordionToggle && (
                <div
                  className={cn(
                    "flex justify-center transition-all duration-700 delay-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
                    inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                  )}
                >
                  <button
                    onClick={toggleAccordion}
                    className={cn(
                      "group flex items-center gap-2 font-openSans text-[15px] font-semibold text-brand-purple cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.97] px-6 py-3 rounded-[12px] border border-brand-purple/30 hover:border-brand-purple/60 hover:bg-brand-purple/[0.03] motion-reduce:transition-none",
                    )}
                  >
                    <span>{accordionOpen ? "Show Less" : "Learn More"}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        accordionOpen ? "rotate-180" : "",
                      )}
                    />
                  </button>
                </div>
              )}

              {/* Optional CTA link */}
              {cta && (
                <div
                  className={cn(
                    "flex justify-center transition-all duration-700 delay-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
                    inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                  )}
                >
                  <Link
                    href={cta.href}
                    className="group inline-flex items-center gap-2 font-openSans text-[15px] font-semibold text-white bg-brand-purple cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.97] px-8 py-3.5 rounded-[12px] hover:bg-[#660066] shadow-[0_4px_20px_rgba(128,0,128,0.18)]"
                  >
                    <span>{cta.label}</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Accordion content */}
        {accordionBlocks.length > 0 && (
        <div
          className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] max-w-[1100px] mx-auto"
          style={{ maxHeight: accordionHeight ? `${accordionHeight}px` : "0px" }}
        >
          <div ref={accordionContentRef} className="pt-8 md:px-8">
            <div className="p-6 md:p-10 bg-brand-purple/[0.03] border border-brand-purple/10 rounded-[16px]">
              <div className={cn("grid gap-8 md:gap-12", accordionCentered ? "grid-cols-1 max-w-xl mx-auto" : "grid-cols-1 md:grid-cols-2")}>
                {accordionBlocks.map((block, i) => (
                  <div key={i}>
                    <h4 className="font-ebGaramond text-[20px] md:text-[24px] font-[600] text-brand-purple tracking-[-0.02em] mb-5">
                      {block.title}
                    </h4>
                    <ul className="space-y-3.5">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 font-openSans text-[14px] md:text-[15px] text-neutral-700 leading-[1.5]"
                        >
                          <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-brand-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
