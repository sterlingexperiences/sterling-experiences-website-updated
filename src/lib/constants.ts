export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Sterling Experiences",
  shortName: "Sterling",
  tagline: "Experiences that move people.",
  description:
    "An Experience & Event Operations Firm delivering event production, operations, staffing, logistics, and decor under one operational standard. Based in Port Harcourt, Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sterlingxperiences.com",
  locale: "en_NG",
  themeColor: "#800080",
  logo: "/sterling_experiences.jpg",
  ogImage: "/og-image.jpg",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "wa.me/+2347089300072",
};

export const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://web.facebook.com/sterlingxperiences",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/sterling_experiences/",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/sterling-xperiences/",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Get In Touch", href: "/contact" },
] as const;

export const SEO_KEYWORDS = [
  "event planning company Nigeria",
  "event production Port Harcourt",
  "event logistics company Nigeria",
  "event staffing services Nigeria",
  "corporate event management Lagos",
  "event operations firm",
  "premium event production",
  "Nigeria event company",
  "brand activation Nigeria",
  "conference production Nigeria",
  "social experience events",
  "institutional event management",
  "startup event services",
  "Nigeria experience agency",
];

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  description: SITE.description,
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+2347089300072",
    availableLanguage: ["English"],
  },
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linkedin,
  ].filter(Boolean),
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
