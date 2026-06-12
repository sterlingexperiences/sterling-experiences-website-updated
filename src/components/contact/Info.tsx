"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Phone, Mail, Calendar, ListChecks } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/assets-icons";
import CalButton from "@/components/cal-button";

const Info = () => {
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

  const contactChannels = [
    {
      icon: Phone,
      label: "Phone",
      value: "+234 708 930 0072",
      href: "tel:+2347089300072",
    },
    {
      icon: Mail,
      label: "Email",
      value: "admin@sterlingxperiences.com",
      href: "mailto:admin@sterlingxperiences.com",
    },
  ];

  const enquiryItems = [
    "Type of event — corporate, social, destination, or government",
    "Estimated date and location",
    "Expected number of guests",
    "Services you are interested in",
    "Any specific vision, theme, or requirements",
  ];

  return (
    <div ref={sectionRef}>
      {/* === Primary CTA Section === */}
      <div
        className={cn(
          "max-w-[800px] mx-auto text-center mt-[60px] md:mt-[80px] mb-10 md:mb-14 p-6 md:p-10 bg-brand-purple/[0.03] border border-brand-purple/10 rounded-[16px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <h2 className="font-ebGaramond text-[28px] md:text-[36px] text-brand-purple font-[600] leading-[1.2] tracking-[-0.02em] mb-4">
          Your next event deserves to be done well.
        </h2>
        <p className="font-openSans text-[15px] md:text-[17px] text-neutral-600 leading-[1.7] max-w-[650px] mx-auto">
          We do not offer fixed packages because no two events are the same.
          Tell us what you are building and we will design an approach that fits
          your scope, your guests, and your vision.
        </p>
        <CalButton
          title="Book a free consultation"
          variant="primary"
          className="mt-6"
        />
      </div>

      {/* === Tagline Section === */}
      <div
        className={cn(
          "max-w-[700px] mx-auto text-center mb-12 md:mb-16 mt-[60px] md:mt-[80px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <p className="font-ebGaramond text-[28px] md:text-[38px] text-brand-purple leading-[1.3] tracking-[-0.02em]">
          Every Sterling Experience begins with a conversation.
        </p>
        <p className="mt-4 font-openSans text-[16px] md:text-[18px] text-neutral-600 leading-[1.6]">
          Here is how to start one.
        </p>
      </div>

      {/* === Gold Divider === */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="w-full max-w-[120px] md:max-w-[180px] h-[2px] overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
              inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
            )}
            style={{ transformOrigin: "right center" }}
          />
        </div>
        <span className="font-ebGaramond text-[20px] md:text-[28px] text-brand-gold font-[500]">
          Get in touch
        </span>
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

      {/* === Contact Info Cards === */}
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="relative">
          {/* Corner decorations */}
          <div
            className={cn(
              "hidden md:block absolute -top-3 -left-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="absolute top-0 left-0 w-[20px] h-[2px] bg-brand-gold" />
            <div className="absolute top-0 left-0 w-[2px] h-[20px] bg-brand-gold" />
          </div>
          <div
            className={cn(
              "hidden md:block absolute -top-3 -right-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 delay-100 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="absolute top-0 right-0 w-[20px] h-[2px] bg-brand-gold" />
            <div className="absolute top-0 right-0 w-[2px] h-[20px] bg-brand-gold" />
          </div>
          <div
            className={cn(
              "hidden md:block absolute -bottom-3 -right-3 w-[30px] h-[30px] pointer-events-none transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="absolute bottom-0 right-0 w-[20px] h-[2px] bg-brand-gold" />
            <div className="absolute bottom-0 right-0 w-[2px] h-[20px] bg-brand-gold" />
          </div>

          <div className="md:px-8">
            {/* Contact channels grid */}
            <div
              className={cn(
                "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              {contactChannels.map((channel, i) => (
                <a
                  key={i}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="flex items-center gap-4 p-4 md:p-5 rounded-[12px] border border-neutral-200/80 hover:border-brand-purple/40 hover:shadow-[0_4px_16px_rgba(128,0,128,0.08)] bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shrink-0">
                    <channel.icon className="size-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-openSans text-[13px] text-neutral-500 font-medium">
                      {channel.label}
                    </p>
                    <p className="font-openSans text-[14px] md:text-[15px] text-neutral-800 font-semibold truncate">
                      {channel.value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sterling_experiences"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 md:p-5 rounded-[12px] border border-neutral-200/80 hover:border-brand-purple/40 hover:shadow-[0_4px_16px_rgba(128,0,128,0.08)] bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group cursor-pointer"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shrink-0">
                  <InstagramIcon color="currentColor" />
                </div>
                <div className="min-w-0">
                  <p className="font-openSans text-[13px] text-neutral-500 font-medium">
                    Instagram
                  </p>
                  <p className="font-openSans text-[14px] md:text-[15px] text-neutral-800 font-semibold truncate">
                    @sterling_experiences
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sterling-xperiences"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 md:p-5 rounded-[12px] border border-neutral-200/80 hover:border-brand-purple/40 hover:shadow-[0_4px_16px_rgba(128,0,128,0.08)] bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group cursor-pointer"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shrink-0">
                  <LinkedinIcon color="currentColor" />
                </div>
                <div className="min-w-0">
                  <p className="font-openSans text-[13px] text-neutral-500 font-medium">
                    LinkedIn
                  </p>
                  <p className="font-openSans text-[14px] md:text-[15px] text-neutral-800 font-semibold truncate">
                    @sterling_xperiences
                  </p>
                </div>
              </a>

              {/* Book a call — CalButton */}
              <div className="flex items-center gap-4 p-4 md:p-5 rounded-[12px] border border-neutral-200/80 hover:border-brand-purple/40 hover:shadow-[0_4px_16px_rgba(128,0,128,0.08)] bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group">
                <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shrink-0">
                  <Calendar className="size-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-openSans text-[13px] text-neutral-500 font-medium">
                    Book a call
                  </p>
                  <CalButton
                    title="Book a 30-minute call"
                    variant="link"
                    className="h-auto p-0 text-[14px] md:text-[15px] font-semibold text-brand-purple hover:text-brand-purple/80"
                  />
                </div>
              </div>
            </div>

            {/* What to include section */}
            <div
              className={cn(
                "mt-12 md:mt-16 p-6 md:p-8 bg-brand-purple/[0.03] border border-brand-purple/10 rounded-[16px] transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-9 h-9 rounded-[8px] bg-brand-gold/20 text-brand-gold">
                  <ListChecks className="size-[18px]" />
                </div>
                <h3 className="font-ebGaramond text-[22px] md:text-[26px] font-[600] text-brand-purple tracking-[-0.02em]">
                  What to include in your enquiry
                </h3>
              </div>
              <ul className="space-y-3">
                {enquiryItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-openSans text-[14px] md:text-[16px] text-neutral-700 leading-[1.6]"
                  >
                    <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-brand-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-openSans text-[14px] md:text-[15px] text-neutral-500 italic">
                We respond to all enquiries within 24 hours.
              </p>
            </div>

            {/* Closing quote */}
            <div
              className={cn(
                "mt-12 md:mt-16 text-center transition-all duration-700 delay-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              <div className="w-10 h-[2px] bg-brand-gold mx-auto mb-5" />
              <p className="font-ebGaramond italic text-[22px] md:text-[28px] text-neutral-700 leading-[1.4] max-w-[600px] mx-auto">
                &ldquo;We do not believe in one-size-fits-all solutions. We
                believe in yours.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
