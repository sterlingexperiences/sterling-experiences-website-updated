"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onSelect,
}: ImageLightboxProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const prev = useCallback(() => {
    onSelect(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onSelect]);

  const next = useCallback(() => {
    onSelect(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onSelect]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    setLoaded(true);
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  /* Scroll active thumbnail into view */
  useEffect(() => {
    if (!stripRef.current) return;
    const active = stripRef.current.children[currentIndex] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [currentIndex]);

  if (!images.length) return null;

  return (
    <>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
      <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col bg-black transition-opacity duration-300",
        loaded ? "opacity-100" : "opacity-0",
      )}
    >
      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 shrink-0">
        <span className="text-white/50 text-[13px] font-openSans">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="size-9 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/25 transition-[background-color] duration-200 ease-out active:scale-95"
        >
          <X className="size-[18px]" />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center relative min-h-0 px-12 md:px-20">
        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 md:left-5 z-10 size-10 md:size-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-[transform,background-color] duration-160 ease-out active:scale-90"
            >
              <ChevronLeft className="size-5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 md:right-5 z-10 size-10 md:size-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-[transform,background-color] duration-160 ease-out active:scale-90"
            >
              <ChevronRight className="size-5 md:size-6" />
            </button>
          </>
        )}

        {/* Image */}
        <div key={currentIndex} className="flex items-center justify-center w-full h-full animate-[fadeIn_200ms_ease-out]">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Thumbnail strip - desktop only */}
      {images.length > 1 && (
        <div className="hidden md:block shrink-0">
          <div
            ref={stripRef}
            className="flex justify-center gap-2 px-4 py-4 overflow-x-auto"
          >
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelect(i)}
                className={cn(
                  "shrink-0 w-[60px] h-[60px] rounded-[8px] overflow-hidden border-2 transition-[border-color,opacity] duration-200 ease-out active:scale-95",
                  i === currentIndex
                    ? "border-brand-purple opacity-100 ring-1 ring-brand-purple/30"
                    : "border-white/20 opacity-50 hover:opacity-80",
                )}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
}
