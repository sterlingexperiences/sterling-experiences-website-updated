"use client";

import ServiceSection from "@/components/services/ServiceSection";

const WhatWeDo = () => {
  return (
    <div>
      {/* Event Production */}
      <ServiceSection
        id="event-production"
        title="Event Production"
        headline="From the First Idea to the Final Moment."
        body="We transform ideas into structured, high-standard experiences through concept development, technical coordination, vendor management, and real-time production oversight."
        subtitle="Events we Produce"
      />

      {/* Decor & Styling */}
      <ServiceSection
        id="decor-and-styling"
        title="Decor & Styling"
        headline="Your Space. Your Story. Designed to be Felt."
        body="We create environments that shape how guests experience your event before a single word is spoken."
        subtitle="Our Styling Capabilities"
      />

      {/* Staffing */}
      <ServiceSection
        id="staffing"
        title="Staffing"
        headline="The Right People. Exactly Where They Need to Be."
        body="We recruit, brief, and deploy event professionals selected for professionalism, presence, and execution quality."
        subtitle="Roles we Deploy"
      />

      {/* Event Operations */}
      <ServiceSection
        id="operations"
        title="Event Operations"
        headline="The System That Makes Everything Else Possible."
        body="We manage timelines, vendors, inventory systems, dispatch coordination, and operational frameworks that hold every moving part together."
        subtitle="Operations Services"
      />

      {/* Logistics */}
      <ServiceSection
        id="logistics"
        title="Logistics"
        headline="Every Journey. Every Detail. Every Guest."
        body="From accommodation and transportation to setup sequencing and guest movement, we coordinate the logistics that shape the overall experience."
        subtitle="Logistics Services"
      />
    </div>
  );
};

export default WhatWeDo;
