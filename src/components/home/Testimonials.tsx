"use client";
import { useState, useEffect } from "react";
import { StarIcon } from "@/components/ui/assets-icons";

const testimonials = [
  {
    message:
      "I was referred to Joy during the early planning stages of the Infotech Summit, and I couldn't be more grateful. I wholeheartedly recommend Joy and her Sterling Experiences team for your event planning and coverage needs. Their commitment to excellence will ensure your experience is nothing short of sterling.",
    author: "Chidubem Agulue, Convener, Infotech Summit",
  },
  {
    message:
      "I had the privilege of working with Joy during the Pitch2Win 3 & 4 startup competitions in 2023 and 2024, respectively, where her expertise and professionalism truly stood out. It's rare to come across someone with Joy's level of dedication and capability. I do recommend her and the team at Sterling Experiences to anyone seeking innovative and reliable project management services.",
    author: "Josh Ogundeji, Innovation and Ventures Manager, Ubulu Africa",
  },
  {
    message:
      "I had the pleasure of working with Joy on the 'Pitch2Win 2023' project. Her expertise in event management shone through, making the entire process smooth and the event itself a great success. Joy is professional, creative, and a joy to work with. I highly recommend her for any top-tier event management.",
    author: "Donald Akubudike, Audio Visual Engineer, Kontra Music Tech",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:border-y border-[#0000004D] mt-8 md:mb-0">
      <div className="hidden md:flex gap-[120px] items-center justify-center overflow-hidden w-full max-w-[1300px] px-4 md:px-8 py-12">
        <div className="flex items-center gap-[200px]">
          <h1 className="font-ebGaramond text-[24px] md:text-[36px] font-medium leading-tight tracking-[-0.04em] whitespace-nowrap">
            What our clients say
          </h1>
          <StarIcon />
        </div>
        <div className="relative w-[100%] h-[150px] md:h-[200px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
            >
              <p className="font-openSans text-[14px] md:text-[18px] leading-[24px] tracking-[-0.02em]">
                {testimonial.message}
              </p>
              <h2 className="mt-4 font-semibold text-[14px] md:text-[18px] leading-tight">
                {testimonial.author}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mx-[16px] w-[90%] rounded-[16px] shadow-[0_0_4px_0_#0000004D] px-[45px] pt-[18px] pb-[40px]">
        <h1 className="text-center text-[#0E0E12] font-ebGaramond font-medium leading-tight tracking-[-0.02em]">
          <span className="block w-[24px] h-[2px] bg-[#ffd700] rounded-[1px] mb-[8px] mx-auto"></span>
          <span className="block text-[22px] md:text-[24px]">
            What our clients say
          </span>
        </h1>
        <div className="relative h-[140px] overflow-hidden mt-[18px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
            >
              <p className="font-openSans font-[400] text-[13px] leading-[20px] tracking-[-0.02em]">
                {testimonial.message}
              </p>
              <h2 className="font-openSans font-[600] text-[13px] leading-[18px] tracking-[-0.02em] mt-[12px]">
                {testimonial.author}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
