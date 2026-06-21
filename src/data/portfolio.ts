export type CaseStudy = {
  overview: string;
  challenge?: string;
  outcome?: string;
  clientFeedback?: {
    quote: string;
    attribution: string;
  };
};

export type PortfolioEvent = {
  slug: string;
  name: string;
  subtitle?: string;
  coverImage: string;
  images: string[];
  description: string;
  services?: string[];
  caseStudy?: CaseStudy;
  insights?: string[];
};

export const portfolioEvents: PortfolioEvent[] = [
  /* ── Pitch2Win (grouped: editions 3 & 4) ── */
  {
    slug: "pitch2win",
    name: "Pitch2Win Startup Competition",
    subtitle: "Multi-Day Startup & Innovation Experience",
    coverImage: "/assets/images/pitch-2-win.png",
    images: [
      "/assets/images/p2w3-1.png",
      "/assets/images/p2w3-2.png",
      "/assets/images/p2w3-3.png",
      "/assets/images/p2w3-4.png",
      "/assets/images/p2w3-5.png",
      "/assets/images/p2w3-6.png",
      "/assets/images/p2w3-7.png",
      "/assets/images/p2w3-8.png",
      "/assets/images/p2w4-1.png",
      "/assets/images/p2w4-2.png",
      "/assets/images/p2w4-3.png",
      "/assets/images/p2w4-4.png",
      "/assets/images/p2w4-5.png",
      "/assets/images/p2w4-6.png",
      "/assets/images/p2w4-7.png",
      "/assets/images/p2w4-8.png",
    ],
    services: [
      "Program Management",
      "Staffing",
      "Operations",
      "Vendor Coordination",
    ],
    description:
      "Sterling Experiences supported the execution of Pitch2Win 3 and 4, coordinating programme structure, stakeholder communication, attendee flow, production timing, and operational logistics across multiple event segments.",
    caseStudy: {
      overview:
        "Sterling Experiences supported the execution of Pitch2Win 3 and 4, coordinating programme structure, stakeholder communication, attendee flow, production timing, and operational logistics across multiple event segments.",
      challenge:
        "Managing startup founders, speakers, judges, production teams, and attendees within compressed timelines while maintaining smooth programme delivery.",
      outcome:
        "Delivered a structured and professionally coordinated experience that enabled seamless programming, strong stakeholder engagement, and effective event flow under pressure.",
      clientFeedback: {
        quote:
          "Joy never gets overwhelmed but creates solutions and leads people to solutions during and even after the event.",
        attribution: "Timothy Olalekan, 3IR Prints",
      },
    },
  },

  /* ── Infotech Summit ── */
  {
    slug: "infotech-summit",
    name: "Infotech Summit",
    subtitle: "Technology & Innovation Conference",
    coverImage: "/assets/images/infotech.png",
    images: [
      "/assets/images/infotech-1.png",
      "/assets/images/infotech-2.png",
      "/assets/images/infotech-3.png",
      "/assets/images/infotech-4.png",
      "/assets/images/infotech-5.png",
      "/assets/images/infotech-6.png",
      "/assets/images/infotech-7.png",
      "/assets/images/infotech-8.png",
    ],
    services: [
      "Event Management",
      "Production Coordination",
      "Logistics",
      "Guest Experience",
    ],
    description:
      "Sterling Experiences managed operational coordination for Infotech Summit, ensuring smooth programme execution, speaker coordination, logistics oversight, and attendee experience management.",
    caseStudy: {
      overview:
        "Sterling Experiences managed operational coordination for Infotech Summit, ensuring smooth programme execution, speaker coordination, logistics oversight, and attendee experience management.",
      challenge:
        "Delivering a professional conference environment capable of supporting ecosystem conversations, networking, and high attendee engagement.",
      outcome:
        "Created an efficiently managed summit experience that strengthened stakeholder confidence and elevated the event's execution quality.",
      clientFeedback: {
        quote:
          "Their commitment to excellence will ensure your experience is nothing short of sterling.",
        attribution: "Chidubem Agulue, Convener, Infotech Summit",
      },
    },
  },

  /* ── OyaMakeWeGroove (grouped: editions 6, 7, 8, 9) ── */
  {
    slug: "oya-make-we-groove",
    name: "OyaMakeWeGroove",
    subtitle: "Experiential Social Event Series",
    coverImage: "/assets/images/oya-make-we-groove.png",
    images: [
      "/assets/images/omwg6-1.png",
      "/assets/images/omwg6-2.png",
      "/assets/images/omwg6-3.png",
      "/assets/images/omwg6-4.png",
      "/assets/images/omwg6-5.png",
      "/assets/images/omwg6-6.png",
      "/assets/images/omwg6-7.png",
      "/assets/images/omwg6-8.png",
      "/assets/images/omwg7-1.png",
      "/assets/images/omwg7-2.png",
      "/assets/images/omwg7-3.png",
      "/assets/images/omwg7-4.png",
      "/assets/images/omwg7-5.png",
      "/assets/images/omwg7-6.png",
      "/assets/images/omwg7-7.png",
      "/assets/images/omwg7-8.png",
    ],
    services: [
      "Lead Project Management",
      "Styling",
      "Guest Experience",
      "Operations",
    ],
    description:
      "Sterling Experiences led project coordination across multiple editions of OyaMakeWeGroove, balancing audience experience, entertainment coordination, visual atmosphere, and operational logistics.",
    caseStudy: {
      overview:
        "Sterling Experiences led project coordination across multiple editions of OyaMakeWeGroove, balancing audience experience, entertainment coordination, visual atmosphere, and operational logistics.",
      challenge:
        "Maintaining consistent guest energy, smooth coordination, and experiential quality across evolving event editions.",
      outcome:
        "Delivered memorable social experiences that prioritized atmosphere, movement, and attendee engagement.",
    },
  },

  /* ── Web3 Meetup ── */
  {
    slug: "web-3-meetup",
    name: "Web3 Meetup",
    subtitle: "Emerging Technology Community Meetup",
    coverImage: "/assets/images/web3-meetup.png",
    images: [
      "/assets/images/web-3-1.png",
      "/assets/images/web-3-2.png",
      "/assets/images/web-3-3.png",
      "/assets/images/web-3-4.png",
      "/assets/images/web-3-5.png",
      "/assets/images/web-3-6.png",
      "/assets/images/web-3-7.png",
      "/assets/images/web-3-8.png",
    ],
    services: ["Production Coordination", "Attendee Experience", "Logistics"],
    description:
      "Supported the execution of a community-driven Web3 meetup focused on networking, ecosystem engagement, and knowledge sharing.",
  },
];

/* ── Individual edition slugs (for /portfolio/[slug] detail pages) ── */
export const portfolioEditions: PortfolioEvent[] = [
  {
    slug: "pitch-2-win-3",
    name: "Pitch2Win 3",
    coverImage: "/assets/images/p2w3.png",
    images: [
      "/assets/images/p2w3-1.png",
      "/assets/images/p2w3-2.png",
      "/assets/images/p2w3-3.png",
      "/assets/images/p2w3-4.png",
      "/assets/images/p2w3-5.png",
      "/assets/images/p2w3-6.png",
      "/assets/images/p2w3-7.png",
      "/assets/images/p2w3-8.png",
    ],
    description:
      "The third edition of the high-stakes startup competition where entrepreneurs pitched their ideas to a panel of seasoned investors. Pitch2Win 3 showcased the best of Nigeria's emerging business talent, with winners walking away with funding and mentorship.",
    insights: [
      "50+ startups applied, 12 finalists selected",
      "Judging panel of 5 venture capitalists",
      "Over N10 million in prizes and investment",
    ],
  },
  {
    slug: "pitch-2-win-4",
    name: "Pitch2Win 4",
    coverImage: "/assets/images/pitch-2-win.png",
    images: [
      "/assets/images/p2w4-1.png",
      "/assets/images/p2w4-2.png",
      "/assets/images/p2w4-3.png",
      "/assets/images/p2w4-4.png",
      "/assets/images/p2w4-5.png",
      "/assets/images/p2w4-6.png",
      "/assets/images/p2w4-7.png",
      "/assets/images/p2w4-8.png",
    ],
    description:
      "The fourth and largest edition of the Pitch2Win competition series. With an expanded format, bigger prizes, and a wider network of investors, Pitch2Win 4 cemented its reputation as the go-to platform for early-stage startups seeking visibility, validation, and capital.",
    insights: [
      "80+ startup applications received",
      "15 finalists pitched to a live audience of 400+",
      "Partnerships with 3 leading tech accelerators",
    ],
  },
  {
    slug: "oya-make-we-groove-7",
    name: "OyaMakeWeGroove 7",
    coverImage: "/assets/images/oya-make-we-groove.png",
    images: [
      "/assets/images/omwg7-1.png",
      "/assets/images/omwg7-2.png",
      "/assets/images/omwg7-3.png",
      "/assets/images/omwg7-4.png",
      "/assets/images/omwg7-5.png",
      "/assets/images/omwg7-6.png",
      "/assets/images/omwg7-7.png",
      "/assets/images/omwg7-8.png",
    ],
    description:
      "The seventh edition of Nigeria's most anticipated social experience. OyaMakeWeGroove delivered an unforgettable evening of music, dance, and cultural celebration, bringing together party lovers from across the country for a night of pure energy and connection.",
    insights: [
      "1,500+ guests in attendance",
      "Live performances from 6 top Nigerian artists",
      "Immersive lighting and sound production",
    ],
  },
  {
    slug: "oya-make-we-groove-6",
    name: "OyaMakeWeGroove 6",
    coverImage: "/assets/images/oymwg6.png",
    images: [
      "/assets/images/omwg6-1.png",
      "/assets/images/omwg6-2.png",
      "/assets/images/omwg6-3.png",
      "/assets/images/omwg6-4.png",
      "/assets/images/omwg6-5.png",
      "/assets/images/omwg6-6.png",
      "/assets/images/omwg6-7.png",
      "/assets/images/omwg6-8.png",
    ],
    description:
      "The sixth edition of the flagship social event that set the standard for premium entertainment experiences. OyaMakeWeGroove 6 raised the bar with a bigger venue, enhanced production value, and a lineup that kept guests moving from start to finish.",
    insights: [
      "1,200+ guests across two halls",
      "Custom stage design and themed decor",
      "End-to-end event production by Sterling",
    ],
  },
];
