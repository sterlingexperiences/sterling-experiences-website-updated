"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FunfairStarIcon } from "@/components/ui/assets-icons";
import { Button } from "@/components/ui/button";

const FromFunfairs = () => {
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
      className="flex flex-col md:flex-row gap-[20px] md:gap-[100px] justify-between items-center py-[60px]"
    >
      <img
        src="/assets/images/funfair-image.png"
        alt="Funfair Image"
        className={cn(
          "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
        )}
      />

      <div
        className={cn(
          "font-openSans md:px-[30px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
        )}
      >
        <h1 className="relative font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-[#800080] leading-[43px] md:leading-[57px] tracking-[-0.04em] text-center md:text-left">
          From Funfairs to Sterling Experiences
          <span className="absolute md:hidden">
            <FunfairStarIcon />
          </span>
        </h1>
        <p className="mt-[12px] font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
          Sterling Experiences is an event management company based in Nigeria,
          that specializes in creating exceptional and memorable experiences for
          businesses. A company founded out of the captivation of the magic of
          events. From school funfairs to university activities, the profound
          joy in bringing people together. This passion led to volunteering with
          non-profits and experience firsthand the transformative power of
          well-planned events.
        </p>
        <div className="mt-[40px] flex justify-center md:justify-start">
          <Link href="/about">
            <Button variant="primary" className="w-full md:w-[408px]">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FromFunfairs;
