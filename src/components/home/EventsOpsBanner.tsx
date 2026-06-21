"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EventsOpsBanner() {
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

  const features = [
    "Inventory tracking",
    "Zero asset loss",
    "Staff training & certification",
    "Warehouse + venue + asset tracking",
    "Rental & return management",
    "Local implementation & onboarding support",
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-secondary overflow-hidden pt-12 md:pt-16 pb-12 md:pb-16">
      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center max-w-[1400px] mx-auto px-16 2xl:px-24 gap-8">
        <div className="font-openSans max-w-[580px]">
          <h2
            className={cn(
              "font-ebGaramond font-[600] text-[42px] lg:text-[52px] text-brand-purple leading-[1.15] tracking-[-0.04em] transition-all duration-700 delay-100 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Sterling EventOps
          </h2>
          <p
            className={cn(
              "mt-[6px] font-ebGaramond text-[18px] text-brand-purple/70 leading-[1.3] tracking-[-0.02em] transition-all duration-700 delay-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Operations infrastructure for Nigeria's event industry
          </p>
          <div
            className={cn(
              "mt-5 space-y-4 transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <p className="text-[15px] lg:text-[16px] text-neutral-700 leading-[1.75]">
              Sterling EventOps is the first operations platform built specifically for Nigeria's event
              industry, giving event businesses inventory tracking, staff management, and digital audit
              trail that they need to stop losing money and start building lasting legacies.
            </p>
          </div>

          <div
            className={cn(
              "mt-8 grid grid-cols-2 gap-x-10 gap-y-4 transition-all duration-700 delay-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-brand-gold shrink-0" />
                <span className="text-[14px] text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div
            className={cn(
              "mt-8 transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <Link href="/early-access">
              <Button variant="primary" className="px-8">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>

        <div
          className={cn(
            "shrink-0 self-center transition-all duration-800 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
          )}
        >
          <Image
            src="/assets/images/events-ops-banner.png"
            alt="Sterling EventOps Platform Preview"
            width={540}
            height={675}
            className="h-[550px] w-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-4">
        <div className="font-openSans flex flex-col items-center text-center">
          <h2
            className={cn(
              "font-ebGaramond font-[600] text-[32px] text-brand-purple leading-[1.15] tracking-[-0.04em] transition-all duration-700 delay-100 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Sterling EventOps
          </h2>
          <p
            className={cn(
              "mt-[4px] font-ebGaramond text-[17px] text-brand-purple/70 leading-[1.3] tracking-[-0.02em] max-w-[280px] transition-all duration-700 delay-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            Operations infrastructure for Nigeria's event industry
          </p>
          <div
            className={cn(
              "mt-5 space-y-3 max-w-[340px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <p className="text-[14px] text-neutral-700 leading-[1.7]">
              Sterling EventOps is the first operations platform built specifically for Nigeria's event
              industry, giving event businesses inventory tracking, staff management, and digital audit
              trail that they need to stop losing money and start building lasting legacies.
            </p>
          </div>

          {/* Feature highlights */}
          <div
            className={cn(
              "mt-6 grid grid-cols-2 gap-x-6 gap-y-3 transition-all duration-700 delay-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-brand-gold shrink-0" />
                <span className="text-[13px] text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div
            className={cn(
              "mt-8 transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <Link href="/early-access">
              <span className="inline-block font-openSans text-[13px] font-semibold text-white bg-brand-purple cursor-pointer px-7 py-3 rounded-[12px] hover:bg-[#660066] shadow-[0_4px_20px_rgba(128,0,128,0.18)] transition-all duration-300">
                Get Early Access
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile image */}
        <div
          className={cn(
            "mt-8 flex justify-center transition-all duration-800 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
          )}
        >
          <Image
            src="/assets/images/events-ops-banner.png"
            alt="Sterling EventOps Platform Preview"
            width={400}
            height={500}
            className="w-full max-w-[320px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
