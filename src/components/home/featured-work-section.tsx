"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredWork = [
  {
    title: "Pitch2Win Startup Competition",
    type: "Multi-Day Startup & Innovation Experience",
    services: [
      "Program Management",
      "Staffing",
      "Operations",
      "Vendor Coordination",
    ],
    description:
      "Coordinating programme structure, stakeholder communication, attendee flow, and operational logistics across multiple event segments.",
    feedback:
      "Joy never gets overwhelmed but creates solutions and leads people to solutions during and even after the event.",
    feedbackAuthor: "Timothy Olalekan, 3IR Prints",
    image: "/assets/images/pitch2win.jpg",
  },
  {
    title: "Infotech Summit",
    type: "Technology & Innovation Conference",
    services: [
      "Event Management",
      "Production Coordination",
      "Logistics",
      "Guest Experience",
    ],
    description:
      "Managing operational coordination ensuring smooth programme execution, speaker coordination, logistics oversight, and attendee experience management.",
    feedback:
      "Their commitment to excellence will ensure your experience is nothing short of sterling.",
    feedbackAuthor: "Chidubem Agulue, Infotech Summit",
    image: "/assets/images/infotech.jpg",
  },
  {
    title: "OyaMakeWeGroove",
    type: "Experiential Social Event Series",
    services: [
      "Lead Project Management",
      "Styling",
      "Guest Experience",
      "Operations",
    ],
    description:
      "Led project coordination across multiple editions, balancing audience experience, entertainment coordination, visual atmosphere, and operational logistics.",
    feedback:
      "Joy's attention to detail, creativity, and professionalism are truly unmatched.",
    feedbackAuthor: "Adelowo Damilare, Cobus Concepts",
    image: "/assets/images/oyamakewegrove.jpg",
  },
];

export function FeaturedWorkSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Selected Work
          </h2>
          <div className="space-y-2">
            <p className="font-body text-lg text-neutral-600">
              Every event is different.
            </p>
            <p className="font-body text-lg text-neutral-600">
              The standard is not.
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-20">
          {featuredWork.map((work, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start pb-16 md:pb-20 border-b border-neutral-200 last:border-b-0 last:pb-0"
            >
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
                    {work.title}
                  </h3>
                  <p className="font-body text-neutral-600">{work.type}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {work.services.map((service) => (
                    <span
                      key={service}
                      className="font-body text-sm text-neutral-600 bg-neutral-50 rounded-full px-3 py-1"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <p className="font-body text-neutral-700 leading-relaxed">
                  {work.description}
                </p>

                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <p className="font-body italic text-neutral-700 mb-3">
                    &ldquo;{work.feedback}&rdquo;
                  </p>
                  <p className="font-body text-sm text-neutral-600">
                    &mdash; {work.feedbackAuthor}
                  </p>
                </div>

                <Link
                  href={`/work#${work.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-brand-purple font-body font-semibold hover:text-brand-purple/70 transition-colors group/link"
                >
                  View Case Study
                  <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-neutral-100 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-neutral-200">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-purple text-white text-[15px] font-body font-semibold rounded-[10px] hover:bg-[#660066] transition-all duration-300 cursor-pointer"
          >
            View All Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
