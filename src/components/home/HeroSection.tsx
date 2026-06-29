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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden pt-[76px] md:pt-0 bg-warm-800">

      {/* SLANTED BACKGROUND */}
      <div className="absolute inset-0 w-full h-full bg-warm-900 pointer-events-none z-0 hidden md:block md:[clip-path:polygon(0_0,_59%_0,_41%_100%,_0_100%)]" />

      {/* LEFT SIDE */}
      <div className="relative w-full md:w-1/2 bg-warm-900 md:bg-transparent py-16 md:py-0 flex flex-col items-center justify-center min-h-[550px] md:min-h-screen">

        {/* CENTER CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl px-4 md:pt-12 lg:pt-16">

          {/* STATIC CIRCLE */}
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-primary shadow-2xl">
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
          <motion.div
            key={`text-${active}`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mt-8 max-w-xl px-4"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-primary font-display mb-3 md:mb-4"
            >
              {items[active].title}
            </motion.h3>

            <motion.p className="text-warm-100 mt-2 text-base sm:text-lg md:text-xl xl:text-2xl font-body font-light italic leading-relaxed">
              {items[active].desc.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-1.5"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link
                to="/services"
                className="inline-block mt-4 md:mt-6 text-primary hover:text-primary/80 transition-colors underline underline-offset-4 font-body text-sm lg:text-base xl:text-lg font-semibold"
              >
                Read more
              </Link>
            </motion.div>
          </motion.div>

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm w-fit">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-xs sm:text-sm font-medium">
              Global Market Research Excellence
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] xl:text-[66px] font-bold text-primary-foreground leading-tight lg:leading-[1.05] font-display">
            Data-Driven Insights <br />
            That Power Smarter Decisions
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-warm-200 leading-relaxed font-body">
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
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-6 md:mt-8">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-primary font-display">150+</p>
              <p className="text-xs sm:text-sm md:text-base text-warm-300 font-body mt-1 md:mt-2">Countries Covered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-primary font-display">5M+</p>
              <p className="text-xs sm:text-sm md:text-base text-warm-300 font-body mt-1 md:mt-2">Respondents Reached</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-primary font-display">99%</p>
              <p className="text-xs sm:text-sm md:text-base text-warm-300 font-body mt-1 md:mt-2">Satisfaction Rate</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
