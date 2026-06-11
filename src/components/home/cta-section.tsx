"use client";

import Link from "next/link";
import CalButton from "@/components/cal-button";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 max-w-3xl mx-auto">
          Your next event deserves to be done well.
        </h2>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We don't offer fixed packages because no two events are the same. Tell
          us what you're building and we will design an approach that fits your
          scope, your guests, and your vision.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CalButton title="Book a Free Consultation" variant="primary" size="lg" />
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Secondary message */}
        <p className="font-body text-neutral-500 text-sm mt-12">
          We respond to all enquiries within 24 hours. No automated responses.
          No delays.
        </p>
      </div>
    </section>
  );
}
