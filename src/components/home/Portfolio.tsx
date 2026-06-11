"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/assets-icons";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
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
    <div ref={sectionRef} className="mt-[64px]">
      <h1
        className={cn(
          "font-ebGaramond font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em] mb-[30px] text-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] py-[34px] md:py-[89px] px-[14px] md:px-[60px] border border-[#800080] bg-[#FFFFFF] rounded-[16px]">
        <img
          src="/assets/images/portfolio-one.png"
          className={cn(
            "hover:scale-105 transition-all duration-500 w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
          )}
          style={{ transitionDelay: "100ms" }}
          alt="Portfolio One"
        />
        <img
          src="/assets/images/portfolio-two.png"
          className={cn(
            "hover:scale-105 transition-all duration-500 w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
          )}
          style={{ transitionDelay: "200ms" }}
          alt="Portfolio Two"
        />
        <img
          src="/assets/images/portfolio-three.png"
          className={cn(
            "hover:scale-105 transition-all duration-500 w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
          )}
          style={{ transitionDelay: "300ms" }}
          alt="Portfolio Three"
        />
      </div>

      <div className="flex items-center justify-center mt-[30px]">
        <Button asChild variant="secondary" className="w-[250px] md:w-[408px]">
          <Link href="portfolio">
            See more
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
