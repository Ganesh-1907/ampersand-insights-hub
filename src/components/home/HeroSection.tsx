import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const items = [
  {
    src: "src/assets/global-research.jpg",
    title: "Global Research",
    desc: "Multi-country market intelligence solutions",
  },
  {
    src: "src/assets/services-qualitative.jpg",
    title: "Qualitative Studies",
    desc: "In-depth interviews & focus groups",
  },
  {
    src: "src/assets/services-project-management.jpg",
    title: "Project Management",
    desc: "End-to-end research execution",
  },
  {
    src: "src/assets/services-recruitment.jpg",
    title: "Recruitment Services",
    desc: "Targeted respondent sourcing",
  },
  {
    src: "src/assets/global-research.jpg",
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

  const getPosition = (index) => {
    const diff = (index - active + items.length) % items.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right1";
    if (diff === 2) return "right2";
    if (diff === items.length - 1) return "left1";
    if (diff === items.length - 2) return "left2";
    return "hidden";
  };

  const variants = {
    center: { x: 0, scale: 1.25, opacity: 1, zIndex: 5 },
    right1: { x: 300, scale: 0.9, opacity: 0.6, zIndex: 3 },
    right2: { x: 580, scale: 0.75, opacity: 0.3, zIndex: 1 },
    left1: { x: -300, scale: 0.9, opacity: 0.6, zIndex: 3 },
    left2: { x: -580, scale: 0.75, opacity: 0.3, zIndex: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-900 to-warm-700">
      <div className="max-w-6xl w-full px-6 text-center space-y-5 pt-28">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mx-auto"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary">Global Market Research Excellence</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Data-Driven Insights <br />
          That Power Smarter Decisions
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-warm-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We help organizations uncover meaningful insights through global,
          multi-country research—combining qualitative depth, quantitative rigor,
          and strategic execution.
        </motion.p>

        {/* CAROUSEL */}
        <div className="relative h-[400px] flex items-center justify-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={variants}
              animate={getPosition(index)}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute"
            >
              <div className="relative w-[420px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">

                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* TEXT OVERLAY (ONLY ACTIVE IMAGE) */}
                {index === active && (
                  <motion.div
                    className="absolute inset-0 flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-warm-200 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 pb-16">
          <Button size="lg" className="rounded-full px-10" asChild>
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2" />
            </Link>
          </Button>

          <Button size="lg" variant="outline" className="rounded-full px-10" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
