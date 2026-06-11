"use client";

import WorkSection from "@/components/work/WorkSection";

const WhatWeOffer = () => {
  return (
    <WorkSection
      id="what-we-offer"
      title="What We Offer"
      headline="Capabilities That Cover Every Phase of Event Delivery."
      body={[
        "Our work spans the full arc of event creation. We do not specialise in a single discipline because a great event is never the product of one discipline. It comes from having every function — production, design, staffing, operations, logistics — under one standard of accountability.",
        "Each capability listed here exists as a standalone service and as part of an integrated delivery model. Clients who engage us across multiple functions gain something the piecemeal approach cannot match: coherence. Every vendor briefed to the same standard. Every timeline governed by the same command. Every detail serving the same creative vision.",
        "Below is a breakdown of what we deliver, structured by the phase of the event lifecycle each capability serves.",
      ]}
      accordionBlocks={[
        {
          title: "Event Production",
          items: [
            "Full-spectrum event production from concept to post-event reporting",
            "Creative direction, programme design, and run-of-show development",
            "Venue sourcing, site selection, and technical production management",
            "Vendor coordination, briefing, and day-of command",
            "On-site production management and real-time problem resolution",
          ],
        },
        {
          title: "Decor & Styling",
          items: [
            "Thematic concept development and mood board creation",
            "Floral design, bespoke installations, and spatial styling",
            "Ambient, architectural, and feature lighting design",
            "Table settings, linen curation, and custom centrepieces",
            "Full setup, pre-guest quality review, and post-event breakdown",
          ],
        },
        {
          title: "Event Staffing",
          items: [
            "Recruitment, training, and deployment of event professionals",
            "Hosts, ushers, registration teams, protocol officers, and floor managers",
            "Bartenders, service crew, brand ambassadors, and production assistants",
            "Bridal assistants, hair stylists, makeup artists, and wardrobe support",
            "Crew briefed per event: run-of-show, dress code, and conduct standards",
          ],
        },
        {
          title: "Operations & Logistics",
          items: [
            "Master timeline governance and cross-workstream coordination",
            "Vendor procurement, contract management, and budget tracking",
            "Inventory management, asset tracking, and warehouse organisation",
            "Flight coordination, accommodation booking, and ground transport",
            "Equipment transport, setup sequencing, and post-event reconciliation",
          ],
        },
      ]}
    />
  );
};

export default WhatWeOffer;
