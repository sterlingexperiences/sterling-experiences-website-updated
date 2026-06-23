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
        lists={[
          {
            heading: "What we manage",
            items: [
              "Event concept development and creative direction",
              "Venue selection, site visits, and floor plan design",
              "Programme design and run-of-show scheduling",
              "Audio-visual and technical production coordination",
              "Vendor selection, briefing, and day-of management",
              "On-site production command and real-time problem resolution",
              "Post-event debrief and written reporting",
            ],
          },
          {
            heading: "Events we produce",
            items: [
              "Corporate conferences, summits, and AGMs",
              "Product launches and brand activations",
              "Award ceremonies, galas, and formal dinners",
              "Tech meetups, seminars, and workshops",
              "Weddings and private celebrations",
              "Government and institutional functions",
            ],
          },
        ]}
      />

      {/* Decor & Styling */}
      <ServiceSection
        id="decor-and-styling"
        title="Decor & Styling"
        headline="Your Space. Your Story. Designed to be Felt."
        body="We create environments that shape how guests experience your event before a single word is spoken."
        lists={[
          {
            heading: "Our styling capabilities",
            items: [
              "Thematic concept development and mood boarding",
              "Floral design, arrangement, and bespoke installation",
              "Ambient, architectural, and feature lighting design",
              "Table settings, linen, and tableware curation",
              "Custom centrepieces, backdrops, and spatial installations",
              "Stage, entrance, and brand environment design",
              "Full setup, quality review before guest arrival, and post-event breakdown",
            ],
          },
        ]}
      />

      {/* Staffing */}
      <ServiceSection
        id="staffing"
        title="Staffing"
        headline="The Right People. Exactly Where They Need to Be."
        body="We recruit, brief, and deploy event professionals selected for professionalism, presence, and execution quality."
        lists={[
          {
            heading: "Roles we deploy",
            items: [
              "Event Hosts, Hostesses, and Guest Relations Officers",
              "Ushers and floor coordinators",
              "Registration, accreditation, and check-in teams",
              "Protocol and VIP management officers",
              "Bartenders, mixologists, and service crew",
              "Stage, backstage, and production assistants",
              "Brand ambassadors and promotional staff",
              "Bridal assistants",
              "Baby Minders",
              "Warehouse Inventory Managers",
              "Decor Coordinators",
              "Floor managers and event supervisors",
              "On-demand hair stylists, makeup artists, and wardrobe support",
            ],
          },
        ]}
      />

      {/* Event Operations */}
      <ServiceSection
        id="operations"
        title="Event Operations"
        headline="The System That Makes Everything Else Possible."
        body="We manage timelines, vendors, inventory systems, dispatch coordination, and operational frameworks that hold every moving part together."
        lists={[
          {
            heading: "Operations services",
            items: [
              "Master event timeline and schedule governance",
              "Vendor procurement, contracts, and coordination",
              "Budget tracking and cost management",
              "Inventory management and asset tracking",
              "Dispatch coordination, recovery, and post-event reconciliation",
              "Warehouse organisation and operational system design",
              "Staff deployment structure and accountability frameworks",
              "Operational reporting and performance review",
            ],
          },
        ]}
      />

      {/* Logistics */}
      <ServiceSection
        id="logistics"
        title="Logistics"
        headline="Every Journey. Every Detail. Every Guest."
        body="From accommodation and transportation to setup sequencing and guest movement, we coordinate the logistics that shape the overall experience."
        lists={[
          {
            heading: "Logistics services",
            items: [
              "Hotel sourcing, room blocking, and accommodation management",
              "Flight coordination and travel itinerary planning",
              "Airport transfers and ground transportation",
              "Guest movement scheduling and group travel logistics",
              "Equipment and asset transport coordination",
              "Setup sequencing, breakdown, and material recovery",
              "Souvenir selection, corporate gift curation, and branded packaging",
              "Destination event and incentive trip management",
            ],
          },
        ]}
      />
    </div>
  );
};

export default WhatWeDo;
