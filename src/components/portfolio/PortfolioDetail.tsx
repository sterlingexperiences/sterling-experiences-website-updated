"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BackButton } from "@/components/ui/assets-icons";
import { ChevronLeft } from "lucide-react";
import type { PortfolioEvent } from "@/data/portfolio";

type Props = {
  event: PortfolioEvent;
};

const PortfolioDetail = ({ event }: Props) => {
  const router = useRouter();
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
    <div ref={sectionRef} className="pb-12 md:pb-16">
      {/* === Cosmic glow background === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-[20%] left-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tl from-brand-gold/15 to-transparent blur-2xl" />
      </div>

      {/* === Back + Title Banner === */}
      <div className="relative">
        {/* Back button */}
        <div className="flex items-center gap-6 pt-8 md:pt-12 pb-4 md:pb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 font-openSans font-bold text-[15px] md:text-[16px] text-brand-purple hover:text-brand-gold transition-all duration-300 cursor-pointer group bg-white/80 border border-brand-purple/20 rounded-[10px] px-5 py-2.5 shadow-sm hover:shadow-[0_4px_16px_rgba(128,0,128,0.15)] active:scale-[0.97]"
          >
            <ChevronLeft className="size-[20px] transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back</span>
          </button>
        </div>

        {/* Animated Gold Divider Title */}
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
              "font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[28px] md:text-[48px] lg:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            {event.name}
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
      </div>

      {/* === Image Grid === */}
      <div
        className={cn(
          "max-w-[1200px] mx-auto mt-12 md:mt-16 transition-all duration-700 delay-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0",
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {event.images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[12px] border border-neutral-200/80 bg-white shadow-sm hover:shadow-[0_8px_30px_rgba(128,0,128,0.1)] transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`${event.name} - image ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
