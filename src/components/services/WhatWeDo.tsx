"use client";

import ServiceSection from "@/components/services/ServiceSection";

const WhatWeDo = () => {
  return (
    <div>
      {/* 3.1 Event Production */}
      <ServiceSection
        id="event-production"
        title="Event Production"
        headline="From the First Idea to the Final Moment."
        body={[
          "Every event begins as an intention. Our job is to turn that intention into an experience — structured, creative, and executed without a single visible seam.",
          "Event production at Sterling covers the full arc of your event's life: concept development, venue sourcing, programme design, technical production, vendor coordination, and on-site command. We build a run-of-show that accounts for every transition and every contingency. We brief every supplier. We hold every timeline. And on the day itself, we run the room so you do not have to.",
          "Our clients attend their events as guests, not managers. That is intentional.",
        ]}
        accordionBlocks={[
          {
            title: "What we manage",
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
            title: "Events we produce",
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

      {/* 3.2 Decor & Styling */}
      <ServiceSection
        id="decor-and-styling"
        title="Decor & Styling"
        headline="Your Space. Your Story. Designed to be Felt."
        body={[
          "Before anyone speaks, the room speaks. Our decor and styling work ensures that what it says is exactly what you intend.",
          "We approach every brief as a design problem, not a decoration task. Your theme, your guests, your brand, the emotion you want people to carry home — all of it informs every choice we make, from the first mood board to the final centrepiece. The result is a space that feels considered and coherent, not assembled.",
          "We work across event scales and aesthetic directions: corporate restraint, celebratory boldness, romantic intimacy, and everything in between. The common thread is craft.",
        ]}
        accordionBlocks={[
          {
            title: "Our styling capabilities",
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

      {/* 3.3 Staffing */}
      <ServiceSection
        id="staffing"
        title="Staffing"
        headline="The Right People. Exactly Where They Need to Be."
        body={[
          "The experience of an event is delivered by people. The warmth at the door. The efficiency at registration. The quiet competence on the floor. These moments are staffing, and they are ours to get right.",
          "Through Sterling Events Staffing, we recruit, train, and deploy event professionals across every function — selected not only for skill but for presence, conduct, and the ability to represent your brand without being asked twice. Each team member is briefed specifically for your event: the run-of-show, the dress code, the standard required.",
          "We scale to your event. From a focused executive dinner to a multi-day national conference, our staffing model adjusts without loss of quality or supervision.",
        ]}
        accordionBlocks={[
          {
            title: "Roles we deploy",
            items: [
              "Event hosts, hostesses, and guest relations officers",
              "Ushers and floor coordinators",
              "Registration, accreditation, and check-in teams",
              "Protocol and VIP management officers",
              "Bartenders, mixologists, and service crew",
              "Stage, backstage, and production assistants",
              "Brand ambassadors and promotional staff",
              "Bridal assistants",
              "Floor managers and event supervisors",
              "On-demand hair stylists, makeup artists, and wardrobe support",
            ],
          },
        ]}
      />

      {/* 3.4 Event Operations */}
      <ServiceSection
        id="operations"
        title="Event Operations"
        headline="The System That Makes Everything Else Possible."
        body={[
          "Exceptional events do not happen by accident. They happen because someone built the operational framework that held every piece in place.",
          "Sterling's event operations service is that framework. We govern timelines, manage vendor networks, track inventory, and serve as the single point of coordination across every workstream so that each element of your event moves in the same direction at the same time.",
          "For businesses within the events ecosystem (decorators, rental companies, production houses) we also offer operational consulting through our Sterling EventOps system: warehouse organisation, inventory management, asset tracking, dispatch and recovery, and staff accountability — structured operational infrastructure that reduces losses and scales with your business.",
        ]}
        accordionBlocks={[
          {
            title: "Operations services",
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

      {/* 3.5 Logistics */}
      <ServiceSection
        id="logistics"
        title="Logistics"
        headline="Every Journey. Every Detail. Every Guest."
        body={[
          "For events that move people, literally, logistics is where the experience begins. Long before the first session opens, your guests are already forming impressions: of how smoothly they travelled, where they stayed, what they were given when they arrived.",
          "Sterling Experiences' logistics service manages the complete travel and asset journey for your event. We source and block hotel rooms, coordinate flights and build itineraries, arrange ground transportation, and manage every movement from arrival to departure. For the event itself, we coordinate the movement of equipment and materials, manage setup sequencing and breakdown, and ensure everything arrives on time and in the right condition.",
          "We also curate. Souvenirs, corporate gifts, and branded keepsakes — selected with thought, presented with care, and aligned with the story your event is telling.",
        ]}
        accordionBlocks={[
          {
            title: "Logistics services",
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
