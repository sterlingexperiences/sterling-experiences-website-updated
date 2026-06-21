"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const articles = [
  {
    title: "Beyond Decor: The Systems Behind Exceptional Events",
    body: [
      "Beautiful events are rarely remembered only because they looked good.",
      "Guests remember how smoothly they moved through registration, how quickly problems were solved, how clear communication felt, and how coordinated the overall experience appeared.",
      "Exceptional events are operational systems disguised as seamless experiences.",
    ],
    quote: {
      text: "Experience design and attendee engagement continue to define event success in modern event strategy.",
      source: "EventMB Event Trends Report",
    },
    bodyAfterQuote: [
      "At Sterling Experiences, we believe the strongest events are built long before guests arrive through timelines, logistics frameworks, staffing coordination, production systems, contingency planning, and deliberate guest journey design.",
      "Decor matters. Atmosphere matters. But operations are what allow those elements to function together without friction.",
      "The future of premium events in Africa will belong to companies that understand both beauty and systems.",
    ],
    stats: [
      "91% of event professionals believe attendee engagement is the primary measure of event success.",
      "84% of attendees say the experience a brand creates at an event directly influences their perception of that brand.",
      "Poor logistics and long wait times are among the top reasons attendees rate events negatively.",
    ],
    sources: [
      { label: "EventMB Event Trends Report", url: "https://www.eventmanagerblog.com/event-trends-report" },
      { label: "Freeman Event Research", url: "https://www.freeman.com/resources/" },
      { label: "Bizzabo Event Experience Study", url: "https://www.bizzabo.com/blog/event-experience-report" },
    ],
  },
  {
    title: "Why Operational Infrastructure Matters in African Events",
    body: [
      "One of the most overlooked challenges in the African events industry is operational infrastructure.",
      "Many events rely heavily on improvisation, fragmented coordination, and last-minute adjustments. While creativity often compensates temporarily, the long-term result is unnecessary pressure, avoidable losses, and inconsistent guest experience.",
      "Operational infrastructure changes that.",
      "Clear workflows. Inventory systems. Vendor coordination frameworks. Timeline governance. Dispatch structures. Accountability systems.",
      "These are not glamorous parts of event execution, but they are the difference between stressful events and scalable experiences.",
    ],
    quote: {
      text: "Organizations that undervalue project management report significantly higher rates of project failure and wasted investment.",
      source: "PMI Pulse of the Profession Report",
    },
    bodyAfterQuote: [
      "Sterling Experiences approaches event execution as both a creative and operational discipline because sustainable excellence requires both.",
    ],
    stats: [
      "Organizations with mature project management systems waste 28 times less money than organizations with poor project performance.",
      "77% of high-performing projects use formal project management practices.",
      "Operational inefficiencies remain one of the leading causes of event budget overruns globally.",
    ],
    sources: [
      { label: "PMI Pulse of the Profession Report", url: "https://www.pmi.org/learning/thought-leadership/pulse" },
      { label: "Event Industry News", url: "https://www.eventindustrynews.com" },
    ],
  },
  {
    title: "What Guests Actually Remember About an Event",
    body: [
      "Guests rarely remember every detail.",
      "They remember how the experience made them feel.",
      "Whether registration felt chaotic or welcoming. Whether transitions felt smooth or confusing. Whether they felt considered, valued, and comfortable.",
      "The emotional memory of an event is often built through operational details guests never consciously notice.",
    ],
    quote: {
      text: "People crave connection, and live events remain one of the most powerful ways for brands to build trust and emotional engagement.",
      source: "Freeman Brand Experience Study",
    },
    bodyAfterQuote: [
      "The best events create an experience where guests never need to think about logistics because everything simply works.",
      "That level of experience is intentional.",
    ],
    stats: [
      "77% of consumers say they trust brands more after interacting with them at live events.",
      "64% of attendees retain more positive impressions of brands after experiential engagements.",
      "Event attendees are more likely to become repeat customers when experiences feel personalized and seamless.",
    ],
    sources: [
      { label: "Freeman Brand Experience Study", url: "https://www.freeman.com/resources/" },
      { label: "EventTrack Global Report", url: "https://www.eventtrack.com" },
    ],
  },
  {
    title: "Planning a Corporate Conference Without Operational Chaos",
    body: [
      "Corporate conferences involve far more than speakers and venues.",
      "They require coordination across attendees, presenters, schedules, vendors, technical teams, transportation, hospitality, registration, and programme flow.",
      "Without a clear operational framework, even strong event concepts become difficult to execute.",
      "Successful conference execution depends on: clear run-of-show systems, realistic timelines, centralized communication, vendor alignment, contingency planning, and guest-centered coordination.",
    ],
    quote: {
      text: "Attendees increasingly expect seamless and personalized event experiences across every touchpoint.",
      source: "Bizzabo Event Experience Report",
    },
    bodyAfterQuote: [
      "At Sterling Experiences, we believe operational clarity creates confidence for organisers, speakers, partners, and attendees alike.",
    ],
    stats: [
      "95% of marketers believe live events create valuable opportunities for in-person brand engagement.",
      "87% of event organizers say attendee satisfaction improves significantly when operational planning begins early.",
      "Communication breakdowns remain one of the leading operational risks during live conferences.",
    ],
    sources: [
      { label: "Bizzabo Event Experience Report", url: "https://www.bizzabo.com/blog/event-experience-report" },
      { label: "Freeman Research", url: "https://www.freeman.com/resources/" },
      { label: "Event Industry News", url: "https://www.eventindustrynews.com" },
    ],
  },
];

const InsightContent = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 2xl:px-0">
        {/* Intro section */}
        <div className="max-w-[900px] mx-auto mb-16 md:mb-24">
          <h2
            className={cn(
              "font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-brand-purple leading-[1.2] md:leading-[1.3] tracking-[-0.04em] text-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            Perspectives on events, operations, and guest experience.
          </h2>
          <div
            className={cn(
              "h-[3px] w-[80px] md:w-[120px] bg-brand-gold mx-auto mt-6 rounded-full transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
            )}
          />
          <div className="space-y-5 mt-8 max-w-[800px] mx-auto">
            <p
              className={cn(
                "font-openSans text-[15px] md:text-[17px] lg:text-[18px] text-neutral-700 leading-[1.75] tracking-[-0.01em] text-center transition-all duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              Sterling Experiences shares insights drawn from real-world event execution, operational coordination, and guest-centered design.
            </p>
            <p
              className={cn(
                "font-openSans text-[15px] md:text-[17px] lg:text-[18px] text-neutral-700 leading-[1.75] tracking-[-0.01em] text-center transition-all duration-700 delay-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              These articles are designed to help brands, institutions, and event stakeholders think more strategically about how experiences are built and remembered.
            </p>
          </div>
        </div>

        {/* Featured Articles title */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16">
          <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
            <div
              className={cn(
                "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
                inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
              )}
              style={{ transformOrigin: "right center" }}
            />
          </div>
          <h1
            className={cn(
              "font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[24px] md:text-[56px] text-[#800080] leading-[1.2] md:leading-[78px] tracking-[-0.04em] text-center transition-all duration-700 delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Featured Articles
          </h1>
          <div className="w-full max-w-[180px] md:max-w-[252px] h-[2px] overflow-hidden">
            <div
              className={cn(
                "h-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_6px_rgba(255,215,0,0.6)]",
                inView ? "w-full bg-[#FFD700]" : "w-0 bg-[#FFD700]/50",
              )}
              style={{ transformOrigin: "left center" }}
            />
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-16 md:space-y-24">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.title}
              article={article}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ArticleCardProps = {
  article: (typeof articles)[number];
  index: number;
  inView: boolean;
};

const ArticleCard = ({ article, index, inView }: ArticleCardProps) => {
  const [cardInView, setCardInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const show = cardInView || inView;

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-[16px] p-6 md:p-10 border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
        index % 2 === 0
          ? "bg-brand-purple/5 border-brand-purple/10"
          : "bg-brand-gold/10 border-brand-gold/20",
        show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
      )}
    >
      {/* Article headline */}
      <h2
        className={cn(
          "font-ebGaramond text-[28px] md:text-[36px] font-[600] tracking-[-0.03em] leading-[1.3] transition-all duration-700 delay-100 ease-[cubic-bezier(0.4,0,0.2,1)]",
          index % 2 === 0 ? "text-brand-purple" : "text-neutral-800",
          show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        {article.title}
      </h2>

      {/* Body paragraphs */}
      <div className="mt-5 space-y-4">
        {article.body.map((paragraph, i) => (
          <p
            key={i}
            className={cn(
              "font-openSans text-[15px] md:text-[16px] lg:text-[17px] text-neutral-700 leading-[1.75] tracking-[-0.01em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
            style={{ transitionDelay: `${200 + i * 80}ms` }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Blockquote */}
      <div
        className={cn(
          "mt-6 pl-5 md:pl-8 border-l-[3px] border-brand-gold py-3 transition-all duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <p className="font-ebGaramond italic text-[18px] md:text-[22px] text-brand-purple/80 leading-[1.4]">
          &ldquo;{article.quote.text}&rdquo;
        </p>
        <p className="mt-2 font-openSans text-[14px] text-neutral-500 tracking-[-0.01em]">
          <span className="text-brand-purple">Source: </span>{article.quote.source}
        </p>
      </div>

      {/* Body after quote */}
      {article.bodyAfterQuote && (
        <div className="mt-5 space-y-4">
          {article.bodyAfterQuote.map((paragraph, i) => (
            <p
              key={i}
              className={cn(
                "font-openSans text-[15px] md:text-[16px] lg:text-[17px] text-neutral-700 leading-[1.75] tracking-[-0.01em] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${400 + i * 80}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Key Industry Statistics */}
      <div
        className={cn(
          "mt-8 p-5 md:p-6 rounded-[12px] bg-brand-purple/5 border border-brand-purple/10 transition-all duration-700 delay-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <h3 className="font-ebGaramond text-[18px] md:text-[22px] font-[600] text-brand-purple mb-4">
          Key Industry Statistics
        </h3>
        <ul className="space-y-3">
          {article.stats.map((stat, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-openSans text-[14px] md:text-[15px] text-neutral-700 leading-[1.6]"
            >
              <span className="mt-[6px] size-[6px] shrink-0 rounded-full bg-brand-gold" />
              <span>{stat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sources */}
      <div
        className={cn(
          "mt-4 transition-all duration-700 delay-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <p className="font-openSans text-[13px] md:text-[14px] text-neutral-400 tracking-[-0.01em] font-semibold mb-2">
          Sources:
        </p>
        <ul className="space-y-1">
          {article.sources.map((source, i) => (
            <li key={i}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-openSans text-[13px] md:text-[14px] text-brand-purple/60 hover:text-brand-purple transition-colors duration-200 hover:underline"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsightContent;
