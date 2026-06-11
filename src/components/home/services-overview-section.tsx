"use client";

import Link from "next/link";

const services = [
  {
    title: "Event Production",
    headline: "From the First Idea to the Final Moment.",
    description:
      "We transform ideas into structured, high-standard experiences through concept development, technical coordination, vendor management, and real-time production oversight.",
    color: "from-brand-purple/10 to-transparent",
    accent: "brand-purple",
  },
  {
    title: "Decor & Styling",
    headline: "Your Space. Your Story. Designed to be Felt.",
    description:
      "We create environments that shape how guests experience your event before a single word is spoken.",
    color: "from-brand-gold/10 to-transparent",
    accent: "brand-gold",
  },
  {
    title: "Staffing",
    headline: "The Right People. Exactly Where They Need to Be.",
    description:
      "We recruit, brief, and deploy event professionals selected for professionalism, presence, and execution quality.",
    color: "from-brand-purple/5 to-transparent",
    accent: "brand-purple",
  },
  {
    title: "Event Operations",
    headline: "The System That Makes Everything Else Possible.",
    description:
      "We manage timelines, vendors, inventory systems, dispatch coordination, and operational frameworks that hold every moving part together.",
    color: "from-neutral-500/5 to-transparent",
    accent: "neutral-600",
  },
  {
    title: "Logistics",
    headline: "Every Journey. Every Detail. Every Guest.",
    description:
      "From accommodation and transportation to setup sequencing and guest movement, we coordinate the logistics that shape the overall experience.",
    color: "from-brand-purple/10 to-transparent",
    accent: "brand-purple",
  },
];

export function ServicesOverviewSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Five Disciplines. One Standard.
          </h2>
          <p className="font-body text-lg text-neutral-600">
            Our integrated approach ensures every element of your event moves in
            the same direction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 hover:border-brand-purple/30 transition-all duration-300 h-full"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} pointer-events-none`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-purple/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-8 lg:p-10 h-full flex flex-col justify-between">
                {/* Title and Headline */}
                <div className="space-y-4 mb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-heading text-2xl font-semibold text-neutral-900 group-hover:text-brand-purple transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-2xl ml-2 group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                  <p className="font-body text-neutral-700 italic">
                    {service.headline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-body text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-neutral-200 flex items-center justify-between">
          <p className="font-body text-lg text-neutral-600 max-w-md">
            Explore our full service capabilities and how they work together to
            deliver exceptional experiences.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-purple text-white text-[15px] font-body font-semibold rounded-[12px] hover:bg-[#660066] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
