"use client";

import WorkSection from "@/components/work/WorkSection";

const OurAchievements = () => {
  return (
    <WorkSection
      id="our-achievements"
      title="Our Achievements"
      headline="Built on Results. Defined by Impact."
      body={[
        "What we have done is the strongest statement of what we can do. Every event we have delivered, every client we have served, and every complexity we have navigated has built the standard we operate by today.",
        "Sterling Experiences has coordinated events across corporate conferences, government functions, brand activations, cultural celebrations, and private ceremonies. Our portfolio spans venues across Nigeria and West Africa, with teams deployed at scales from intimate executive dinners to multi-day national summits.",
        "The numbers tell one part of the story. The relationships, referrals, and returning clients tell the rest.",
      ]}
      accordionBlocks={[]}
      hideAccordionToggle
      accordionCentered
      cta={{ label: "View Our Portfolio", href: "/portfolio" }}
    />
  );
};

export default OurAchievements;
