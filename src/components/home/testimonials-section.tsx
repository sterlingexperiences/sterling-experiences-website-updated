"use client";

const testimonials = [
  {
    quote:
      "Sterling Experiences' dedication to ensuring that even the tiniest details were flawlessly handled was truly impressive. But beyond that, Joy helped me see the event's bigger purpose, inspiring me to aim higher. Their commitment to excellence will ensure your experience is nothing short of sterling.",
    author: "Chidubem Agulue",
    role: "Convener",
    company: "Infotech Summit",
  },
  {
    quote:
      "Joy is top-notch in time management. We worked under the least pressure that events usually come with. She never gets overwhelmed — she creates solutions and leads people to solutions during and even after the event.",
    author: "Timothy Olalekan",
    role: "Project Lead",
    company: "3IR Prints | Pitch2Win",
  },
  {
    quote:
      "Joy's attention to detail, creativity, and professionalism are truly unmatched. What impressed me most was her ability to remain calm and composed under pressure. The entire team was inspired to deliver their best.",
    author: "Adelowo Damilare",
    role: "Creative Director",
    company: "Cobus Concepts",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            What Clients Say
          </h2>
          <p className="font-body text-lg text-neutral-600">
            Real feedback from real events. These partnerships shaped how we
            think about every project.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-neutral-200 hover:border-brand-purple/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-4xl text-brand-purple/20 font-heading">
                "
              </div>

              {/* Quote */}
              <p className="font-body text-neutral-700 leading-relaxed mb-8 italic relative z-10">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-6">
                <p className="font-body font-semibold text-neutral-900">
                  {testimonial.author}
                </p>
                <p className="font-body text-sm text-neutral-600">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>

              {/* Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-neutral-200 text-center">
          <p className="font-body text-lg text-neutral-600 mb-8">
            Ready to create your Sterling Experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-purple text-white text-[15px] font-body font-semibold rounded-[12px] hover:bg-[#660066] transition-all duration-300 cursor-pointer"
            >
              Get Started
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-brand-purple text-[15px] font-body font-semibold rounded-[12px] border-2 border-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 cursor-pointer"
            >
              See More Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
