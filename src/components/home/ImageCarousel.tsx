import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import globalResearch from "@/assets/global-research.jpg";
import servicesQuantitative from "@/assets/services-quantitative.jpg";
import servicesQualitative from "@/assets/services-qualitative.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import servicesProject from "@/assets/services-project-management.jpg";

const slides = [
  {
    image: globalResearch,
    title: "Global Research Network",
    description: "Multi-country and international research across South Asia",
  },
  {
    image: servicesQuantitative,
    title: "Data-Driven Insights",
    description: "Comprehensive quantitative research solutions",
  },
  {
    image: servicesQualitative,
    title: "Qualitative Excellence",
    description: "In-depth focus groups and expert moderation",
  },
  {
    image: servicesProject,
    title: "Project Management",
    description: "End-to-end execution with strategic precision",
  },
  {
    image: aboutTeam,
    title: "Expert Team",
    description: "Dedicated professionals committed to your success",
  },
];

export function ImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    const diff = (index - active + slides.length) % slides.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right1";
    if (diff === 2) return "right2";
    if (diff === slides.length - 1) return "left1";
    if (diff === slides.length - 2) return "left2";
    return "hidden";
  };

  const variants = {
    center: { x: 0, scale: 1.25, opacity: 1, zIndex: 5 },
    right1: { x: 280, scale: 0.9, opacity: 0.6, zIndex: 3 },
    right2: { x: 520, scale: 0.75, opacity: 0.3, zIndex: 1 },
    left1: { x: -280, scale: 0.9, opacity: 0.6, zIndex: 3 },
    left2: { x: -520, scale: 0.75, opacity: 0.3, zIndex: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <section className="py-20 gradient-warm overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Research in <span className="gradient-text">Action</span>
          </h2>

          <p className="text-olive-200 text-lg">
            Our expertise spans global markets, qualitative depth, and
            data-driven precision.
          </p>
        </div>

        {/* HERO STYLE CAROUSEL */}
        <div className="relative h-[420px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute"
              variants={variants}
              animate={getPosition(index)}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="relative w-[450px] h-[300px] rounded-3xl overflow-hidden shadow-2xl">

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* TEXT ONLY FOR ACTIVE */}
                {index === active && (
                  <motion.div
                    className="absolute inset-0 flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-2xl font-bold text-white">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-white mt-1">
                        {slide.description}
                      </p>
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
