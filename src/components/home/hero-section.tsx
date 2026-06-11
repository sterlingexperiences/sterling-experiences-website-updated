"use client";

import Image from "next/image";
import Link from "next/link";
import { FlipText } from "@/components/ui/flip-text";
import {
  StarIcon,
  SmallStarIcon,
  FunfairStarIcon,
} from "@/components/ui/brand-icons";
import CalButton from "@/components/cal-button";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden pt-8 md:pt-12 lg:pt-20">
      {/* Subtle decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 border border-brand-purple/5 rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute -top-20 -right-20 w-60 h-60 border border-brand-gold/5 rounded-full pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left: Text Content */}
          <div className="relative space-y-8 lg:space-y-10">
            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -left-10 w-32 h-32 border border-brand-purple/5 rounded-full pointer-events-none" />

            {/* Main Heading */}
            <div className="relative z-10">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight">
                Experiences that move <FlipText />
              </h1>
            </div>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl text-neutral-700 max-w-lg leading-relaxed">
              Precision-built event experiences for brands, institutions,
              startups, and individuals who understand that details shape
              perception.
            </p>

            {/* Trust Sectors */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Corporate Conferences",
                "Startup Ecosystems",
                "Institutional Events",
                "Brand Activations",
              ].map((sector) => (
                <div
                  key={sector}
                  className="text-sm font-body text-neutral-600 border border-neutral-200 rounded-full px-4 py-2 bg-white/50 backdrop-blur-sm"
                >
                  {sector}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button asChild variant="primary" size="lg">
              <Link href="/work">
                View Our Work
              </Link>
            </Button>
              <CalButton
                title="Book a Consultation"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex justify-center items-center">
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-brand-purple/10 rounded-3xl pointer-events-none" />
            <Image
              src="/assets/images/hero-image.png"
              alt="Sterling Experiences — premium event production"
              width={560}
              height={460}
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center md:hidden space-y-8 pb-16 pt-6">
          {/* Main Heading */}
          <h1 className="font-heading text-4xl font-bold text-center text-neutral-900 leading-tight max-w-sm">
            Experiences that move <FlipText />
          </h1>

          {/* Tagline */}
          <p className="font-body text-base text-center text-neutral-700 leading-relaxed max-w-xs">
            Precision-built event experiences for brands, institutions,
            startups, and individuals.
          </p>

          {/* Trust Sectors - Mobile */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Corporate Conferences",
              "Startup Ecosystems",
              "Institutional Events",
              "Brand Activations",
            ].map((sector) => (
              <div
                key={sector}
                className="text-xs font-body text-neutral-600 border border-neutral-200 rounded-full px-3 py-1.5 bg-white/50"
              >
                {sector}
              </div>
            ))}
          </div>

          {/* CTAs - Mobile */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button asChild variant="primary" size="lg">
              <Link href="/work">
                View Our Work
              </Link>
            </Button>
            <CalButton
              title="Book a Consultation"
              variant="secondary"
              size="lg"
            />
          </div>

          {/* Hero Image - Mobile */}
          <div className="w-full max-w-sm mt-8">
            <Image
              src="/assets/images/hero-image.png"
              alt="Sterling Experiences — premium event production"
              width={400}
              height={300}
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
