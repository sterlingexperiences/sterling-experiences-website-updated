"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { portfolioEvents, type PortfolioEvent } from "@/data/portfolio";
import ImageLightbox from "@/components/portfolio/ImageLightbox";
import { ChevronDown, ChevronUp, Images } from "lucide-react";

/* ── Section Header ── */
function SectionHeader({ inView }: { inView: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 mb-10 md:mb-14">
      <div className="w-full max-w-[120px] md:max-w-[180px] h-[2px] overflow-hidden">
        <div
          className={cn(
            "h-full transition-[width] duration-400 ease-out shadow-[0_0_6px_rgba(255,215,0,0.6)]",
            inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
          )}
          style={{ transformOrigin: "right center" }}
        />
      </div>
      <h1
        className={cn(
          "font-ebGaramond font-[500] md:font-[600] text-[28px] md:text-[48px] lg:text-[56px] text-brand-purple leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-[transform,opacity] duration-400 ease-out",
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        Our Portfolio
      </h1>
      <div className="w-full max-w-[120px] md:max-w-[180px] h-[2px] overflow-hidden">
        <div
          className={cn(
            "h-full transition-[width] duration-400 ease-out shadow-[0_0_6px_rgba(255,215,0,0.6)]",
            inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
          )}
          style={{ transformOrigin: "left center" }}
        />
      </div>
    </div>
  );
}

/* ── Service Badge ── */
function ServiceBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-[11px] font-openSans font-[500] text-brand-purple bg-brand-purple/5 border border-brand-purple/15 rounded-full leading-none">
      {label}
    </span>
  );
}

/* ── Pinterest-style card ── */
function PinCard({
  event,
  index,
  inView,
  onOpenGallery,
}: {
  event: PortfolioEvent;
  index: number;
  inView: boolean;
  onOpenGallery: (event: PortfolioEvent) => void;
}) {
  const [caseOpen, setCaseOpen] = useState(false);
  const hasImages = event.images.length > 0;
  const cs = event.caseStudy;

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-neutral-200/70 overflow-hidden shadow-sm transition-[transform,opacity] duration-350 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{
        transitionDelay: inView ? `${100 + index * 40}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Image - full width top */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={event.coverImage}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-350 ease-out motion-safe:hover:scale-105"
        />

        {/* Gallery button overlay on image */}
        {hasImages && (
          <button
            type="button"
            onClick={() => onOpenGallery(event)}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[12px] font-openSans font-[500] rounded-full px-3 py-1.5 hover:bg-black/70 transition-[transform,background-color] duration-160 ease-out active:scale-95"
          >
            <Images className="size-3.5" />
            {event.images.length} photos
          </button>
        )}
      </div>

      {/* Content below image */}
      <div className="p-4 md:p-5">
        {/* Title + subtitle */}
        <div>
          <h3 className="font-ebGaramond text-[18px] md:text-[22px] font-[600] text-brand-purple leading-tight">
            {event.name}
          </h3>
          {event.subtitle && (
            <p className="font-openSans text-[12px] md:text-[13px] text-neutral-500 mt-0.5 tracking-wide uppercase">
              {event.subtitle}
            </p>
          )}
        </div>

        {/* Services */}
        {event.services && event.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {event.services.map((s) => (
              <ServiceBadge key={s} label={s} />
            ))}
          </div>
        )}

        {/* Description */}
        <p className="font-openSans text-[13px] md:text-[14px] text-neutral-700 leading-[1.7] mt-3">
          {event.description}
        </p>

        {/* Case study toggle */}
        {cs && (
          <>
            <button
              type="button"
              onClick={() => setCaseOpen(!caseOpen)}
              className="flex items-center gap-1.5 mt-3 text-[13px] font-openSans font-[500] text-brand-purple/70 hover:text-brand-purple transition-colors cursor-pointer active:scale-97"
            >
              {caseOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
              <span>{caseOpen ? "Hide Details" : "View Case Study"}</span>
            </button>

            {caseOpen && (
              <div className="mt-3 space-y-3 border-t border-neutral-100 pt-3">
                <p className="font-openSans text-[13px] text-neutral-700 leading-[1.7]">{cs.overview}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cs.challenge && (
                    <div className="bg-brand-purple/[0.03] border border-brand-purple/10 rounded-[8px] p-3">
                      <h4 className="font-ebGaramond text-[14px] font-[600] text-brand-purple mb-1">Challenge</h4>
                      <p className="font-openSans text-[12px] text-neutral-700 leading-[1.6]">{cs.challenge}</p>
                    </div>
                  )}
                  {cs.outcome && (
                    <div className="bg-brand-purple/[0.03] border border-brand-purple/10 rounded-[8px] p-3">
                      <h4 className="font-ebGaramond text-[14px] font-[600] text-brand-purple mb-1">Outcome</h4>
                      <p className="font-openSans text-[12px] text-neutral-700 leading-[1.6]">{cs.outcome}</p>
                    </div>
                  )}
                </div>
                {cs.clientFeedback && (
                  <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-[8px] p-3">
                    <p className="font-openSans text-[12px] text-neutral-700 leading-[1.6] italic">
                      &ldquo;{cs.clientFeedback.quote}&rdquo;
                    </p>
                    <p className="font-openSans text-[11px] text-brand-purple font-[500] mt-1">
                      {cs.clientFeedback.attribution}
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Thumbnail strip */}
        {hasImages && (
          <div className="flex gap-1.5 mt-4 overflow-x-auto">
            {event.images.slice(0, 4).map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onOpenGallery(event)}
                className="shrink-0 w-[48px] h-[48px] rounded-[6px] overflow-hidden border border-neutral-200 hover:border-brand-purple/40 transition-[border-color] duration-200 ease-out active:scale-95"
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
            {event.images.length > 4 && (
              <button
                type="button"
                onClick={() => onOpenGallery(event)}
                className="shrink-0 w-[48px] h-[48px] rounded-[6px] bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[11px] font-openSans font-[500] text-neutral-500 hover:bg-brand-purple/5 hover:text-brand-purple transition-[background-color,color] duration-200 ease-out active:scale-95"
              >
                +{event.images.length - 4}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main ── */
export default function PortfolioGallery() {
  const [inView, setInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); o.disconnect(); } },
      { threshold: 0.05 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, [prefersReducedMotion]);

  const show = inView || prefersReducedMotion;

  const openGallery = useCallback((event: PortfolioEvent) => {
    if (event.images.length > 0) {
      setLightboxImages(event.images);
      setLightboxIndex(0);
      setLightboxOpen(true);
    }
  }, []);

  const handleSelect = useCallback((i: number) => setLightboxIndex(i), []);
  const handleClose = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <section id="our-portfolio" ref={sectionRef} className="relative py-[60px] md:py-[100px] overflow-hidden scroll-mt-24">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={cn(
            "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-transparent blur-3xl",
            prefersReducedMotion ? "opacity-40" : "animate-pulse",
          )} style={{ animationDuration: "4s" }} />
          <div className="absolute top-[60%] right-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tl from-brand-gold/15 to-transparent blur-2xl" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 2xl:px-0">
          <SectionHeader inView={show} />

          <div className="md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {portfolioEvents.map((event, i) => (
              <PinCard
                key={event.slug}
                event={event}
                index={i}
                inView={show}
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={handleClose}
          onSelect={handleSelect}
        />
      )}
    </>
  );
}
