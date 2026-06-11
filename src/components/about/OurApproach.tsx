"use client";

import { FunfairStarIcon, StarIcon } from "@/components/ui/assets-icons";

const OurApproach = () => {
  return (
    <div className="flex flex-col-reverse gap-[20px] md:px-[50px] md:flex-row justify-between items-center">
      <div className="flex items-center gap-[40px] justify-between">
        <div className="space-y-[24px] max-w-[660px]">
          <h1 className="relative text-center md:text-left font-ebGaramond text-[36px] md:text-[56px] text-[#800080] font-[600] leading-[43px] md:leading-[78px] tracking-[-0.04em]">
            Our Approach
            <span className="absolute top-[40%] left-[80%] md:hidden">
              <FunfairStarIcon />
            </span>
          </h1>
          <p className="font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            We believe in a collaborative approach, working closely with our
            clients to understand their specific needs and preferences. We are
            committed to delivering personalized and memorable experiences that
            exceed expectations.
          </p>
          <p className="font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            We are committed to delivering exceptional service and creating
            unforgettable events. Our team of experienced professionals will
            work tirelessly to ensure that your event is a resounding success.
          </p>
        </div>
        <div className="shrink-0 hidden md:block">
          <StarIcon />
        </div>
      </div>

      <div className="font-openSans">
        <img src="/assets/images/our-approach-image.png" alt="" />
      </div>
    </div>
  );
};

export default OurApproach;
