export type PortfolioEvent = {
  slug: string;
  name: string;
  coverImage: string;
  images: string[];
  description: string;
  insights?: string[];
};

export const portfolioEvents: PortfolioEvent[] = [
  {
    slug: "web-3-meetup",
    name: "Web3 Meetup",
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
    description:
      "A dynamic gathering of blockchain enthusiasts, developers, and innovators exploring the future of decentralised technology. The Web3 Meetup brought together thought leaders for an evening of networking, panel discussions, and live demonstrations of cutting-edge blockchain applications.",
    insights: [
      "200+ attendees from across the tech ecosystem",
      "8 blockchain startups showcased their products",
      "Keynote on the future of decentralised finance in Africa",
    ],
  },
  {
    slug: "infotech-summit",
    name: "Infotech Summit",
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
    description:
      "A premier technology summit convening industry leaders, policymakers, and innovators to discuss the transformative power of information technology. The event featured expert-led sessions on AI, cybersecurity, cloud infrastructure, and the digital economy.",
    insights: [
      "500+ delegates from 12 countries",
      "25 expert speakers across 4 tracks",
      "Networking sessions connecting startups with investors",
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
];
