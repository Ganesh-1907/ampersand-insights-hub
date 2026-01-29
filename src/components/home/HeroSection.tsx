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
    desc: "Multi-country market intelligence solutions",
  },
  {
    src: hero2,
    title: "Qualitative Studies",
    desc: "In-depth interviews & focus groups",
  },
  {
    src: hero3,
    title: "Project Management",
    desc: "End-to-end research execution",
  },
  {
    src: hero4,
    title: "Recruitment Services",
    desc: "Targeted respondent sourcing",
  },
  {
    src: hero5,
    title: "Global Expansion",
    desc: "Research-backed market entry strategies",
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
    <section className="relative min-h-screen flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="relative w-1/2 bg-warm-900">

        {/* PERFECT CENTER LOCK */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* STATIC CIRCLE */}
          <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-4 border-primary shadow-2xl">
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

          {/* TEXT BELOW — ABSOLUTE (NO PUSH) */}
          <motion.div
            key={`text-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-20 text-center max-w-md"
          >
            <h3 className="text-2xl font-semibold text-primary-foreground">
              {items[active].title}
            </h3>

            <p className="text-warm-200 mt-3">
              {items[active].desc}
            </p>

            <Link
              to="/services"
              className="inline-block mt-5 text-primary underline underline-offset-4"
            >
              Read more
            </Link>
          </motion.div>

        </div>
      </div>

      {/* AMPERSAND — SHADOW ONLY */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center z-20 pointer-events-none">
        <span
          className="text-[400px] font-extrabold leading-none select-none"
          style={{
            color: "transparent",
            textShadow: `
              -10px 0 0 rgba(187, 188, 190, 0.55),
               18px 0 0 rgba(10, 3, 3, 0.55),
               0 30px 80px rgba(0,0,0,0.35)
            `,
          }}
        >
          &
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-warm-800 flex items-center pl-[220px] pr-24">
        <div className="max-w-xl space-y-6">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">
              Global Market Research Excellence
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl font-bold text-primary-foreground leading-tight">
            Data-Driven Insights <br />
            That Power Smarter Decisions
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg text-warm-200 leading-relaxed">
            We help organizations uncover meaningful insights through global,
            multi-country research—combining qualitative depth, quantitative rigor,
            and strategic execution.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" />
              </Link>
            </Button>

            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}
