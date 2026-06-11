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
      accordionBlocks={[
        {
          title: "By the numbers",
          items: [
            "100+ events delivered across corporate, government, and private sectors",
            "50,000+ guests managed across all events combined",
            "15+ major annual conferences executed consecutively",
            "500+ event staff trained and deployed through Sterling Events Staffing",
            "8-figure naira production budgets managed end-to-end",
            "90%+ client retention rate from repeat engagements",
            "Nigeria-wide operational reach with West Africa expansion capability",
          ],
        },
        {
          title: "Notable client engagements",
          items: [
            "Infotech Summit — full conference production and guest management",
            "Pitch2Win Startup Competition — multi-edition event operations partner",
            "Ubulu Africa innovation programmes — event operations and logistics",
            "3IR Prints corporate events — decor, staffing, and production",
            "Kontra Music Tech showcases — audiovisual production and venue management",
            "Government and institutional functions — protocol, logistics, and execution",
          ],
        },
      ]}
    />
  );
};

export default OurAchievements;
