import Marquee from "react-fast-marquee";

const items = [
  { type: "text" as const, content: "Corporate Conferences" },
  { type: "logo" as const, src: "/Sterling%20Experiences%20Logo%20purple.png", alt: "Sterling Logo" },
  { type: "text" as const, content: "Startup Ecosystems" },
  { type: "logo" as const, src: "/sterling_experiences.jpg", alt: "Sterling Experiences" },
  { type: "text" as const, content: "Institutional Events" },
  { type: "logo" as const, src: "/Sterling%20Experiences%20Logo%20purple.png", alt: "Sterling Logo" },
  { type: "text" as const, content: "Social Experiences" },
  { type: "logo" as const, src: "/sterling_experiences.jpg", alt: "Sterling Experiences" },
  { type: "text" as const, content: "Brand Activations" },
];

const MarqueeTape = () => {
  return (

    <div className="w-full py-5 md:py-7 border-y border-brand-purple/10 bg-brand-champagne/40 overflow-hidden">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={false}
        loop={0}
        autoFill={true}
        className="overflow-hidden"
      >
        <div className="flex items-center gap-10 md:gap-14 px-5">
          {items.map((item, i) =>
            item.type === "text" ? (
              <span
                key={i}
                className="font-ebGaramond text-[18px] md:text-[24px] font-medium text-brand-purple whitespace-nowrap tracking-[-0.02em]"
              >
                {item.content}
              </span>
            ) : (
              <img
                key={i}
                src={item.src}
                alt={item.alt}
                className="h-8 md:h-10 w-auto object-contain"
              />
            ),
          )}
        </div>
      </Marquee>
    </div>

  );
};

export default MarqueeTape;
