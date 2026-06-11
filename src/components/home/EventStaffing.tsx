"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EventStaffing = () => {
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
    <div
      ref={sectionRef}
      className="flex flex-col-reverse gap-[20px] md:gap-[200px] md:px-[30px] md:flex-row justify-between items-center mt-[64px]"
    >
      <div
        className={cn(
          "flex items-center gap-[40px] justify-between transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
        )}
      >
        <div className="space-y-[24px]">
          <h1 className="relative text-center md:text-left font-ebGaramond text-[36px] md:text-[56px] text-[#800080] font-[600] leading-[43px] md:leading-[78px] tracking-[-0.04em]">
            Sterling Events Staffing
          </h1>
          <p className="font-openSans text-center md:text-left text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            We provide top-tier, professional, and well-trained event staff for
            all kinds of events across Nigeria
          </p>
          <div className="mt-[40px] flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
            <Link href="https://forms.gle/CK5SpzfcudtaZf7WA" target="_blank">
              <Button variant="primary">
                Hire event staff
              </Button>
            </Link>
            <Link
              href="https://bit.ly/SterlingEventsStaffingRecruitment"
              target="_blank"
            >
              <Button variant="secondary">
                Join our event staff
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "font-openSans max-w-[385px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
        )}
      >
        <img src="/assets/images/staffing.png" alt="" />
      </div>
    </div>
  );
};

export default EventStaffing;
