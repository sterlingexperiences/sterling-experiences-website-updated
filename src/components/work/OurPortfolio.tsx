"use client";

import WorkSection from "@/components/work/WorkSection";

const OurPortfolio = () => {
  return (
    <WorkSection
      id="our-portfolio"
      title="Our Portfolio"
      headline="Proof Is Not a Claim. It Is the Work Itself."
      body={[
        "The most honest representation of what Sterling Experiences can do is what we have already done. Every event photographed below was delivered for a real client, on a real timeline, with real stakes attached to its success.",
        "We do not stage portfolio shoots. Every image in our collection is taken from a live event — the lighting as it was, the crowd as it gathered, the decor as guests experienced it. What you see is what the room held.",
        "To view the full gallery and detailed case studies, visit our dedicated portfolio page.",
      ]}
      hideAccordionToggle
      cta={{ label: "View Full Portfolio", href: "/portfolio" }}
      accordionBlocks={[
        {
          title: "Event categories in our portfolio",
          items: [
            "Corporate conferences, summits, and annual general meetings",
            "Product launches, brand activations, and media events",
            "Award ceremonies, galas, and formal dinners",
            "Weddings, engagements, and private celebrations",
            "Government functions, diplomatic events, and institutional ceremonies",
            "Tech meetups, innovation showcases, and startup competitions",
            "Cultural festivals, community events, and public activations",
          ],
        },
        {
          title: "What each case study covers",
          items: [
            "Client brief and event objectives",
            "Scope of Sterling's engagement and services delivered",
            "Design direction, production approach, and operational structure",
            "On-the-day execution summary",
            "Photographic documentation of key moments and spaces",
            "Client testimonial or feedback where available",
          ],
        },
      ]}
    />
  );
};

export default OurPortfolio;
