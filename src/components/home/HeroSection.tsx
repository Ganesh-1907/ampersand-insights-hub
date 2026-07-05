import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

import hero1 from "@/assets/global-research.jpg";
import hero2 from "@/assets/services-qualitative.jpg";
import hero3 from "@/assets/services-project-management.jpg";
import hero4 from "@/assets/services-recruitment.jpg";
import hero5 from "@/assets/services-quantitative.jpg";

const items = [
  {
    src: hero1,
    title: "Global Research",
    desc: "Pioneering cross-border market intelligence across 150+ countries to decode localized consumer behaviors and global trends.",
  },
  {
    src: hero2,
    title: "Qualitative Studies",
    desc: "Uncovering the 'why' behind consumer choices through deep-dive interviews, focus groups, and immersive ethnographic research.",
  },
  {
    src: hero3,
    title: "Project Management",
    desc: "Delivering flawless, end-to-end research execution from design to delivery, keeping your insights on time and on budget.",
  },
  {
    src: hero4,
    title: "Recruitment Services",
    desc: "Sourcing high-fidelity B2B and consumer respondents worldwide, even for the most niche and hard-to-reach target audiences.",
  },
  {
    src: hero5,
    title: "Global Expansion",
    desc: "Unlocking new markets with rigorous, data-driven feasibility testing and evidence-based market entry strategies.",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden pt-[76px] md:pt-0 bg-[var(--hero-right-bg)] transition-colors duration-500">

      {/* SLANTED BACKGROUND */}
      <div className="absolute inset-0 w-full h-full bg-[var(--hero-left-bg)] pointer-events-none z-0 hidden md:block md:[clip-path:polygon(0_0,_59%_0,_41%_100%,_0_100%)] transition-colors duration-500" />

      {/* LEFT SIDE */}
      <div className="relative w-full md:w-1/2 bg-[var(--hero-left-bg)] md:bg-transparent py-16 md:py-0 flex flex-col items-center justify-center min-h-[550px] md:min-h-screen transition-colors duration-500">

        {/* CENTER CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl px-4 md:pt-12 lg:pt-16">

          {/* STATIC CIRCLE */}
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-[var(--hero-circle-border)] shadow-2xl transition-colors duration-500">
            <AnimatePresence mode="wait">
              <motion.img
                key={items[active].src}
                src={items[active].src}
                alt={items[active].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* TEXT BELOW */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center mt-8 max-w-xl px-4"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white font-display mb-3 md:mb-4">
                {items[active].title}
              </h3>

              <p className="text-white/90 mt-2 text-base sm:text-lg md:text-xl xl:text-2xl font-body font-light italic leading-relaxed transition-colors duration-500">
                {items[active].desc}
              </p>

              <div>
                <Link
                  to="/services"
                  className="inline-block mt-4 md:mt-6 text-white hover:text-white/80 transition-colors underline underline-offset-4 font-body text-sm lg:text-base xl:text-lg font-semibold"
                >
                  Read more
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* AMPERSAND — SHADOW ONLY */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center z-10 pointer-events-none opacity-15 md:opacity-80">
        <span
          className="text-[200px] sm:text-[300px] md:text-[400px] lg:text-[480px] font-extrabold leading-none select-none"
          style={{
            color: "transparent",
            textShadow: `
              -10px 0 0 rgba(187, 188, 190, 0.45),
               18px 0 0 rgba(10, 3, 3, 0.45),
               0 30px 80px rgba(0,0,0,0.3)
            `,
          }}
        >
          &
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 bg-transparent flex items-center py-20 px-6 sm:px-12 md:pl-[80px] lg:pl-[150px] md:pr-12 lg:pr-24">
        <div className="relative z-20 w-full max-w-2xl lg:max-w-3xl space-y-6 md:space-y-8 lg:space-y-10 md:pt-12 lg:pt-16">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/40 text-sm w-fit">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-xs sm:text-sm font-medium">
              We Connect With Your Target Audience
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] xl:text-[66px] font-bold text-[var(--hero-right-title)] leading-tight lg:leading-[1.05] font-display transition-colors duration-500">
            Data-Driven Insights <br />
            That Power Smarter Decisions
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-[var(--hero-right-desc)] leading-relaxed font-body transition-colors duration-500">
            We help organizations uncover meaningful insights through global,
            multi-country research—combining qualitative depth, quantitative rigor,
            and strategic execution.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto text-base" asChild>
              <Link to="/services" className="justify-center">
                Explore Services <ArrowRight className="ml-2" />
              </Link>
            </Button>

            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto text-base" asChild>
              <Link to="/contact" className="justify-center">
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* CREDIBILITY STATS */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40 mt-6 md:mt-8">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--hero-right-stats-val)] font-display transition-colors duration-500">150+</p>
              <p className="text-xs sm:text-sm md:text-base text-[var(--hero-right-stats-lbl)] font-body mt-1 md:mt-2 transition-colors duration-500">Countries Covered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--hero-right-stats-val)] font-display transition-colors duration-500">5M+</p>
              <p className="text-xs sm:text-sm md:text-base text-[var(--hero-right-stats-lbl)] font-body mt-1 md:mt-2 transition-colors duration-500">Respondents Reached</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--hero-right-stats-val)] font-display transition-colors duration-500">99%</p>
              <p className="text-xs sm:text-sm md:text-base text-[var(--hero-right-stats-lbl)] font-body mt-1 md:mt-2 transition-colors duration-500">Satisfaction Rate</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
