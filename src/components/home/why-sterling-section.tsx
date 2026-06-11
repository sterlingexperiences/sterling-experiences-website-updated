"use client";

import { PrecisionIcon, HumanIcon, CalmIcon, NetworkIcon } from "@/components/ui/brand-icons";

const whyValues = [
  {
    title: "Operational Precision",
    description:
      "We build frameworks that allow events to run smoothly long before guests arrive.",
    icon: (color: string) => <PrecisionIcon color={color} />,
  },
  {
    title: "Guest-Centered Thinking",
    description: "Every decision is made from the attendee experience outward.",
    icon: (color: string) => <HumanIcon color={color} />,
  },
  {
    title: "Calm Execution",
    description: "We solve problems before they become visible.",
    icon: (color: string) => <CalmIcon color={color} />,
  },
  {
    title: "Integrated Delivery",
    description:
      "Production, staffing, logistics, and operations working together as one coordinated system.",
    icon: (color: string) => <NetworkIcon color={color} />,
  },
];

export function WhySterlingSec() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Why Sterling Experiences
          </h2>
          <p className="font-body text-lg text-neutral-600">
            Built on systems. Remembered for experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {whyValues.map((value, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl p-8 lg:p-10 border border-neutral-200 hover:border-brand-purple/20 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-12 h-1 bg-linear-to-l from-brand-purple to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-brand-purple mb-6 group-hover:scale-105 transition-transform duration-300">
                {value.icon("#800080")}
              </div>

              <h3 className="font-heading text-2xl font-semibold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="font-body text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
