"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [underlineReady, setUnderlineReady] = useState(false);

  useEffect(() => {
    // Trigger text slide-in
    const textTimer = setTimeout(() => setMounted(true), 200);
    // Trigger underline slide after text is in place
    const underlineTimer = setTimeout(() => setUnderlineReady(true), 1000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(underlineTimer);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[45vh] md:min-h-[55vh] flex flex-col justify-center items-center about_bg overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Decorative stars */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <span className="absolute top-[15%] left-[10%] size-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <span className="absolute top-[25%] right-[15%] size-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }} />
        <span className="absolute top-[50%] left-[5%] size-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <span className="absolute top-[70%] right-[10%] size-1 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />
        <span className="absolute top-[35%] left-[50%] size-1.5 bg-brand-gold/30 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-[2] flex flex-col items-center px-6">
        {/* Animated text */}
        <h1
          className={cn(
            "font-ebGaramond font-bold text-[48px] md:text-[80px] lg:text-[100px] text-secondary leading-[1.1] tracking-[-0.03em] text-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0",
          )}
        >
          About
        </h1>

        {/* Animated underline — slides left to right */}
        <div className="h-[4px] mt-4 md:mt-6 w-full max-w-[300px] md:max-w-[500px] overflow-hidden rounded-full">
          <div
            className={cn(
              "h-full bg-secondary rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              underlineReady ? "w-full" : "w-0",
            )}
          />
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        className={cn(
          "relative z-[2] mt-8 md:mt-12 transition-all duration-500 delay-[1200ms]",
          underlineReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <nav className="flex items-center gap-2 text-[15px] font-body">
          <Link href="/" className="text-white/70 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-secondary font-semibold">About</span>
        </nav>
      </div>
    </section>
  );
};

export default Header;
