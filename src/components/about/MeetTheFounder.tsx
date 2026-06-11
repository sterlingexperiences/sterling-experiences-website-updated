"use client";

import Link from "next/link";
import { ArrowRightWhite } from "@/components/ui/assets-icons";
import { Button } from "@/components/ui/button";

const MeetTheFounder = () => {
  return (
    <div>
      <h1 className="font-ebGaramond text-[36px] md:text-[56px] text-[#800080] font-[600] leading-[43px] md:leading-[78px] tracking-[-0.04em] text-center mt-[64px]">
        Meet Joy Steer Omoro
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[32px] mt-[24px] md:border border-[#800080] bg-[#FFFFFF] rounded-[16px] px-[12px] md:px-[90px] py-[40px] md:py-[90px]">
        <div className="w-full md:w-[30%]">
          <img src="/assets/images/joy.png" className="w-full h-full" alt="" />
        </div>

        <div className="w-full md:w-[70%] space-y-[24px]">
          <p className="font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            Our founder, Joy Steer Omoro, grew up in Kaduna, where end-of-term
            funfairs were the highlight of the school calendar. Those early
            encounters with the power of a well-planned gathering never left
            her. Through university, she led networking events and organised
            inter-school programmes. During her NYSC year, volunteering with
            nonprofits, she witnessed something that sharpened her purpose: a
            well-executed workshop could change the trajectory of a young
            woman&rsquo;s career. Events, she understood, were not just
            occasions. They were infrastructure.
          </p>
          <p className="font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            As the founder of Sterling Experiences, Joy is dedicated to
            delivering exceptional event solutions tailored to the specific
            needs of each client. Her commitment to excellence, attention to
            detail, and collaborative approach have made her a trusted partner
            for businesses across various industries.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button asChild variant="primary" className="md:w-[400px]">
              <Link href="/services">
                Explore Services
                <ArrowRightWhite />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheFounder;
