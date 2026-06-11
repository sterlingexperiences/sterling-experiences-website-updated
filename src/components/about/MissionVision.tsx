"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MissionVision = () => {
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

  const items = [
    {
      title: "Our Mission",
      tagline: "To set the standard for how Africa gathers.",
      body: "We build the operational and creative infrastructure that lets organisations bring people together with confidence. From a 50-person board retreat to a 5,000-attendee tech summit, we deliver the same rigour: every detail accounted for, every stakeholder communicated with, every moment designed to land.",
      practice: "Rigorous pre-event planning. Real-time coordination on the day. Post-event debrief that feeds back into the next event. No event is too small for our full process, and no event is too large for our team to handle.",
    },
    {
      title: "Our Vision",
      tagline: "A world where every significant gathering is a well-crafted experience.",
      body: "We believe that how an organisation gathers reflects who it is. When done right, an event does not just communicate a message. It embodies it. Our vision is a continent where meetings, launches, celebrations, and conferences are approached with the same intentionality as the work they support.",
      practice: "We invest in tools, talent, and systems that raise the floor for every project. We share what we learn across events so each one is better than the last. And we measure our success not by the event itself but by what it makes possible for our clients afterward.",
    },
    {
      title: "Brand Purpose",
      tagline: "Experiences that move people.",
      body: "At our core, we exist to move people. Not just emotionally, though that matters. But forward. An event is a catalyst. It accelerates relationships, decisions, and momentum. Our purpose is to make that acceleration happen smoothly, memorably, and without the organisers having to sacrifice their sanity.",
      practice: "Every decision we make, from the suppliers we choose to the timelines we build, is measured against one question: does this move the experience forward? If it does not serve the guest, the client, or the moment, it does not belong in the plan.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 2xl:px-0">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            Mission &amp; Vision
          </h2>
          <div
            className={cn(
              "h-[3px] w-[80px] md:w-[120px] bg-brand-gold mx-auto mt-4 rounded-full transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
            )}
          />
        </div>

        {/* Mission, Vision, Purpose cards */}
        <div className="space-y-8 md:space-y-12">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded-[16px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                index % 2 === 0
                  ? "bg-brand-purple/5 border border-brand-purple/10"
                  : "bg-brand-gold/10 border border-brand-gold/20",
              )}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Left column — title + tagline */}
              <div className="md:w-[35%] shrink-0">
                <h3
                  className={cn(
                    "font-ebGaramond text-[28px] md:text-[36px] font-[600] tracking-[-0.03em] leading-[1.2]",
                    index % 2 === 0 ? "text-brand-purple" : "text-neutral-800",
                  )}
                >
                  {item.title}
                </h3>
                <p className="mt-3 font-ebGaramond text-[18px] md:text-[22px] text-neutral-600 italic leading-[1.3]">
                  &ldquo;{item.tagline}&rdquo;
                </p>
              </div>

              {/* Right column — body + practice */}
              <div className="flex-1 space-y-5">
                <p className="font-openSans text-[14px] md:text-[16px] lg:text-[17px] text-neutral-700 leading-[1.7] tracking-[-0.01em]">
                  {item.body}
                </p>
                <div
                  className={cn(
                    "p-4 md:p-5 rounded-[12px] border-l-4",
                    index % 2 === 0
                      ? "bg-brand-purple/[0.04] border-brand-purple/40"
                      : "bg-white/60 border-brand-gold",
                  )}
                >
                  <span
                    className={cn(
                      "font-openSans text-[12px] font-semibold uppercase tracking-[0.06em]",
                      index % 2 === 0 ? "text-brand-purple" : "text-neutral-600",
                    )}
                  >
                    What this means in practice
                  </span>
                  <p className="mt-2 font-openSans text-[13px] md:text-[15px] text-neutral-600 leading-[1.6]">
                    {item.practice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
